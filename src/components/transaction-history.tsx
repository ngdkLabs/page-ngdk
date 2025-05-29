import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Pagination, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

type Transaction = {
  id: string;
  type: "swap" | "send" | "claim" | "deploy";
  status: "success" | "pending" | "failed";
  network: string;
  timestamp: string;
  hash: string;
  botInitiated?: boolean;
  taskId?: string;
};

export const TransactionHistory: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const [filterNetwork, setFilterNetwork] = React.useState<string>("all");
  const [filterType, setFilterType] = React.useState<string>("all");
  const rowsPerPage = 5;
  
  // Mock transaction data with bot-initiated transactions
  const transactions: Transaction[] = [
    {
      id: "1",
      type: "swap",
      status: "success",
      network: "MegaETH",
      timestamp: "2024-06-01 14:32",
      hash: "0x1234...5678",
      botInitiated: true,
      taskId: "bot-task-001"
    },
    {
      id: "2",
      type: "claim",
      status: "success",
      network: "Pharos",
      timestamp: "2024-06-01 12:15",
      hash: "0xabcd...efgh",
      botInitiated: true,
      taskId: "bot-task-002"
    },
    {
      id: "3",
      type: "send",
      status: "pending",
      network: "Somnia",
      timestamp: "2024-06-01 10:45",
      hash: "0x8765...4321"
    },
    {
      id: "4",
      type: "deploy",
      status: "failed",
      network: "MegaETH",
      timestamp: "2024-05-31 22:10",
      hash: "0xijkl...mnop",
      botInitiated: true,
      taskId: "bot-task-003"
    },
    {
      id: "5",
      type: "swap",
      status: "success",
      network: "Pharos",
      timestamp: "2024-05-31 18:22",
      hash: "0x9876...5432"
    },
    {
      id: "6",
      type: "claim",
      status: "success",
      network: "MegaETH",
      timestamp: "2024-05-31 15:05",
      hash: "0xqrst...uvwx",
      botInitiated: true,
      taskId: "bot-task-004"
    },
    {
      id: "7",
      type: "send",
      status: "success",
      network: "Somnia",
      timestamp: "2024-05-31 11:30",
      hash: "0x2468...1357"
    }
  ];
  
  // Filter transactions based on selected filters
  const filteredTransactions = React.useMemo(() => {
    return transactions.filter(tx => {
      const networkMatch = filterNetwork === "all" || tx.network === filterNetwork;
      const typeMatch = filterType === "all" || tx.type === filterType;
      return networkMatch && typeMatch;
    });
  }, [transactions, filterNetwork, filterType]);
  
  const pages = Math.ceil(filteredTransactions.length / rowsPerPage);
  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return filteredTransactions.slice(start, end);
  }, [page, filteredTransactions]);
  
  const typeIcons = {
    swap: <Icon icon="lucide:refresh-cw" className="text-primary" />,
    send: <Icon icon="lucide:send" className="text-blue-500" />,
    claim: <Icon icon="lucide:gift" className="text-amber-500" />,
    deploy: <Icon icon="lucide:rocket" className="text-purple-500" />
  };
  
  const statusChip = (status: string) => {
    switch (status) {
      case "success":
        return <Chip color="success" size="sm" variant="flat">Success</Chip>;
      case "pending":
        return <Chip color="warning" size="sm" variant="flat">Pending</Chip>;
      case "failed":
        return <Chip color="danger" size="sm" variant="flat">Failed</Chip>;
      default:
        return null;
    }
  };

  return (
    <div className="py-4">
      {/* Add filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        <Dropdown>
          <DropdownTrigger>
            <Button 
              variant="flat" 
              size="sm" 
              endContent={<Icon icon="lucide:chevron-down" className="text-small" />}
            >
              Network: {filterNetwork === "all" ? "All" : filterNetwork}
            </Button>
          </DropdownTrigger>
          <DropdownMenu 
            aria-label="Network filter"
            selectionMode="single"
            selectedKeys={[filterNetwork]}
            onSelectionChange={(keys) => setFilterNetwork([...keys][0] as string)}
          >
            <DropdownItem key="all">All Networks</DropdownItem>
            <DropdownItem key="MegaETH">MegaETH</DropdownItem>
            <DropdownItem key="Pharos">Pharos</DropdownItem>
            <DropdownItem key="Somnia">Somnia</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        
        <Dropdown>
          <DropdownTrigger>
            <Button 
              variant="flat" 
              size="sm" 
              endContent={<Icon icon="lucide:chevron-down" className="text-small" />}
            >
              Type: {filterType === "all" ? "All" : filterType}
            </Button>
          </DropdownTrigger>
          <DropdownMenu 
            aria-label="Type filter"
            selectionMode="single"
            selectedKeys={[filterType]}
            onSelectionChange={(keys) => setFilterType([...keys][0] as string)}
          >
            <DropdownItem key="all">All Types</DropdownItem>
            <DropdownItem key="swap">Swap</DropdownItem>
            <DropdownItem key="send">Send</DropdownItem>
            <DropdownItem key="claim">Claim</DropdownItem>
            <DropdownItem key="deploy">Deploy</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      
      <Table 
        aria-label="Transaction history table"
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="primary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        }
        classNames={{
          wrapper: "min-h-[222px]",
        }}
      >
        <TableHeader>
          <TableColumn>TYPE</TableColumn>
          <TableColumn>NETWORK</TableColumn>
          <TableColumn>STATUS</TableColumn>
          <TableColumn>TIME</TableColumn>
          <TableColumn>TX HASH</TableColumn>
          <TableColumn>SOURCE</TableColumn> 
          
          {/* Add new column for bot/manual */}
        </TableHeader>
        <TableBody items={items}>
          {(item) => (
            <TableRow key={item.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  {typeIcons[item.type]}
                  <span className="capitalize">{item.type}</span>
                </div>
              </TableCell>
              <TableCell>{item.network}</TableCell>
              <TableCell>{statusChip(item.status)}</TableCell>
              <TableCell>{item.timestamp}</TableCell>
              <TableCell>
                <span className="text-primary cursor-pointer hover:underline">
                  {item.hash}
                </span>
              </TableCell>
              <TableCell>
                {item.botInitiated ? (
                  <Chip size="sm" variant="flat" color="secondary">Bot</Chip>
                ) : (
                  <Chip size="sm" variant="flat" color="default">Manual</Chip>
                )}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};