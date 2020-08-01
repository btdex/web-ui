<script context="module">
	export async function preload() {
		const res = await this
	}
</script>

<script>
	import Button, {Label, Icon} from '@smui/button';
	import Page from "../components/Page.svelte";
	import TradesTable from "../features/trades/TradesTable.svelte";
	import {getTrades} from "../services/TradesService";

	let selectedPair = 'DOGE_BURST';
	let currentTrades = []

	$: {
		getTrades(selectedPair).then( trades => {
			currentTrades = trades
		})
	}

</script>

<Page>
	<TradesTable trades={currentTrades}/>
</Page>


<style>
	.grayed {
		opacity: .6;
	}
</style>
