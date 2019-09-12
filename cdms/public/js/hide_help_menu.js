$(function () {
    $('.dropdown-help').hide();  // or .remove();
    $("body").on('DOMSubtreeModified', ".layout-main-section", function () {
        let divHelp = $('div.section-head:contains("Help")');
        if (divHelp.length > 0) {
            divHelp.parent().hide();
        }
    });
});
