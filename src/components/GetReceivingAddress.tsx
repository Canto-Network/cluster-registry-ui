import { useState } from 'react'
import { useContractRead } from 'wagmi'

import { clusterRegistryAbi } from '../../abis/ClusterRegistryAbi'

export function GetReceivingAddress() {
  const [id, setId] = useState('')

  const clusterIdFetch = useContractRead({
    address: '0x605166f88044a4DA4C1Bdd947bAcD7e24D6eaBD3',
    abi: clusterRegistryAbi,
        functionName: 'getReceivingAddress',
        args: [BigInt(id)],
  });

  let recAddress: any = null;

  if (clusterIdFetch.error) {
    console.log(clusterIdFetch.error)
  } else {
    recAddress = clusterIdFetch.data;
  }

  return (
    <div>
      getReceivingAddress(id): 
      <input
        onChange={(e) => setId(e.target.value)}
        placeholder="Cluster Id"
        value={id}
      />
      <div>
      {(recAddress) && (
        <div> 
            Receiving Address: {recAddress} <br></br>
        </div>
      )}
      </div>
    </div>
  )
}
