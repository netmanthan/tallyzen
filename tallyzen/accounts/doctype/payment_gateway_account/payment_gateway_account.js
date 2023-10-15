// Copyright (c) 2023, TallyZEN.com
// License: GNU General Public License v3. See license.txt

frappe.ui.form.on('Payment Gateway Account', {
	refresh(frm) {
		tallyzen.utils.check_payments_app();
		if(!frm.doc.__islocal) {
			frm.set_df_property('payment_gateway', 'read_only', 1);
		}
	}
});
