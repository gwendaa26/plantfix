$(function () {
    $('.dropdown-help').hide();  // or .remove();
    $("body").on('DOMSubtreeModified', ".layout-main-section", function () {
        let divHelp = $('div.section-head:contains("Help")');
        if (divHelp.length > 0) {
            divHelp.parent().hide();
        }
    });
});

frappe.ui.set_user_background = function(src, selector, style) {
	if(!selector) selector = "#page-desktop";
	if(!style) style = "Fill Screen";
	if(src) {
		if (window.cordova && src.indexOf("http") === -1) {
			src = frappe.base_url + src;
		}
		var background = repl('background: url("%(src)s") center center;', {src: src});
	} else {
		var background = "background-color: #fff;";
	}

	frappe.dom.set_style(repl('%(selector)s { \
		%(background)s \
		background-attachment: fixed; \
		%(style)s \
	}', {
		selector:selector,
		background:background,
		style: style==="Fill Screen" ? "background-size: cover;" : ""
	}));
}

$(document).bind('toolbar_setup', function() {
	frappe.app.name = "ERPNext";

	frappe.help_feedback_link = '<p><a class="text-muted" \
		href="https://discuss.erpnext.com">Feedback</a></p>'


	$('.navbar-home').html('<img class="erpnext-icon" src="'+
			frappe.urllib.get_base_url()+'/assets/cdms/images/Logom.png" />');

	$('[data-link="docs"]').attr("href", "https://erpnext.com/docs")
	$('[data-link="issues"]').attr("href", "https://github.com/frappe/erpnext/issues")


	// default documentation goes to erpnext
	// $('[data-link-type="documentation"]').attr('data-path', '/erpnext/manual/index');

	// additional help links for erpnext
	var $help_menu = $('.dropdown-help ul .documentation-links');
	$('<li><a data-link-type="forum" href="https://erpnext.com/docs/user/manual" \
		target="_blank">'+__('Documentation')+'</a></li>').insertBefore($help_menu);
	$('<li><a data-link-type="forum" href="https://discuss.erpnext.com" \
		target="_blank">'+__('User Forum')+'</a></li>').insertBefore($help_menu);
	$('<li><a href="https://github.com/frappe/erpnext/issues" \
		target="_blank">'+__('Report an Issue')+'</a></li>').insertBefore($help_menu);

});