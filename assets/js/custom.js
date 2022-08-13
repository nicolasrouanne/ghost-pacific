(function($) {

	/* Blog Pager / added interaction on hover
	------------------------------------------------------*/
	$(".blogpager-inner li").mouseenter(function() {
		$(this).addClass("active");
	}).mouseleave(function() {
	    $(this).removeClass("active");
	});


	/* Overlay button
	------------------------------------------------------*/
	$(".overlay-trigger").click(function(){
		$(this).closest(".overlay-panel").find(".overlay").toggleClass("open");
	})
		$(".overlay .widget, .overlay .nav-outer").click(function(e) {
			e.stopPropagation();
		});


	/* Enable tweet on blockquote
	------------------------------------------------------*/
	$("blockquote").each(function(){
		var completeurl = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
			completeurl = encodeURIComponent(completeurl);

		var entityMap = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': '&quot;',
			"'": '&#39;',
			";": '&#58;',
		};
		var tweetshare = "https://twitter.com/share?url=" + completeurl;
		var getquote = $(this).text().replace(/[&<>"';\/]/g, function (s) { return entityMap[s]; });

		$(this).append("<p><a class='tweetthis' target='_blank' title='Tweet this' href='" + tweetshare + "&amp;text=" + getquote + " - via '>Tweet this</a></p>")
	});


	/* Toggle Comment
	------------------------------------------------------*/
	$(".comment-trigger").click(function(){
		$(".comment-outer .comments").slideToggle("300", function(){
			$('.comment-trigger').toggleClass("active")
		});
	})


	/* Enable zoom on Gallery
	------------------------------------------------------*/
	$('.kg-gallery-image img').each(function(index, el) {
	    $( "<a href='" + $(this).attr('src') + "' class='zoom'></a>" ).insertAfter( $(this) );
	    $(this).appendTo($(this).next("a"));
	});

		// Initialize Fluidbox
		$('.zoom').fluidbox({
			viewportFill: 0.8,
			stackIndex: 100,
		});


	/* Display NextPrev on certain position
	------------------------------------------------------*/
	window.onload = function() {
	    var navaxisY = window.innerHeight / 2; // Set current position of pagination
	    var hieghtThreshold_start = $(".post-body").offset().top - navaxisY; // Starting point
	    var hieghtThreshold_end  = $(".post-footer").offset().top - navaxisY ; // End point
	    $(window).scroll(function() {
	        var scroll = $(window).scrollTop();

	        if (scroll >= hieghtThreshold_start && scroll <=  hieghtThreshold_end ) {
	            $('.blogpager-outer').addClass('fade');
	        } else {
	            $('.blogpager-outer').removeClass('fade');
	        }
	    });
	};


	/* Append image background on KG-Bookmark instead
	------------------------------------------------------*/
	// store the image link inside a variable from 'src' attribute
	var getImageSrc = $('.kg-bookmark-thumbnail img').attr('src');

	// add div background image using the variable above
	$('.kg-bookmark-thumbnail').css('background-image', 'url(' + getImageSrc + ')');

	// Hide the image tag
	$('.kg-bookmark-thumbnail img').hide();

}(jQuery));
