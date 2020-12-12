<script>
	import PlayerDetails from "./PlayerDetails.svelte";
	import PlayersList from "./PlayersList.svelte";
	import playersData from "./playersData.json";
	export let name;
	let players;
	let error;
	let playersPromise;

	export function fetchPlayersData() {
		return new Promise((res) => {
			setTimeout(() => {
				res(playersData);
			}, 2000 * Math.random());
		});
	}

	fetchPlayersData()
		.then(() => {
			throw Error('something went wrong ¯\\_(ツ)_/¯');
		}).catch((e) => (error = e));

	// fetchPlayersData().then((x) =>
	// 	(players = x)
	// );

	playersPromise = fetchPlayersData();

	// playersPromise = fetchPlayersData().then(() => {throw Error('something went wrong ¯\\_(ツ)_/¯')});
</script>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

	<!-- <PlayersList inputValue={myValue + 'extra'}></PlayersList>
	<PlayerDetails inputValue={myValue}></PlayerDetails> -->

	<!-- <pre>{JSON.stringify(players, null, 2)}</pre> -->

	<!-- {#if !error}
		{#if players}
			{#each players as player}
				<p>{player.first_name}</p>
			{/each}
			<pre>{JSON.stringify(players, null, 2)}</pre>
		{:else}
			<p>Loading data...</p>
		{/if}
	{:else}
	<p>{error}</p>
	{/if} -->

	{#await playersPromise}
		<p>Loading...</p>
	{:then players}
		<pre>{JSON.stringify(players, null, 2)}</pre>
		{#each players as player}
			<p>{player.first_name}</p>
			<img src={player.image} alt="{player.first_name}"/>
		{/each}
	{:catch error}
		{error}
	{/await}
</main>
