$(document).ready(function () {
    $('.qwe h3').click(function () {

        $(this).next('.serv').slideToggle();

        $(this).parent().toggleClass('active');

        $(this).parent().siblings().children('.serv').slideUp();

        $(this).parent().siblings().removeClass('active');

    });
});
