import { useIsomorphicLayoutEffect, useScript } from "@tracktor/react-utils";
import { createContext, ReactNode, useMemo, useRef } from "react";
import { injectDataLayer, createNoScript } from "@/utils/utilsGTM";

interface GoogleTagManagerProviderProps {
  id?: `GTM-${string}` | string;
  options?: {
    scriptUrl?: string;
    dataLayerName?: string;
  };
  children: ReactNode;
}

interface DefaultContextValue {
  id?: GoogleTagManagerProviderProps["id"];
  options: {
    scriptUrl: string;
    dataLayerName: string;
  };
}

const defaultContextValue = {
  id: undefined,
  options: {
    dataLayerName: "dataLayer",
    scriptUrl: "https://www.googletagmanager.com/gtm.js",
  },
};

export const GoogleTagManagerContext = createContext<DefaultContextValue>(defaultContextValue);

const GoogleTagManagerProvider = ({ children, id, options }: GoogleTagManagerProviderProps) => {
  const { dataLayerName, scriptUrl } = { ...defaultContextValue.options, ...options };
  const isInitialized = useRef<boolean>(false);

  const value = useMemo(
    () => ({
      id,
      options: {
        dataLayerName,
        scriptUrl,
      },
    }),
    [dataLayerName, id, scriptUrl]
  );

  // Initialize GTM
  useIsomorphicLayoutEffect(() => {
    if (!id || isInitialized.current) {
      return;
    }

    isInitialized.current = true;

    injectDataLayer(dataLayerName);
    createNoScript(id);
  }, [dataLayerName, id]);

  // Load the script asynchronously
  useScript(`${value.options.scriptUrl}?id=${value.id}`, { enable: !!value.id, position: "head-start" });

  return <GoogleTagManagerContext.Provider value={value}>{children}</GoogleTagManagerContext.Provider>;
};

export default GoogleTagManagerProvider;
