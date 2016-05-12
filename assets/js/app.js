$('[data-toggle-class]').click(function (e) {
    e.preventDefault();

    $($(this).attr('href')).toggleClass($(this).data('toggle-class'));

});

$('.main-content').click(function (e) {
    if ($(".dashboard").hasClass('openSidebar')) {
        e.preventDefault();
        $(".dashboard").removeClass('openSidebar');
    }
});


$('#filter').keyup(function () {
    //var val = $(this).val();

    //$($(this).attr('data-target')).find("tr.filterable").css('display', 'none');
    //
    //$($(this).attr('data-target')).find("tr.filterable:contains(" + val + ")").fadeIn();

    var _this = this;
    // Show only matching TR, hide rest of them
    $.each($($(this).data('target')).find($(this).data('el')), function () {
        // console.log($(this).text());
        if ($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1){
            $(this).hide();
        } else{
            $(this).show();
        }
    });
}).focus(function () {
    // var val = $(this).val();

    //$($(this).attr('data-target')).find("tr.filterable").css('display', 'none');
    //
    //$($(this).attr('data-target')).find("tr.filterable:contains(" + val + ")").fadeIn();

    var _this = this;
    // Show only matching TR, hide rest of them
    $.each($($(this).data('target')).find($(this).data('el')), function () {
        // console.log($(this).text());
        if ($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1){
            $(this).hide();
        } else{
            $(this).show();
        }
    });
});


// function filterBy(content) {
//     $('#filter').val(content).focus();
//     return false;
// }
new SimpleMDE({
    element: document.getElementById("simpleMDE"),
    spellChecker: false,
    height: 400
});
