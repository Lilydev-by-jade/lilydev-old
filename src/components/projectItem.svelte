<script lang="ts">
	import Modrinth from '../components/icons/modrinth.svg?url';

	type ProjectType = 'Fabric' | 'Library' | 'Svelte';

	export let title: String = 'Card title!';
	export let description: String = 'If a dog chews shoes whose shoes does he choose?';
	export let githubUrl: any = null;
	export let modrinthUrl: any = null;

	export let type: ProjectType;
</script>

<div class="relative group">
	<!-- Card Background Glow -->
	<div
		class="overflow-visible absolute inset-0 card w-xl bg-gradient-to-br from-pink-600 to-purple-300 blur-sm group-hover:blur-md opacity-75 group-hover:opacity-100 transition duration-200"
	/>
	<!-- Card Base -->
	<div
		class="card w-xl bg-base-100 shadow-xl overflow-visible outline outline-pink-200 hover:outline-pink-500 transition duration-200"
	>
		<div class="card-body pb-5">
			<div class="card-title flex justify-between">
				<h2 class="card-title font-bold">{title}</h2>
				{#if type == 'Fabric'}
					<div class="flex items-center space-x-1.5">
						<div class="w-2 h-2 mt-1 bg-yellow-500 rounded-full" />
						<p class="text-xs italic">Fabric Mod</p>
					</div>
				{:else if type == 'Library'}
					<div class="flex items-center space-x-1.5">
						<div class="w-2 h-2 mt-1 bg-red-700 rounded-full" />
						<p class="text-xs italic">Library</p>
					</div>
				{:else if type == 'Svelte'}
					<div class="flex items-center space-x-1.5">
						<div class="w-2 h-2 mt-1 bg-orange-500 rounded-full" />
						<p class="text-xs italic">Svelte App</p>
					</div>
				{/if}
			</div>

			<p>{description}</p>
			<div class="card-actions justify-end items-center">
				{#if githubUrl != null}
					<a href={githubUrl}>
						<div class="tooltip" data-tip="GitHub Source">
							<i class="fa-brands fa-github text-white text-3xl" />
						</div>
					</a>
				{/if}
				{#if modrinthUrl != null}
					<a href={modrinthUrl}>
						<div class="tooltip flex items-center" data-tip="Modrinth">
							<img src={Modrinth} width="30" alt="modrinth logo icon" />
						</div>
					</a>
				{/if}
			</div>
		</div>
	</div>
</div>
