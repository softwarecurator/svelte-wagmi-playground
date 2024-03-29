<script lang="ts">
	import { createAccount, createEnsName, createEnsAvatar } from '@byteatatime/wagmi-svelte';
	import { modal } from '$lib/runes/wagmi.svelte';
	import AccountAvatar from './avatar.svelte';

	const account = createAccount();

	const address = $derived(account.result.address);

	const ensName = createEnsName({ address });

	const name = $derived(ensName.result.data);
</script>

{#if account.result.isConnected}
	<button
		onclick={() => modal.open()}
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
	>
		<div class="flex items-center">
			<AccountAvatar {name} />
			<span class="ml-2">{name ?? address}</span>
		</div>
	</button>
{:else if account.result.isConnecting}
	<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
		<div class="flex items-center">
			<span class="ml-2">Connecting...</span>
		</div>
	</button>
{:else}
	<button
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		onclick={() => modal.open()}
	>
		<div class="flex items-center">
			<span class="ml-2">Connect</span>
		</div>
	</button>
{/if}
