import { useState } from 'react'
import { useWaitForTransaction } from 'wagmi'

import {
  usePrepareClusterRegistryChangeReceivingAddress,
  useClusterRegistryChangeReceivingAddress,
} from '../generated'

export function ChangeReceivingAddress() {
  const [address, setAddress] = useState('')
  const [id, setId] = useState('')

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareClusterRegistryChangeReceivingAddress({
    args: id && address ? [BigInt(id), `0x${address.substr(2)}`] : [BigInt(-1), '0x605166f88044a4DA4C1Bdd947bAcD7e24D6eaBD3'],
  })
  const { data, error, isError, write } = useClusterRegistryChangeReceivingAddress(config)

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })

  return (
    <div>
        changeReceivingAddress(id, newReceivingAddress): 
      <input
        onChange={(e) => setId(e.target.value)}
        placeholder="Cluster Id"
        value={id}
      />
      <input
        onChange={(e) => setAddress(e.target.value)}
        placeholder="New Receiving Address"
        value={address}
      />
      <button disabled={!write || isLoading} onClick={() => write?.()}>
        {isLoading ? 'Changing...' : 'Change'}
      </button>
      {isSuccess && (
        <div>
          Successfully Changed the Receiving Address
          <div>
            <a href={`https://tuber.build/tx/${data?.hash}`}>Tuber</a>
          </div>
        </div>
      )}
      {id && (isPrepareError || isError) && (
        <div>Error: {(prepareError || error)?.message}</div>
      )}
    </div>
  )
}
