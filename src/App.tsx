import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Spacer, Switch, Tooltip, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { Icon } from "@iconify/react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { useTheme } from "@heroui/use-theme";

import { Dashboard } from './components/dashboard';
import { MobileNavigation } from './components/mobile-navigation';
import { ChatAI } from './components/chat-ai';
import { LoadingScreen } from './components/loading-screen'; // Import the new loading screen component

export default function App() {
  const { theme, setTheme } = useTheme();
  const [isChatOpen, setIsChatOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true); // Add loading state
  
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Simulate loading time
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading time
    
    return () => clearTimeout(timer);
  }, []);

  // Show loading screen if loading
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar maxWidth="xl" className="bg-background/70 backdrop-blur-md border-b border-divider">
        <NavbarBrand>
          <Icon icon="lucide:zap" className="text-primary text-2xl" />
          <p className="font-bold text-inherit ml-2">NGDK!</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#" aria-current="page">
              Dashboard
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              History
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Settings
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" className="gap-2">
          <NavbarItem>
            <Tooltip content="Toggle theme">
              <div className="flex items-center">
                <Switch 
                  size="sm"
                  isSelected={theme === "dark"}
                  onValueChange={toggleTheme}
                  startContent={<Icon icon="lucide:sun" />}
                  endContent={<Icon icon="lucide:moon" />}
                />
              </div>
            </Tooltip>
          </NavbarItem>
          
          <NavbarItem>
            <Tooltip content="Chat with AI">
              <Button 
                isIconOnly 
                variant="light" 
                onPress={toggleChat}
                className={isChatOpen ? "text-primary" : ""}
              >
                <Icon icon="lucide:message-circle" className="text-xl" />
              </Button>
            </Tooltip>
          </NavbarItem>
          <NavbarItem>
            <ConnectButton showBalance={false} />
          </NavbarItem>

                    <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Button 
                  variant="light" 
                  isIconOnly
                >
                  <Icon icon="lucide:menu" className="text-xl" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="User menu">
                <DropdownItem key="profile" startContent={<Icon icon="lucide:user" />}>
                  Profile
                </DropdownItem>
                <DropdownItem key="settings" startContent={<Icon icon="lucide:settings" />}>
                  Settings
                </DropdownItem>
                <DropdownItem key="help" startContent={<Icon icon="lucide:help-circle" />}>
                  Help & Support
                </DropdownItem>
                <DropdownItem key="logout" startContent={<Icon icon="lucide:log-out" />} className="text-danger">
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
          
        </NavbarContent>
      </Navbar>
      
      <main className="flex-grow container mx-auto px-4 py-6 md:px-6 lg:px-8">
        <Dashboard />
      </main>
      
      <footer className="border-t border-divider py-6">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Icon icon="lucide:zap" className="text-primary text-xl" />
              <p className="font-semibold text-inherit ml-2">NGDK!</p>
            </div>
            <div className="text-small text-default-500">
              © 2024 NGDK!. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
      
      <MobileNavigation />
      
      {/* Add ChatAI component */}
      <ChatAI isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}