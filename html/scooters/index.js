let height = $(".header").css("height");

$(window).resize(function () {
    height = $(".header").css("height");
})

$(window).scroll(function() {
    if($(this).scrollTop() > 200) {
        $(".header").addClass("sticky");
        $("body").css("margin-top", height);
    }
    else {
        $(".header").removeClass("sticky");
        $("body").css("margin-top", 0);
    }
})

$(".header__nav-toggle").on("click", function () {
    $(".header__navigation").toggleClass("open");
    $("body").toggleClass("no-scroll");

    const menuOpen = $(".header__navigation").hasClass("open");

    if (menuOpen) {
        $(this).prop("src", "assets/icons/close.svg");
    }
    else {
        $(this).prop("src", "assets/icons/hamburger.svg");
    }
})

$(".header__btn").on("click", function () {
    $(".header__navigation").removeClass("open");
    $("body").removeClass("no-scroll");
    $(".header__nav-toggle").prop("src", "assets/icons/hamburger.svg");
})

if ($(window).width() <= 700) {
    animateMenuItems();
}

$(window).resize(function () {
    if ($(window).width() <= 700) {
        animateMenuItems();
    }
})

function animateMenuItems() {
    let delay = 0.2;

    $(".header__nav-link").each(function () {
        $(this).css("animation", "slideLeft 0.4s " + delay + "s");
        $(this).css("animation-fill-mode", "backwards");
        delay = delay + 0.2;
    })

    $(".header__btn").css("animation", "slideLeft 0.4s " + delay + "s");
    $(".header__btn").css("animation-fill-mode", "backwards");
}

$(".accordion__item:first-child").addClass("active");

$(".accordion__top").click(function () {
    $(this).parent().toggleClass("active");
})