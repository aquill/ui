$(function () {
    $('.preview').on('click', function() {
        $m = $('#markdown-input').val();
        $('.markdown-text').html(marked($m));
        $('.editor').slideToggle();
        $('#markdown-preview').slideToggle();
    });
});