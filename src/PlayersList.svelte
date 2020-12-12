<script>
    import { createEventDispatcher } from "svelte";

    let dispatch = createEventDispatcher();
    export let inputValue;
    export let localPlayers;

    let isValid;

    $: console.log({ isValid });

    let selectedPlayer;

    function selectPlayer(player) {
        console.log(player);
        //selectedPlayer = player;
        //dispatch("playerSelected", player);
    }

    $: filteredPlayers = localPlayers?.filter(
        (player) => player.team === "Manchester United"
    );

    let authorName = "Someone";

    $: pageTitle = 'The author of this list is: ' + authorName;
</script>

<style>
    /* your styles go here */
    .selected-player {
        color: red;
    }
</style>

<div>
    <!-- My data is
    <input type="checkbox" bind:checked={isValid} />
    {inputValue} -->

    <h1>{pageTitle}</h1>

    <input type="text" bind:value={authorName}/>

    {#if selectedPlayer}
        <div>
            <p>Selected player: <span>{selectedPlayer.first_name}</span></p>
        </div>
    {/if}

    {#if localPlayers}
        {#each localPlayers as localPlayer}
            <div
                class:selected-player={selectedPlayer === localPlayer}
                on:click={selectPlayer(localPlayer)}>
                {localPlayer.first_name}
                {localPlayer.last_name}
                <span> : {localPlayer.team}</span>
            </div>
        {/each}
    {/if}
            <div> 
                <h2>Filtered For United</h2>
            </div>
    {#if filteredPlayers}
        {#each filteredPlayers as filteredPlayer}
            <div>
                {filteredPlayer.first_name}
                {filteredPlayer.last_name}
                <span> : {filteredPlayer.team}</span>
            </div>
        {/each}
    {/if}
</div>
<!-- <img src="./myimage.png"/> -->
