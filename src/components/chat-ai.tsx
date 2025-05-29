import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Input, Avatar, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

interface ChatAIProps {
  isOpen: boolean;
  onClose: () => void;
}

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};

export const ChatAI: React.FC<ChatAIProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = React.useState('');
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: '1',
      text: 'Hello! How can I help you with your DeFi automation today?',
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  
  const handleSend = () => {
    if (input.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiResponses = [
        "I can help you set up automated swaps across multiple networks.",
        "Would you like me to explain how the faucet claiming works?",
        "I can guide you through the contract deployment process if you'd like.",
        "The best way to optimize gas fees is to use the scheduled transactions feature.",
        "Let me check the network status for you. All networks are currently operational."
      ];
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };
  
  React.useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-16 sm:bottom-4 right-4 z-50 w-full max-w-[360px] shadow-lg"
        >
          <Card className="h-[500px] flex flex-col">
            <CardHeader className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Avatar
                  size="sm"
                  src="https://img.heroui.chat/image/ai?w=200&h=200&u=1"
                  className="bg-primary/10"
                />
                <div>
                  <p className="font-medium">AutoDeFi Assistant</p>
                  <p className="text-tiny text-default-500">AI powered support</p>
                </div>
              </div>
              <Button isIconOnly size="sm" variant="light" onPress={onClose}>
                <Icon icon="lucide:x" className="text-default-500" />
              </Button>
            </CardHeader>
            <Divider />
            <CardBody className="overflow-y-auto p-4">
              <div className="flex flex-col gap-4">
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === 'user' 
                          ? 'bg-primary text-white' 
                          : 'bg-content2'
                      }`}
                    >
                      <p className="text-small">{message.text}</p>
                      <p className="text-tiny mt-1 opacity-70">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </CardBody>
            <Divider />
            <CardFooter>
              <div className="flex w-full gap-2">
                <Input
                  fullWidth
                  placeholder="Type a message..."
                  value={input}
                  onValueChange={setInput}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSend();
                    }
                  }}
                />
                <Button color="primary" isIconOnly onPress={handleSend}>
                  <Icon icon="lucide:send" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
};