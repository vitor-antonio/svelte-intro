import playersData from './playersData.json';


export function fetchPlayersData(delay = 1000) {
    return new Promise((res) => {
        setTimeout(() => {
            res(playersData);
        }, delay + 600 * Math.random());
    });
}
