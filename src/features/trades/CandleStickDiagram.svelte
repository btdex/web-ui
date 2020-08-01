<script>
    import {locale} from 'svelte-i18n'
    import {isClientSide} from "../../utils/isClientSide";

    export let trades = []

    let chart
    let chartApi

    $: if (chartApi) {
        chartApi.applyOptions({
                    localization: {
                        locale: $locale,
                    }
                }
        )
        console.log('applied', $locale)
    }

    $: if (isClientSide() && chart && !chartApi) {
        chartApi = window.LightweightCharts.createChart(chart, {
            width: 600,
            height: 380,
            localization: {
                locale: $locale
            },
        });
        let candlestickSeries = chartApi.addCandlestickSeries();
        candlestickSeries.setData([
            {time: '2018-12-19', open: 141.77, high: 170.39, low: 120.25, close: 145.72},
            {time: '2018-12-20', open: 145.72, high: 147.99, low: 100.11, close: 108.19},
            {time: '2018-12-21', open: 108.19, high: 118.43, low: 74.22, close: 75.16},
            {time: '2018-12-22', open: 75.16, high: 82.84, low: 36.16, close: 45.72},
            {time: '2018-12-23', open: 45.12, high: 53.90, low: 45.12, close: 48.09},
            {time: '2018-12-24', open: 60.71, high: 60.71, low: 53.39, close: 59.29},
            {time: '2018-12-25', open: 68.26, high: 68.26, low: 59.04, close: 60.50},
            {time: '2018-12-26', open: 67.71, high: 105.85, low: 66.67, close: 91.04},
            {time: '2018-12-27', open: 91.04, high: 121.40, low: 82.70, close: 111.40},
            {time: '2018-12-28', open: 111.51, high: 142.83, low: 103.34, close: 131.25},
            {time: '2018-12-29', open: 131.33, high: 151.17, low: 77.68, close: 96.43},
            {time: '2018-12-30', open: 106.33, high: 110.20, low: 90.39, close: 98.10},
            {time: '2018-12-31', open: 109.87, high: 114.69, low: 85.66, close: 111.26},
        ])
        chartApi.timeScale().fitContent();
    }
</script>

<section class="candlestick-container">
    <div class="candlestick-chart" bind:this={chart}></div>
</section>

<style>
    .candlestick-container {
        display: flex;
        justify-content: center;
    }
</style>
