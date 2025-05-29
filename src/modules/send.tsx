import { ethers } from 'ethers';
import { provider, getExplorerLink } from '../config/config';

interface SendETHOptions {
  wallet: ethers.Signer;
  gasPrice?: ethers.BigNumber;
  gasLimit?: number;
}

interface SendETHResult {
  success: boolean;
  txHash?: string;
  blockNumber?: number;
  explorer?: string;
  error?: string;
}

export const sendETH = async (
  toAddress: string,
  amount: string,
  options: SendETHOptions
): Promise<SendETHResult> => {
  try {
    if (!ethers.utils.isAddress(toAddress)) {
      throw new Error('Invalid recipient address');
    }

    const { wallet, gasPrice, gasLimit = 21000 } = options;
    if (!wallet) {
      throw new Error('Wallet signer is required');
    }

    const ethBalance = await provider.getBalance(await wallet.getAddress());
    const amountInWei = ethers.utils.parseEther(amount);
    if (ethBalance.lt(amountInWei)) {
      throw new Error('Insufficient ETH balance');
    }

    const tx = await wallet.sendTransaction({
      to: toAddress,
      value: amountInWei,
      gasLimit,
      gasPrice,
    });

    const receipt = await tx.wait();
    return {
      success: true,
      txHash: tx.hash,
      blockNumber: receipt.blockNumber,
      explorer: getExplorerLink(tx.hash),
    };
  } catch (error: any) {
    console.error(`Send ETH error: ${error.message}`);
    return { success: false, error: error.message };
  }
};

interface RunSendCycleResult {
  success: boolean;
  result?: Array<{ cycle: number } & SendETHResult>;
  error?: string;
}

export const runSendCycle = async (
  cycles: number = 1,
  toAddress: string,
  amount: string = '0.01',
  options: SendETHOptions
): Promise<RunSendCycleResult> => {
  try {
    if (cycles < 1 || cycles > 5) {
      throw new Error('Cycles must be between 1 and 5');
    }

    const result: Array<{ cycle: number } & SendETHResult> = [];
    for (let i = 0; i < cycles; i++) {
      const sendResult = await sendETH(toAddress, amount, options);
      result.push({ cycle: i + 1, ...sendResult });
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    return { success: true, result };
  } catch (error: any) {
    console.error(`Send cycle error: ${error.message}`);
    return { success: false, error: error.message };
  }
};