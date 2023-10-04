import { defineChain } from '../../utils/chain.js'

export const astar = /*#__PURE__*/ defineChain({
    id: 592,
    name: 'Astar',
    network: 'astar',
    nativeCurrency: {
        decimals: 18,
        name: 'ASTR',
        symbol: 'ASTR',
    },
    rpcUrls: {
        public: {
            http: ['https://evm.astar.network'],
            webSocket: ['wss://rpc.astar.network'],
        },
        default: {
            http: ['https://evm.astar.network'],
            webSocket: ['wss://rpc.astar.network'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://blockscout.com/astar',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 761794,
        },
    },
    testnet: false,
})
