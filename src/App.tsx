import GoogleTagManagerProvider from "@/context/GoogleTagManagerProvider";
import useGoogleTagManager from "@/hooks/useGoogleTagManager";

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

const App = () => (
  <GoogleTagManagerProvider id="">
    <Page />
  </GoogleTagManagerProvider>
);

export default App;
