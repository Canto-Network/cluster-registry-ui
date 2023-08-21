import { useState } from 'react'
import { useContractRead } from 'wagmi'

import { clusterRegistryAbi } from '../../abis/ClusterRegistryAbi'

export function GetClusterById() {
  const [id, setId] = useState('')

  const clusterIdFetch = useContractRead({
    address: '0x605166f88044a4DA4C1Bdd947bAcD7e24D6eaBD3',
    abi: clusterRegistryAbi,
        functionName: 'getClusterByID',
        args: [BigInt(id)],
  });

  let cName: any = null;

  if (clusterIdFetch.error) {
    console.log(clusterIdFetch.error)
  } else {
    cName = clusterIdFetch.data;
  }

  return (
    <div>
      getClusterByID(id): 
      <input
        onChange={(e) => setId(e.target.value)}
        placeholder="Cluster Id"
        value={id}
      />
      <div>
      {(cName) && (
        <div> 
            Cluster Name: {!!cName && cName.toString()} <br></br>
        </div>
      )}
      </div>
    </div>
  )
}
