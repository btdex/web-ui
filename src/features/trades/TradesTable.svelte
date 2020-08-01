<script>
    import DataTable, {Head, Body, Row, Cell} from '@smui/data-table';
    import {_, time, date, number} from 'svelte-i18n'
    import {RouteExplorerTransaction} from "../../utils/routes";

    export let trades = []


    const t = (slug, def) => $_(`trades.tableHeader.${slug}`, {default: def})

    const dateTime = (timestamp) => {
        const d = new Date(timestamp)
        return `${$date(d)} ${$time(d, {format: 'medium'})}`
    }


</script>

<DataTable table$aria-label="Trades">
    <Head>
        <Row>
            <Cell>{t('date', 'Date')}</Cell>
            <Cell>{t('action', 'Action')}</Cell>
            <Cell>{t('price', 'Price')}</Cell>
            <Cell>{t('quantity', 'Quantity')}</Cell>
            <Cell>{t('total', 'Total')}</Cell>
            <Cell>{t('transaction', 'Transaction')}</Cell>
        </Row>
    </Head>
    <Body>
    {#each trades as trade}
        <Row>
            <Cell>{dateTime(trade.timestamp)}</Cell>
            <Cell>{trade.type.toUpperCase()}</Cell>
            <Cell>{$number(trade.price)}</Cell>
            <Cell>{$number(trade.base_volume)}</Cell>
            <Cell>{$number(trade.quote_volume)}</Cell>
            <Cell>
                <a href={RouteExplorerTransaction(trade.trade_id)}
                   target="_blank"
                   rel="noreferrer noopener"
                >
                    {trade.trade_id}
                </a>
            </Cell>
        </Row>
    {/each}
    </Body>
</DataTable>
