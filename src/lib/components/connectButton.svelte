<script lang="ts">
	import { createAccount, createEnsName } from '@byteatatime/wagmi-svelte';
	import { modal } from '$lib/runes/wagmi.svelte';

	const account = createAccount();

	const address = $derived(account.result.address);

	const ensData = createEnsName({ address });
	const name = $derived(ensData.result.data);
</script>

<button
	class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
	onclick={() => modal.open()}
>
	<div class="flex items-center">
		{#if account.result.isConnected}
			<p class="ml-2">{name ?? address}</p>
		{:else}
			<p class="ml-2">Connect</p>
		{/if}
	</div>
</button>
