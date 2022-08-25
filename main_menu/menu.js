/************** scrollTop function addClassName ********** */

$(document).scroll (function () {
    var thisPosition = $(document).scrollTop();
    
    if (thisPosition > 30) {
        $('#menuScroll').addClass ('menu-fixed');
    } else if ( thisPosition < 30) {
        $("#menuScroll").removeClass ('menu-fixed')
    }
});

