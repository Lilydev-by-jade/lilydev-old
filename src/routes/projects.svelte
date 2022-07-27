<script lang="ts">
	import ProjectItem from '../components/projectItem.svelte';
	import Modrinth from '../components/icons/modrinth.svg?url';
</script>

<div class="grid grid-cols-12 grid-flow-row justify-items-center space-y-12">
	<h1 class="col-span-12 text-4xl w-auto">Projects</h1>
	<div
		class="flex justify-center col-span-12 space-y-6 xl:w-4/12 lg:w-7/12 md:w-9/12 sm:w-10/12 w-10/12"
	>
		<ProjectItem
			title="VoluBind"
			description="A client-side Minecraft mod that allows you to create keybinds to control your in-game volume."
			githubUrl="https://github.com/jadelily18/VoluBind"
		/>
	</div>
</div>
