<TopAppBar variant="static" color={'secondary'}>
    <Row>
        <Section>
            <IconButton class="material-icons" on:click={toggleDrawer}>menu</IconButton>
            <Title>Flex Static</Title>
        </Section>
        <Section align="end" toolbar>
            <IconButton class="material-icons" aria-label="Download">file_download</IconButton>
            <IconButton class="material-icons" aria-label="Print this page">print</IconButton>
            <IconButton class="material-icons" aria-label="Bookmark this page">bookmark</IconButton>
        </Section>
    </Row>
</TopAppBar>

<script>
    import TopAppBar, {Row, Section, Title} from '@smui/top-app-bar';
    import IconButton from '@smui/icon-button';
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();

    function toggleDrawer() {
        dispatch('menuClick');
    }
</script>
