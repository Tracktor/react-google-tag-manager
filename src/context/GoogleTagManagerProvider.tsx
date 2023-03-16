import { useScript } from "@tracktor/react-utils";
import { createContext, ReactNode, useMemo } from "react";

interface GoogleTagManagerProviderProps {
  id: string;
  options?: {
    scriptUrl?: string;
    dataLayerName?: string;
  };
  children: ReactNode;
}

const DEFAULT_SCRIPT_URL = "https://www.googletagmanager.com/gtag/js";
const DEFAULT_DATA_LAYER_NAME = "dataLayer";

export const GoogleTagManagerContext = createContext({
  id: "",
  options: {
    dataLayerName: DEFAULT_DATA_LAYER_NAME,
    scriptUrl: DEFAULT_SCRIPT_URL,
  },
});

const GoogleTagManagerProvider = ({ children, id, options }: GoogleTagManagerProviderProps) => {
  const value = useMemo(
    () => ({
      id,
      options: {
        dataLayerName: options?.dataLayerName || DEFAULT_DATA_LAYER_NAME,
        scriptUrl: options?.scriptUrl || DEFAULT_SCRIPT_URL,
      },
    }),
    [id, options]
  );

  // Load the script asynchronously
  useScript(`${value.options.scriptUrl}?id=${value.id}`, !!value.id);

  return <GoogleTagManagerContext.Provider value={value}>{children}</GoogleTagManagerContext.Provider>;
};

export default GoogleTagManagerProvider;
