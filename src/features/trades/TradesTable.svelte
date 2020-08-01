<script>
    import DataTable, {Head, Body, Row, Cell} from '@smui/data-table';
    import { _ } from 'svelte-i18n'

    export let trades = []

</script>

<DataTable table$aria-label="Trades">
    <Head>
        <Row>
            <Cell>{$_('trades.tableHeader.date', { default: 'Date' })}</Cell>
            <Cell>Action</Cell>
            <Cell>Price</Cell>
            <Cell>Quantity</Cell>
            <Cell>Total</Cell>
            <Cell>Transaction</Cell>
        </Row>
    </Head>
    <Body>
    {#each trades as trade}
        <Row>
            <Cell>{trade.timestamp}</Cell>
            <Cell>{trade.type}</Cell>
            <Cell>{trade.price}</Cell>
            <Cell>{trade.base_volume}</Cell>
            <Cell>{trade.quote_volume}</Cell>
            <Cell>{trade.trade_id}</Cell>
        </Row>
    {/each}
    </Body>
</DataTable>
