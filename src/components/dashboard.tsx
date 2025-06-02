import React from 'react';
import { Card, CardBody, CardHeader, Tabs, Tab, Spacer, Button, Chip, Alert } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useAccount } from 'wagmi';

import { NetworkSelector } from './network-selector';
import { AutomationPanel } from './automation-panel';
import { WalletBalance } from './wallet-balance';
import { TransactionHistory } from './transaction-history';
import { BotStatus } from './bot-status';

export const Dashboard: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState("automation");
  const { isConnected } = useAccount();
  // const [alerts, setAlerts] = React.useState([
  //   {
  //     id: "1",
  //     type: "success",
  //     title: "Swap completed",
  //     description: "Your swap transaction was completed successfully",
  //     isVisible: true
  //   },
  //   {
  //     id: "2",
  //     type: "info",
  //     title: "Faucet claimed",
  //     description: "You have successfully claimed tokens from the faucet",
  //     isVisible: true
  //   },
  //   {
  //     id: "3",
  //     type: "warning",
  //     title: "Network congestion",
  //     description: "Network congestion detected. Transactions may be delayed",
  //     isVisible: true
  //   }
  // ]);
  
  // const handleCloseAlert = (id: string) => {
  //   setAlerts(alerts.filter(alert => alert.id !== id));
  // };
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Alerts section */}
      {/* <div className="lg:col-span-3">
        <div className="space-y-2 mb-4">
          {alerts.map((alert) => (
            <Alert
              key={alert.id}
              title={alert.title}
              description={alert.description}
              color={alert.type as any}
              isClosable
              onClose={() => handleCloseAlert(alert.id)}
            />
          ))}
        </div>
      </div> */}
      
      <div className="lg:col-span-2">
        <Card className="mb-6">
          <CardHeader className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Automation your Tesnet!</h2>
            {isConnected && (
                <Chip color="success" variant="flat" size="sm">
                <span className="mr-1 inline-block w-2 h-2 rounded-full bg-green-500" />
                Connected
                </Chip>
            )}
          </CardHeader>
          <CardBody>
            <NetworkSelector />
            <Spacer y={4} />
            <Tabs 
              aria-label="Automation options" 
              selectedKey={selectedTab} 
              onSelectionChange={setSelectedTab as any}
              variant="underlined"
              color="primary"
              classNames={{
                tabList: "gap-6",
                cursor: "w-full bg-primary",
                tab: "max-w-fit px-0 h-12"
              }}
            >
              <Tab 
                key="automation" 
                title={
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:settings" />
                    <span>Automation</span>
                  </div>
                }
              >
                <AutomationPanel />
              </Tab>
              <Tab 
                key="history" 
                title={
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:history" />
                    <span>History</span>
                  </div>
                }
              >
                <TransactionHistory />
              </Tab>
              <Tab 
                key="settings" 
                title={
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:sliders" />
                    <span>Settings</span>
                  </div>
                }
              >
                <div className="py-4">
                  <h3 className="text-lg font-medium mb-4">Automation Settings</h3>
                  <div className="space-y-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-small font-medium">Default Execution Count</label>
                      <div className="flex gap-2 items-center">
                        <Button size="sm" variant="flat" isIconOnly>
                          <Icon icon="lucide:minus" />
                        </Button>
                        <span className="min-w-[40px] text-center">5</span>
                        <Button size="sm" variant="flat" isIconOnly>
                          <Icon icon="lucide:plus" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-small font-medium">Gas Price Strategy</label>
                      <div className="flex gap-2">
                        <Button size="sm" variant="flat">Low</Button>
                        <Button size="sm" variant="solid" color="primary">Medium</Button>
                        <Button size="sm" variant="flat">High</Button>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-small font-medium">Notification Preferences</label>
                      <div className="flex gap-2">
                        <Button size="sm" variant="solid" color="primary">Success</Button>
                        <Button size="sm" variant="flat">Error</Button>
                        <Button size="sm" variant="flat">All</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              
              <Tab 
                key="logs" 
                title={
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:terminal" />
                    <span>Logs</span>
                  </div>
                }
              >
                <div className="py-4">
                  <h3 className="text-lg font-medium mb-4">Bot Execution Logs</h3>
                  <div className="bg-content2 rounded-medium p-4 font-mono text-tiny overflow-auto h-[400px]">
                    <div className="text-success">[✓] Connected to MegaETH Testnet</div>
                    <div className="text-default-500">[➤] Wallet 0x1234...5678 ready</div>
                    <div className="text-warning">[!] Network congestion detected</div>
                    <div className="text-success">[+] Swap completed successfully</div>
                    <div className="text-default-500">[⟳] Waiting for transaction confirmation...</div>
                    <div className="text-success">[+] Transaction confirmed in block 12345</div>
                    <div className="text-default-500">[➤] Preparing to deploy contract</div>
                    <div className="text-success">[✓] Contract deployed at 0xabcd...efgh</div>
                    <div className="text-danger">[✗] Failed to claim faucet: Rate limit exceeded</div>
                    <div className="text-default-500">[⟳] Retrying in 5 minutes...</div>
                    <div className="text-success">[+] Successfully claimed faucet tokens</div>
                    <div className="text-default-500">[➤] Checking token balances</div>
                    <div className="text-success">[✓] ETH Balance: 0.25 ETH</div>
                    <div className="text-success">[✓] USDC Balance: 100.0 USDC</div>
                    <div className="text-default-500">[➤] Scheduling next task for 14:30 UTC</div>
                    <div className="text-success">[+] All tasks completed successfully</div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </div>
      
      <div className="space-y-6">
        <WalletBalance />
        <BotStatus />
      </div>
    </div>
  );
};