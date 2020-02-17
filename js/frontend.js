$(document).ready(function(){

    $('.menu_ticker').click(function(){
        $('.top_menu').slideToggle(200);
        $('body').toggleClass('mobile_overflow');
    });

    jQuery("a.scrollto").click(function () {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 700);
        return false;
    });

    $(window).load(function () {
        let phones = [
            {'mask': '+7 \\ \\ ###-###-##-##'}
        ];

        $('.js-mask-phone').inputmask({
            mask: phones,
            greedy: false,
            definitions: {
                '#':
                    {
                        validator: '[0-9]',
                        cardinality: 1
                    }
            }
        });
    });

});