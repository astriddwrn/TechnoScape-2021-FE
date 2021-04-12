$(document).ready(function() {
    $('#receipt').change(function() {
        var i = $(this).prev('label').clone();
        var file = $('#receipt')[0].files[0].name;
        $(this).prev('label').text(file);
    });
    // $('label').off('click');
});