import { game } from './games.module.js'
import { gameDetails } from './details.module.js'

export class UI {

    async displayGames(category) {
        document.getElementById('gamesRow').innerHTML = `
          <div class="d-grid" style="height: calc(100vh - 150px )">
                    <span class="loader m-auto"></span>
                </div>
        `
        let gamesViewList = ``;
        let games = []
        let gameobject = new game()
        let result = await gameobject.fatchGames(category)
        for (let i = 0; i < result.length; i++) {
            let gameitem = new game(result[i].id, result[i].thumbnail, result[i].title, 'free', result[i].short_description, result[i].genre, result[i].platform);
            games.push(gameitem)
        }

        for (let i = 0; i < games.length; i++) {
            gamesViewList += `
            <div class="col-lg-3 col-md-4 col-sm-6 my-3 ">
                    <div gameId="${games[i].id}" class="game rounded-4 p-3 h-100">
                        <div class="gameImg">
                            <img src="${games[i].imgSrc}" class="w-100 rounded" alt="">
                        </div>
                        <div class="gameInfo py-2 ">
                            <div class="d-flex justify-content-between py-3">
                                <h5 class="text-light">${games[i].title}</h5>
                                <div class="price rounded-3 px-3 py-1">free</div>
                            </div>
                            <p class="">${games[i].minDesc}</p>

                            <hr style="color: white;">
                            <div class="d-flex justify-content-between align-items-center position-relative bottom-0">
                                <div class="category rounded-3 px-3 py-1 fw-bold">${games[i].category}</div>
                                <div class="platform rounded-3 px-3 py-1 fw-bold">${games[i].platform}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }
        document.getElementById('gamesRow').innerHTML = gamesViewList

        $('.game').on('click', function () {
            let gameid = this.getAttribute('gameId')
            let ui = new UI()
            $('#gameDetailsContainer').toggleClass("d-none");
            ui.displayDetails(gameid)
        })
    }

    async displayDetails(id) {
        let gamedetailsobj = new gameDetails()
        let result = await gamedetailsobj.fetchDetails(id);

        document.getElementById('gameDetailsContent').innerHTML = `
        <div class="container">
                <div class="row">
                    <h2 class="gameDetailsHead">Game Details</h2>
                    <div class="col-md-4 m-auto">
                        <div id="gameImg">
                             <img src="${result.thumbnail}" class="w-100 rounded" alt="">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div id="gameDetails" class=" gameDetails">
                            <h1>${result.title}</h1>
                            <div class="d-flex align-items-center gap-3 my-2">
                                <h4>Category:</h4>
                                <div class="d-flex justify-content-center align-items-center bg-primary px-2 rounded">${result.genre}</div>
                            </div>
                            <div class="d-flex align-items-center gap-3 my-2">
                                <h4>Platform:</h4>
                                <div class="d-flex justify-content-center align-items-center bg-primary px-2 rounded">${result.platform}</div>
                            </div>
                            <div class="d-flex align-items-center gap-3 my-2">
                                <h4>Status:</h4>
                                <div class="d-flex justify-content-center align-items-center bg-primary px-2 rounded">${result.status}</div>
                            </div>
                            <p>${result.description} </p>
                            <a class="btn btn-outline-danger" href="${result.game_url}" target="_blank">Show Game</a>
                        </div>
                    </div>
                </div>
            </div>
        `




    }



}


