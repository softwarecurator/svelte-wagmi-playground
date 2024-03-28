<script>
	import ConnectButton from '$lib/components/connectButton.svelte';
	import { createAccount } from '@byteatatime/wagmi-svelte';

	const account = createAccount();

	const address = $derived(account.result.address);
</script>

<div>
	{#if account.result.isConnected}
		<h1>{address}</h1>
	{/if}
	<ConnectButton />
</div>
