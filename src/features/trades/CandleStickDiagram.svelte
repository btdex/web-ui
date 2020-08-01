<script>
    import {locale} from 'svelte-i18n'
    import {isClientSide} from "../../utils/isClientSide";

    export let data

    let chartRef
    let chartApi
    let candlestickSeries

    $: if (chartApi && candlestickSeries) {
        chartApi.applyOptions({
                    localization: {
                        locale: $locale,
                    }
                }
        )
        candlestickSeries.setData(data)
        chartApi.timeScale().fitContent();
    }

    $: if (isClientSide() && chartRef && !chartApi) {
        chartApi = window.LightweightCharts.createChart(chartRef, {
            width: 600,
            height: 380,
            localization: {
                locale: $locale
            },
        });
        candlestickSeries = chartApi.addCandlestickSeries();
    }
</script>

<section class="candlestick-container">
    <div class="candlestick-chart" bind:this={chartRef}></div>
</section>

<style>
    .candlestick-container {
        display: flex;
        justify-content: center;
    }
</style>
