// Generated by @wagmi/cli@1.3.0 on 8/18/2023 at 6:27:42 PM
import {
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  Address,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
  useContractEvent,
  UseContractEventConfig,
} from 'wagmi'
import {
  ReadContractResult,
  WriteContractMode,
  PrepareWriteContractResult,
} from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ClusterRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Canto Canto Evm Explorer Blockscout__](https://evm.explorer.canto.io/address/0x605166f88044a4DA4C1Bdd947bAcD7e24D6eaBD3)
 */
export const clusterRegistryABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'clusterId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'receivingAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'ClusterReceivingAddressUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'clusterId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'clusterName',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'receivingAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'ClusterRegistered',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'newReceivingAddress', internalType: 'address', type: 'address' },
    ],
    name: 'changeReceivingAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'getClusterByID',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getHighestClusterID',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'getIdByClusterName',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'getReceivingAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'register',
    outputs: [],
  },
] as const

/**
 * [__View Contract on Canto Canto Evm Explorer Blockscout__](https://evm.explorer.canto.io/address/0x605166f88044a4DA4C1Bdd947bAcD7e24D6eaBD3)
 */
export const clusterRegistryAddress = {
  7700: '0x605166f88044a4DA4C1Bdd947bAcD7e24D6eaBD3',
} as const

/**
 * [__View Contract on Canto Canto Evm Explorer Blockscout__](https://evm.explorer.canto.io/address/0x605166f88044a4DA4C1Bdd947bAcD7e24D6eaBD3)
 */
export const clusterRegistryConfig = {
  address: clusterRegistryAddress,
  abi: clusterRegistryABI,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link clusterRegistryABI}__.
 *
 * [__View Contract on Canto Canto Evm Explorer Blockscout__](https://evm.explorer.canto.io/address/0x605166f88044a4DA4C1Bdd947bAcD7e24D6eaBD3)
 */
export function useClusterRegistryRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof clusterRegistryABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof clusterRegistryABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address'
  > & { chainId?: keyof typeof clusterRegistryAddress } = {} as any,
) {
  return useContractRead({
    abi: clusterRegistryABI,
    address: clusterRegistryAddress[7700],
    ...config,
  } as UseContractReadConfig<
    typeof clusterRegistryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link clusterRegistryABI}__ and `functionName` set to `"getClusterByID"`.
 *
 * [__View Contract on Canto Canto Evm Explorer Blockscout__](https://evm.explorer.canto.io/address/0x605166f88044a4DA4C1Bdd947bAcD7e24D6eaBD3)
 */
export function useClusterRegistryGetClusterById<
  TFunctionName extends 'getClusterByID',
  TSelectData = ReadContractResult<typeof clusterRegistryABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof clusterRegistryABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof clusterRegistryAddress } = {} as any,
) {
  return useContractRead({
    abi: clusterRegistryABI,
    address: clusterRegistryAddress[7700],
    functionName: 'getClusterByID',
    ...config,
  } as UseContractReadConfig<
    typeof clusterRegistryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link clusterRegistryABI}__ and `functionName` set to `"getHighestClusterID"`.
 *
 * [__View Contract on Canto Canto Evm Explorer Blockscout__](https://evm.explorer.canto.io/address/0x605166f88044a4DA4C1Bdd947bAcD7e24D6eaBD3)
 */
export function useClusterRegistryGetHighestClusterId<
  TFunctionName extends 'getHighestClusterID',
  TSelectData = ReadContractResult<typeof clusterRegistryABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof clusterRegistryABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof clusterRegistryAddress } = {} as any,
) {
  return useContractRead({
    abi: clusterRegistryABI,
    address: clusterRegistryAddress[7700],
    functionName: 'getHighestClusterID',
    ...config,
  } as UseContractReadConfig<
    typeof clusterRegistryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link clusterRegistryABI}__ and `functionName` set to `"getIdByClusterName"`.
 *
 * [__View Contract on Canto Canto Evm Explorer Blockscout__](https://evm.explorer.canto.io/address/0x605166f88044a4DA4C1Bdd947bAcD7e24D6eaBD3)
 */
export function useClusterRegistryGetIdByClusterName<
  TFunctionName extends 'getIdByClusterName',
  TSelectData = ReadContractResult<typeof clusterRegistryABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof clusterRegistryABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof clusterRegistryAddress } = {} as any,
) {
  return useContractRead({
    abi: clusterRegistryABI,
    address: clusterRegistryAddress[7700],
    functionName: 'getIdByClusterName',
    ...config,
  } as UseContractReadConfig<
    typeof clusterRegistryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link clusterRegistryABI}__ and `functionName` set to `"getReceivingAddress"`.
 *
 * [__View Contract on Canto Canto Evm Explorer Blockscout__](https://evm.explorer.canto.io/address/0x605166f88044a4DA4C1Bdd947bAcD7e24D6eaBD3)
 */
export function useClusterRegistryGetReceivingAddress<
  TFunctionName extends 'getReceivingAddress',
  TSelectData = ReadContractResult<typeof clusterRegistryABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof clusterRegistryABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof clusterRegistryAddress } = {} as any,
) {
  return useContractRead({
    abi: clusterRegistryABI,
    address: clusterRegistryAddress[7700],
    functionName: 'getReceivingAddress',
    ...config,
  } as UseContractReadConfig<
    typeof clusterRegistryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link clusterRegistryABI}__.
 *
 * [__View Contract on Canto Canto Evm Explorer Blockscout__](https://evm.explorer.canto.io/address/0x605166f88044a4DA4C1Bdd947bAcD7e24D6eaBD3)
 */
export function useClusterRegistryWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof clusterRegistryAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof clusterRegistryABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<
        typeof clusterRegistryABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  return useContractWrite<typeof clusterRegistryABI, TFunctionName, TMode>({
    abi: clusterRegistryABI,
    address: clusterRegistryAddress[7700],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link clusterRegistryABI}__ and `functionName` set to `"changeReceivingAddress"`.
 *
 * [__View Contract on Canto Canto Evm Explorer Blockscout__](https://evm.explorer.canto.io/address/0x605166f88044a4DA4C1Bdd947bAcD7e24D6eaBD3)
 */
export function useClusterRegistryChangeReceivingAddress<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof clusterRegistryAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof clusterRegistryABI,
          'changeReceivingAddress'
        >['request']['abi'],
        'changeReceivingAddress',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'changeReceivingAddress'
      }
    : UseContractWriteConfig<
        typeof clusterRegistryABI,
        'changeReceivingAddress',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'changeReceivingAddress'
      } = {} as any,
) {
  return useContractWrite<
    typeof clusterRegistryABI,
    'changeReceivingAddress',
    TMode
  >({
    abi: clusterRegistryABI,
    address: clusterRegistryAddress[7700],
    functionName: 'changeReceivingAddress',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link clusterRegistryABI}__ and `functionName` set to `"register"`.
 *
 * [__View Contract on Canto Canto Evm Explorer Blockscout__](https://evm.explorer.canto.io/address/0x605166f88044a4DA4C1Bdd947bAcD7e24D6eaBD3)
 */
export function useClusterRegistryRegister<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof clusterRegistryAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof clusterRegistryABI,
          'register'
        >['request']['abi'],
        'register',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'register' }
    : UseContractWriteConfig<typeof clusterRegistryABI, 'register', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'register'
      } = {} as any,
) {
  return useContractWrite<typeof clusterRegistryABI, 'register', TMode>({
    abi: clusterRegistryABI,
    address: clusterRegistryAddress[7700],
    functionName: 'register',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link clusterRegistryABI}__.
 *
 * [__View Contract on Canto Canto Evm Explorer Blockscout__](https://evm.explorer.canto.io/address/0x605166f88044a4DA4C1Bdd947bAcD7e24D6eaBD3)
 */
export function usePrepareClusterRegistryWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof clusterRegistryABI, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof clusterRegistryAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: clusterRegistryABI,
    address: clusterRegistryAddress[7700],
    ...config,
  } as UsePrepareContractWriteConfig<typeof clusterRegistryABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link clusterRegistryABI}__ and `functionName` set to `"changeReceivingAddress"`.
 *
 * [__View Contract on Canto Canto Evm Explorer Blockscout__](https://evm.explorer.canto.io/address/0x605166f88044a4DA4C1Bdd947bAcD7e24D6eaBD3)
 */
export function usePrepareClusterRegistryChangeReceivingAddress(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof clusterRegistryABI,
      'changeReceivingAddress'
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof clusterRegistryAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: clusterRegistryABI,
    address: clusterRegistryAddress[7700],
    functionName: 'changeReceivingAddress',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof clusterRegistryABI,
    'changeReceivingAddress'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link clusterRegistryABI}__ and `functionName` set to `"register"`.
 *
 * [__View Contract on Canto Canto Evm Explorer Blockscout__](https://evm.explorer.canto.io/address/0x605166f88044a4DA4C1Bdd947bAcD7e24D6eaBD3)
 */
export function usePrepareClusterRegistryRegister(
  config: Omit<
    UsePrepareContractWriteConfig<typeof clusterRegistryABI, 'register'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof clusterRegistryAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: clusterRegistryABI,
    address: clusterRegistryAddress[7700],
    functionName: 'register',
    ...config,
  } as UsePrepareContractWriteConfig<typeof clusterRegistryABI, 'register'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link clusterRegistryABI}__.
 *
 * [__View Contract on Canto Canto Evm Explorer Blockscout__](https://evm.explorer.canto.io/address/0x605166f88044a4DA4C1Bdd947bAcD7e24D6eaBD3)
 */
export function useClusterRegistryEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof clusterRegistryABI, TEventName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof clusterRegistryAddress } = {} as any,
) {
  return useContractEvent({
    abi: clusterRegistryABI,
    address: clusterRegistryAddress[7700],
    ...config,
  } as UseContractEventConfig<typeof clusterRegistryABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link clusterRegistryABI}__ and `eventName` set to `"ClusterReceivingAddressUpdated"`.
 *
 * [__View Contract on Canto Canto Evm Explorer Blockscout__](https://evm.explorer.canto.io/address/0x605166f88044a4DA4C1Bdd947bAcD7e24D6eaBD3)
 */
export function useClusterRegistryClusterReceivingAddressUpdatedEvent(
  config: Omit<
    UseContractEventConfig<
      typeof clusterRegistryABI,
      'ClusterReceivingAddressUpdated'
    >,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof clusterRegistryAddress } = {} as any,
) {
  return useContractEvent({
    abi: clusterRegistryABI,
    address: clusterRegistryAddress[7700],
    eventName: 'ClusterReceivingAddressUpdated',
    ...config,
  } as UseContractEventConfig<
    typeof clusterRegistryABI,
    'ClusterReceivingAddressUpdated'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link clusterRegistryABI}__ and `eventName` set to `"ClusterRegistered"`.
 *
 * [__View Contract on Canto Canto Evm Explorer Blockscout__](https://evm.explorer.canto.io/address/0x605166f88044a4DA4C1Bdd947bAcD7e24D6eaBD3)
 */
export function useClusterRegistryClusterRegisteredEvent(
  config: Omit<
    UseContractEventConfig<typeof clusterRegistryABI, 'ClusterRegistered'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof clusterRegistryAddress } = {} as any,
) {
  return useContractEvent({
    abi: clusterRegistryABI,
    address: clusterRegistryAddress[7700],
    eventName: 'ClusterRegistered',
    ...config,
  } as UseContractEventConfig<typeof clusterRegistryABI, 'ClusterRegistered'>)
}
