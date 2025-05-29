import { ethers } from "ethers";

// Testnet Configuration
export const TESTNET_RPC_URL = "https://carrot.megaeth.com/rpc";
export const TESTNET_EXPLORER_URL = "https://web3.okx.com/id/explorer/megaeth-testnet/tx/";
// Ganti PRIVATE_KEY dengan string langsung atau dari env pada proses build, bukan dotenv
export const PRIVATE_KEY: string = "ISI_PRIVATE_KEY_DISINI";
export const WETH_CONTRACT = ethers.utils.getAddress("0x776401b9bc8aae31a685731b7147d4445fd9fb19");
export const ROUTER_ADDRESS = ethers.utils.getAddress("0xa6b579684e943f7d00d616a48cf99b5147fc57a5");

// Simplified Token List for Testnet
export const TOKENS: Record<string, { address: string | null; decimals: number }> = {
    ETH: { address: null, decimals: 18 },
    WETH: { address: ethers.utils.getAddress("0x776401b9bc8aae31a685731b7147d4445fd9fb19"), decimals: 18 },
    USDC: { address: ethers.utils.getAddress("0x8d635c4702ba38b1f1735e8e784c7265dcc0b623"), decimals: 6 },
};

// ABI Definitions
export const ERC20_ABI = [
    "function balanceOf(address owner) view returns (uint256)",
    "function approve(address spender, uint256 amount) returns (bool)",
    "function allowance(address owner, address spender) view returns (uint256)",
];

export const ROUTER_ABI = [
    "function swapExactETHForTokens(uint256 amountOutMin, address[] path, address to, uint256 deadline) payable returns (uint256[] amounts)",
    "function swapExactTokensForETH(uint256 amountIn, uint256 amountOutMin, address[] path, address to, uint256 deadline) returns (uint256[] amounts)",
];

export const WETH_ABI = [
    "function balanceOf(address account) public view returns (uint256)",
];

// Initialize Provider and Wallet
export const provider = new ethers.providers.JsonRpcProvider(TESTNET_RPC_URL);

if (!PRIVATE_KEY || !ethers.utils.isHexString(PRIVATE_KEY, 32)) {
    throw new Error("Invalid or missing PRIVATE_KEY");
}
export const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

// Initialize Contracts
export const wethContract = new ethers.Contract(WETH_CONTRACT, WETH_ABI, wallet);
export const routerContract = new ethers.Contract(ROUTER_ADDRESS, ROUTER_ABI, wallet);

// Utility Functions
export function getExplorerLink(txHash: string): string {
    return `${TESTNET_EXPLORER_URL}${txHash}`;
}

export async function checkBalance(): Promise<{ eth: string; weth: string }> {
    try {
        const ethBalance = await provider.getBalance(wallet.address);
        const wethBalance = await wethContract.balanceOf(wallet.address);
        return {
            eth: ethers.utils.formatEther(ethBalance),
            weth: ethers.utils.formatEther(wethBalance),
        };
    } catch (error: any) {
        console.error(`Error checking balances: ${error.message}`);
        return { eth: "0", weth: "0" };
    }
}

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
