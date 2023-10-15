// Copyright (c) 2023, TallyZEN.com
// For license information, please see license.txt

frappe.ui.form.on('Email Campaign', {
	email_campaign_for: function(frm) {
		frm.set_value('recipient', '');
	}
});
