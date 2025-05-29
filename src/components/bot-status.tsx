import React from 'react';
import { Card, CardHeader, CardBody, Divider, Progress, Chip } from "@heroui/react";

export const BotStatus: React.FC = () => {
  const [botActive, setBotActive] = React.useState(true);

  // Mock data for bot status
  const networks = [
    {
      name: "MegaETH",
      status: "active",
      lastExecution: "2 min ago",
      tasksCompleted: 12,
      tasksTotal: 20,
      logo: "https://contracts.mintair.xyz/_next/static/media/mega.3bf157ad.png",
      color: "text-purple-500"
    },
    {
      name: "Pharos",
      status: "active",
      lastExecution: "5 min ago",
      tasksCompleted: 8,
      tasksTotal: 15,
      logo: "https://cdn-mintair-prod.s3.ap-south-1.amazonaws.com/pharos.svg",
      color: "text-amber-500"
    },
    {
      name: "Somnia",
      status: "idle",
      lastExecution: "15 min ago",
      tasksCompleted: 5,
      tasksTotal: 10,
      logo: "https://cdn-mintair-prod.s3.ap-south-1.amazonaws.com/somnia.svg",
      color: "text-blue-500"
    }
  ];

  const toggleBotStatus = () => {
    setBotActive(!botActive);
  };

  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="text-md font-semibold">Bot Status</p>
          <div className={`w-2 h-2 rounded-full ${botActive ? 'bg-success animate-pulse' : 'bg-danger'}`} />
        </div>
        <Chip 
          color={botActive ? "success" : "danger"} 
          variant="flat" 
          size="sm"
          className="cursor-pointer"
          onClick={toggleBotStatus}
        >
          {botActive ? "Active" : "Paused"}
        </Chip>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="space-y-4">
          <div className="flex justify-between text-small">
            <span className="text-default-500">Next scheduled run</span>
            <span className="font-medium">Today, 15:30 UTC</span>
          </div>
          
          <div className="flex justify-between text-small">
            <span className="text-default-500">Daily tasks completed</span>
            <span className="font-medium">25/45</span>
          </div>
          
          <Progress 
            size="sm" 
            value={55} 
            color="primary" 
            className="my-1"
            aria-label="Daily progress"
          />
          
          <Divider />
          
          <div className="space-y-3">
            <p className="text-small font-medium">Network Status</p>
            
            {networks.map((network) => (
              <div key={network.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={network.logo}
                    alt={network.name}
                    className="w-5 h-5 rounded-full"
                  />
                  <span>{network.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Chip 
                    size="sm" 
                    variant="flat" 
                    color={network.status === "active" ? "success" : "default"}
                  >
                    {network.status === "active" ? "Active" : "Idle"}
                  </Chip>
                  <span className="text-tiny text-default-500">{network.lastExecution}</span>
                </div>
              </div>
            ))}
          </div>
          
          <Divider />
          
          <div className="space-y-2">
            <p className="text-small font-medium">Task Completion</p>
            
            {networks.map((network) => (
              <div key={`progress-${network.name}`} className="space-y-1">
                <div className="flex justify-between text-tiny">
                  <span>{network.name}</span>
                  <span>{network.tasksCompleted}/{network.tasksTotal}</span>
                </div>
                <Progress 
                  size="sm" 
                  value={(network.tasksCompleted / network.tasksTotal) * 100} 
                  color={
                    network.name === "MegaETH" ? "secondary" : 
                    network.name === "Pharos" ? "warning" : "primary"
                  }
                  className="h-1"
                  aria-label={`${network.name} progress`}
                />
              </div>
            ))}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};