<ul>
  {#if maxItems || minItems}
    <li>items: {minItems || ''}...{maxItems || ''}</li>
  {/if}

  {#if maxContains || minContains}
    <li>contains: {minContains || ''}...{maxContains || ''}</li>
  {/if}

  {#if uniqueItems}
    <li>unique</li>
  {/if}
</ul>

{#if items}
  <Items {items} href={`${href}/items`} />
{/if}

<script>
  export let definition = {};
  export let href = "";

  export let maxItems;
  export let minItems;
  export let uniqueItems = false;
  export let maxContains;
  export let minContains;
  export let items;

  import Items from "../Items/index.svelte";
</script>

<style>
  .type_block {
    display: flex;
  }
  .type {
    display: inline-block;
    margin-right: 2em;
  }
  ul {
    list-style: none;
    display: flex;
    padding: 0px;
    margin: 0px;
    grid-column: span 2;
  }
  li {
    margin-right: 0.25em;
  }
  li:after {
    content: ", ";
  }
  li:last-child:after {
    content: "";
  }
  .nbr_items:before {
    content: "items: ";
  }
  .nbr_contains:before {
    content: "contains: ";
  }
</style>
