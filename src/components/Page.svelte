<script>
</script>

<section class="page">
    <slot/>
</section>


<style>
    .page {
        margin: 0 auto;
        max-width: 80%;
        padding: 1rem
    }

    @media (max-width: 480px) {
        .page {
            max-width: 100%;
        }
    }

    @media (min-width: 1280px) {
        .page {
            max-width: 50%;
        }
    }
</style>
