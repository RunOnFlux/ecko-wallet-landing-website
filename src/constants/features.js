import { BuySellIcon, CrosschainIcon, DappsIcon, PrivateIcon, SecureCompatibleIcon, SendReceiveStoreIcon } from '../assets';

export const FEATURES = {
  DAPPS: {
    icon: <DappsIcon />,
    title: 'ACCESS YOUR DAPPS',
    description:
      'eckoWALLET is integrated with the majority of NFT and Kadena dApps, enabling seamless interaction with decentralized applications on the Kadena network. Full WalletConnect v2 support for secure dApp connections.',
    color: '#FFB31C',
  },
  CROSSCHAIN: {
    icon: <CrosschainIcon />,
    title: 'CROSSCHAIN TRANSFER',
    description: 'Easily move your k:assets across all 20 Kadena chains with automatic token detection and r:account support for cross-chain transfers.',
    color: '#FF5B7E',
  },

  SEND: {
    icon: <SendReceiveStoreIcon />,
    title: 'SEND, SWAP, RECEIVE & STORE',
    description: 'Freely Send, Swap, Store and Receive k:assets at any time with unmatched speed. Built-in swap functionality and automatic token detection make managing your portfolio effortless.',
    color: '#FF00B8',
  },
  BUY_SELL: {
    icon: <BuySellIcon />,
    title: 'BUY & SELL',
    description: 'Integrated fiat on-ramp and off-ramp powered by OnRamper. Easily buy and sell KDA and supported tokens directly from your bank account with multiple payment methods.',
    color: '#FFB31C',
  },
  PRIVATE: {
    icon: <PrivateIcon />,
    title: 'NON-CUSTODIAL & PRIVATE',
    description: 'Your keys, your crypto. eckoWALLET never has access to your private keys, personal data, or wallet addresses. Optional biometric authentication and hardware wallet support (Ledger, SpireKey) for enhanced security.',
    color: '#FF5B7E',
  },
  SECURE: {
    icon: <SecureCompatibleIcon />,
    title: 'SECURE & COMPATIBLE',
    description: 'All generated accounts are k:accounts by default. Available on iOS, Android, Chrome, Brave, and Edge. Features include dark theme, 30+ language translations, NFT management, and comprehensive analytics dashboard.',
    color: '#FF00B8',
  },
};
