declare global {
  interface Window {
    jusoCallBack?: (
      zipNo: string,
      roadFullAddr: string,
      jibunAddr: string,
    ) => void;
  }
}

export {};
