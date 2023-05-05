import zksync from '@/assets/images/networks/zksync.svg';
export default {
  name: 'ZKSYNC',
  name_long: 'ZKSync ERA Mainnet',
  homePage: 'https://zksync.io/',
  blockExplorer: 'ZKSyncExplorer',
  blockExplorerTX: 'https://explorer.zksync.io/tx/[[txHash]]',
  blockExplorerAddr: 'https://explorer.zksync.io/address/[[address]]',
  chainID: 324,
  tokens: [],
  contracts: [],
  icon: zksync,
  currencyName: 'ETH',
  isTestNetwork: false,
  isEthVMSupported: {
    supported: false,
    url: null,
    websocket: null
  },
  gasPriceMultiplier: 1,
  canBuy: false,
  coingeckoID: 'ethereum',
  balanceApi: ''
};
