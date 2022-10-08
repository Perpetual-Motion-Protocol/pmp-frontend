import { WagmiConfig, createClient } from 'wagmi'
import { getDefaultProvider } from 'ethers'

import WagmiTest from './components/WagmiTest'
import './App.css'


const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
})

function App() {

  return (
    <WagmiConfig client={client}>
      <div className="App">
        <WagmiTest />
      </div>
    </WagmiConfig>
  )
}

export default App