// $(document).ready(function () {
//     $(".dropdown-btn").on("click", function () {
//         var dropdown = $(".dropdown-content");
//         if ($(".mobile").css("display") == "none") {
//             dropdown.fadeToggle();
//         } else {
//             if (dropdown.css("display") == "none") {
//                 dropdown.css({"display": "block"});
//                 dropdown.animate({"right": "0"}, 500);
//             } else {
//                 dropdown.animate({"right": "-350px"}, 500, function () {
//                     dropdown.css({"display": "none"});
//                 });
//             }
//         }
    
    
//     });
    //new WOW().init();
    // var offset = 600;
    // $(window).scroll(function(){
    //     var scrolltop = $(this).scrollTop();
    //     $('.progres1').each(function(){
    //         if(scrolltop >= $(this).offset().top - offset) {
    //             $(this).addClass('tox-progress');
    //         }
    //     });
    // });
    let prevDropOpened = null;
    $(".circle-elements").on("click", function (event) {
        console.log(event.target);
        console.log(document.getElementById(event.target.getAttribute('dropid')));
        let dropdown = $(`#${event.target.getAttribute('dropid')}`);
        let dropdownImg = $(`#${event.target.getAttribute('dropid')}i`);
        console.log(dropdown.attr('id'));
        console.log(dropdownImg.attr('id'));
        console.log(dropdown.css("display"));
        if (dropdown.css("display") == "none")  {
            dropdown.css({"display": "flex"});
            console.log(dropdown.css("display"));
            if (dropdownImg) {
                dropdownImg.css({"display": "none"});
            }
            if (prevDropOpened && prevDropOpened.attr('id') != dropdown.attr('id')) {
                prevDropOpened.css({"display": "none"});

                let prevImg = $(`#${prevDropOpened.attr('id')}i`);
                if (prevImg) {
                    prevImg.css({"display": "block"});
                }
            }
            prevDropOpened = dropdown;
        } else {
            dropdown.css({"display": "none"});
            if (dropdownImg) {
                dropdownImg.css({"display": "block"});
            }
        }

    });
    $('#4diii').click();

    // let prevDropOpened = null;
    // $(".circle-elements").on("click", function (event) {
    //     console.log(event.target);
    //     console.log(document.getElementById(event.target.getAttribute('dropid')));
    //     let dropdown = $(document.getElementById(event.target.getAttribute('dropid')));
    //     let dropdownImg = $(document.getElementById(event.target.getAttribute('dropid') + 'i'));
    //     console.log(dropdown.id);
    //     if (dropdown.css("display") == "none") {
    //         dropdown.css({"display": "flex"});
    //         if (dropdownImg) {
    //             dropdown.css({"display": "none"});
    //         }
    //         if (prevDropOpened && prevDropOpened != dropdown) {
    //             prevDropOpened.css({"display": "none"});
    //             let prevImg = $(document.getElementById(prevDropOpened.id + 'i'));
    //             if (prevImg) {
    //                 prevImg.css({"display": "block"});
    //             }
    //         }
    //         prevDropOpened = dropdown;
    //     } else {
    //         dropdown.css({"display": "none"});
    //         if (dropdownImg) {
    //             dropdown.css({"display": "block"});
    //         }
    //     }
    //
    // });

    window.onclick = function (event) {
        if (!(event.target.matches('.dropdown-btn')
            || event.target.matches(".heart-icon")
            || event.target.matches(".dropdown-content")
            || event.target.matches(".dropdown-content-share-it")
            || event.target.matches(".dropdown-content-subscribe, .dropdown-content-subscribe h2, .dropdown-content-subscribe p, .dropdown-content-subscribe input, .dropdown-content-subscribe button")
            || event.target.matches(".dropdown-content div, .dropdown-content a")
            || event.target.matches(".share-it-icons"))) {
            var dropdown = $(".dropdown-content");
            if ($(".mobile").css("display") == "none") {
                dropdown.fadeOut();
            } else {
                if (dropdown.css("display") == "block") {
                    dropdown.animate({"right": "-350px"}, 1000, function () {
                        dropdown.css({"display": "none"});
                    });
                }
            }
        }
    }
    // $(".section-1-text").cycle({
    //     timeout: 1
    // });
    // const refreshRate = 1000 / 60;
    // var part = "", maxXPositionCoeff;
    // if ($(".desktop").css("display") == "none") {
    //     part = ".mobile";
    //     maxXPositionCoeff = 3.2;
    //     var maxXPosition = $(part + " .section-2").width() * maxXPositionCoeff;
    //     var positionX = [];
    //     var positionY = [];
    //     var fi = [];
    //     var startYPosition = $(part + " .section-2").height() * 0.23;
    //     var speedX = 0.5;
    //     var A = $(part + " .bubbles").height() * 0.09;
    //     var W = (2 * 3.14) / ($(part + " .section-2").width() * 0.98);
    //     for (var i = 0; i < 8; i++) {
    //         positionX[i] = -i * maxXPosition / 8;
    //         positionY[i] = startYPosition;
    //         fi[i] = Math.random() * 1000;
    //     }
    //     $(part + " .bubble").css("left", 0);
    //     window.setInterval(() => {
    //         var newPosX, newPosY;
    //         $(part + ' .bubble').each(function (index) {
    //             if ($(this).css("display") == "none") {
    //                 $(this).css("display", "flex");
    //             }
    //             newPosX = positionX[index] + speedX;
    //             if (newPosX > maxXPosition * 0.95) {
    //                 newPosX = -125;
    //                 newPosY = startYPosition;
    //             } else {
    //                 newPosY = startYPosition + (A * Math.sin(W * positionX[index]) - $(this).width() / 2) + 8 * Math.sin(0.03 * positionX[index] + fi[index]);
    //             }
    //             positionX[index] = newPosX;
    //             $(this).css("transform", "translate(" + positionX[index] + "px, " + newPosY + "px)");
    //         });
    //     }, refreshRate);
    // } else {
    //     part = ".desktop";
    //     maxXPositionCoeff = 1.3;
    //     var maxXPosition = $(part + " .section-2").width() * maxXPositionCoeff;
    //     var positionX = [];
    //     var positionY = [];
    //     var fi = [];
    //     var startYPosition = $(part + " .bubbles").position().top + $(part + " .bubbles").height() * 0.5;
    //     var speedX = 0.5;
    //     var A = $(part + " .bubbles").height() * 0.2;
    //     var W = (2 * 3.14) / ($(part + " .section-2").width() * 0.98);
    //     for (var i = 0; i < 8; i++) {
    //         positionX[i] = 0 + i * maxXPosition / 8;
    //         positionY[i] = startYPosition;
    //         fi[i] = Math.random() * 1000;
    //     }
    //     $(part + " .bubble").css("left", 0);
    //     window.setInterval(() => {
    //         var newPosX, newPosY;
    //         $(part + ' .bubble').each(function (index) {
    //             if ($(this).css("display") == "none") {
    //                 $(this).css("display", "flex");
    //             }
    //             newPosX = positionX[index] + speedX;
    //             if (newPosX > maxXPosition * 0.95) {
    //                 newPosX = -0.5 * ($(".big_bubble").width() + $(".small_bubble").width());
    //                 newPosY = startYPosition;
    //             } else {
    //                 newPosY = startYPosition + (A * Math.sin(W * positionX[index]) - $(this).width() / 2) + 15 * Math.sin(0.02 * positionX[index] + fi[index]);
    //             }
    //             positionX[index] = newPosX;
    //             $(this).css("transform", "translate(" + positionX[index] + "px, " + newPosY + "px)");
    //         });
    //     }, refreshRate);
    // }

    // var board_words = ["innovative", "effective", "comfortable", "worthy", "fun", "", "", "", ""];
    // var iteration = 0;
    // $(".board-text").fadeOut(400, function () {
    //     $(this).html(board_words[iteration]);
    //     $(this).fadeIn(400);
    // })
    // window.setInterval(() => {
    //     $(".board-text").fadeOut(400, function () {
    //         $(this).html(board_words[iteration]);
    //         $(this).fadeIn(400);
    //     })
    //     iteration++;
    //     if (iteration == board_words.length) {
    //         iteration = 0;
    //     }
    // }, 1666.66666);
    // $(".slides").slick({
    //     dots: true,
    //     centerPadding: "50px",
    //     arrows: true,
    //     prevArrow: $(".slider-prev-btn"),
    //     nextArrow: $(".slider-next-btn")
    // });
    // $('.video').parent().click(function () {
    //     if ($(this).children(".video").get(0).paused) {
    //         $(this).children(".video").get(0).play();
    //         $(this).children(".playpause").fadeOut();
    //     } else {
    //         $(this).children(".video").get(0).pause();
    //         $(this).children(".playpause").fadeIn();
    //     }
    // });
    // $(".slickPrev").slick({
    //     // loop: true,
    //     // dots: true,
    //     // items: 3,
    //     // autoplay: true,
    //     // autoplayTimeout: 4000,
    //     // autoplayHoverPause: true,
    //     // autoplayHoverPause: true,
    //     // animateOut: 'slideOutUp',
    //     // animateIn: 'slideInUp',
    //     // transitionStyle : "fade"
    //     slidesToShow: 3,
    //     arrows: false,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     vertical: true,
    //     verticalSwiping: true,
    //     infinite: true,
    //     adaptiveHeight: true
    // });

    // objectFitVideos(document.querySelectorAll('.videos'));

    setInterval(function () {
        $(".slickPrev").slick("slickPrev");
    }, 2000);
    // window.setInterval(function(){$('button').trigger('click');}, 1000);


    $.each($(".bubbles-right"), function () {
        var bubblecount = ($(this).width() / 100) * 5;
        for (var i = 0; i <= bubblecount; i++) {
            var size = ((Math.random() * 40 + 40) / 4);
            $(this).append('<span class="particle-r" style="top:' + (Math.random() * 30 + 65) + '%; left:' + (Math.random() * 50 + 20) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ((Math.random() * 30) / 10) + 's;"></span>');
        }
    });
    $.each($(".bubbles-left"), function () {
        var bubblecount = ($(this).width() / 100) * 5;
        for (var i = 0; i <= bubblecount; i++) {
            var size = ((Math.random() * 40 + 40) / 4);
            $(this).append('<span class="particle-l" style="top:' + (Math.random() * 30 + 65) + '%; left:' + (Math.random() * 50 + 20) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ((Math.random() * 30) / 10) + 's;"></span>');
        }
    });
    $.each($(".desktop .board-bubbles-right"), function () {
        var bubblecount = 5;
        for (var i = 0; i <= bubblecount; i++) {
            var size = ((Math.random() * 40 + 40) / 2);
            $(this).append('<span class="particle-ll" style="top:' + (Math.random() * 30 + 70) + '%; left:' + (Math.random() * 30 - 40) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ((Math.random() * 30) / 10) + 's;"></span>');
        }
    });
    $.each($(".desktop .board-bubbles-left"), function () {
        var bubblecount = ($(this).width() / 100) / 2;
        for (var i = 0; i <= bubblecount; i++) {
            var size = ((Math.random() * 40 + 40) / 2);
            $(this).append('<span class="particle-rr" style="top:' + (Math.random() * 30 + 70) + '%; left:' + (Math.random() * 30 + 100) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ((Math.random() * 30) / 10) + 's;"></span>');
        }
    });

    $.each($(".mobile .board-bubbles-right"), function () {
        var bubblecount = 4;
        for (var i = 0; i <= bubblecount; i++) {
            var size = ((Math.random() * 40 + 40) / 4);
            $(this).append('<span class="particle-ll" style="top:' + (Math.random() * 30 + 70) + '%; left:' + (Math.random() * 30 - 34) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ((Math.random() * 30) / 10) + 's;"></span>');
        }
    });
    $.each($(".mobile .board-bubbles-left"), function () {
        var bubblecount = 3;
        for (var i = 0; i <= bubblecount; i++) {
            var size = ((Math.random() * 40 + 40) / 4);
            $(this).append('<span class="particle-rr" style="top:' + (Math.random() * 30 + 70) + '%; left:' + (Math.random() * 7 + 100) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ((Math.random() * 30) / 10) + 's;"></span>');
        }
    });

    var bubblecount, topPos, randomMax, posName, maxLeft;
    if ($(".desktop").css("display") == "none") {
        bubblecount = ($(".section-1").width() / 10);
        topPos = 12;
        randomMax = 88;
        maxLeft = 80;
        posName = "vh";
    } else {
        bubblecount = ($(".section-1").width() / 100) / 1.3;
        topPos = 6;
        randomMax = 40;
        maxLeft = 100;
        posName = "vw";
    }
    for (var i = 0; i <= bubblecount; i++) {
        var sizeBlue = ((Math.random() * randomMax + 40) / 2);
        var sizeGreen = ((Math.random() * randomMax + 40) / 2);
        $(".section-1").append('<span class="particle-blue" style="top:' + (Math.random() * randomMax + topPos) + posName + '; left:' + (Math.random() * maxLeft) + '%;width:' + sizeBlue + 'px; height:' + sizeBlue + 'px;animation-delay: ' + ((Math.random() * 30) / 10) + 's;"></span>');
        $(".section-1").append('<span class="particle-green" style="top:' + (Math.random() * randomMax + topPos) + posName + '; left:' + (Math.random() * maxLeft) + '%;width:' + sizeGreen + 'px; height:' + sizeGreen + 'px;animation-delay: ' + ((Math.random() * 30) / 10) + 's;"></span>');
    }
    var spoilers = $(".spoiler");
    spoilers.each(function () {
        var spoiler = $(this);
        spoiler.find(".spoiler-expand-btn").click(function () {
            if ($(this).hasClass("spoiler-open-btn")) {
                $(this).removeClass("spoiler-open-btn").addClass("spoiler-close-btn");
                spoiler.find(".spoiler-body").slideUp(1000);
            } else {
                $(this).removeClass("spoiler-close-btn").addClass("spoiler-open-btn");
                spoiler.find(".spoiler-body").slideDown(1000);
            }
        });
    });
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
        if ($(".menu").css("display") == "none") {
            $(".menu").css({"display": "flex"});
            $("body").css({"overflow": "hidden"});
        } else {
            $(".menu").css({"display": "none"});
            $("body").css({"overflow": "auto"});

        }
    });
    $(".menu-item-science").click(function () {
        $(this).find("i").toggleClass("fa-angle-down").toggleClass("fa-angle-up");
        $(".menu-science-subitems").fadeToggle();
    });
});
$(function () {

    // Remove svg.radial-progress .complete inline styling
    $('svg.radial-progress').each(function (index, value) {
        $(this).find($('circle.complete')).removeAttr('style');
    });

    // Activate progress animation on scroll
    $(window).scroll(function () {
        $('svg.radial-progress').each(function (index, value) {
            // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
            if (
                $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
                $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
            ) {
                // Get percentage of progress
                percent = $(value).data('percentage');
                // Get radius of the svg's circle.complete
                radius = $(this).find($('circle.complete')).attr('r');
                // Get circumference (2πr)
                circumference = 2 * Math.PI  * radius;
                // Get stroke-dashoffset value based on the percentage of the circumference
                strokeDashOffset = circumference - ((percent * circumference) / 100);
                // Transition progress for 1.25 seconds
                $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
            }
        });
    }).trigger('scroll');

});
