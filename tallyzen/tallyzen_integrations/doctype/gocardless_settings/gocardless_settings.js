// Copyright (c) 2018, TallyZEN Technologies and Netmanthan Contributors
// For license information, please see license.txt

frappe.ui.form.on('GoCardless Settings', {
	refresh: function(frm) {
		tallyzen.utils.check_payments_app();
	}
});
