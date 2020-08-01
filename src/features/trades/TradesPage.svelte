<script>
    import Select, {Option} from '@smui/select';
    import {t} from 'svelte-i18n'
    import Page from "../../components/Page.svelte";
    import TradesTable from "./TradesTable.svelte";
    import {getTrades} from "./TradesService";


    const AvailablePairs = [{
        label: 'DOGE',
        slug: 'DOGE_BURST'
    }]

    let selectedPair;
    let currentTrades = []

    $: {
        selectedPair = AvailablePairs[0]
        getTrades(selectedPair.slug).then(trades => {
            currentTrades = trades
        })
    }

</script>

<Page>
    <div class="select-container">
        <Select enhanced
                bind:value={selectedPair.label}
                label={$t('trades.select.label')}
                style="width: 100%"
        >
            {#each AvailablePairs as pair}
                <Option value={pair.label} selected={selectedPair.label === pair.label}>{pair.label}</Option>
            {/each}
        </Select>
    </div>
    <TradesTable trades={currentTrades}/>
</Page>

<style>
    .select-container {
        margin: 0 auto;
        width: 50%;
        margin-bottom: 1rem;
    }
</style>
