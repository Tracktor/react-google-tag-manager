import GoogleTagManagerProvider from "@/context/GoogleTagManagerProvider";
import useGoogleTagManager from "@/hooks/useGoogleTagManager";

const App = () => (
  <GoogleTagManagerProvider id="">
    <Page />
  </GoogleTagManagerProvider>
);

const Page = () => {
  const { sendEvent } = useGoogleTagManager();

  return (
    <main>
      <h1>@tracktor/react-google-tag-manager</h1>
      <button type="button" onClick={() => sendEvent({ event: "eventName", value: "someValue" })}>
        Click me
      </button>
    </main>
  );
};

export default App;
