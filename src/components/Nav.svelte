<TabBar tabs={['Home', 'Merchandise', 'About Us']} let:tab bind:active>
  <!-- Notice that the `tab` property is required! -->
  <Tab {tab}>
    <Label>{tab}</Label>
  </Tab>
</TabBar>

<script>
      import Tab, {Icon, Label} from '@smui/tab';
      import TabBar from '@smui/tab-bar';

      let active = 'Home';
</script>
