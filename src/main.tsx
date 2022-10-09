import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// import type { ConfigOptions } from '@web3modal/react'
// import { Web3Modal } from '@web3modal/react'

// const config: ConfigOptions = {
//   projectId: '2c5e2276271941a0bd3be4d842af5ec3',
//   theme: 'dark',
//   accentColor: 'default',
//   ethereum: {
//     appName: 'web3Modal'
//   }
// }

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    {/* <Web3Modal config={config} /> */}
  </React.StrictMode>
)
