// import { WagmiConfig, createClient } from 'wagmi'
// import { ConnectKitProvider, ConnectKitButton, getDefaultClient } from "connectkit";
// import { getDefaultProvider } from 'ethers'

import type { ConfigOptions } from '@web3modal/react'
import { Web3Modal } from '@web3modal/react'

const config: ConfigOptions = {
  projectId: '2c5e2276271941a0bd3be4d842af5ec3',
  theme: 'dark',
  accentColor: 'default',
  ethereum: {
    appName: 'web3Modal'
  }
}

import {
  HashRouter, Route, Routes
} from "react-router-dom";

import PageFrame from './components/PageFrame'
import './App.css'

import Root from "./routes/root"
import Donate from "./routes/donate"

// const alchemyId = process.env.ALCHEMY_ID;

// const router = createHashRouter([
//   {
//     path: "/",
//     element: <Root />,
//     // loader: rootLoader,
//     children: [
//       {
//         path: "donate",
//         element: <Donate />,
//         // loader: donateLoader,
//       },
//     ],
//   },
// ]);

// const client = createClient({
//   autoConnect: true,
//   provider: getDefaultProvider(),
// })

function App() {

  return (
    <>
    {/* <WagmiConfig client={client}>
      <ConnectKitProvider> */}

      <HashRouter basename="/">

      <PageFrame>
        <Routes>
        <Route path="/" element={<Root />} />
        <Route path="donate" element={<Donate />} />

        </Routes>
      </PageFrame>
      </HashRouter>
    {/* </ConnectKitProvider>
    </WagmiConfig> */}
    <Web3Modal config={config} />
    </>
  )
}

export default App