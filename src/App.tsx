import { WagmiConfig, createClient } from 'wagmi'
import { getDefaultProvider } from 'ethers'

import {
  HashRouter, Route, Routes
} from "react-router-dom";

import PageFrame from './components/PageFrame'
import './App.css'

import Root from "./routes/root"
import Donate from "./routes/donate"

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

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
})

function App() {

  return (
    <WagmiConfig client={client}>
      <HashRouter basename="/">

      <PageFrame>
        <Routes>
        <Route path="/" element={<Root />} />
        <Route path="donate" element={<Donate />} />

        </Routes>
      </PageFrame>
      </HashRouter>
    </WagmiConfig>
  )
}

export default App