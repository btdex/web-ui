<style>
	:global(body) {
		margin: 0;
		padding: 0;
		overflow: hidden;
	}
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<AppBar on:menuClick={toggleMenu}/>
<Drawer open={isDrawerOpen}>
	<slot/>
</Drawer>

<script>
	import AppBar from "../components/AppBar.svelte";
	import Drawer from "../components/Drawer.svelte";

	export let segment;
	let isDrawerOpen = false

	function toggleMenu() {
		isDrawerOpen = !isDrawerOpen
	}
</script>
