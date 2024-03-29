import { createWagmiConfig, http } from '@byteatatime/wagmi-svelte';
import { mainnet, optimism } from '@byteatatime/wagmi-svelte/chains';
import { reconnect } from '@wagmi/core';
import { createWeb3Modal, emailConnector } from '@web3modal/wagmi';
import { PUBLIC_WALLETCONNECT_ID } from '$env/static/public';

const projectId = PUBLIC_WALLETCONNECT_ID;

export const config = createWagmiConfig({
	chains: [mainnet, optimism],
	transports: {
		[mainnet.id]: http(),
		[optimism.id]: http()
	},
	connectors: [emailConnector({ options: { projectId } })]
});


export const modal = createWeb3Modal({
	wagmiConfig: config,
	projectId,
	enableOnramp: true
});

await reconnect(config);
