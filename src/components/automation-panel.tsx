import React from 'react';
import { Tabs, Tab, Card, CardBody, Input, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Spacer, Checkbox, Select, SelectItem } from "@heroui/react";
import { Icon } from "@iconify/react";
import { addToast } from "@heroui/react";
import { useContractWrite, useContractRead, useAccount,useWaitForTransaction} from 'wagmi';
import { parseEther } from 'viem';
import { ethers, utils } from "ethers";
import GM_CONTRACT_ABI from "../utils/sayGM.json";
import { useState } from "react";


// Replace with your actual contract address (must start with 0x and be 42 characters)
const GM_CONTRACT_ADDRESS = "0x79ed1039f8c58a2f7ee94b3d1c78fd5785cee25e";
const GTE_ROUTER_ADDRESS = "0xa6b579684e943f7d00d616a48cf99b5147fc57a5";
const GTE_TOKENS = {
  MegaETH: { address: ethers.utils.getAddress("0x10a6be7d23989d00d528e68cf8051d095f741145"), decimals: 18 },
  WETH: { address: ethers.utils.getAddress("0x776401b9bc8aae31a685731b7147d4445fd9fb19"), decimals: 18 },
  GTE: { address: ethers.utils.getAddress("0x9629684df53db9e4484697d0a50c442b2bfa80a8"), decimals: 18 },
  USDC: { address: ethers.utils.getAddress("0x8d635c4702ba38b1f1735e8e784c7265dcc0b623"), decimals: 6 },
  tkUSDC: { address: ethers.utils.getAddress("0xfaf334e157175ff676911adcf0964d7f54f2c424"), decimals: 6 },
  Kimchizuki: { address: ethers.utils.getAddress("0xa626f15d10f2b30af1fb0d017f20a579500b5029"), decimals: 18 },
  five: { address: ethers.utils.getAddress("0xf512886bc6877b0740e8ca0b3c12bb4ca602b530"), decimals: 18 },
  "gte pepe": { address: ethers.utils.getAddress("0xbba08cf5ece0cc21e1deb5168746c001b123a756"), decimals: 18 },
  Enzo: { address: ethers.utils.getAddress("0x9cd3a7b840464d83bee643bc9064d246375b07a3"), decimals: 18 },
  Nazdaq: { address: ethers.utils.getAddress("0xd0ed4c2af51bb08c58a808b9b407508261a87f25"), decimals: 18 },
  Toast: { address: ethers.utils.getAddress("0xc49ae2a62e7c18b7ddcab67617a63bf5182b08de"), decimals: 18 },
  ETH: { address: null, decimals: 18 },
};

const ROUTER_ABI = [
  "function swapExactETHForTokens(uint256 amountOutMin, address[] path, address to, uint256 deadline) payable returns (uint256[] amounts)",
  "function swapExactTokensForETH(uint256 amountIn, uint256 amountOutMin, address[] path, address to, uint256 deadline) returns (uint256[] amounts)",
  "function swapExactTokensForTokens(uint256 amountIn, uint256 amountOutMin, address[] path, address to, uint256 deadline) returns (uint256[] amounts)",
  "function getAmountsOut(uint256 amountIn, address[] path) view returns (uint256[] amounts)",
];
const ERC20_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function decimals() view returns (uint8)",
];

export const AutomationPanel: React.FC = () => {
  const [automationType, setAutomationType] = React.useState("swap");
  const [executionCount, setExecutionCount] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);
  const { isConnected } = useAccount();
  const { address } = useAccount();

  const [swapTokens, setSwapTokens] = React.useState<string[]>(["MegaETH", "USDC", "tkUSDC", "WETH"]);
  const [swapStatus, setSwapStatus] = React.useState<string | null>(null);
  const [swapRounds, setSwapRounds] = React.useState<number>(1); // NEW: swap berapa kali

    // Add these new state variables inside AutomationPanel
  const [sendAmount, setSendAmount] = useState<string>('0.1');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [recipient, setRecipient] = useState<string>('');
  const [useRandomRecipient, setUseRandomRecipient] = useState(true);
  const [sendCount, setSendCount] = useState<number>(1);
  const [isSending, setIsSending] = useState(false);
  const [currentSend, setCurrentSend] = useState<number>(0);



  
  // Add new state variables for bot configuration
  const [botMode, setBotMode] = React.useState("manual");
  const [dailyExecutions, setDailyExecutions] = React.useState(5);
  const [scheduleTime, setScheduleTime] = React.useState("12:00");
  const [selectedNetworks, setSelectedNetworks] = React.useState<string[]>(["megaeth", "pharos", "somnia"]);
  const [gasStrategy, setGasStrategy] = React.useState("medium");
  const [botTasks, setBotTasks] = React.useState<string[]>(["swap", "send", "claim", "deploy"]);
  const [deployType, setDeployType] = React.useState<"deploy-lock" | "deploy-erc20" | "deploy-erc721">("deploy-erc20");
  
  const handleStartAutomation = () => {
    if (!isConnected) {
      addToast({
        title: "Wallet not connected",
        description: "Please connect your wallet to start automation",
        color: "warning"
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      addToast({
        title: "Automation Started",
        description: `${automationType.charAt(0).toUpperCase() + automationType.slice(1)} automation running ${executionCount} time(s)`,
        color: "success"
      });
    }, 1500);
  };
  
  const handleExecutionCountChange = (value: number) => {
    if (value >= 1 && value <= 100) {
      setExecutionCount(value);
    }
  };
  
  // Add new function to handle bot scheduling
  const handleScheduleBot = () => {
    if (!isConnected) {
      addToast({
        title: "Wallet not connected",
        description: "Please connect your wallet to schedule automation",
        color: "warning"
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      addToast({
        title: "Bot Scheduled",
        description: `${botTasks.join(", ")} tasks scheduled for ${dailyExecutions} executions per day`,
        color: "success"
      });
    }, 1500);
  };

  // Helper: get injected provider (Metamask, etc)
    const getProviderAndSigner = () => {
      if (!(window as any).ethereum) throw new Error("No wallet provider found");
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      return provider;
    };
// Update the swap bot logic to handle errors better and add proper slippage
const handleSwapBot = async () => {
  if (!isConnected) {
    addToast({
      title: "Wallet not connected",
      description: "Please connect your wallet to start swap bot",
      color: "warning"
    });
    return;
  }
  if (!swapTokens.length) {
    addToast({
      title: "No tokens selected", 
      description: "Please select at least one token to swap",
      color: "warning"
    });
    return;
  }

  setIsLoading(true);
  setSwapStatus("Running swap bot...");

  try {
    const provider = await getProviderAndSigner();
    const signer = await provider.getSigner();
    const router = new ethers.Contract(GTE_ROUTER_ADDRESS, ROUTER_ABI, signer);

    // Add slippage tolerance (0.5%)
    const slippageTolerance = 0.005;

    for (let round = 1; round <= swapRounds; round++) {
      setSwapStatus(`Swap round ${round} of ${swapRounds}...`);

      // 1. Swap ETH to tokens
      for (const token of swapTokens) {
        if (token === "ETH") continue;

        setSwapStatus(`Round ${round}: Swapping ETH → ${token}...`);

        try {
          // Random amount between 0.0001 - 0.0005 ETH
          const amountEth = (Math.random() * (0.0005 - 0.0001) + 0.0001).toFixed(6);
          const amountIn = utils.parseUnits(amountEth, 18);

          // Get expected output amount
          const path = [GTE_TOKENS["WETH"].address, GTE_TOKENS[token].address];
          const amounts = await router.getAmountsOut(amountIn, path);
          
          // Calculate minimum amount out with slippage
          const minAmountOut = amounts[1].mul(ethers.BigNumber.from(1000 - Math.floor(slippageTolerance * 1000)))
            .div(ethers.BigNumber.from(1000));

          const deadline = Math.floor(Date.now() / 1000) + 300; // 5 minutes

          // Execute swap with minimum output amount
          const tx = await router.swapExactETHForTokens(
            minAmountOut,
            path,
            address,
            deadline,
            { 
              value: amountIn,
              gasLimit: 300000 // Add explicit gas limit
            }
          );

          setSwapStatus(`Round ${round}: Waiting for ETH → ${token}...`);
          await tx.wait();
          
          addToast({
            title: "Swap Success",
            description: `Swapped ${amountEth} ETH to ${token}`,
            color: "success"
          });

        } catch (err: any) {
          console.error(`Swap ETH → ${token} failed:`, err);
          addToast({
            title: "Swap Failed",
            description: `ETH → ${token}: ${err?.reason || err?.message || "Unknown error"}`,
            color: "danger"
          });
          // Continue with next token
          continue;
        }

        // Add delay between swaps
        await new Promise(resolve => setTimeout(resolve, 2000));
      }

      // 2. Swap tokens back to ETH
      for (const token of swapTokens) {
        if (token === "ETH") continue;

        setSwapStatus(`Round ${round}: Swapping ${token} → ETH...`);

        try {
          const erc20 = new ethers.Contract(GTE_TOKENS[token].address, ERC20_ABI, signer);
          const balance = await erc20.balanceOf(address);

          if (balance.gt(0)) {
            // Check and set allowance if needed
            const allowance = await erc20.allowance(address, GTE_ROUTER_ADDRESS);
            if (allowance.lt(balance)) {
              const approveTx = await erc20.approve(GTE_ROUTER_ADDRESS, ethers.constants.MaxUint256);
              await approveTx.wait();
            }

            // Get expected output amount
            const path = [GTE_TOKENS[token].address, GTE_TOKENS["WETH"].address];
            const amounts = await router.getAmountsOut(balance, path);

            // Calculate minimum amount out with slippage
            const minAmountOut = amounts[1].mul(ethers.BigNumber.from(1000 - Math.floor(slippageTolerance * 1000)))
              .div(ethers.BigNumber.from(1000));

            const deadline = Math.floor(Date.now() / 1000) + 300;

            const tx = await router.swapExactTokensForETH(
              balance,
              minAmountOut,
              path,
              address,
              deadline,
              { gasLimit: 300000 }
            );

            setSwapStatus(`Round ${round}: Waiting for ${token} → ETH...`);
            await tx.wait();

            addToast({
              title: "Swap Success",
              description: `Swapped ${token} to ETH`,
              color: "success"
            });

          }
        } catch (err: any) {
          console.error(`Swap ${token} → ETH failed:`, err);
          addToast({
            title: "Swap Failed",
            description: `${token} → ETH: ${err?.reason || err?.message || "Unknown error"}`,
            color: "danger"
          });
          // Continue with next token
          continue;
        }

        // Add delay between swaps
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }

    setSwapStatus("All swaps completed!");

  } catch (err: any) {
    console.error("Swap bot error:", err);
    addToast({
      title: "Swap Bot Error",
      description: err?.reason || err?.message || "Unknown error",
      color: "danger"
    });
    setSwapStatus("Error running swap bot");
  }

  setIsLoading(false);
  setTimeout(() => setSwapStatus(null), 3000);
};


const { data: canSayGM } = useContractRead({
  address: GM_CONTRACT_ADDRESS as `0x${string}`,
  abi: GM_CONTRACT_ABI as any,
  functionName: 'canSayGM',
  args: [address],
});

const { data: userGMInfo } = useContractRead({
  address: GM_CONTRACT_ADDRESS as `0x${string}`,
  abi: GM_CONTRACT_ABI as any,
  functionName: 'getUserGMInfo',
  args: [address],
});

// Update the contract read hooks with refetch
const { data: gmHistory, refetch: refetchGMHistory } = useContractRead({
  address: GM_CONTRACT_ADDRESS as `0x${string}`,
  abi: GM_CONTRACT_ABI as any,
  functionName: 'getUserGMHistory',
  args: [address],
});

// Add transaction data to write hooks
const { write: sayGMToCommunity, data: gmToCommunityData, isLoading: isSayingGMToCommunity } = useContractWrite({
  address: GM_CONTRACT_ADDRESS as `0x${string}`,
  abi: GM_CONTRACT_ABI as any,
  functionName: 'sayGMToCommunity',
});

const { write: sayGMToUser, data: gmToUserData, isLoading: isSayingGMToUser } = useContractWrite({
  address: GM_CONTRACT_ADDRESS as `0x${string}`,
  abi: GM_CONTRACT_ABI as any,
  functionName: 'sayGM',
});

// Add transaction waiting hooks
const { isLoading: isWaitingGMToCommunity } = useWaitForTransaction({
  hash: gmToCommunityData?.hash,
  onSuccess: () => {
    refetchGMHistory();
  }
});

const { isLoading: isWaitingGMToUser } = useWaitForTransaction({
  hash: gmToUserData?.hash,
  onSuccess: () => {
    refetchGMHistory();
  }
});

// Combine loading states
const isGMLoading = isSayingGMToCommunity || isSayingGMToUser || 
                    isWaitingGMToCommunity || isWaitingGMToUser;

// Create handleSendGM function
const handleSendGM = async () => {
  try {
    const messageInput = document.getElementById("gm-message") as HTMLInputElement;
    const recipientInput = document.getElementById("gm-recipient") as HTMLInputElement;
    const message = messageInput?.value?.trim() || "GM!";
    const recipient = recipientInput?.value?.trim();

    if (!isConnected) {
      addToast({
        title: "Wallet not connected",
        description: "Please connect your wallet to say GM",
        color: "warning"
      });
      return;
    }

    if (recipient) {
      await sayGMToUser?.({
        args: [recipient, message]
      });
    } else {
      await sayGMToCommunity?.({
        args: [message]
      });
    }

    // Clear inputs after transaction starts
    if (messageInput) messageInput.value = "";
    if (recipientInput) recipientInput.value = "";

  } catch (error: any) {
    addToast({
      title: "Failed to say GM",
      description: error?.shortMessage || error?.message || "Please try again later",
      color: "danger",
    });
  }
};

const handleTokenSend = async () => {
  if (!isConnected) {
    addToast({
      title: "Wallet not connected",
      description: "Please connect your wallet to send tokens",
      color: "warning"
    });
    return;
  }

  setIsSending(true);

  try {
    const amount = customAmount || sendAmount;

    // Use window.ethereum to get provider
    const ethWin = window as any;
    if (!ethWin.ethereum) {
      throw new Error("No wallet provider found");
    }

    // Create provider and signer using ethers v5 syntax
    const provider = new ethers.providers.Web3Provider(ethWin.ethereum);
    const signer = provider.getSigner();

    // Parse amount to wei
    const amountWei = ethers.utils.parseUnits(amount, "ether");

    // Check balance
    const balance = await provider.getBalance(address as string);
    if (balance.lt(amountWei)) {
      addToast({
        title: "Insufficient balance",
        description: `You need at least ${amount} ETH to send`,
        color: "danger"
      });
      setIsSending(false);
      return;
    }

    for (let i = 0; i < sendCount; i++) {
      setCurrentSend(i + 1);

      try {
        // Generate random recipient if enabled
        const targetRecipient = useRandomRecipient ?
          ethers.Wallet.createRandom().address :
          recipient;

        // Prepare transaction
        const tx = {
          to: targetRecipient,
          value: amountWei,
          gasLimit: 21000 // Standard ETH transfer gas limit
        };

        // Send transaction
        const transaction = await signer.sendTransaction(tx);

        addToast({
          title: "Transaction Sent",
          description: `Sending ${amount} ETH to ${targetRecipient.slice(0, 6)}...${targetRecipient.slice(-4)}`,
          color: "primary"
        });

        // Wait for confirmation
        const receipt = await transaction.wait();

        if (receipt.status === 1) {
          addToast({
            title: "Transaction Confirmed",
            description: `Successfully sent ${amount} ETH`,
            color: "success"
          });
        } else {
          throw new Error("Transaction failed");
        }

        // Add delay between sends
        if (i < sendCount - 1) {
          await new Promise(r => setTimeout(r, 2000));
        }

      } catch (error: any) {
        addToast({
          title: "Transaction Failed",
          description: error?.message || "Failed to send tokens",
          color: "danger"
        });
        // Continue with next transaction even if one fails
      }
    }

  } catch (error: any) {
    addToast({
      title: "Error",
      description: error?.message || "Something went wrong",
      color: "danger"
    });
  }

  setIsSending(false);
  setCurrentSend(0);
};
  
  return (
    <div className="py-4">
      <Tabs 
        aria-label="Automation types" 
        selectedKey={automationType} 
        onSelectionChange={setAutomationType as any}
        variant="bordered"
        color="primary"
        classNames={{
          base: "w-full",
          tabList: "gap-6 w-full rounded-medium p-0 border-divider",
        }}
      >
  <Tab
          key="swap"
          title={
            <div className="flex items-center gap-2">
              <Icon icon="lucide:refresh-cw" />
              <span>Swap</span>
            </div>
          }
        >
          <Card className="mt-4 border-none shadow-none bg-content1/50">
            <CardBody>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label className="text-small font-medium">Select Tokens to Swap</label>
                  <div className="flex gap-2 flex-wrap">
                    {Object.keys(GTE_TOKENS).map((token) => (
                      <Checkbox
                        key={token}
                        isSelected={swapTokens.includes(token)}
                        onValueChange={(checked) => {
                          setSwapTokens((prev) =>
                            checked
                              ? [...prev, token]
                              : prev.filter((t) => t !== token)
                          );
                        }}
                        isDisabled={token === "ETH"}
                      >
                        {token}
                      </Checkbox>
                    ))}
                  </div>
                  <span className="text-xs text-default-400">
                    Bot will swap ETH to selected tokens, then reverse all back to ETH.
                  </span>
                </div>
                {/* NEW: Swap rounds input */}
                <div className="flex flex-col gap-2">
                  <label className="text-small font-medium">How many times to swap?</label>
                  <div className="flex gap-2 items-center">
                    <Button 
                      size="sm" 
                      variant="flat" 
                      isIconOnly
                      onPress={() => setSwapRounds(Math.max(1, swapRounds - 1))}
                    >
                      <Icon icon="lucide:minus" />
                    </Button>
                    <Input 
                      type="number" 
                      value={swapRounds.toString()} 
                      onValueChange={(value) => setSwapRounds(Math.max(1, parseInt(value) || 1))}
                      className="max-w-[80px]"
                    />
                    <Button 
                      size="sm" 
                      variant="flat" 
                      isIconOnly
                      onPress={() => setSwapRounds(swapRounds + 1)}
                    >
                      <Icon icon="lucide:plus" />
                    </Button>
                  </div>
                  <span className="text-xs text-default-400">
                    Each round: swap ETH to selected tokens, then reverse all back to ETH.
                  </span>
                </div>
                <Button
                  color="primary"
                  className="w-full"
                  onPress={handleSwapBot}
                  isLoading={isLoading}
                  startContent={<Icon icon="lucide:refresh-cw" />}
                  isDisabled={!isConnected || isLoading}
                >
                  {isLoading ? "Running Swap Bot..." : "Start Swap Bot"}
                </Button>
                {swapStatus && (
                  <div className="text-center text-sm text-primary mt-2">{swapStatus}</div>
                )}
              </div>
            </CardBody>
          </Card>
        </Tab>
        
        <Tab
          key="saygm"
          title={
            <div className="flex items-center gap-2">
              <Icon icon="lucide:smile" />
              <span>Say GM</span>
            </div>
          }
        >
          <Card className="mt-4 border-none shadow-none bg-content1/50">
            <CardBody>
              <div className="flex flex-col items-center justify-center py-4 w-full">
                {/* WhatsApp-style chat header */}
                <div className="w-full max-w-2xl md:max-w-3xl flex items-center gap-3 px-4 py-3 rounded-t-xl border border-b-0 dark:border-default-700 bg-[#075e54] dark:bg-[#075e54] shadow-sm mb-2">
                  <div className="flex items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
                      alt="Community"
                      className="w-10 h-10 rounded-full border border-default-300"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-base flex items-center gap-2 text-white">
                      <span>GM Community</span>
                      <Icon icon="lucide:verified" className="text-green-400 text-xs" />
                    </div>
                    <div className="text-xs text-green-100">
                      {userGMInfo
                        ? `Last sent: ${userGMInfo[0] && Number(userGMInfo[0]) !== 0
                          ? new Date(Number(userGMInfo[0]) * 1000).toLocaleString()
                          : "Never"}`
                        : "Say GM to join the chat!"}
                    </div>
                  </div>
                </div>
                {/* End chat header */}

                {/* GM stats (WA-style under header) */}
                {userGMInfo && (
                  <div className="w-full max-w-2xl md:max-w-3xl px-4 py-1 bg-[#128c7e] text-white text-xs flex items-center gap-4 rounded-b-xl mb-2">
                    <span>Total GMs sent: {userGMInfo[1]?.toString()}</span>
                  </div>
                )}

                {/* Chat area */}
                <div
                  className="w-full max-w-2xl md:max-w-3xl flex-1 rounded-xl border border-default-200 dark:border-default-700 flex flex-col p-3 mb-4 overflow-y-auto custom-scrollbar"
                  style={{
                    minHeight: 0,
                    maxHeight: "420px", // limit height for 9 messages, adjust as needed
                    backgroundImage: "url('src/img/bgchat.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  data-bg-light="src/img/bgchat.jpg"
                  data-bg-dark="src/img/bgchatdark.jpg"
                  ref={el => {
                    if (!el) return;
                    const updateBg = () => {
                      const isDark = document.documentElement.classList.contains("dark");
                      const bg = isDark
                        ? el.getAttribute("data-bg-dark")
                        : el.getAttribute("data-bg-light");
                      el.style.backgroundImage = `url('${bg}')`;
                    };
                    updateBg();
                    const observer = new MutationObserver(updateBg);
                    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
                    (el as any)._bgObserver = observer;
                  }}
                >
                  {gmHistory && gmHistory.length > 0 ? (
                    <div className="flex flex-col gap-2">
                      {gmHistory
                        .slice(-9)
                        .sort((a: any, b: any) => Number(a.timestamp) - Number(b.timestamp))
                        .map((gm: any, index: number) => {
                          const isCommunity = gm.to === "0x0000000000000000000000000000000000000000";
                          const isMine = address && gm.from?.toLowerCase() === address.toLowerCase();
                          const align = isMine ? "justify-end" : "justify-start";
                          const bubbleBg = isMine ? "bg-[#dcf8c6]" : isCommunity ? "bg-[#fffad1]" : "bg-white";
                          
                          return (
                            <div key={index} className={`flex ${align} mb-2`}>
                              <div className={`rounded-xl px-3 py-2 shadow-sm max-w-[80%] ${bubbleBg}`}>
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-xs font-semibold text-black dark:text-black">
                                    {isCommunity ? "Community" : isMine ? "You" : `${gm.from?.slice(0, 6)}...${gm.from?.slice(-4)}`}
                                  </span>
                                  <span className="text-[#888] text-xs">
                                    {new Date(Number(gm.timestamp) * 1000).toLocaleTimeString()}
                                  </span>
                                </div>
                                <div className="text-sm break-words text-black dark:text-black">{gm.message}</div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  ) : (
                    <div className="flex flex-1 items-center justify-center text-default-400 text-sm">
                      No GM messages yet.
                    </div>
                  )}
                  <style>                  {`
                    .custom-scrollbar {
                      scrollbar-width: thin;
                      scrollbar-color: rgba(16, 185, 129, 0.3) rgba(16, 185, 129, 0.08);
                    }
                    .custom-scrollbar::-webkit-scrollbar {
                      width: 8px;
                      border-radius: 8px;
                      background: rgba(16, 185, 129, 0.08);
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                      background: rgba(16, 185, 129, 0.3);
                      border-radius: 8px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                      background: rgba(16, 185, 129, 0.5);
                    }
                  `}</style>
                </div>

                {/* Chat input area */}
                <div className="w-full max-w-2xl md:max-w-3xl flex flex-col gap-2">
                  <div className="flex flex-col md:flex-row gap-2">
                    <Input
                      label="Message"
                      placeholder="Add your GM message..."
                      className="flex-1"
                      id="gm-message"
                      disabled={isSayingGMToCommunity || isSayingGMToUser}
                      size="sm"
                    />
                    <Input
                      label="Recipient (optional)"
                      placeholder="0x... or leave empty"
                      className="w-full md:w-48"
                      id="gm-recipient"
                      disabled={isSayingGMToCommunity || isSayingGMToUser}
                      size="sm"
                    />
                    <Button
                      color="primary"
                      onPress={handleSendGM}
                      startContent={<Icon icon="lucide:smile-plus" />}
                      isLoading={isGMLoading}
                      isDisabled={!isConnected || isGMLoading}
                      size="sm"
                      className="self-end"
                    >
                      {isGMLoading ? "Saying GM..." : "Send"}
                    </Button>
                  </div>
                  {!isConnected && (
                    <p className="text-warning text-xs text-center mt-1">
                      Connect your wallet to say GM
                    </p>
                  )}
                </div>
              </div>
            </CardBody>
          </Card>
        </Tab>

        // Add this Tab after the Say GM tab
        <Tab
          key="send"
          title={
            <div className="flex items-center gap-2">
              <Icon icon="lucide:send" />
              <span>Send</span>
            </div>
          }
        >
          <Card className="mt-4 border-none shadow-none bg-content1/50">
            <CardBody>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Amount Selection Section */}
                  <div className="space-y-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-medium font-semibold">Amount to Send</label>
                      <div className="flex flex-wrap gap-2">
                        <Button
                          size="sm"
                          variant={!customAmount && sendAmount === "0.1" ? "solid" : "flat"}
                          color={!customAmount && sendAmount === "0.1" ? "primary" : "default"}
                          onPress={() => {
                            setSendAmount("0.1");
                            setCustomAmount("");
                          }}
                        >
                          0.1 ETH
                        </Button>
                        <Button
                          size="sm"
                          variant={!customAmount && sendAmount === "0.01" ? "solid" : "flat"}
                          color={!customAmount && sendAmount === "0.01" ? "primary" : "default"}
                          onPress={() => {
                            setSendAmount("0.01");
                            setCustomAmount("");
                          }}
                        >
                          0.01 ETH
                        </Button>
                        <Button
                          size="sm"
                          variant={!customAmount && sendAmount === "0.0001" ? "solid" : "flat"}
                          color={!customAmount && sendAmount === "0.0001" ? "primary" : "default"}
                          onPress={() => {
                            setSendAmount("0.0001");
                            setCustomAmount("");
                          }}
                        >
                          0.0001 ETH
                        </Button>
                      </div>
                      
                      <Input
                        label="Custom Amount"
                        placeholder="Enter ETH amount"
                        value={customAmount}
                        onValueChange={setCustomAmount}
                        className="mt-2"
                        startContent={
                          <div className="pointer-events-none flex items-center">
                            <Icon icon="cryptocurrency:eth" className="text-default-400 text-xl" />
                          </div>
                        }
                        description="Enter a custom amount of ETH to send"
                      />
                    </div>
                  </div>

                  {/* Recipient Selection Section */}
                  <div className="space-y-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-medium font-semibold">Recipient</label>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant={useRandomRecipient ? "solid" : "flat"}
                          color={useRandomRecipient ? "primary" : "default"}
                          onPress={() => setUseRandomRecipient(true)}
                          startContent={<Icon icon="lucide:shuffle" />}
                        >
                          Random Address
                        </Button>
                        <Button
                          size="sm"
                          variant={!useRandomRecipient ? "solid" : "flat"}
                          color={!useRandomRecipient ? "primary" : "default"}
                          onPress={() => setUseRandomRecipient(false)}
                          startContent={<Icon icon="lucide:wallet" />}
                        >
                          Custom Address
                        </Button>
                      </div>
                      
                      <Input
                        label="Recipient Address"
                        placeholder="0x..."
                        value={recipient}
                        onValueChange={setRecipient}
                        isDisabled={useRandomRecipient}
                        className="mt-2"
                        startContent={
                          <Icon icon="lucide:wallet" className="text-default-400 text-small" />
                        }
                        description={useRandomRecipient ? "Random address will be generated" : "Enter recipient's wallet address"}
                      />
                    </div>
                  </div>
                </div>

                {/* Transaction Settings */}
                <div className="p-4 rounded-xl bg-content2">
                  <h4 className="text-medium font-semibold mb-4">Transaction Settings</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Number of Transactions */}
                    <div className="flex flex-col gap-2">
                      <label className="text-small">Number of Transactions</label>
                      <div className="flex gap-2 items-center">
                        <Button
                          size="sm"
                          variant="flat"
                          isIconOnly
                          onPress={() => setSendCount(Math.max(1, sendCount - 1))}
                        >
                          <Icon icon="lucide:minus" />
                        </Button>
                        <Input
                          type="number"
                          value={sendCount.toString()}
                          onValueChange={(value) => setSendCount(Math.max(1, parseInt(value)))}
                          className="max-w-[100px]"
                          size="sm"
                        />
                        <Button
                          size="sm"
                          variant="flat"
                          isIconOnly
                          onPress={() => setSendCount(sendCount + 1)}
                        >
                          <Icon icon="lucide:plus" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Transaction Summary */}
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-small">Amount per Transaction:</span>
                      <span className="font-semibold">{customAmount || sendAmount} ETH</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-small">Number of Transactions:</span>
                      <span className="font-semibold">{sendCount}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-small">Total Amount:</span>
                      <span className="font-semibold">{(parseFloat(customAmount || sendAmount) * sendCount).toFixed(6)} ETH</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-small">Recipient:</span>
                      <span className="font-semibold">{useRandomRecipient ? "Random Address" : (recipient || "Not set")}</span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  color="primary"
                  className="w-full"
                  size="lg"
                  onPress={handleTokenSend}
                  isLoading={isSending}
                  startContent={<Icon icon="lucide:send" />}
                  isDisabled={!isConnected || isSending || (!useRandomRecipient && !recipient)}
                >
                  {isSending 
                    ? `Sending Transaction ${currentSend}/${sendCount}...` 
                    : `Send ${customAmount || sendAmount} ETH ${sendCount} time(s)`}
                </Button>

                {!isConnected && (
                  <p className="text-warning text-xs text-center">
                    Please connect your wallet to send transactions
                  </p>
                )}
              </div>
            </CardBody>
          </Card>
        </Tab>
        
        <Tab
          key="claim"
          title={
            <div className="flex items-center gap-2">
              <Icon icon="lucide:gift" />
              <span>Claim</span>
            </div>
          }
        >
          <Card className="mt-4 border-none shadow-none bg-content1/50">
            <CardBody>
              <div className="space-y-4">
                <div className="p-4 rounded-medium gradient-bg">
                  <h4 className="text-medium font-medium mb-2">Available Faucets</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <img src="https://contracts.mintair.xyz/_next/static/media/mega.3bf157ad.png" alt="MegaETH" className="w-6 h-6 rounded-full" />
                      </div>
                      <span>MegaETH Faucet</span>
                      </div>
                      <Button size="sm" variant="flat">Claim</Button>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                        <img src="https://cdn-mintair-prod.s3.ap-south-1.amazonaws.com/pharos.svg" alt="Pharos" className="w-6 h-6 rounded-full" />
                      </div>
                      <span>Pharos Faucet</span>
                      </div>
                      <Button size="sm" variant="flat">Claim</Button>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <img src="https://cdn-mintair-prod.s3.ap-south-1.amazonaws.com/somnia.svg" alt="Somnia" className="w-6 h-6 rounded-full" />
                      </div>
                      <span>Somnia Faucet</span>
                      </div>
                      <Button size="sm" variant="flat">Claim</Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-small font-medium">Daily Claim Schedule</label>
                  <div className="flex items-center gap-2">
                    <Checkbox defaultSelected>Enable daily auto-claim</Checkbox>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-small font-medium">Claim All Faucets</label>
                    <Button 
                      color="primary" 
                      onPress={handleStartAutomation}
                      isLoading={isLoading}
                    >
                      {isLoading ? "Claiming..." : "Claim All Available"}
                    </Button>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-small font-medium">Schedule Daily Claims</label>
                    <Button 
                      color="secondary" 
                      variant="flat"
                      onPress={() => {
                        addToast({
                          title: "Daily Claims Scheduled",
                          description: "You will receive tokens daily at 12:00 UTC",
                          color: "success"
                        });
                      }}
                    >
                      Set Up Daily Claims
                    </Button>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Tab>
        
        <Tab
          key="deploy"
          title={
            <div className="flex items-center gap-2">
              <Icon icon="lucide:rocket" />
              <span>Deploy</span>
            </div>
          }
        >
          <Card className="mt-4 border-none shadow-none bg-content1/50">
            <CardBody>
              <div className="space-y-4">
                <div className="p-4 rounded-medium gradient-bg">
                  <h4 className="text-medium font-medium mb-2">Contract Deployment</h4>
                  <p className="text-small text-default-500">
                    Deploy smart contracts across multiple networks with automated verification.
                  </p>
                </div>

                {/* Contract type selection */}
                <div className="flex flex-col gap-2">
                  <label className="text-small font-medium">Contract Type</label>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant={deployType === "deploy-lock" ? "solid" : "flat"}
                      color={deployType === "deploy-lock" ? "primary" : "default"}
                      onPress={() => setDeployType("deploy-lock")}
                    >
                      Lock
                    </Button>
                    <Button
                      size="sm"
                      variant={deployType === "deploy-erc20" ? "solid" : "flat"}
                      color={deployType === "deploy-erc20" ? "primary" : "default"}
                      onPress={() => setDeployType("deploy-erc20")}
                    >
                      ERC-20
                    </Button>
                    <Button
                      size="sm"
                      variant={deployType === "deploy-erc721" ? "solid" : "flat"}
                      color={deployType === "deploy-erc721" ? "primary" : "default"}
                      onPress={() => setDeployType("deploy-erc721")}
                    >
                      ERC-721
                    </Button>
                  </div>
                </div>

                {/* Dynamic input fields based on contract type */}
                {deployType === "deploy-erc20" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Token Name"
                      placeholder="MyToken"
                      startContent={<Icon icon="lucide:type" className="text-default-400 text-small" />}
                      autoFocus
                    />
                    <Input
                      label="Token Symbol"
                      placeholder="MTK"
                      startContent={<Icon icon="lucide:hash" className="text-default-400 text-small" />}
                    />
                    <Input
                      label="Initial Supply"
                      placeholder="1000000"
                      type="number"
                      startContent={<Icon icon="lucide:coins" className="text-default-400 text-small" />}
                    />
                    <Input
                      label="Decimals"
                      placeholder="18"
                      type="number"
                      startContent={<Icon icon="lucide:hash" className="text-default-400 text-small" />}
                    />
                  </div>
                )}
                {deployType === "deploy-erc721" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Collection Name"
                      placeholder="MyNFT"
                      startContent={<Icon icon="lucide:type" className="text-default-400 text-small" />}
                      autoFocus
                    />
                    <Input
                      label="Symbol"
                      placeholder="MNFT"
                      startContent={<Icon icon="lucide:hash" className="text-default-400 text-small" />}
                    />
                    <Input
                      label="Base URI"
                      placeholder="https://example.com/metadata/"
                      startContent={<Icon icon="lucide:link" className="text-default-400 text-small" />}
                      className="md:col-span-2"
                    />
                  </div>
                )}
                {deployType === "deploy-lock" && (
                  <Input
                    label="Contract Address (Template)"
                    placeholder="0x..."
                    startContent={
                      <Icon icon="lucide:file-code" className="text-default-400 text-small" />
                    }
                    autoFocus
                  />
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-small font-medium">Target Networks</label>
                    <div className="space-y-2">
                      <Checkbox defaultSelected>MegaETH Testnet</Checkbox>
                      <Checkbox defaultSelected>Pharos</Checkbox>
                      <Checkbox defaultSelected>Somnia</Checkbox>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-small font-medium">Deployment Options</label>
                    <div className="space-y-2">
                      <Checkbox defaultSelected>Auto-verify contract</Checkbox>
                    </div>
                  </div>
                </div>

                <Button
                  color="primary"
                  className="w-full"
                  onPress={handleStartAutomation}
                  isLoading={isLoading}
                >
                  {isLoading ? "Deploying..." : "Start Deployment"}
                </Button>
              </div>
            </CardBody>
          </Card>
        </Tab>

        
        {/* Add new Bot Configuration tab */}
        <Tab
          key="bot"
          title={
            <div className="flex items-center gap-2">
              <Icon icon="lucide:bot" />
              <span>Bot Config</span>
            </div>
          }
        >
          <Card className="mt-4 border-none shadow-none bg-content1/50">
            <CardBody>
              <div className="space-y-4">
                <div className="p-4 rounded-medium gradient-bg">
                  <h4 className="text-medium font-medium mb-2">Bot Configuration</h4>
                  <p className="text-small text-default-500">
                    Configure automated tasks across multiple networks with scheduling options.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-small font-medium">Bot Mode</label>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant={botMode === "manual" ? "solid" : "flat"} 
                        color={botMode === "manual" ? "primary" : "default"}
                        onPress={() => setBotMode("manual")}
                      >
                        Manual
                      </Button>
                      <Button 
                        size="sm" 
                        variant={botMode === "daily" ? "solid" : "flat"}
                        color={botMode === "daily" ? "primary" : "default"}
                        onPress={() => setBotMode("daily")}
                      >
                        Daily
                      </Button>
                      <Button 
                        size="sm" 
                        variant={botMode === "random" ? "solid" : "flat"}
                        color={botMode === "random" ? "primary" : "default"}
                        onPress={() => setBotMode("random")}
                      >
                        Random
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-small font-medium">Daily Executions</label>
                    <div className="flex gap-2 items-center">
                      <Button 
                        size="sm" 
                        variant="flat" 
                        isIconOnly
                        onPress={() => setDailyExecutions(Math.max(1, dailyExecutions - 1))}
                      >
                        <Icon icon="lucide:minus" />
                      </Button>
                      <Input 
                        type="number" 
                        value={dailyExecutions.toString()} 
                        onValueChange={(value) => setDailyExecutions(parseInt(value) || 1)}
                        className="max-w-[80px]"
                      />
                      <Button 
                        size="sm" 
                        variant="flat" 
                        isIconOnly
                        onPress={() => setDailyExecutions(dailyExecutions + 1)}
                      >
                        <Icon icon="lucide:plus" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-small font-medium">Networks</label>
                    <Select
                      selectionMode="multiple"
                      placeholder={isConnected ? "Connected" : "Select networks"}
                      selectedKeys={selectedNetworks}
                      onSelectionChange={(keys) => setSelectedNetworks([...(keys as Set<string>)])}
                      className="w-full"
                      isDisabled={isConnected}
                    >
                      {/* Only show the connected network if connected, else show all */}
                      {isConnected ? (
                        // You may want to map the address/chainId to a network name here
                        <SelectItem key="connected">{`Connected`}</SelectItem>
                      ) : (
                        <>
                          <SelectItem key="megaeth">MegaETH Testnet</SelectItem>
                          <SelectItem key="pharos">Pharos</SelectItem>
                          <SelectItem key="somnia">Somnia</SelectItem>
                        </>
                      )}
                    </Select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-small font-medium">Tasks</label>
                    <Select
                      selectionMode="multiple"
                      placeholder="Select tasks"
                      selectedKeys={botTasks}
                      onSelectionChange={(keys) => setBotTasks([...(keys as Set<string>)])}
                      className="w-full"
                    >
                      <SelectItem key="swap">Swap Tokens</SelectItem>
                      <SelectItem key="send">Send Tokens</SelectItem>
                      <SelectItem key="claim">Claim Faucet</SelectItem>
                      <SelectItem key="deploy">Deploy Contracts</SelectItem>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-small font-medium">Gas Strategy</label>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant={gasStrategy === "low" ? "solid" : "flat"}
                        color={gasStrategy === "low" ? "primary" : "default"}
                        onPress={() => setGasStrategy("low")}
                      >
                        Low
                      </Button>
                      <Button 
                        size="sm" 
                        variant={gasStrategy === "medium" ? "solid" : "flat"}
                        color={gasStrategy === "medium" ? "primary" : "default"}
                        onPress={() => setGasStrategy("medium")}
                      >
                        Medium
                      </Button>
                      <Button 
                        size="sm" 
                        variant={gasStrategy === "high" ? "solid" : "flat"}
                        color={gasStrategy === "high" ? "primary" : "default"}
                        onPress={() => setGasStrategy("high")}
                      >
                        High
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-small font-medium">Schedule Time</label>
                    <Input
                      type="time"
                      value={scheduleTime}
                      onValueChange={setScheduleTime}
                      startContent={<Icon icon="lucide:clock" className="text-default-400" />}
                      disabled={botMode === "random"}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Checkbox defaultSelected>Enable notifications</Checkbox>
                  <Checkbox defaultSelected>Auto-retry on failure</Checkbox>
                  <Checkbox>Use proxies (if available)</Checkbox>
                </div>
                
                <Button 
                  color="primary" 
                  className="w-full"
                  onPress={handleScheduleBot}
                  isLoading={isLoading}
                  startContent={<Icon icon="lucide:calendar" />}
                >
                  {isLoading ? "Scheduling Bot..." : "Schedule Bot"}
                </Button>
              </div>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};
