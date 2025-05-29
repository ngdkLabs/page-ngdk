import React from 'react';
import { Card, CardBody, Button, Tooltip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useNetwork, useSwitchNetwork } from 'wagmi';

export const NetworkSelector: React.FC = () => {
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  const networks = [
    {
      id: 59902,
      name: "MegaETH Testnet",
      icon: "lucide:hexagon",
      logo: "https://contracts.mintair.xyz/_next/static/media/mega.3bf157ad.png",
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
      borderColor: "border-purple-200 dark:border-purple-800/30",
      status: "active",
      faucet: true,
      botSupport: true
    },
    {
      id: 7771,
      name: "Pharos",
      icon: "lucide:sun",
      logo: "https://cdn-mintair-prod.s3.ap-south-1.amazonaws.com/pharos.svg",
      color: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
      borderColor: "border-amber-200 dark:border-amber-800/30",
      status: "active",
      faucet: true,
      botSupport: true
    },
    {
      id: 2022,
      name: "Somnia",
      icon: "lucide:moon",
      logo: "https://cdn-mintair-prod.s3.ap-south-1.amazonaws.com/somnia.svg",
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
      borderColor: "border-blue-200 dark:border-blue-800/30",
      status: "active",
      faucet: true,
      botSupport: true
    }
  ];

  return (
    <div>
      <h3 className="text-medium font-medium mb-3">Select Network</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {networks.map((network) => (
          <Card 
            key={network.id}
            isPressable
            onPress={() => switchNetwork?.(network.id)}
            className={`network-card border ${network.borderColor} ${chain?.id === network.id ? 'ring-2 ring-primary' : ''}`}
          >
            <CardBody className="flex flex-row items-center p-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${network.color} bg-white`}>
                <img
                  src={network.logo}
                  alt={`${network.name} logo`}
                  className="w-8 h-8 object-contain bg-transparent"
                  style={{ display: 'block' }}
                  onError={e => (e.currentTarget.style.display = 'none')}
                />
              </div>
              <div className="ml-3 flex-grow">
                <p className="font-medium">{network.name}</p>
                <p className="text-tiny text-default-500">
                  {chain?.id === network.id ? 'Connected' : 'Click to connect'}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className={`w-2 h-2 rounded-full ${network.status === "active" ? "bg-success" : "bg-warning"}`} />
                <div className="flex gap-1">
                  {network.faucet && (
                    <Tooltip content="Faucet available">
                      <span>
                        <Icon icon="lucide:droplet" className="text-tiny text-default-400" />
                      </span>
                    </Tooltip>
                  )}
                  {network.botSupport && (
                    <Tooltip content="Bot automation supported">
                      <span>
                        <Icon icon="lucide:bot" className="text-tiny text-default-400" />
                      </span>
                    </Tooltip>
                  )}
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};