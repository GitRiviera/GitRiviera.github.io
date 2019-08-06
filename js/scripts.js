function browsercheck(){

    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]" 
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1 - 71
    var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;


    // var output = 'Detecting browsers by ducktyping:<hr>';
    // output += 'isFirefox: ' + isFirefox + '<br>';
    // output += 'isChrome: ' + isChrome + '<br>';
    // output += 'isSafari: ' + isSafari + '<br>';
    // output += 'isOpera: ' + isOpera + '<br>';
    // output += 'isIE: ' + isIE + '<br>';
    // output += 'isEdge: ' + isEdge + '<br>';
    // output += 'isBlink: ' + isBlink + '<br>';
    // document.body.innerHTML = output;
if (isSafari == true){
    document.body.display="none";
    var output= 'As the site is still under construction, we currently dont support the Safari browser. Please use any other browser.';
    document.body.innerHTML = output;
};
}

browsercheck()






$(document).ready(function() {
    var navbar_ref = $(".top-banner");
    var navlink_ref = $(".nav-links");

    //changes the transparency when page is scrolled

    window.onscroll=function(){
        if (window.scrollY > 0){
            navbar_ref.css('background-color','rgba(0,0,0,0.5)');
            $.data( this, "scrollCheck", setTimeout(function() {
                navbar_ref.css('background-color','rgba(0,0,0,1)');
            }, 700) );
        }
    }

// http://jsfiddle.net/Matt_Coughlin/5RNhL/3/
// https://stackoverflow.com/questions/16325679/activate-css3-animation-when-the-content-scrolls-into-view

    function isElementInViewport(loc_input) {
        var $elem = $(loc_input);
    
        // Get the scroll position of the page.
        // var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
        var scrollElem = 'html';

        var viewportTop = $(scrollElem).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
    
        // Get the position of the element on the page.
        var elemTop = Math.round( $elem.offset().top );
        var elemBottom = elemTop + $elem.height();
    
        return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
    }
    
    // Check if it's time to start the animation.
    function checkAnimation() {
        var $elem1 = $('.world-map-img2');
        var $elem2 = $('.anim-anchor');
    
        // If the animation has already been started
        if ($elem1.hasClass('start')) return;
    
        if (isElementInViewport($elem2)) {
            // Start the animation
            $elem1.addClass('start');
        }
    }
    
    // Capture scroll events
    $(window).scroll(function(){
        checkAnimation();
    });
 

});
    // console.log(window.scrollY);
    

    //displays underline when navigation links are hovered
    // navlink_ref.hover(
    //     function(){$(this).css('text-decoration', 'underline');},
    //     function(){$(this).css('text-decoration', 'none');}
    //     );


    // navlink_ref.hover(
    //     function(){$(this).animate({
    //             textDecoration: 'underline'
    //         });
    //         console.log('YUP');
    //     },
    //     function(){$(this).animate({
    //         textDecoration: 'none'
    //         });
    // });
        




    
