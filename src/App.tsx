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
      <Navbar maxWidth="xl" className="bg-transparent shadow-none border-none py-2">
        <NavbarBrand>
          <img
            src={theme === "light" ? "src/img/ngdkl.svg" : "src/img/ngdk.svg"}
            alt="NGDK! Logo"
            className="h-28 w-28 md:h-32 md:w-32"
          />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-2" justify="center">
          <NavbarItem>
            <div style={{ background: "#255F38" }} className="rounded-full px-2 py-0.5">
              <Link
                color="foreground"
                href="#"
                aria-current="page"
                className={theme === "light" ? "text-white text-sm" : "text-sm"}
              >
                Dashboard
              </Link>
            </div>
          </NavbarItem>

                    <NavbarItem>
            <div style={{ background: "#255F38" }} className="rounded-full px-2 py-0.5">
              <Link
                color="foreground"
                href="#"
                aria-current="page"
                className={theme === "light" ? "text-white text-sm" : "text-sm"}
              >
                Doc
              </Link>
            </div>
          </NavbarItem>

          <NavbarItem>
            <div style={{ background: "#255F38" }} className="rounded-full px-2 py-0.5">
              <Link
                color="foreground"
                href="#"
                className={theme === "light" ? "text-white text-sm" : "text-sm"}
              >
                History
              </Link>
            </div>
          </NavbarItem>
          <NavbarItem>
            <div style={{ background: "#255F38" }} className="rounded-full px-2 py-0.5">
              <Link
                color="foreground"
                href="#"
                className={theme === "light" ? "text-white text-sm" : "text-sm"}
              >
                Settings
              </Link>
            </div>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" className="gap-1">
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
                size="sm"
                variant="light" 
                onPress={toggleChat}
                className={isChatOpen ? "text-primary" : ""}
              >
                <Icon icon="lucide:message-circle" className="text-lg" />
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
                  size="sm"
                >
                  <Icon icon="lucide:menu" className="text-lg" />
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
              <img
              src={theme === "light" ? "src/img/ngdkl.svg" : "src/img/ngdk.svg"}
              alt="NGDK! Logo"
              className="h-16 w-16"
              />
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