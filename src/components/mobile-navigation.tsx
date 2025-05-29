import React from 'react';
import { Icon } from "@iconify/react";

export const MobileNavigation: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("dashboard");
  
  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: "lucide:layout-dashboard" },
    { id: "history", label: "History", icon: "lucide:history" },
    { id: "wallet", label: "Wallet", icon: "lucide:wallet" },
    { id: "settings", label: "Settings", icon: "lucide:settings" }
  ];

  return (
    <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md border-t border-divider z-50">
      <div className="flex justify-around">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex flex-col items-center py-3 px-4 ${
              activeTab === tab.id ? "text-primary" : "text-default-600"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <Icon icon={tab.icon} className="text-xl mb-1" />
            <span className="text-tiny">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};