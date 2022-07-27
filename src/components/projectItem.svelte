<script lang="ts">
	import Modrinth from '../components/icons/modrinth.svg?url';

	export let title: String = 'Card title!';
	export let description: String = 'If a dog chews shoes whose shoes does he choose?';
	export let githubUrl: any = null;
	export let modrinthUrl: any = null;
</script>

<div class="relative group">
	<!-- Card Background Glow -->
	<div
		class="absolute inset-0 card w-96 bg-gradient-to-br from-pink-600 to-pink-400 blur-md opacity-80 group-hover:opacity-100 transition duration-200"
	/>
	<!-- Card Base -->
	<div class="card w-96 bg-base-100 shadow-xl">
		<div class="card-body pb-5">
			<h2 class="card-title">{title}</h2>

			<!-- TODO: add project type across from card title. (maybe specify mod-loader?) -->
			<p>{description}</p>
			<div class="card-actions justify-end items-center">
				{#if githubUrl != null}
					<a href={githubUrl}>
						<div class="tooltip" data-tip="GitHub">
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
