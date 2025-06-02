import React from 'react';
import { Tabs, Tab, Card, CardBody, Input, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Spacer, Checkbox, Select, SelectItem } from "@heroui/react";
import { Icon } from "@iconify/react";
import { addToast } from "@heroui/react";
import { useContractWrite, useContractRead, useAccount } from 'wagmi';
import { parseEther } from 'viem';

// Replace with your actual contract address (must start with 0x and be 42 characters)
const GM_CONTRACT_ADDRESS = "0x79ed1039f8c58a2f7ee94b3d1c78fd5785cee25e";
import GM_CONTRACT_ABI from "../utils/sayGM.json";


export const AutomationPanel: React.FC = () => {
  const [automationType, setAutomationType] = React.useState("swap");
  const [executionCount, setExecutionCount] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);
  const { isConnected } = useAccount();
  const { address } = useAccount();
  
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

  const { data: gmHistory } = useContractRead({
    address: GM_CONTRACT_ADDRESS as `0x${string}`,
    abi: GM_CONTRACT_ABI as any,
    functionName: 'getUserGMHistory',
    args: [address],
  });

  const { write: sayGMToCommunity, isLoading: isSayingGMToCommunity } = useContractWrite({
    address: GM_CONTRACT_ADDRESS as `0x${string}`,
    abi: GM_CONTRACT_ABI as any,
    functionName: 'sayGMToCommunity',
  });

  const { write: sayGMToUser, isLoading: isSayingGMToUser } = useContractWrite({
    address: GM_CONTRACT_ADDRESS as `0x${string}`,
    abi: GM_CONTRACT_ABI as any,
    functionName: 'sayGM',
  });

  
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-small font-medium">From Token</label>
                      <Input
                        placeholder="0.0"
                        startContent={
                          <Dropdown>
                            <DropdownTrigger>
                              <Button 
                                variant="light" 
                                className="min-w-[80px] h-unit-8 text-small flex items-center gap-1"
                              >
                                <img src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png" alt="ETH" className="w-4 h-4 rounded-full" />
                                ETH
                                <Icon icon="lucide:chevron-down" className="text-tiny ml-1" />
                              </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Token selection">
                              <DropdownItem key="eth" startContent={<img src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png" alt="ETH" className="w-4 h-4 rounded-full" />}>ETH</DropdownItem>
                              <DropdownItem key="usdc" startContent={<img src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png" alt="USDC" className="w-4 h-4 rounded-full" />}>USDC</DropdownItem>
                              <DropdownItem key="usdt" startContent={<img src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png" alt="USDT" className="w-4 h-4 rounded-full" />}>USDT</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        }
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-small font-medium">To Token</label>
                      <Input
                        placeholder="0.0"
                        startContent={
                          <Dropdown>
                            <DropdownTrigger>
                              <Button 
                                variant="light" 
                                className="min-w-[80px] h-unit-8 text-small flex items-center gap-1"
                              >
                                <img src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png" alt="USDC" className="w-4 h-4 rounded-full" />
                                USDC
                                <Icon icon="lucide:chevron-down" className="text-tiny ml-1" />
                              </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Token selection">
                              <DropdownItem key="eth" startContent={<img src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png" alt="ETH" className="w-4 h-4 rounded-full" />}>ETH</DropdownItem>
                              <DropdownItem key="usdc" startContent={<img src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png" alt="USDC" className="w-4 h-4 rounded-full" />}>USDC</DropdownItem>
                              <DropdownItem key="usdt" startContent={<img src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png" alt="USDT" className="w-4 h-4 rounded-full" />}>USDT</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        }
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-small font-medium">Execution Count</label>
                      <div className="flex gap-2 items-center">
                        <Button 
                          size="sm" 
                          variant="flat" 
                          isIconOnly
                          onPress={() => handleExecutionCountChange(executionCount - 1)}
                        >
                          <Icon icon="lucide:minus" />
                        </Button>
                        <Input 
                          type="number" 
                          value={executionCount.toString()} 
                          onValueChange={(value) => handleExecutionCountChange(parseInt(value) || 1)}
                          className="max-w-[80px]"
                        />
                        <Button 
                          size="sm" 
                          variant="flat" 
                          isIconOnly
                          onPress={() => handleExecutionCountChange(executionCount + 1)}
                        >
                          <Icon icon="lucide:plus" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-small font-medium">Slippage Tolerance</label>
                      <div className="flex gap-2">
                        <Button size="sm" variant="flat">0.5%</Button>
                        <Button size="sm" variant="solid" color="primary">1%</Button>
                        <Button size="sm" variant="flat">2%</Button>
                      </div>
                    </div>
                  </div>
                  
                  <Checkbox defaultSelected>Enable auto gas optimization</Checkbox>
                  
                  <Button 
                    color="primary" 
                    className="w-full"
                    onPress={handleStartAutomation}
                    isLoading={isLoading}
                  >
                    {isLoading ? "Starting Automation..." : "Start Swap Automation"}
                  </Button>
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
                    gmHistory
                      .slice(-9) // only show last 9 messages
                      .sort((a: any, b: any) => Number(a.timestamp) - Number(b.timestamp))
                      .map((gm: any, index: number) => {
                        const isCommunity = gm.to === "0x0000000000000000000000000000000000000000";
                        const isMine = address && gm.from?.toLowerCase() === address.toLowerCase();
                        const align = isMine ? "justify-end" : "justify-start";
                        const bubbleBg = isMine
                          ? "bg-[#dcf8c6]"
                          : isCommunity
                          ? "bg-[#fffad1]"
                          : "bg-white";
                        const textColor = isMine
                          ? "text-[#075e54]"
                          : "text-[#222]";
                        const subTextColor = "text-[#888] text-xs";
                        return (
                          <div key={index} className={`flex ${align} mb-2`}>
                            <div
                              className={`rounded-xl px-3 py-2 shadow-sm max-w-[80%] ${bubbleBg} ${textColor}`}
                              style={{
                                borderBottomRightRadius: isMine ? "0.5rem" : "1.25rem",
                                borderBottomLeftRadius: !isMine ? "0.5rem" : "1.25rem",
                              }}
                            >
                              <div className="flex items-center gap-2 mb-1">
                                <span className={`text-xs font-semibold ${textColor}`}>
                                  {isCommunity
                                    ? "Community"
                                    : isMine
                                    ? "You"
                                    : `${gm.from?.slice(0, 6)}...${gm.from?.slice(-4)}`}
                                </span>
                                <span className={subTextColor}>
                                  {new Date(Number(gm.timestamp) * 1000).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                </span>
                              </div>
                              <div className={`text-sm break-words ${textColor}`}>{gm.message}</div>
                            </div>
                          </div>
                        );
                      })
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
                      onPress={async () => {
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

                          addToast({
                            title: "GM sent!",
                            description: recipient
                              ? `You greeted ${recipient.slice(0, 6)}...${recipient.slice(-4)}`
                              : "You greeted the community!",
                            color: "success",
                          });

                          // Clear inputs
                          if (messageInput) messageInput.value = "";
                          if (recipientInput) recipientInput.value = "";
                        } catch (error: any) {
                          addToast({
                            title: "Failed to say GM",
                            description: error?.shortMessage || error?.message || "Please try again later",
                            color: "danger",
                          });
                        }
                      }}
                      startContent={<Icon icon="lucide:smile-plus" />}
                      isLoading={isSayingGMToCommunity || isSayingGMToUser}
                      isDisabled={!isConnected || isSayingGMToCommunity || isSayingGMToUser}
                      size="sm"
                      className="self-end"
                    >
                      {isSayingGMToCommunity || isSayingGMToUser ? "Saying GM..." : "Send"}
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
              <div className="space-y-4">
                <Input
                  label="Recipient Address"
                  placeholder="0x..."
                  startContent={
                    <Icon icon="lucide:wallet" className="text-default-400 text-small" />
                  }
                />
                
                <Input
                  label="Amount"
                  placeholder="0.0"
                  startContent={
                    <Dropdown>
                      <DropdownTrigger>
                        <Button 
                          variant="light" 
                          className="min-w-[80px] h-unit-8 text-small"
                        >
                          ETH
                          <Icon icon="lucide:chevron-down" className="text-tiny ml-1" />
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu aria-label="Token selection">
                        <DropdownItem key="eth">ETH</DropdownItem>
                        <DropdownItem key="usdc">USDC</DropdownItem>
                        <DropdownItem key="usdt">USDT</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  }
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-small font-medium">Execution Count</label>
                    <div className="flex gap-2 items-center">
                      <Button 
                        size="sm" 
                        variant="flat" 
                        isIconOnly
                        onPress={() => handleExecutionCountChange(executionCount - 1)}
                      >
                        <Icon icon="lucide:minus" />
                      </Button>
                      <Input 
                        type="number" 
                        value={executionCount.toString()} 
                        onValueChange={(value) => handleExecutionCountChange(parseInt(value) || 1)}
                        className="max-w-[80px]"
                      />
                      <Button 
                        size="sm" 
                        variant="flat" 
                        isIconOnly
                        onPress={() => handleExecutionCountChange(executionCount + 1)}
                      >
                        <Icon icon="lucide:plus" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-small font-medium">Priority</label>
                    <div className="flex gap-2">
                      <Button size="sm" variant="flat">Low</Button>
                      <Button size="sm" variant="solid" color="primary">Medium</Button>
                      <Button size="sm" variant="flat">High</Button>
                    </div>
                  </div>
                </div>
                
                <Button 
                  color="primary" 
                  className="w-full"
                  onPress={handleStartAutomation}
                  isLoading={isLoading}
                >
                  {isLoading ? "Starting Automation..." : "Start Send Automation"}
                </Button>
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
                      placeholder="Select networks"
                      selectedKeys={selectedNetworks}
                      onSelectionChange={(keys) => setSelectedNetworks([...(keys as Set<string>)])}
                      className="w-full"
                    >
                      <SelectItem key="megaeth">MegaETH Testnet</SelectItem>
                      <SelectItem key="pharos">Pharos</SelectItem>
                      <SelectItem key="somnia">Somnia</SelectItem>
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