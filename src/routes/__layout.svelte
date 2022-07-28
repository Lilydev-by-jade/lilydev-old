<script>
	import Navbar from '../components/navbar.svelte';
	import Footer from '../components/footer.svelte';
	import '../app.css';
</script>

<div class="flex flex-col h-screen justify-between">
	<Navbar />

	<div class="mb-auto">
		<slot />
	</div>

	<Footer />
</div>
