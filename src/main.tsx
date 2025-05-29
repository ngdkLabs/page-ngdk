import React from 'react'
import ReactDOM from 'react-dom/client'
import { HeroUIProvider, ToastProvider } from "@heroui/react"
import App from './App.tsx'
import './index.css'

import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

// Define custom chains for the three networks
import { Chain } from 'wagmi';

const megaEthTestnet: Chain = {
  id: 6342,
  name: 'MegaETH Testnet',
  network: 'megaeth-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'MegaETH',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['https://carrot.megaeth.com/rpc'] },
    default: { http: ['https://carrot.megaeth.com/rpc'] },
  },
  blockExplorers: {
    default: { name: 'MegaETH Explorer', url: 'https://explorer.megaeth-testnet.io' },
  },
  testnet: true,
};

const pharosChain: Chain = {
  id: 7771,
  name: 'Pharos Chain',
  network: 'pharos',
  nativeCurrency: {
    decimals: 18,
    name: 'Pharos',
    symbol: 'PHA',
  },
  rpcUrls: {
    public: { http: ['https://rpc.pharos.io'] },
    default: { http: ['https://rpc.pharos.io'] },
  },
  blockExplorers: {
    default: { name: 'Pharos Explorer', url: 'https://explorer.pharos.io' },
  },
  testnet: true,
};

const somniaChain: Chain = {
  id: 2022,
  name: 'Somnia Network',
  network: 'somnia',
  nativeCurrency: {
    decimals: 18,
    name: 'Somnia',
    symbol: 'SOM',
  },
  rpcUrls: {
    public: { http: ['https://rpc.somnia.io'] },
    default: { http: ['https://rpc.somnia.io'] },
  },
  blockExplorers: {
    default: { name: 'Somnia Explorer', url: 'https://explorer.somnia.io' },
  },
  testnet: true,
};

const { chains, publicClient } = configureChains(
  [megaEthTestnet, pharosChain, somniaChain],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'DeFi Automation Platform',
  projectId: 'YOUR_PROJECT_ID',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <HeroUIProvider>
          <ToastProvider />
          <App />
        </HeroUIProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>,
)