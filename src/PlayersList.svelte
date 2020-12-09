<script>
    export let inputValue;
    let isValid;

    $: console.log({isValid});
</script>

<style>
    /* your styles go here */
</style>


<div>
    My data is <input type="checkbox" bind:checked={isValid} />
    {inputValue}
</div>