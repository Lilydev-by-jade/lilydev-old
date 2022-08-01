<script lang="ts">
	import LilydevLogo from '$lib/branding/lilydevLogo.svelte';
</script>

<div class="navbar bg-base-100 px-8">
	<div class="flex-1">
		<a class="btn btn-ghost normal-case space-x-1" href="/">
			<LilydevLogo svgWidth="34" svgFill="#B3CCF5" />
			<h1 class="text-2xl font-light">LILYDEV</h1>
		</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal p-0">
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/projects">Projects</a>
			</li>
		</ul>
	</div>
</div>
