$(function() {
	// init controller
	var banner_anment = $(".banner-anment").outerHeight();
	var controller = new ScrollMagic.Controller();


	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: ".banner-anment", duration: banner_anment , reverse:false })
		.addTo(controller)
		// .addIndicators() 
		.on("enter", function (e) {
			   var ba_icon1 = $(".ba_icon1"),
			       ba_icon2 = $(".ba_icon2"),
			    	ba_icon3 = $(".ba_icon3"),
			    	ba_icon4 = $(".ba_icon4"),
			    	ba_icon5 = $(".ba_icon6"),
			    	ba_pc = $(".ba_icon5"),
			    	title1 = $(".bannerTitle h2"),
			    	title2 = $(".bannerTitle h3"),
			    	animent_a = $('.animentBox a');
			    var delay = 0;
			    //圖先出
			    delay += 0.2;

		 	   // 物件
		 	    TweenMax.fromTo(ba_pc, 1.2, { x: 0, y: 50,  opacity: 0, display: 'block' }, 
		 	    	{ x: 0, y: 0,  opacity: 1, ease: Power3.easeOut, delay: delay })
		 	    delay += 0.2;
		 	    TweenMax.fromTo(ba_icon1, 0.7, { x: 50, y: 150, scale: 0.1, opacity: 0, display: 'block' }, 
		 	    	{ x: 0, y: 0, scale: 1, opacity: 1, ease: Power3.easeOut, delay: delay })
		 	    delay += 0.2;
		 	    TweenMax.fromTo(ba_icon2, 0.7, { x: 100, y: -150, scale: 0.1, opacity: 0, display: 'block' }, 
		 	    	{ x: 0, y: 0, scale: 1, opacity: 1, ease: Power3.easeOut, delay: delay })
		 	    delay += 0.2;

		 	    TweenMax.fromTo(ba_icon3, 0.7, { x: -50, y: 150, scale: 0.1, opacity: 0, display: 'block' }, 
		 	    	{ x: 0, y: 0, scale: 1, opacity: 1, ease: Power3.easeOut, delay: delay })
		 	    delay += 0.2;
		 	    TweenMax.fromTo(ba_icon4, 0.7, { x: -150, y: 150, scale: 0.1, opacity: 0, display: 'block' }, 
		 	    	{ x: 0, y: 0, scale: 1, opacity: 1, ease: Power3.easeOut, delay: delay })
		 	    delay += 0.2;

		 	    TweenMax.fromTo(ba_icon5, 1.3, { x: 0, y: 0, scale: 1, opacity: 0, display: 'block' }, 
		 	    	{ x: 0, y: 0, scale: 1, opacity: 1, ease: Power3.easeOut, delay: delay });
		 	    delay += 0.1;
		 	    //文字
		 	    TweenMax.fromTo(title1, 1.2, { x: 0, y: 80,  opacity: 0, display: 'block' }, 
		 	    	{ x: 0, y: 0,  opacity: 1, ease: Power3.easeOut, delay: delay })
		 	    delay += 0.3;
		 	    TweenMax.fromTo(title2, 1.2, { x: 0, y: 50,  opacity: 0, display: 'block' }, 
		 	    	{ x: 0, y: 0,  opacity: 1, ease: Power3.easeOut, delay: delay })
		 	    delay += 0.3;
		 	    //按鈕
		 	    TweenMax.fromTo(animent_a, 1, { x: 0, y: 30,  opacity: 0, display: 'block' }, 
		 	    	{ x: 0, y: 0,  opacity: 1, ease: Power3.easeOut, delay: delay })
		})
});
