import React from 'react';
import { Tabs, Tab, Card, CardBody, Input, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Spacer, Checkbox, Select, SelectItem } from "@heroui/react";
import { Icon } from "@iconify/react";
import { addToast } from "@heroui/react";
import { useAccount } from 'wagmi';

export const AutomationPanel: React.FC = () => {
  const [automationType, setAutomationType] = React.useState("swap");
  const [executionCount, setExecutionCount] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);
  const { isConnected } = useAccount();
  
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