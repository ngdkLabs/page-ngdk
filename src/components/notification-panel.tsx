import React from 'react';
import { Card, CardHeader, CardBody, Divider, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

type Notification = {
  id: string;
  type: "success" | "warning" | "error";
  message: string;
  time: string;
  isNew?: boolean;
};

export const NotificationPanel: React.FC = () => {
  const [notifications, setNotifications] = React.useState<Notification[]>([
    {
      id: "1",
      type: "success",
      message: "Swap completed successfully",
      time: "2 min ago",
      isNew: true
    },
    {
      id: "2",
      type: "success",
      message: "Faucet tokens claimed",
      time: "15 min ago"
    },
    {
      id: "3",
      type: "warning",
      message: "Network congestion detected",
      time: "1 hour ago"
    }
  ]);
  
  const clearNotifications = () => {
    setNotifications([]);
  };
  
  const notificationIcon = (type: string) => {
    switch (type) {
      case "success":
        return <Icon icon="lucide:check-circle" className="text-success" />;
      case "warning":
        return <Icon icon="lucide:alert-triangle" className="text-warning" />;
      case "error":
        return <Icon icon="lucide:x-circle" className="text-danger" />;
      default:
        return <Icon icon="lucide:bell" className="text-primary" />;
    }
  };

  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="text-md font-semibold">Notifications</p>
          {notifications.some(n => n.isNew) && (
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          )}
        </div>
        {notifications.length > 0 && (
          <Button 
            size="sm" 
            variant="light" 
            onPress={clearNotifications}
          >
            Clear all
          </Button>
        )}
      </CardHeader>
      <Divider />
      <CardBody>
        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-6">
            <Icon icon="lucide:bell-off" className="text-default-400 text-4xl mb-2" />
            <p className="text-default-500 text-center">No notifications</p>
          </div>
        ) : (
          <div className="space-y-4">
            {notifications.map((notification) => (
              <motion.div
                key={notification.id}
                initial={notification.isNew ? { opacity: 0, y: -10 } : false}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-start gap-3 p-2 rounded-medium ${
                  notification.isNew ? "bg-primary/5 dark:bg-primary/10" : ""
                }`}
              >
                <div className="mt-0.5">
                  {notificationIcon(notification.type)}
                </div>
                <div className="flex-grow">
                  <p className="text-small">{notification.message}</p>
                  <p className="text-tiny text-default-500">{notification.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </CardBody>
    </Card>
  );
};