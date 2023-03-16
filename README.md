# React Google Tag Manager

[![npm version](https://badge.fury.io/js/%40tracktor%2Freact-google-tag-manager.svg)](https://badge.fury.io/js/%40tracktor%2Freact-google-tag-manager)

**React library for use easily the Google Tag Manager**


- [Installation](#Installation)
- [Usage](#Usage)
- [Options](#Options)

## Installation

```console
yarn add @tracktor/react-google-tag-manager
```

or


```console
npm install @tracktor/react-google-tag-manager
```

## Usage

```typescript jsx
import { GoogleTagManagerProvider, useGoogleTagManager } from "@tracktor/react-google-tag-manager";

const App = () => (
  <GoogleTagManagerProvider id="YOUR_GOOGLE_TAG_ID">
    <YourComponent />
  </GoogleTagManagerProvider>
);

const YourComponent = () => {
  const { sendEvent } = useGoogleTagManager();

  return (
    <main>
      <h1>Your Component</h1>
      <button type="button" onClick={() => sendEvent({ event: "eventName", value: "someValue" })}>
        Click me
      </button>
    </main>
  );
};

export default App;
```
## Options

Your can provide some options to the provider.

```typescript jsx
import { GoogleTagManagerProvider } from "@tracktor/react-google-tag-manager";

const App = () => (
  <GoogleTagManagerProvider id="YOUR_GOOGLE_TAG_ID" options={{ dataLayerName: "..." }}>
    ...
  </GoogleTagManagerProvider>
);

export default App;
```


| Option        | Type   | Default                                  | Description             |
|---------------|--------|------------------------------------------|-------------------------|
| scriptUrl     | string | https://www.googletagmanager.com/gtag/js | Set script url to load  |
| dataLayerName | string | dataLayer                                | Set the data layer name |

