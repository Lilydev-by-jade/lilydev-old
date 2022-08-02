<script>
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import '../app.css';
</script>

<div class="flex flex-col h-screen justify-between">
	<Navbar />

	<div class="mb-auto">
		<slot />
	</div>

	<Footer />
</div>
