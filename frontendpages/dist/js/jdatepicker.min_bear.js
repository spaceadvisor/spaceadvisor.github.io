/*
	@2018 Jdatepicker create by Jones
	焦點 - 日曆插件
	
	日期時間格式一律使用 yyyy-mm-dd
	
	引用方式
	$('.calendar').Jdatepicker({
	default_date:'2018-01-08',//預設起始日期(會執行起始日期點擊事件)
	defalut_click_event:function(e){
			$('mn[ajx_event_obj]').html('');
			$('.appointment_deta time').html($('.calendar').attr('select-date'));
			selecttour();
		},//預設每日點擊事件
	old_no_work:true,										//預設日期之前不作用
	disabled_date:['2018-01-24','2018-01-26~2018-01-28'],	//關閉作用日期
	event_date:{ 											//日期事件資料
		'2018-01-19':{										//日期
			discount:'6折',									//顯示折價
			price:'$2,800',									//價格
			order:true,										//是否有閃電符號
			click_event:function(e){ajx_get('2018-01-19');}	//點擊處理事件
		}
	}
	});
*/

(function(b){b.fn.extend({Jdatepicker:function(q){function r(l,f,h,e){f=new Date(f);h=new Date(h);e=f.getDay();b(l).append('<ul class="day"></ul>');var d=1,c="",g=null;for(i=0;i<h.getDate()+e;i++)if(b(l).find("ul.day").append('<li class="no"></li>'),i>=e&&(g=b(l).find("ul.day").find("li:last").removeClass("no").addClass("general").html(d++).attr("date-day",d-1)),c=f.getFullYear()+"-"+(9>f.getMonth()?"0":"")+(f.getMonth()+1)+"-"+(10>=d?"0":"")+(d-1),"undefined"!=typeof a&&"undefined"!=typeof a.old_no_work&&
1==a.old_no_work&&a.default_date>c)b(g).removeClass("general").addClass("no");else{if("undefined"!=typeof a&&"undefined"!=typeof a.disabled_date){var k=!1;for(aa in a.disabled_date)if(0<a.disabled_date[aa].search("~")){var p=a.disabled_date[aa].split("~");if(p[0]<=c&&p[1]>=c){b(g).removeClass("general").addClass("no");k=!0;break}}else if(a.disabled_date[aa]==c){b(g).removeClass("general").addClass("no");k=!0;break}if(k)continue}b(g).bind("click",function(){m=n.getFullYear()+"-"+(9>n.getMonth()?"0":
"")+(n.getMonth()+1)+"-"+(10>1*b(this).attr("date-day")?"0":"")+b(this).attr("date-day");m=m+" ("+"\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d".split("")[(new Date(m+" 00:00:00")).getDay()]+")";b(l).attr("select-date",m)});null!=g&&"undefined"!=typeof a&&"undefined"!=typeof a.defalut_click_event&&b(g).bind("click",a.defalut_click_event);null!=g&&"undefined"!=typeof a&&"undefined"!=typeof a.event_date&&"undefined"!=typeof a.event_date[c]&&("undefined"!=typeof a.event_date[c].order&&1==a.event_date[c].order&&
b(g).append('<i class="lightning"></i>'),"undefined"!=typeof a.event_date[c].discount&&null!=a.event_date[c].discount&&""!=a.event_date[c].discount&&b(g).removeClass("general").addClass("fold").append("<span>"+a.event_date[c].discount+"</span>"),"undefined"!=typeof a.event_date[c].price&&null!=a.event_date[c].price&&""!=a.event_date[c].price&&b(g).append('<div class="money">'+a.event_date[c].price+"</div>"),"undefined"!=typeof a.event_date[c].click_event&&(b(g)[0].onclick=a.event_date[c].click_event));
b(g).bind("click",function(){b(this).parent().find("li.active").removeClass("active");b(this).addClass("active")})}for(i=0;i<b(l).find("ul.day").find("li").length%7;i++)b(l).find("ul.day").append("<li></li>")}function t(a,f,h,e){b(a).append('<div class="monweek" select-date="'+e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+' 00:00:00"><div class="month"><a href="javascript:;" prev>&lt;</a><p>'+f+" "+h+'</p><a href="javascript:;" next>&gt;</a></div><ul class="week"><li>\u65e5</li><li>\u4e00</li><li>\u4e8c</li><li>\u4e09</li><li>\u56db</li><li>\u4e94</li><li>\u516d</li></ul></div>');
var d=new Date(e),c=new Date(e);d=d.setMonth(d.getMonth()-1);c=c.setMonth(c.getMonth()+1);b(a).find(".monweek a[prev]").on("click",function(a){k(b(a.target).parent().parent().parent(),new Date(d))});b(a).find(".monweek a[next]").on("click",function(a){k(b(a.target).parent().parent().parent(),new Date(c))});b(a).find(".monweek p").on("click",function(a){console.log(option_set.aa)})}function k(a,f){b(a).html("");var h=f.getMonth(),e=f.getFullYear();t(a,e,"\u4e00\u6708 \u4e8c\u6708 \u4e09\u6708 \u56db\u6708 \u4e94\u6708 \u516d\u6708 \u4e03\u6708 \u516b\u6708 \u4e5d\u6708 \u5341\u6708 \u5341\u4e00\u6708 \u5341\u4e8c\u6708".split(" ")[h],
f);h=new Date(f);e=new Date(f);var d=new Date(f);h=h.getDate();e=e.setDate(1);d.setDate(1);d.setMonth(d.getMonth()+1);d=d.setDate(d.getDate()-1);r(a,e,d,h);console.log(e+" "+d+" "+h)}var a=q,m;if("undefined"!=typeof a&&"now_date"==a)return alert(b(this).attr("select-date"));var n=new Date;k(this,n);return this}})})(jQuery);