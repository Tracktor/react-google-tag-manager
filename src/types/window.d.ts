declare global {
  interface Window {
    dataLayer: Array<Object>;
    [key: string]: any;
  }
}

export default Window;
