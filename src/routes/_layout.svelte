<script>
	import LeftSideMenu from "../components/LeftSideMenu.svelte";
	import AppBar from "../components/AppBar.svelte";

	export let segment;
	let isMenuOpen = false

	function toggleMenu() {
		isMenuOpen = !isMenuOpen
	}
</script>


<AppBar on:menuClick={toggleMenu}/>
<LeftSideMenu open={isMenuOpen}>
	<slot/>
</LeftSideMenu>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		overflow: hidden;
	}
</style>

