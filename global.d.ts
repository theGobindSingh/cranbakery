declare global {
  interface Window {
    ethereum?: {
      selectedAddress?: string;
    };
  }
}
