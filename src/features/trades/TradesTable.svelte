<script>
    import DataTable, {Head, Body, Row, Cell} from '@smui/data-table';
    import {_, time, date, number} from 'svelte-i18n'
    import {RouteExplorerTransaction} from "../../utils/routes";

    export let trades = []

    $: thead = (slug, def) => $_(`trades.tableHeader.${slug}`, {default: def})

    $: dateTime = (timestamp) => {
        const d = new Date(timestamp)
        return `${$date(d)} ${$time(d, {format: 'medium'})}`
    }

    $: type = t => $_(`trades.type.${t}`).toUpperCase()

    const pruneTxId = txId => txId.split('_')[0]

</script>

<DataTable table$aria-label="Trades">
    <Head>
        <Row>
            <Cell>{thead('date', 'Date')}</Cell>
            <Cell>{thead('action', 'Action')}</Cell>
            <Cell>{thead('price', 'Price')}</Cell>
            <Cell>{thead('quantity', 'Quantity')}</Cell>
            <Cell>{thead('total', 'Total')}</Cell>
            <Cell>{thead('transaction', 'Transaction')}</Cell>
        </Row>
    </Head>
    <Body>
    {#each trades as trade}
        <Row>
            <Cell>{dateTime(trade.timestamp)}</Cell>
            <Cell>{type(trade.type)}</Cell>
            <Cell>{$number(trade.price)}</Cell>
            <Cell>{$number(trade.base_volume)}</Cell>
            <Cell>{$number(trade.quote_volume)}</Cell>
            <Cell>
                <a href={RouteExplorerTransaction(pruneTxId(trade.trade_id))}
                   target="_blank"
                   rel="noreferrer noopener"
                >
                    {pruneTxId(trade.trade_id)}
                </a>
            </Cell>
        </Row>
    {/each}
    </Body>
</DataTable>
