// Copyright (c) 2023, TallyZEN.com
// For license information, please see license.txt

frappe.ui.form.on('UAE VAT Settings', {
	onload: function(frm) {
		frm.set_query('account', 'uae_vat_accounts', function() {
			return {
				filters: {
					'company': frm.doc.company
				}
			};
		});
	}
});
