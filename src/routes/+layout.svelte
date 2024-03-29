<script lang="ts">
	import '../app.css';
	import { WagmiProvider } from '@byteatatime/wagmi-svelte';
	import { config } from '$lib/runes/wagmi.svelte';
	import ConnectButton from '$lib/components/connectButton.svelte';

	const { children } = $props();
</script>

<WagmiProvider {config}>
	<div class="absolute top-0 left-0 w-full h-16 bg-black flex items-center justify-between px-4">
		<h1 class="text-white text-2xl font-bold">WAGMI</h1>
		<ConnectButton />
	</div>
	<main class="relative flex h-dvh mt-16">
		{@render children()}
	</main>
</WagmiProvider>
