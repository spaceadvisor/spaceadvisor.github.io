$(function(){
	// gotop
	if ($(".gotop").length > 0) {
		$(".gotop").click(function() {
			$("html,body").animate({ scrollTop: 0 }, 1000);
			return false;
		});
	}

	// mb 漢堡選單內容
	if ($(".__mb #menu").length > 0) {
		$(".__mb #menu").mmenu({
			"extensions": [
				"fx-menu-zoom",
				"fx-panels-zoom",
				"pagedim-black"
			],
			"offCanvas": {
				"position": "right"
			}
		});
	}
	//mobile頭部搜尋用
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	$('header .__mb .search #search').click(function() {
		$('header .__mb .search').toggleClass('search-open');
	});
	// home.html
	if ($(".index .flexslider").length > 0) {
		$(".index .flexslider").flexslider({
			animation: "slide",
			slideshowSpeed: 5000, //展示时间间隔ms
			animationSpeed: 1500, //滚动时间ms
			touch: true //是否支持触屏滑动
		});
	}
});

//index 類型收合用
$(function(){
	$('#style-open').click(function() {
		$('.style-other').slideToggle(0);
	});

	$('.style > ul > li > a').hover(
		function() {
			$(this).find('.mouseout').css({'opacity': 0});
			$(this).find('.mouseover').css({'opacity': 1});
		}, function() {
			$(this).find('.mouseout').css({'opacity': 1});
			$(this).find('.mouseover').css({'opacity': 0});
	});
});

//search 桌機用
$(function(){
	$('.search_item').click(function(){
		if($(this).siblings().hasClass('open')){
			 $(this).siblings().removeClass('open');
			//20180327 
			//$(this).find('i').attr("class", "fa fa-angle-down");
		}else{
			 $('.search_item_detail').removeClass('open');
			//20180327
			//$('.search_item').find('i').attr("class", "fa fa-angle-down");
			$(this).siblings().toggleClass('open');
			//20180327
			//$(this).find('i').attr("class", "fa fa-angle-up");
		}
	});//搜尋bar縮合

	$('.search_in > li').click(function(){
		 $('.search-box.searchPopup').removeClass('on');//map.php 更多條件用
	});//其他

	$(function(){
		$('.search-list > ul > li > .place > .text > i.plan').click(function(){
			$(this).parent().siblings('.down').slideToggle();
		});
		$('.search-list > ul > li > .place > .showbox-all > .showbox').click(function(){
			$(this).parent().siblings('.down').slideToggle();
		});
	});//點擊價格方案/圖片 打開下方區塊

	$(function(){
		// 用來顯示大圖片用
		var $showImage = $('#show-image');

		// 當滑鼠移到 .abgne 中的某一個超連結時
		$('.abgne a.pic').click(function(){
			// 把 #show-image 的 src 改成被移到的超連結的位置
			$showImage.attr('src', $(this).attr('href'));
		}).click(function(){
			// 如果超連結被點擊時, 取消連結動作
			return false;
		});
	});//點小圖換大圖
});

//search 手機用 搜尋bar
$(function(){
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	$('#condition').click(function(){
		$('#sequence').removeClass('this'); // allen
		if($(this).hasClass('this')){
			$(this).removeClass('this');
			$('.search-send').hide();
			$('#condition > i').attr("class", "fa fa-angle-down");
			$('body').css({'height': 'auto'});
		}
		else{
			$('.search-mobile > a').removeClass('this');
			$(this).addClass('this');
			$('.search-send').show();
			$('#condition > i').attr("class", "fa fa-angle-up");
			$('#sequence > i').attr("class", "fa fa-angle-down");
			$('body').css({'height': 0});
		}
		$('#sequence-open').hide();
		$('#condition-open').toggle() // allen
	});//搜尋條件
	windowWidth = $(window).width();
	$(window).resize(function() {
		if($(this).width() >= 980 ){
			$('body').css({'height': 'auto'});
		}
	});
	$('#sequence').click(function(){
		$('#condition').removeClass('this'); // allen
		if($(this).hasClass('this')){
			$(this).removeClass('this');
			$('.search-send').hide();
			$('#sequence > i').attr("class", "fa fa-angle-down");
			$('body').css({'height': 'auto'});
		}
		else{
			$('.search-mobile > a').removeClass('this');
			$(this).addClass('this');
			$('.search-send').show();
			$('#sequence > i').attr("class", "fa fa-angle-up");
			$('#condition > i').attr("class", "fa fa-angle-down");
			$('body').css({'height': 0});
		}
		$('#condition-open').hide();
		$('#sequence-open').toggle(); // allen
	});//搜尋排序

	if($(window).width() >= 980 ){
		$('body').css({'height': 'auto'});
	}

	$(window).resize(function() {
		if(windowWidth != $(window).width() && $(window).width() <= 980 ){
			$('body').css({'height': 'auto'});
		}else{
			$('.search-send').hide();
			$('#condition-open').hide();
			$('#condition').removeClass('this');
			$('#condition > i').attr("class", "fa fa-angle-down");
			$('#sequence-open').hide();
			$('#sequence').removeClass('this');
			$('#sequence > i').attr("class", "fa fa-angle-down");
		}
		windowWidth = $(window).width();
	});

	$(".search-condition").css({ height: windowHeight - 207 + 'px' });

	$('.search_bar > ul > li > p').click(function(){
		$(this).toggleClass('this')
		$(this).siblings('.search_item_detail').slideToggle();
	});//點擊標題打開內容
});

//場地列表 i標籤點擊變色
$(function(){
	$('i.heart, .meeting .day-plan ._others .heart, .meeting .outline .link .heart').click(function(){
		$(this).toggleClass('this');
	});
	$('i.add, .meeting .day-plan ._others .add, .meeting .outline .link .add').click(function(){
		$(this).toggleClass('this');
	});
});

//meeting 價格方案 點選打開
$(function(){
	$('.price-plan > .content > .content-720 > .box > ul > li > div > p.program, .price-plan > .content > .content-720 > .box > ul > li > div > p.price').click(function(){ // allen
		$(this).parent().siblings().toggle();
	});
	$('.box a.more').click(function(){ // allen
		var $this = $(this).parents('.box');
		if($this.hasClass('open')) {
			$this.removeClass('open');
		} else {
			$this.addClass('open');
		}
	});
});

//meeting banner切換用
$('.banner > .banner-box > .panorama').css({'opacity':1,'zIndex':1});
$(function(){
	$('.banner > .banner-nav > div > a.panorama').click(function(){
		$(this).addClass('this').siblings().removeClass('this');
		$('.banner > .banner-box > .panorama').css({'opacity':1,'zIndex':1});
		$('.banner > .banner-box > .pic').css({'opacity':0,'zIndex':-1});
		$('.banner > .banner-box > .video').css({'opacity':0,'zIndex':-1});
	});
	$('.banner > .banner-nav > div > a.pic').click(function(){
		$(this).addClass('this').siblings().removeClass('this');
		$('.banner > .banner-box > .panorama').css({'opacity':0,'zIndex':-1});
		$('.banner > .banner-box > .pic').css({'opacity':1,'zIndex':1});
		$('.banner > .banner-box > .video').css({'opacity':0,'zIndex':-1});
	});
	$('.banner > .banner-nav > div > a.video').click(function(){
		$(this).addClass('this').siblings().removeClass('this');
		$('.banner > .banner-box > .panorama').css({'opacity':0,'zIndex':-1});
		$('.banner > .banner-box > .pic').css({'opacity':0,'zIndex':-1});
		$('.banner > .banner-box > .video').css({'opacity':1,'zIndex':1});
	});
});
//meeting 加入收藏 比較場地
$(function(){
	$('.anchor > .content > .day-plan > span > a').click(function(){
		$(this).toggleClass('this');
	});//桌機
	$('.outline > .content-720 > .link > a').click(function(){
		$(this).toggleClass('this');
	});//手機
});
//meeting 價格方案 選擇
$(function(){
	$('.box > ul > li > div > a.select').click(function(){
		$('#cart').css('background-color','gray');
		function first(){
			$('#cart').css('background-color','#ddd');
		};
		setTimeout(first, 500);
	});//桌機
});

//meeting 手機 評論
$(function(){
	$('.comment .star > p > a.more').click(function(){
		$(this).parent().siblings().toggle();
	});
});

//meeting 手機 價格方案用
$(function(){
	var windowHeight = $(window).height();
	$(".mobile-plan.mobile > .plan-box").css({ height: windowHeight + 'px' });
	$(".mobile-plan.mobile > .plan-box > .scroll").css({ height: windowHeight + 'px' });

	$('.mobile-plan a.first').click(function() {
		$(this).toggleClass('this');
		if($(this).hasClass('this')){
			$(this).find('i').html('確定方案');
			$('body,html').css({'overflow': 'hidden'});
		}else{
			$(this).find('i').html('選擇方案');
			$('body,html').css({'overflow': ''});
		}
		$('.mobile-plan > .plan-box').toggle();
	});
	$('.mobile-plan > .plan-box > .scroll > ul > li > div > i, .mobile-plan > .plan-box > .scroll > ul > li > div > .price').click(function() {
		$(this).parent().siblings('.text').toggle();
	});
	$(window).on('resize', function() {
		var windowHeight = $(window).height();
		$(".mobile-plan-stecla > .plan-box").css({ height: windowHeight - 116 + 'px' });
		$(".mobile-plan-stecla > .plan-box > .scroll").css({ height: windowHeight - 166 + 'px' });
    });
});

$(document).ready(function() {
	if ($(".placeList .pic ul").length > 0) {
		$('.placeList .pic ul').slick({
			dots:  false,
			arrows: true,

			autoplaySpeed: 3500,
			infinite: true,
			speed: 600,
			cssEase: 'ease',
			//vertical: true,
			pauseOnHover: false,
		});
	}

	/*更多條件開關*/
	$('.search.mapBox .conditions, .search.mapBox .confirmBtn a').on('click',function(event){ // allen
		event.stopPropagation();
		if(!$('.search-box.searchPopup').hasClass('on')){
			$('.search-box.searchPopup').addClass('on');
			$('body,html').css({'overflow':'hidden'});
			$('.search-box.searchPopup').fadeIn();
			$(this).find('i').attr("class", "fa fa-angle-up");
			}else{
			$('body,html').css({'overflow':''});
			$('.search-box.searchPopup').removeClass('on');
			$('.search_item_detail').removeClass('open');
			$('.search-box.searchPopup').fadeOut();
			$(this).find('i').attr("class", "fa fa-angle-down");
		}
	});

	$('.contclose').on('click',function(){
		$('body,html').css({'overflow':''});
		$('.search-box.searchPopup').removeClass('on');
		$('.search_item_detail').removeClass('open');
		$('.search-box.searchPopup').fadeOut();
	});

//meeting 手機 價格方案用

		var windowHeight = $(window).height();
		$(".stepBox .mobile-plan-stecla > .plan-box").css({ height: windowHeight - 88 + 'px' });  // allen
		$(".stepBox .mobile-plan-stecla > .plan-box > .scroll").css({ height: windowHeight - 128 + 'px' });  // allen

		$('.stepBox .mobile-plan-stecla > a.first').click(function() { // allen
			$(this).toggleClass('this');
			if($(this).hasClass('this')){
				$(this).find('i').html('確定明細');
				$('body,html').css({'overflow': 'hidden'});
			}else{
				$(this).find('i').html('查看明細');
				$('body,html').css({'overflow': ''});
			}
			$('.stepBox .mobile-plan-stecla > .plan-box').toggle();
		});
		$('.stepBox .mobile-plan-stecla > .plan-box > .scroll > ul > li > div > i').click(function() {
			$(this).parent().siblings('.text').slideToggle();
		});
	$(window).on('resize', function() {
		var windowHeight = $(window).height();
		$(".stepBox .mobile-plan-stecla > .plan-box").css({ height: windowHeight - 116 + 'px' });
		$(".stepBox .mobile-plan-stecla > .plan-box > .scroll").css({ height: windowHeight - 166 + 'px' });
	});
	windowWidth = $(window).width();
	$(window).resize(function() {
		if(windowWidth != $(window).width() && $(window).width() <= 980 ){
			$('body,html').css({'overflow': ''});
		}else{
		}
	});

	//四大保證 advantage.php
	$('.advantageTag li').on('click', function() {
		var st_current = $(this).index();
		$('.advantageTag li').removeClass('active');
		$(this).addClass('active');
		$('.advantageContent.active').removeClass('active');
		$('.advantageContent:eq(' + st_current + ')').addClass('active');
		console.log(st_current);
	});

	//職缺列表 recruiting.php
	$('.vacancylist li').on('click',function(){
		if(!$(this).hasClass('active')){
			$('.vacancylist li').removeClass('active');
			$(this).addClass('active');
			$('.vacancylist .vacContent').hide();
			$(this).children('.vacContent').show();
			scrollToElemFront($(this));
		}else{
			$('.vacancylist li').removeClass('active');
			$('.vacancylist .vacContent').hide();
		}
	});


	//instructions.php
	$('.instructionsBox .sumber > li').on('click',function(){
		var su_li = $('.instructionsBox .sumber>li'),
			su_content = $('.instructionsBox .sumber .sumContent');

		if(! $(this).hasClass('open')){
			su_li.removeClass('open');
			$(this).addClass('open');
			su_content.hide();
			$(this).children('.sumContent').show();
		}else{
			su_li.removeClass('open');
			su_content.hide();
		}
	});
	//application_1.php
	$('.applicationBox .sumber > li').on('click',function(){
		var su_li = $('.applicationBox .sumber > li'),
			su_content = $('.applicationBox .sumber .sumContent');

		if(! $(this).hasClass('open')){
			su_li.removeClass('open');
			$(this).addClass('open');
			su_content.hide();
			$(this).children('.sumContent').show();
		}else{
			su_li.removeClass('open');
			su_content.hide();
		}
	});

	//svg
	function myDraw(path, url, x, y, w, h, id){
		//create clipPath Element
		var clippath = document.createElementNS("http://www.w3.org/2000/svg","clipPath");
		clippath.setAttribute("id", id);
		svgcanv.appendChild(clippath);

		//draw the path
		var cp=paper.path(path).translate(x, y).attr({stroke: 0});
		$(cp.node).appendTo('#'+id+'');

		//assoc clipPath with image
		var img = paper.image(url,x,y,w,h);//.attr({fill:"#111",opacity:0.7});
		img.node.setAttribute("clip-path","url(#"+id+")");
		img.node.setAttribute("class",id);
	}
});


$(function(){
	// tip
	if ($('span._tip').length > 0) {
		$('span._tip').poshytip({
			className: 'tip-twitter',
			showTimeout: 1,
			alignTo: 'target',
			alignX: 'center',
			offsetY: 5,
			allowTipHover: false,
			fade: true,
			slide: false
		});
	}
});

$(function(){
	// 訂單列表頁, 收合付款資訊
	$('.bookList .buttons .payment:not(.disable) .btn').click(function() {
		$(this).parents('.bookList').find('.paymentInformation').toggle();
	});
	// 訂單列表頁, 收合評論資訊
	$('.bookList .buttons .comment:not(.disable) .btn').click(function(){
		$(this).parents('.comment').find('.comment_list').toggle();
	});
	// 場地管理頁, 收合加購資訊
	$('.orders_space .site-value-add.additional_product .pricePlan ._switch ._have').click(function(){
		$(this).parents('.pricePlan').toggleClass('_show');
	});

	/** BEGIN additional_product_list.js 做列表收合 **/
	//uses classList, setAttribute, and querySelectorAll
	//if you want this to work in IE8/9 youll need to polyfill these
	(function(){
		var d = document,
		accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
		setAria,
		setAccordionAria,
		switchAccordion,
		touchSupported = ('ontouchstart' in window),
		pointerSupported = ('pointerdown' in window);

		skipClickDelay = function(e){
			e.preventDefault();
			e.target.click();
		}
		setAriaAttr = function(el, ariaType, newProperty){
			el.setAttribute(ariaType, newProperty);
		};
		setAccordionAria = function(el1, el2, expanded){
			switch(expanded) {
				case "true":
					setAriaAttr(el1, 'aria-expanded', 'true');
					setAriaAttr(el2, 'aria-hidden', 'false');
					break;
				case "false":
					setAriaAttr(el1, 'aria-expanded', 'false');
					setAriaAttr(el2, 'aria-hidden', 'true');
					break;
				default:
					break;
			}
		};
		//function
		switchAccordion = function(e) {
			// console.log("triggered");
			e.preventDefault();
			var thisAnswer = e.target.parentNode.nextElementSibling;
			var thisQuestion = e.target;
			if(thisAnswer.classList.contains('is-collapsed')) {
				setAccordionAria(thisQuestion, thisAnswer, 'true');
				scrollToElemFront($(thisQuestion), 100);
			} else {
				setAccordionAria(thisQuestion, thisAnswer, 'false');
			}
			thisQuestion.classList.toggle('is-collapsed');
			thisQuestion.classList.toggle('is-expanded');
			thisAnswer.classList.toggle('is-collapsed');
			thisAnswer.classList.toggle('is-expanded');

			thisAnswer.classList.toggle('animateIn');
		};
		for (var i = 0,len = accordionToggles.length; i < len; i++) {
			if(touchSupported) {
				accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
			}
			if(pointerSupported) {
				accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
			}
			accordionToggles[i].addEventListener('click', switchAccordion, false);
		}
	})();
	/** END additional_product_list.js **/
})

// do comma on number
function formatNumber(num) {
    num += '';
    var x = num.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

function scrollToElemFront(elem, additional, speed, wrap) {
    var wrap = wrap || $('html, body');
    var speed = speed || 200;
    var elem_offset_top = elem.position().top;
    var additional = additional || -50;
    wrap.animate({
        scrollTop: elem_offset_top + additional
    }, {
        duration: speed,
        easing: 'linear'
    });
}
