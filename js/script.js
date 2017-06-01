var $j = jQuery.noConflict();

/*$j(document).ready(function($j){

$j("a").click(function(event){
event.preventDefault();
$j('html,body').animate( { scrollTop:$j(this.hash).offset().top } , 1000);
});
});*/
$j('ul.nav li.dropdown').hover(function() {
  $j(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $j(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});


function slideSwitch() {
    var $jactive = $j('.image.active');

    if ( $jactive.length === 0 ) $jactive = $j('.image:last');

    var $jnext =  $jactive.next().length ? $jactive.next()
        : $j('.image:first');

    $jactive.addClass('last-active');
        
    $jnext.css({opacity: 0})
        .addClass('active')
        .animate({opacity: 1}, 600, function() {
            $jactive.removeClass('active last-active');
        });
}

$j(function() {
    setInterval( "slideSwitch()", 6000 );
});



/*JQUERY FOR NAV BAR STARTS HERE*/


if ($j("nav").is('*')) {
    var elem = $j('nav');
    var offset = elem.offset();
    var topValue =  offset.top + elem.height();
    var width = elem.width();
    $j(window).scroll(function (event) {
          var y = $j(this).scrollTop();
            if (y >= topValue) {  
                if (!$j('nav').hasClass('follow')){	 
                   $j("nav").hide().addClass("follow").fadeIn(250);
                }
            } else {
              $j(".follow").removeClass("follow");
            }
     });
}

/*SCROLL EASING

JQuery(document).ready(function($j){
$j("a").click(function(event){
event.preventDefault();
$j("html,body").animate({scrollTop:$j(this.hash).offset().top}, 1000);
});
});*/