<script lang="ts">
	import { createEnsAvatar } from '@byteatatime/wagmi-svelte';

	const { name } = $props();

	const ensAvatar = createEnsAvatar({ name });

	const avatar = $derived(ensAvatar.result.data);
</script>

{#if avatar}
	<img src={avatar} alt={name} class="avatar" />
{:else}
	<img src="https://avatars.dicebear.com/api/avataaars/{name}.svg" alt={name} class="avatar" />
{/if}

<style lang="postcss">
	.avatar {
		@apply rounded-full w-8 h-8 object-cover;
	}
</style>
