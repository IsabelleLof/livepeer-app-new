import { createReactClient, studioProvider, LivepeerConfig } from '@livepeer/react';

import '@/styles/globals.css'

const client = createReactClient({
  provider: studioProvider({ apiKey: '620de107-0ad4-4410-812b-6d6beb912002' }),
});

export default function App({ Component, pageProps }) {

  return (

  <LivepeerConfig client={client}>
  
  <Component {...pageProps} />

  </LivepeerConfig>
  );
}
