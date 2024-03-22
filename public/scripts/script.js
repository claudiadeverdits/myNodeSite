$(document).ready(function(){
    $('#responsive').click(function(){
        var x = $('#navBar');
        if (x.hasClass('navlinks')){
            x.addClass('responsive');
        } else {
            x.removeClass('responsive');
        }
    });
});