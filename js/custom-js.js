
jQuery( document ).ready(function() {
jQuery('.slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots:true
  });
  
 $(window).scroll(function() {
					if (jQuery(window).scrollTop() >= 200) {
						jQuery(".site-header").addClass("sticky");
					} else {
						jQuery(".site-header").removeClass("sticky");
					}
				});	
jQuery(".humburger").click(function() {
        jQuery("body").addClass("show-menu");
    });
	
jQuery(window).on('click touchend', function(e) {
	if (!jQuery(e.target).hasClass("humburger") && !jQuery(e.target).hasClass("navigation")  && jQuery(e.target).parents(".navigation").length === 0) {
        jQuery("body").removeClass("show-menu");
		
	}
  });
				
    });
  