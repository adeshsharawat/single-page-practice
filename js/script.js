$(document).ready(function(){
  
    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('.navbar-nav a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 100
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });
    
    
    jQuery('.content, .sidebar').theiaStickySidebar({
      // Settings
      additionalMarginTop: 50
    });
    
    
    $('.datepicker').datepicker();
    
    $('.input-daterange').datepicker({
        startDate: "today",
         endDate: "06/20/2017"
    });
    
});