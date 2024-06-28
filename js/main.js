import { UI } from './UI.module.js'


let ui = new UI()
ui.displayGames('MMORPG')

$('.categoryOption').on('click', function () {
    ui.displayGames(this.innerHTML);
    $('.categoryOption').removeClass('active')
    $(this).addClass('active')

})


$('#sidenav').animate({ left: "0px" }, 1000, function () {
    $('#games-container').animate({ opacity: "100%" }, 1000)
});



$('.closeGameDetails').on('click', function () {
    $('#gameDetailsContainer').toggleClass("d-none");
    document.getElementById('gameDetailsContent').innerHTML = `
    <div class="d-grid" style="height: calc(100vh - 150px )">
                <span class="loader m-auto"></span>
    </div>
    `
})

$('#phoneSideNav').on('click', function () {
    $('#sidenav').toggleClass("d-block");
})




