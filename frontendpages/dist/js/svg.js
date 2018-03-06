$(document).ready(function() {



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
	//svg變顏色
	$('img.svg').each(function(){
	    var $img = $(this);
	    var imgID = $img.attr('id');
	    var imgClass = $img.attr('class');
	    var imgURL = $img.attr('src');

	    $.get(imgURL, function(data) {
	        // Get the SVG tag, ignore the rest
	        var $svg = $(data).find('svg');

	        // Add replaced image's ID to the new SVG
	        if(typeof imgID !== 'undefined') {
	            $svg = $svg.attr('id', imgID);
	        }
	        // Add replaced image's classes to the new SVG
	        if(typeof imgClass !== 'undefined') {
	            $svg = $svg.attr('class', imgClass+' replaced-svg');
	        }
	        // Remove any invalid XML tags as per http://validator.w3.org
	        $svg = $svg.removeAttr('xmlns:a');
	        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
	        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
	            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
	        }
	        // Replace image with new SVG
	        $img.replaceWith($svg);
	    }, 'xml');
	});

});




//meeting 手機 價格方案用

