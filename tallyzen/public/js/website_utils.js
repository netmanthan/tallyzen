// Copyright (c) 2023, TallyZEN.com
// License: GNU General Public License v3. See license.txt

if(!window.tallyzen) window.tallyzen = {};

tallyzen.subscribe_to_newsletter = function(opts, btn) {
	return frappe.call({
		type: "POST",
		method: "frappe.email.doctype.newsletter.newsletter.subscribe",
		btn: btn,
		args: {"email": opts.email},
		callback: opts.callback
	});
}
