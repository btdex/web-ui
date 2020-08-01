<script>
    import TopAppBar, {Row, Section, Title} from '@smui/top-app-bar';
    import IconButton from '@smui/icon-button';
    import {createEventDispatcher} from 'svelte';
    import LanguageMenu from "./LanguageMenu.svelte";
    import {t} from "svelte-i18n"

    let isLanguageMenuOpen = false
    const dispatch = createEventDispatcher();

    function toggleDrawer() {
        dispatch('menuClick');
    }

    function toggleLanguageMenu() {
        isLanguageMenuOpen = !isLanguageMenuOpen
    }

</script>


<TopAppBar variant="static" dense color={'secondary'}>
    <Row>
        <Section>
            <IconButton class="material-icons" on:click={toggleDrawer}>menu</IconButton>
            <Title>BTDEX Viewer</Title>
        </Section>
        <Section align="end" toolbar>
            <IconButton class="material-icons" aria-label="Languages" on:click={toggleLanguageMenu}>
                <div class="language-icon">{$t('app.selectedLanguage')}</div>
                <LanguageMenu isOpen={isLanguageMenuOpen}/>
            </IconButton>
        </Section>
    </Row>
</TopAppBar>


<style>
    .language-icon {
        top: -4px;
        left: -2px;
        position: relative;
    }
</style>
