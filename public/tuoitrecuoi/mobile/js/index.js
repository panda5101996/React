/**
 * Website start here
 */

$(window).on("load", function(e) {
    $(".carousel").css("height", $(".carousel").width() * 9 / 16);
    $('.nav-pills').tabdrop();
    wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        callback: function(box) {
            console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
    });
    wow.init();
    if ($(window).width() > 1199) {
        if ($('.aside').length > 0) {
            var _top = $('.aside').offset().top - parseFloat($('.aside').css('marginTop').replace(/auto/, 0)) - 120;
            $(window).scroll(function(evt) {
                var _y = $(this).scrollTop();
                if (_y > _top) {
                    $('.aside').addClass('fixed');

                } else {
                    $('.aside').removeClass('fixed');
                }
            });
        }
    }
    if ($(window).width() > 1199) {
        s = skrollr.init({ forceHeight: false });
    }

    $(".hightlight-error").css("height", $(window).height() - $(".footer").outerHeight());

});
$(window).resize(function() {

    $(".hightlight-error").css("height", $(window).height() - $(".footer").outerHeight());

});
$(document).ready(function($) {



    $('.tabs-bh-2 a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        
        initSwiper();
    })

    $('.btn-search').click(function() {
        if ($("body").hasClass("toggled")) {
            $("body").removeClass("toggled");
        }
    });
    var nav = document.querySelector(".menu");
    new Headroom(nav, {
        tolerance: {
            down: 2,
            up: 5
        },
        offset: 100,
        classes: {
            initial: "slide",
            pinned: "slide--reset",
            unpinned: "slide--up"
        }
    }).init();
    $("#sidebar-wrapper").css("height", $(window).height() - 45);
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("show");
        $("body").toggleClass("toggled");
    });
    $(".btn-sub-menu").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("show");
        $("body").toggleClass("toggled-left");
    });
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 0,
        freeMode: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    $('.ui.sticky')
        .sticky({
            context: '.ui-rail'
        });
    $('.fancybox').fancybox();
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for'
    });

    $('.lazy').lazy();
    $('#datetimepicker4').datetimepicker({
        format: 'DD/MM/YYYY'
    });


    $('.single-item-1').slick();
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {

    })
    if ($(".btn-top").length > 0) {
        $(window).scroll(function() {
            var e = $(window).scrollTop();
            if (e > 100) {
                $(".btn-top").show()
            } else {
                $(".btn-top").hide()
            }
        });
        $(".btn-top").click(function() {
            $('body,html').animate({
                scrollTop: 0
            })
        });
    }

    if ($(".btn-searchsg").length > 0) {
        $(".btn-searchsg").click(function() {
            if ($(".frm-search-1").hasClass("active")) {
                $(".frm-search-1").removeClass("active");
            } else {
                $(".frm-search-1").addClass("active");
                return false;
            }
        });
    }

    if ($('.mCustomScrollbar').length > 0) {
        $('.mCustomScrollbar').mCustomScrollbar({
            scrollInertia: 500
        });
    }
    setTimeout(function() {
        $('.loading').fadeOut(300, function() {
            $(this).remove();
        });
    }, 800);

    $('.btn-reply-s').click(function() {
        if ($(this).parent(".tool-like").hasClass('show')) {
            $(".tool-like").removeClass("show");
        } else {
            $(".tool-like").removeClass("show");
            $(this).parent(".tool-like").addClass('show');
        }
    });

    $('.nobg').on('hidden.bs.modal', function(e) {
        backdrop: false
        // do something...
    })
});
$(document).click(function() {
    $(".a").removeClass("active");
    $(".a").removeClass("show");
    $("#a").removeClass("normal");
});
$('.a').click(function(event) {
    event.stopPropagation();
});

(function($) {
    $.fn.menumaker = function(options) {
        var cssmenu = $(this),
            settings = $.extend({
                format: "dropdown",
                sticky: false
            }, options);
        return this.each(function() {
            $(this).find(".button").on('click', function() {
                $(this).toggleClass('menu-opened');
                var mainmenu = $(this).next('ul');
                if (mainmenu.hasClass('open')) {
                    mainmenu.slideToggle().removeClass('open');
                } else {
                    mainmenu.slideToggle().addClass('open');
                    if (settings.format === "dropdown") {
                        mainmenu.find('ul').show();
                    }
                }
            });
            cssmenu.find('li ul').parent().addClass('has-sub');
            multiTg = function() {
                cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
                cssmenu.find('.submenu-button').on('click', function() {
                    $(this).toggleClass('submenu-opened');
                    if ($(this).siblings('ul').hasClass('open')) {
                        $(this).siblings('ul').removeClass('open').slideToggle();
                    } else {
                        $(this).siblings('ul').addClass('open').slideToggle();
                    }
                });
            };
            if (settings.format === 'multitoggle') multiTg();
            else cssmenu.addClass('dropdown');
            if (settings.sticky === true) cssmenu.css('position', 'fixed');
            resizeFix = function() {
                var mediasize = 1000;
                if ($(window).width() > mediasize) {
                    cssmenu.find('ul').show();
                }
                if ($(window).width() <= mediasize) {
                    cssmenu.find('ul').hide().removeClass('open');
                }
            };
            resizeFix();
            return $(window).on('resize', resizeFix);
        });
    };
})(jQuery);

function tabBlock(id) {

    $('#' + id + ' ul.tab-ul li > a').click(function() {
        $('#' + id + ' ul.tab-ul li').removeClass('show');
        $(this).parent().addClass('show');
        var currentTab = $(this).attr('href');
        $('#' + id + ' .tab').hide();
        $(currentTab).show();
        if ($('.scroll-pane').length > 0) {
            $('.scroll-pane').jScrollPane();

        }

    });
}

function snippSlide(id) {

    //plugin bootstrap minus and plus
    //http://jsfiddle.net/laelitenetwork/puJ6G/
    $('#' + id + ' .btn-number').click(function(e) {

        e.preventDefault();

        fieldName = $(this).attr('data-field');
        type = $(this).attr('data-type');
        var input = $('#' + id + " input[name='" + fieldName + "']");
        var currentVal = parseInt(input.val());
        if (!isNaN(currentVal)) {
            if (type == 'minus') {

                if (currentVal > input.attr('min')) {
                    input.val(currentVal - 50000).change();
                }
                if (parseInt(input.val()) == input.attr('min')) {
                    $(this).attr('disabled', true);
                }

            } else if (type == 'plus') {

                if (currentVal < input.attr('max')) {
                    input.val(currentVal + 50000).change();
                }
                if (parseInt(input.val()) == input.attr('max')) {
                    $(this).attr('disabled', true);
                }

            }
        } else {
            input.val(0);
        }
    });

    $('#' + id + ' .input-number').focusin(function() {
        $(this).data('oldValue', $(this).val());
    });
    $('#' + id + ' .input-number').change(function() {

        minValue = parseInt($(this).attr('min'));
        maxValue = parseInt($(this).attr('max'));
        valueCurrent = parseInt($(this).val());
        name = $(this).attr('name');
        if (valueCurrent >= minValue) {
            $('#' + id + " .btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
        } else {
            alert('Sorry, the minimum value was reached');
            $(this).val($(this).data('oldValue'));
        }
        if (valueCurrent <= maxValue) {
            $('#' + id + " .btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
        } else {
            alert('Sorry, the maximum value was reached');
            $(this).val($(this).data('oldValue'));
        }
    });
    $('#' + id + " .input-number").keydown(function(e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
}


function initSwiper() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 0,
        freeMode: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}