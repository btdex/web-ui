<style>
    * :global(.app-content) {
        flex: auto;
        overflow: auto;
        position: relative;
        flex-grow: 1;
    }
</style>

<Drawer variant="dismissible" bind:open={open}>
    <Header>
        <Title>Super Drawer</Title>
        <Subtitle>It's the best drawer.</Subtitle>
    </Header>
    <Content>
        <List>
            <Item href="." on:click={setActive(Home)} activated={active === Home}>
                <Text>Home</Text>
            </Item>
            <Item href="." on:click={setActive(Trades)} activated={active === Trades}>
                <Text>Trades</Text>
            </Item>
            <Item href="." on:click={setActive(Markets)} activated={active === Markets}>
                <Text>Markets</Text>
            </Item>
            <Item href="about" on:click={setActive(About)} activated={active === About}>
                <Text>About</Text>
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
    import {RouteHome,RouteTrades,RouteMarkets, RouteAbout} from "../utils/routes";

    export let open = false
    let active

    const About = RouteAbout()
    const Home = RouteHome()
    const Markets = RouteMarkets()
    const Trades = RouteTrades()

    function setActive(value) {
      return () => {
        active = value;
      }
    }
</script>
