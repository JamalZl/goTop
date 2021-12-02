$(document).ready(function () {
    $(window).scroll(function () {
        if (window.scrollY >= 500) {
            $(".goUp").removeClass("d-none")
        }
        if (window.scrollY <= 500) {
            $(".goUp").addClass("d-none")
        }
    })
    $(".goUp").click(function () {
        $(window).scrollTop(0);
        let audio = new Audio("siu.mp3")

        audio.play();
    })
})