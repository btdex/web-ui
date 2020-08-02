<script>
    import {onDestroy} from 'svelte'
    import {t} from "svelte-i18n"
    import Select, {Option} from "@smui/select"
    import Page from "../../components/Page.svelte";
    import TradesTable from "./TradesTable.svelte";
    import {getTrades} from "./TradesService";
    import CandleStickDiagram from "./CandleStickDiagram.svelte";
    import {mapToCandleStickData} from "./mapToCandleStickData";

    const AvailablePairs = [
        {
            label: 'BTC',
            slug: 'BTC_BURST',
        },
        {
            label: 'DOGE',
            slug: 'DOGE_BURST'
        },
        {
            label: 'ETH',
            slug: 'ETH_BURST'
        },
        {
            label: 'LTC',
            slug: 'LTC_BURST'
        },
        {
            label: 'TRT',
            slug: 'BURST_TRT'
        },
    ]

    let currentTrades = []
    let candleStickData = []
    let selectedCoin = AvailablePairs[0].label
    let interval = null

    function fetchTrades(slug) {
        getTrades(slug).then(trades => {
            currentTrades = trades
        }).catch(() => {
            currentTrades = []
        })
    }

    $: selectedPair = AvailablePairs.find(({label}) => label === selectedCoin).slug || ''
    $: {
        fetchTrades(selectedPair)
        clearInterval(interval)
        interval = setInterval(() => {
            fetchTrades(selectedPair)
        }, 5 * 60 * 1000)
    }

    $: if (currentTrades.length) {
        candleStickData = mapToCandleStickData(
                currentTrades.map(t => ({
                    time: t.timestamp / 1000,
                    ...t
                }))
        );
    }

    onDestroy(() => {
        clearInterval(interval)
    })

</script>

<Page>
    <div class="select-container">
        <Select enhanced
                bind:value={selectedCoin}
                label={$t('trades.select.label')}
                style="width: 100%"
        >
            {#each AvailablePairs as pair}
                <Option value={pair.label} selected={selectedCoin === pair.label}>{pair.label}</Option>
            {/each}
        </Select>
    </div>
    <div class="candlestick-container">
        <CandleStickDiagram data={candleStickData}/>
    </div>
    <div class="table-container">
        <TradesTable trades={currentTrades} tradingPair={selectedPair.split('_')} />
    </div>
</Page>

<style>
    .select-container {
        width: 50%;
        margin: 0 auto;
        margin-bottom: 1rem;
    }

    .candlestick-container {
        margin-bottom: 1rem;
    }

    .table-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }
</style>
