
$(document).ready(function(){
    var text = $('.maintext').text();
    var html = '';
    for (var i = 0; i < text.length; i++) {
        html += '<span class="letter">' + text[i] + '</span>';
    }
    $('.maintext').html(html);

    $('.maintext').css({
        opacity: 0,
        top: '50px'
    }).animate({
        opacity: 1,
        top: '0'
    }, 2000);

    $('.carousel').css({
        opacity: 0,
       
    }).animate({
        opacity: 1,
    }, 1000); // Adjust the duration as needed


    $('.letter').hover(
        function() {
            $(this).css('color', 'yellow');
        }, function() {
            $(this).css('color', 'white');
        }
    );

    $('a').hover(
        function() {
            $(this).css('color', 'yellow');
        }, function() {
            $(this).css('color', 'white');
        }
    );
    



});