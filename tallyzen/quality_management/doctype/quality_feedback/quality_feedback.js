// Copyright (c) 2023, TallyZEN.com
// For license information, please see license.txt

frappe.ui.form.on('Quality Feedback', {
	template: function(frm) {
		if (frm.doc.template) {
			frm.call('set_parameters');
		}
	}
});
