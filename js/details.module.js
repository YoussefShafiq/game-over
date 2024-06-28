export class gameDetails {
    async fetchDetails(id) {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'a530478724mshdaae1cd3216ac24p159522jsnf87cef585207',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }
        let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
        let result = await api.json()
        return result;
    }
}