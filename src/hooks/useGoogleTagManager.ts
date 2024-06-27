import { useCallback, useContext } from "react";
import { GoogleTagManagerContext } from "@/context/GoogleTagManagerProvider";

/**
 * Hook to use Google Tag Manager
 */
const useGoogleTagManager = () => {
  const { id, options } = useContext(GoogleTagManagerContext);

  const sendEvent = useCallback(
    (data: Object) => {
      if (!id) {
        return;
      }

      if (window?.dataLayer) {
        window[options.dataLayerName].push(data);
        return;
      }

      window.dataLayer = [];
    },
    [id, options.dataLayerName],
  );

  return { id, sendEvent };
};

export default useGoogleTagManager;
