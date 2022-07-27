<script lang="ts">
	import ProjectItem from '../components/projectItem.svelte';
</script>

<title>Projects</title>
<div class="grid grid-cols-12 grid-flow-row justify-items-center space-y-12">
	<h1 class="col-span-12 text-4xl w-auto font-extrabold">Projects</h1>
	<div
		class="grid justify-center grid-flow-row col-span-12 space-y-10 xl:w-4/12 lg:w-7/12 md:w-9/12 sm:w-10/12 w-10/12"
	>
		<ProjectItem
			title="VoluBind"
			type="Fabric"
			description="A client-side Minecraft mod that allows you to create keybinds to control your in-game volume."
			githubUrl="https://github.com/jadelily18/VoluBind"
			modrinthUrl="https://modrinth.com/mod/volubind"
		/>
		<ProjectItem
			title="LilyConfig"
			type="Library"
			description="Simple JSON-based configuration library, made for my Fabric mods."
			githubUrl="https://github.com/jadelily18/LilyConfig"
		/>
		<ProjectItem
			title="Lilydev"
			type="Svelte"
			description="The website you're on right now! This serves as my personal/portfolio site, and also as a learning experience for SvelteKit."
			githubUrl="https://github.com/jadelily18/Lilydev"
		/>
	</div>
</div>
