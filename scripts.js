


$(document).ready(function(){
    var text = $('.maintext').text();
    var html = '';
    for (var i = 0; i < text.length; i++) {
        html += '<span class="letter">' + text[i] + '</span>';
    }
    $('.maintext').html(html);

    $('.letter').hover(
        function() {
            $(this).css('color', 'yellow');
        }, function() {
            $(this).css('color', 'white');
        }
    );
});