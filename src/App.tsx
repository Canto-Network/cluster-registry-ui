import { useAccount } from 'wagmi'

import { Account } from './components/Account'
import { Connect } from './components/Connect'
import { RegisterCluster } from './components/RegisterCluster'
import { GetHighestClusterId } from './components/GetHighestClusterId'
import { GetIdByClusterName } from './components/GetIdByClusterName'
import { GetClusterById } from './components/GetClusterById'
import { GetReceivingAddress } from './components/GetReceivingAddress'
import { ChangeReceivingAddress } from './components/ChangeReceivingAddress'

import { NetworkSwitcher } from './components/NetworkSwitcher'

export function App() {
  const { isConnected } = useAccount()

  return (
    <>
      <h1>Canto Cluster Registry</h1>
      <h2>Contract Address: 0x605166f88044a4DA4C1Bdd947bAcD7e24D6eaBD3</h2>

      <Connect />

      {isConnected && (
        <>
          <Account />
          <hr />
          <p>READ FUNCTIONS</p>
          <hr />
          <hr />
          <GetHighestClusterId />
          <hr />
          <GetIdByClusterName />
          <hr />
          <GetClusterById />
          <hr />
          <GetReceivingAddress />
          <hr />
          <hr />
          WRITE FUNCTIONS
          <hr />
          <hr />
          <RegisterCluster />
          <hr />
          <ChangeReceivingAddress />
          <hr />
          <NetworkSwitcher />
        </>
      )}
    </>
  )
}
