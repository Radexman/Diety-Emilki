$(document).ready(function () {
    let ukryjMenu = true;
    $('.top-strony-link').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#top').offset().top - 50
        }, 700);
        if(ukryjMenu == false){
            $('#menu').animate({top: -200}, 200)
            ukryjMenu = true
        }
    });
    $('.kon-oferta-link').on('click', function(){
        $('html, body').animate({
            scrollTop: $('#oferta').offset().top - 45
        }, 700);
        if(ukryjMenu == false){
            $('#menu').animate({top: -200}, 200)
            ukryjMenu = true
        }
    });
    $('.kon-dietetyk-link').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#dietetician').offset().top - 44
        }, 700);
        if(ukryjMenu == false){
            $('#menu').animate({top: -200}, 200)
            ukryjMenu = true
        }
    });
    $('.mapa-link').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#mapa').offset().top - 50
        }, 700);
        if(ukryjMenu == false){
            $('#menu').animate({top: -200}, 200)
            ukryjMenu = true
        }
    });
    $('.kon-kontakt-link').on('click', function(){
        $('html, body').animate({
            scrollTop: $('#contakt').offset().top - 10
        }, 700);
        if(ukryjMenu == false){
            $('#menu').animate({top: -200}, 200)
            ukryjMenu = true
        }
    });
    $('.toggler').on('click', function(){
        if(ukryjMenu == true){
            $('#menu').animate({top: 0}, 300)
            ukryjMenu = false
        } else {
            $('#menu').animate({top: -200}, 300)
            ukryjMenu = true
        }
    });
    $(window).resize(function() {
        let windowWidth = $(window).width();
        if(windowWidth > 768){
            $('#menu').css('top',0);
            ukryjMenu = true
        } else{
            $('#menu').css('top', -200);
        }
    })
});