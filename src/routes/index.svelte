<script lang="ts">
	import Modrinth from '$lib/icons/modrinth.svelte';

	let descriptionText: String =
		"Hi! I'm Jade, a Minecraft mod developer and (maybe soon) game developer. You can find all of my other platforms from the buttons on this site, and my projects from the button below!";
</script>

<title>Lilydev</title>
<div class="grid justify-items-center mt-36">
	<div class="grid space-y-3 self-center w-96 ">
		<div class="grid grid-cols-10">
			<!-- Avatar -->
			<div class="h-16 col-span-2 avatar">
				<div class="mask mask-squircle">
					<img src="https://avatars.githubusercontent.com/u/74706690" alt="github avatar" />
				</div>
			</div>
			<!-- Artboard -->
			<div
				class="flex artboard rounded-box p-2 h-min col-span-8 self-center items-center justify-between"
			>
				<!-- Name/Pronouns -->
				<div class="grid grid-cols-12">
					<h1 class="col-span-4 text-2xl m-0.5 text-slate-200 font-semibold">jade</h1>
					<p class="col-span-8 self-center text-xs font-bold pl-1 pt-1 text-slate-500">(she/her)</p>
				</div>
				<!-- Socials -->
				<div class="flex self-center space-x-2">
					<a href="https://github.com/jadelily18">
						<div class="tooltip" data-tip="GitHub">
							<i class="fa-brands fa-github text-white text-3xl" />
						</div>
					</a>
					<a href="https://modrinth.com/user/jadelily18" class="flex items-center">
						<div class="tooltip flex items-center" data-tip="Modrinth">
							<Modrinth iconWidth="30" />
						</div>
					</a>
					<a href="https://discord.gg/TZAt4PA5av">
						<div class="tooltip" data-tip="Discord">
							<i class="fa-brands fa-discord text-white text-3xl" />
						</div>
					</a>
				</div>
			</div>
		</div>
		<!-- Artboard -->
		<div class="flex artboard rounded-box p-3">
			<p class="text-1xl">
				{descriptionText}
			</p>
		</div>

		<div class="flex w-96 justify-between space-x-2">
			<a class="btn flex-grow" role="button" href="/projects"> My Projects! </a>
			<a
				class="btn btn-primary btn-outline flex-grow"
				role="button"
				href="https://ko-fi.com/jadelily"
			>
				Support Me!
			</a>
		</div>
	</div>
</div>
