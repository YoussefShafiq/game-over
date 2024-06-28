export class game {
    constructor(id, imgSrc, title, price, minDesc, category, platform) {
        this.id = id;
        this.imgSrc = imgSrc;
        this.title = title;
        this.price = price;
        this.minDesc = minDesc;
        this.category = category;
        this.platform = platform
    }
    id;
    imgSrc;
    title;
    price;
    minDesc;
    category;
    platform;


    async fatchGames(category) {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'a530478724mshdaae1cd3216ac24p159522jsnf87cef585207',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }

        let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
        let result = await api.json()
        return result;
    }

}