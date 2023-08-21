import { useState } from 'react'
import { useWaitForTransaction } from 'wagmi'

import {
  usePrepareClusterRegistryRegister,
  useClusterRegistryRegister,
} from '../generated'

export function RegisterCluster() {
  const [name, setName] = useState('')

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareClusterRegistryRegister({
    args: name ? [name] : undefined,
  })
  const { data, error, isError, write } = useClusterRegistryRegister(config)

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })

  return (
    <div>
        register(name): 
      <input
        onChange={(e) => setName(e.target.value)}
        placeholder="Cluster Name"
        value={name}
      />
      <button disabled={!write || isLoading} onClick={() => write?.()}>
        {isLoading ? 'Registering...' : 'Register'}
      </button>
      {isSuccess && (
        <div>
          Successfully Registered your Cluster
          <div>
            <a href={`https://tuber.build/tx/${data?.hash}`}>Tuber</a>
          </div>
        </div>
      )}
      {name && (isPrepareError || isError) && (
        <div>Error: {(prepareError || error)?.message}</div>
      )}
    </div>
  )
}
