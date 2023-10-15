// Copyright (c) 2023, TallyZEN.com
// For license information, please see license.txt

frappe.ui.form.on('Stock Ledger Entry', {
	refresh: function(frm) {
		frm.page.btn_secondary.hide()
	}
});
