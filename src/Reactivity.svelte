<script>
    let showSelectedPlayers = false;

    let playersList = [
        {
            first_name: "Harry",
            last_name: "Kane",
            team: "Manchester United",
            selected: false,
        },
        {
            first_name: "Hugo",
            last_name: "Lloris",
            team: "Tottenham",
            selected: false,
        },
        {
            first_name: "Heung-Min",
            last_name: "Son",
            team: "Tottenham",
            selected: false,
        },
    ];

    $: filteredList = showSelectedPlayers
        ? playersList.filter((player) => player.selected)
        : playersList;

    function selectPlayer(p) {
        playersList = playersList.map(player => {
            if(p === player) {return {...player, selected: !player.selected }} 
            return player;
        });
    }
</script>

<style>
    .player-item {
        cursor: pointer;
    }

    .selected {
        color: blue;
        font-weight: 600;
    }
</style>

<label>
    <input type="checkbox" bind:checked={showSelectedPlayers} />
    Show Selected players
</label>

{#each playersList as player}
    <div on:click={() => selectPlayer(player)}>
        <p class="player-item" class:selected={player.selected}>
            {player.first_name}
            -
            {player.selected}
        </p>
    </div>
{/each}

-- Selected Players --
{#if showSelectedPlayers}
    {#each filteredList as player}
        <div>
            <p class="player-item" class:selected={player.selected}>
                {player.first_name}
                -
                {player.selected}
            </p>
        </div>
    {/each}
{/if}
