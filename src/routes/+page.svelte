<script lang="ts">
	import { createAccount } from '@byteatatime/wagmi-svelte';

	const account = createAccount();

	const address = $derived(account.result.address);
</script>

<div class="text-white flex flex-col w-full items-center justify-center">
	{#if account.result.isConnected}
		<p>Account address</p>
		<h1 class="text-2xl font-bold">{address}</h1>
	{/if}
</div>
