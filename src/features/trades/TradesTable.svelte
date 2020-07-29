<script>
    import DataTable, {Head, Body, Row, Cell} from '@smui/data-table';
</script>

<DataTable table$aria-label="Trades">
    <Head>
        <Row>
            <Cell>Name</Cell>
            <Cell>Description</Cell>
            <Cell>Quantity</Cell>
        </Row>
    </Head>
    <Body>
    <Row>
        <Cell>Reds</Cell>
        <Cell>The red ones</Cell>
        <Cell numeric>45</Cell>
    </Row>
    <Row>
        <Cell>Blues</Cell>
        <Cell>The blue ones</Cell>
        <Cell numeric>37</Cell>
    </Row>
    <Row>
        <Cell>Yellows</Cell>
        <Cell>The yellow ones</Cell>
        <Cell numeric>32</Cell>
    </Row>
    </Body>
</DataTable>
