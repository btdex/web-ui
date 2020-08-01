
<script>
    import Menu, {SelectionGroup, SelectionGroupIcon} from '@smui/menu';
    import {locales, t, locale} from "svelte-i18n"
    import {Anchor} from '@smui/menu-surface';
    import List, {Item, Separator, Text, PrimaryText, SecondaryText, Graphic} from '@smui/list';
    import Button from '@smui/button';

    export let isOpen = false

    let menu
    let anchor

    $: {
      menu && menu.setOpen(isOpen)
    }

    function selectLanguage(name) {
      return function() {
        $locale = name
      }
    }

</script>

<div use:Anchor bind:this={anchor} style="min-width: 100px;">
    <Menu bind:this={menu}
          anchor={false}
          bind:anchorElement={anchor}
          anchorCorner="TOP_RIGHT"
    >
        <List>
            {#each $locales as locale}
            <Item on:SMUI:action={selectLanguage(locale)}>
                <Text>{$t(`app.languages.${locale}`)}</Text>
            </Item>
            {/each}
        </List>
    </Menu>
</div>
