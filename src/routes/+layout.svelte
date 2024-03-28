<script lang="ts">
	import { WagmiProvider } from '@byteatatime/wagmi-svelte';
	import { config } from '$lib/runes/wagmi.svelte';

	const { children } = $props();
</script>

<WagmiProvider {config}>
	{@render children()}
</WagmiProvider>
