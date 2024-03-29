<script lang="ts">
	import '../app.css';
	import { WagmiProvider } from '@byteatatime/wagmi-svelte';
	import { config } from '$lib/runes/wagmi.svelte';

	const { children } = $props();
</script>

<WagmiProvider {config}>
	<main class="relative flex h-dvh">
		{@render children()}
	</main>
</WagmiProvider>
