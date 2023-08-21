import { defineConfig } from '@wagmi/cli'
import { react } from '@wagmi/cli/plugins'
import * as chains from 'wagmi/chains'

import { clusterRegistryAbi } from './abis/ClusterRegistryAbi'

export default defineConfig(() => {
  return {
    out: 'src/generated.ts',
    contracts: [
      {
        abi: clusterRegistryAbi,
        name: 'ClusterRegistry',
        address: {
          [chains.canto.id]: '0x605166f88044a4DA4C1Bdd947bAcD7e24D6eaBD3',
          // [chains.sepolia.id]: '0x0f1AA32Cd3FC4e5e547eCF23C61B47F9ebc5832a',
        },
      },
    ],
    plugins: [react()],
  }
})
