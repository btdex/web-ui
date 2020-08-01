<script context="module">
    import {isLoading, waitLocale} from 'svelte-i18n';

    export async function preload() {
        return waitLocale();
    }
</script>

<script>
    import LeftSideMenu from "../components/LeftSideMenu.svelte";
    import AppBar from "../components/AppBar.svelte";

    export let segment;
    let isMenuOpen = false

    function toggleMenu() {
        isMenuOpen = !isMenuOpen
    }
</script>

{#if !$isLoading}
    <div>
        <AppBar on:menuClick={toggleMenu}/>
        <LeftSideMenu open={isMenuOpen}>
            <slot/>
        </LeftSideMenu>
    </div>
{/if}

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
</style>

