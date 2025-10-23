# React Google Tag Manager

[![npm version](https://badge.fury.io/js/%40tracktor%2Freact-google-tag-manager.svg)](https://badge.fury.io/js/%40tracktor%2Freact-google-tag-manager)

**Very light React library for use easily the Google Tag Manager**


- [Installation](#Installation)
- [Usage](#Usage)
- [Props and options](#Props-and-Options)
- [Hooks](#kook)

## Installation

```console
yarn add @tracktor/react-google-tag-manager
```

or


```console
npm install @tracktor/react-google-tag-manager
```

or 

```console
bun add @tracktor/react-google-tag-manager
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

## Props and options

Your can provide some props and options to the provider.

```typescript jsx
import { GoogleTagManagerProvider } from "@tracktor/react-google-tag-manager";

const App = () => (
  <GoogleTagManagerProvider id="YOUR_GOOGLE_TAG_ID" options={{ dataLayerName: "..." }}>
    ...
  </GoogleTagManagerProvider>
);

export default App;
```
| Props   | Type       | Default   | Description                                                                                                                   |
|---------|------------|-----------|-------------------------------------------------------------------------------------------------------------------------------|
| id      | GTM-XXXXXX | undefined | Define the Google Tag Manager ID id. You can create an account to get an ID here : https://tagmanager.google.com/?hl=fr#/home |
| options | object     | undefined | Provider options                                                                                                              |


| Option        | Type   | Default                                 | Description             |
|---------------|--------|-----------------------------------------|-------------------------|
| scriptUrl     | string | https://www.googletagmanager.com/gtm.js | Set script url to load  |
| dataLayerName | string | dataLayer                               | Set the data layer name |

## Hooks
`useGoogleTagManager`

| Export    | type     | Description    |
|-----------|----------|----------------|
| sendEvent | function | Send GTM event |
| id        | string   | The GTM id     |
