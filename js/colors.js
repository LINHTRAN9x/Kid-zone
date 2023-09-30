// JavaScript-onload-fade IN.
window.onload = function() {
    var body = document.body;
    body.classList.add('fade-in'); // Hiển thị trang web dần dần
}

const itemGame = $('.colors-item-game-container');
const app = {

    games: [
        {
            image: './img/colorsImg/color1.png',
            name: 'Magician Color Quest',
        },
        {
            image: './img/colorsImg/color2.png',
            name: 'Make a Valentine',
        },
        {
            image: './img/colorsImg/color3.png',
            name: "Alan's Pizzeria ",

        },
        {
            image: './img/colorsImg/color4.png',
            name: 'Super Santa',
        },
        {
            image: './img/colorsImg/color5.png',
            name: 'Alarmy',
        },
        {
            image: './img/colorsImg/color6.png',
            name: "Andy's Goft",
        },
        {
            image: './img/colorsImg/color7.png',
            name: 'Aqua Friends',
        },
        {
            image: './img/colorsImg/color8.png',
            name: 'Aqua Thief',
        },
        {
            image: './img/colorsImg/color9.png',
            name: 'Blobble',
        },
        {
            image: './img/colorsImg/color10.png',
            name: 'Blue Box',
        },
        {
            image: './img/colorsImg/color11.png',
            name: 'Cake Topping',
        },
        {
            image: './img/colorsImg/color12.png',
            name: 'Candy Pool',
        },
        {
            image: './img/colorsImg/color13.png',
            name: 'Candy Timbermen',
        },
        {
            image: './img/colorsImg/color14.png',
            name: 'Colorush',
        },
        {
            image: './img/colorsImg/color15.png',
            name: 'Cute Puzzle Witch',
        },
        {
            image: './img/colorsImg/color16.png',
            name: 'Fluffy Cuddlies',
        },
        {
            image: './img/colorsImg/color17.png',
            name: 'Jelly Collapse',
        },
        {
            image: './img/colorsImg/color18.png',
            name: "Mila's Magic Shop",
        },
        {
            image: './img/colorsImg/color19.png',
            name: 'Rainbow Stacker',
        },
        {
            image: './img/colorsImg/color20.png',
            name: 'Paint',
        },
        {
            image: './img/colorsImg/color21.png',
            name: 'True Colors',
        },
    ],
    render: function () {
        const htmls = this.games.map(game => {
            return `
            <a href="#" class="item-game">
                <img src="${game.image}" alt="">
                <div class="game-title">
                    <h3>${game.name}</h3>
                    <div class="play-game">
                        <p>Number lession</p>
                        <i class="fa-solid fa-gamepad"></i>
                    </div>
                </div>
            </a>
            `
        });

        // Sử dụng jQuery để thay đổi nội dung phần tử
        itemGame.html(htmls.join(''));
    },

    start: function () {
        this.render();
    }
}
$(document).ready(function () {
    app.start();
});



window.addEventListener("load", function () {
    // Hide the spinner when the page has finished loading
    // document.querySelector("").style.display = "none";
    $(".curtain").fadeOut(1000);
    $(".loader").css("display", "none");
  });

/* //BACK_TO_TOP */
var backToTopButton = document.getElementById('back-to-top');
   window.onscroll = function() {
     if (window.scrollY > 2500) {
    // Nếu vị trí cuộn vượt quá 200px, thêm lớp 'show'
       backToTopButton.classList.add('show');
} else {
    // Nếu không, loại bỏ lớp 'show'
    backToTopButton.classList.remove('show');
}
};

//carousel 
$('.owl-carousel').owlCarousel({
    navText: [
        `<span class='custom-prev-button'><i class="fa-solid fa-caret-left"></i></span>`,
        `<span class='custom-next-button'><i class="fa-solid fa-caret-right"></i></span>`,
      ],
    loop:false,
    margin:0,
    nav:true,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})