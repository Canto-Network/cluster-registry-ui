import { useState } from 'react'
import { useContractRead } from 'wagmi'

import { clusterRegistryAbi } from '../../abis/ClusterRegistryAbi'

export function GetIdByClusterName() {
  const [name, setName] = useState('')

  const clusterIdFetch = useContractRead({
    address: '0x605166f88044a4DA4C1Bdd947bAcD7e24D6eaBD3',
    abi: clusterRegistryAbi,
        functionName: 'getIdByClusterName',
        args: [name],
  });

  let cId: any = null;

  if (clusterIdFetch.error) {
    console.log(clusterIdFetch.error)
  } else {
    cId = clusterIdFetch.data;
  }

  return (
    <div>
      getIdByClusterName(name): 
      <input
        onChange={(e) => setName(e.target.value)}
        placeholder="Cluster Name"
        value={name}
      />
      <div>
      {(cId) && (
        <div> 
            Cluster Id: {!!cId && cId.toString()} <br></br>
        </div>
      )}
      </div>
    </div>
  )
}
