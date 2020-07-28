<Drawer variant="dismissible" bind:open={open}>
    <Header>
        <Title>Super Drawer</Title>
        <Subtitle>It's the best drawer.</Subtitle>
    </Header>
    <Content>
        <List>
            <Item href="javascript:void(0)" on:click={() => setActive('Gray Kittens')} activated={active === 'Gray Kittens'}>
                <Text>Gray Kittens</Text>
            </Item>
            <Item href="javascript:void(0)" on:click={() => setActive('A Space Rocket')} activated={active === 'A Space Rocket'}>
                <Text>A Space Rocket</Text>
            </Item>
            <Item href="javascript:void(0)" on:click={() => setActive('100 Pounds of Gravel')} activated={active === '100 Pounds of Gravel'}>
                <Text>100 Pounds of Gravel</Text>
            </Item>
            <Item href="javascript:void(0)" on:click={() => setActive('All of the Shrimp')} activated={active === 'All of the Shrimp'}>
                <Text>All of the Shrimp</Text>
            </Item>
            <Item href="javascript:void(0)" on:click={() => setActive('A Planet with a Mall')} activated={active === 'A Planet with a Mall'}>
                <Text>A Planet with a Mall</Text>
            </Item>
        </List>
    </Content>
</Drawer>

<AppContent class="app-content">
    <main class="main-content">
        <slot/>
    </main>
</AppContent>

<script>
    import Drawer, {AppContent, Content, Header, Title, Subtitle, Scrim} from '@smui/drawer'
    import List, {Item, Text, Graphic, Separator, Subheader} from '@smui/list'

    export let open = false
    let active

    function setActive(value) {
        active = value;
    }
</script>
