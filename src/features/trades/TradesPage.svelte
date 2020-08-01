<script>
    import {t} from "svelte-i18n"
    import Select, {Option} from "@smui/select"
    import Page from "../../components/Page.svelte";
    import TradesTable from "./TradesTable.svelte";
    import {getTrades} from "./TradesService";
    import CandleStickDiagram from "./CandleStickDiagram.svelte";
    import {mapToCandleStickData} from "./mapToCandleStickData";


    const AvailablePairs = [
        {
            label: 'DOGE',
            slug: 'DOGE_BURST'
        },
        {
            label: 'TRT',
            slug: 'TRT_BURST'
        }
    ]

    let currentTrades = []
    let candleStickData = []
    let selectedCoin = AvailablePairs[0].label

    $: {
        const selected = AvailablePairs.find(({label}) => label === selectedCoin)
        getTrades(selected.slug).then(trades => {
            currentTrades = trades
        }).catch(() => {
            currentTrades = []
        })
    }

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
        <CandleStickDiagram data={mapToCandleStickData(currentTrades)} />
    </div>
    <div class="table-container">
        <TradesTable trades={currentTrades}/>
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
