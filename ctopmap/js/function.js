$(document).ready(function(){
	/*** Scrollbar ***/
	if ($(window).width() > 768) {
		$('.scroll').scrollbar();
	}
	
	/*** 行動版內容區塊高度初始化 ***/
	MainHeight = $('main').height();
	$('.offcanvas-content').height( MainHeight - 20 );
	$(window).resize(function(){
		MainHeight = $('main').height();
		$('.offcanvas-content').height( MainHeight - 20 );
	});
	
	/*** 垂直拖拉效果 ***/
	var canDrag = false;
				
	$('.drag > a').on('mousedown', function() {
		canDrag = true;
	}).on('mousemove', function() {
		$(window).mousemove(function(event) {
			if (canDrag) {
				if (event.pageY > 102 && event.pageY < $(window).height()) {
					$("main").css({
						height: event.pageY - 102 - 92
					});
					$(".offcanvas-content").css({
						height: event.pageY - 102 - 92
					});
				}
			}
		});
	}).on('touchmove', function() {
		var touch = event.targetTouches[0];
		event.preventDefault();
	
		if (touch.pageY > 102 && touch.pageY < $(window).height()) {
			$("main").css({
				height: touch.pageY - 102 - 92
			});
			$(".offcanvas-content").css({
				height: touch.pageY - 102 - 92
			});
		}
	});
	
	$(window).on('mouseup', function() {
		canDrag = false;
	});

	/*** 列印功能 ***/
	$(".print .form-check.button > .btn-print").click(function(){
		$(".search-form").removeClass('show').addClass('hide');
		$(".print .modal-header > button, .print .search-info").removeClass('hide').addClass('show');
	});
	$(".print .modal-header > .btn-cancel").click(function(){
		$(".search-form").removeClass('hide').addClass('show');
		$(".print .modal-header > button, .print .search-info").removeClass('show').addClass('hide');
	});
	
	/*** 帆布效果 ***/
	$(".offcanvas-block > .offcanvas-pane > h2 > a").click(function(){
		$(".offcanvas-block > .offcanvas-pane.collapse.in").collapse('hide');
	});
	$(".offcanvas-tab > a").click(function(){
		$(".offcanvas-block > .offcanvas-pane.collapse.in").collapse('hide');
	});
});