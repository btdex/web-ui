<script>
    import DataTable, {Head, Body, Row, Cell} from '@smui/data-table';
    import {_, time, date, number} from 'svelte-i18n'
    import {RouteExplorerTransaction} from "../../utils/routes";

    export let trades = []
    export let tradingPair = ['','']

    $: thead = (slug) => $_(`trades.tableHeader.${slug}`)
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
            <Cell>{thead('date')}</Cell>
            <Cell>{thead('action')}</Cell>
            <Cell>{`${thead('price')} ${tradingPair[0].toUpperCase()}`}</Cell>
            <Cell>{`${thead('quantity')} ${tradingPair[1].toUpperCase()}`}</Cell>
            <Cell>{`${thead('total')} ${tradingPair[0].toUpperCase()}`}</Cell>
            <Cell>{thead('transaction')}</Cell>
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
