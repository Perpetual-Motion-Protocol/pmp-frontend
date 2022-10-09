import { WagmiConfig, createClient, chain } from 'wagmi'
import { ConnectKitProvider, ConnectKitButton, getDefaultClient } from "connectkit";
// import { getDefaultProvider } from 'ethers'


import {
  HashRouter, Route, Routes
} from "react-router-dom";

import PageFrame from './components/PageFrame'
import './App.css'

import Root from "./routes/root"
import Donate from "./routes/donate"

const alchemyId = 'TBAzEGdBPWP1p00shVKcUXPAX8xJtwEQ';

const client = createClient(
  getDefaultClient({
    appName: "pmp-mumbai",
    // alchemyId,
    chains: [chain.polygonMumbai],
    // chains: [chain.polygonMumbai, chain.mainnet, chain.polygon, chain.optimism, ],

  }),
);

function App() {

  return (
    <>
    <WagmiConfig client={client}>
      <ConnectKitProvider theme="auto" mode="light">

      <HashRouter basename="/">

      <PageFrame>
        <Routes>
        <Route path="/" element={<Root />} />
        <Route path="donate" element={<Donate />} />

        </Routes>
      </PageFrame>
      </HashRouter>
    </ConnectKitProvider>
    </WagmiConfig>
    </>
  )
}

export default App