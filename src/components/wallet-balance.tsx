import React from 'react';
import { Card, CardHeader, CardBody, Divider, Spinner } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useAccount, useBalance, useNetwork } from 'wagmi';

export const WalletBalance: React.FC = () => {
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const { data: balance, isLoading } = useBalance({
    address,
    watch: true,
  });
  
  const networkTokens = {
    6342: { symbol: "ETH", name: "MegaETH" },
    7771: { symbol: "PHA", name: "Pharos" },
    2022: { symbol: "SOM", name: "Somnia" },
  };
  
  const currentToken = chain?.id ? networkTokens[chain.id as keyof typeof networkTokens] : { symbol: "ETH", name: "Ethereum" };
  
  return (
    <Card>
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md font-semibold">Wallet Balance</p>
          <p className="text-small text-default-500">Current network balance</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        {!isConnected ? (
          <div className="flex flex-col items-center justify-center py-6">
            <Icon icon="lucide:wallet" className="text-default-400 text-4xl mb-2" />
            <p className="text-default-500 text-center">Connect your wallet to view balance</p>
          </div>
        ) : isLoading ? (
          <div className="flex justify-center py-6">
            <Spinner size="md" color="primary" />
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon icon="lucide:coins" className="text-primary" />
                </div>
                <span>{currentToken.name}</span>
              </div>
              <div className="text-right">
                <p className="font-semibold">{balance?.formatted || "0.0"}</p>
                <p className="text-tiny text-default-500">{currentToken.symbol}</p>
              </div>
            </div>
            
            <Divider />
            
            <div className="flex justify-between text-small">
              <span className="text-default-500">Network</span>
              <span className="font-medium">{chain?.name || "Not Connected"}</span>
            </div>
            
            <div className="flex justify-between text-small">
              <span className="text-default-500">Wallet</span>
              <span className="font-medium">
                {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "Not Connected"}
              </span>
            </div>
          </div>
        )}
      </CardBody>
    </Card>
  );
};