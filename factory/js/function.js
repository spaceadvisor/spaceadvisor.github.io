/*!function(a) {
    "use strict";
    a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var o = a(this.hash);
            if ((o = o.length ? o : a("[name=" + this.hash.slice(1) + "]")).length)
                return a("html, body").animate({
                    scrollTop: o.offset().top - 54
                }, 1e3, "easeInOutExpo"),
                !1
        }
    })
}(jQuery);*/

!function(a){"use strict";a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var o=a(this.hash);if((o=o.length?o:a("[name="+this.hash.slice(1)+"]")).length)return a("html, body").animate({scrollTop:o.offset().top-54},1e3,"easeInOutExpo"),!1}}),a(".js-scroll-trigger").click(function(){a(".navbar-collapse").collapse("hide")}),a("body").scrollspy({target:"#navbar",offset:56});var o=function(){a("#navbar").offset().top>100?a("#navbar").addClass("navbar-shrink"):a("#navbar").removeClass("navbar-shrink")};o(),a(window).scroll(o),a(".portfolio-modal").on("show.bs.modal",function(o){a(".navbar").addClass("d-none")}),a(".portfolio-modal").on("hidden.bs.modal",function(o){a(".navbar").removeClass("d-none")})}(jQuery);

$(document).ready(function(){
	HeaderWidth = $('header').width();
	$('header').height( HeaderWidth * 1481/1280 );
	VideoWidth = $('.video iframe').width();
	$('.video iframe').height( VideoWidth * 482/856 );
	EbookWidth = $('.e-book iframe').width();
	$('.e-book iframe').height( EbookWidth * 482/856 );
			
	$(window).resize(function(){
		HeaderWidth = $('header').width();
		$('header').height( HeaderWidth * 1481/1280 );
		VideoWidth = $('.video iframe').width();
		$('.video iframe').height( VideoWidth * 482/856 );
		EbookWidth = $('.e-book iframe').width();
		$('.e-book iframe').height( EbookWidth * 482/856 );
	});
});

$(function(){
	inView('.arborescence-1:not(.in-view)').on('enter', function(){
		$('.arborescence-1').addClass('in-view');
	});
	inView('.arborescence-2:not(.in-view)').on('enter', function(){
		$('.arborescence-2').addClass('in-view');
	});
	inView('.arborescence-3:not(.in-view)').on('enter', function(){
		$('.arborescence-3').addClass('in-view');
	});
	inView('.arborescence-4:not(.in-view)').on('enter', function(){
		$('.arborescence-4').addClass('in-view');
	});
	inView('.arborescence-5:not(.in-view)').on('enter', function(){
		$('.arborescence-5').addClass('in-view');
	});
	inView('.arborescence-6:not(.in-view)').on('enter', function(){
		$('.arborescence-6').addClass('in-view');
	});
	inView('.arborescence-7:not(.in-view)').on('enter', function(){
		$('.arborescence-7').addClass('in-view');
	});
	inView('.arborescence-8:not(.in-view)').on('enter', function(){
		$('.arborescence-8').addClass('in-view');
	});
	inView('.arborescence-9:not(.in-view)').on('enter', function(){
		$('.arborescence-9').addClass('in-view');
	});
});
