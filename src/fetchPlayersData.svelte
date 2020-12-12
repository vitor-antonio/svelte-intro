<script>
    import playersData from "./playersData.json";

	export function fetchPlayersData(delay = 1000) {
		return new Promise((res) => {
			setTimeout(() => {
				res(playersData);
			}, delay + 600 * Math.random());
		});
	}
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->