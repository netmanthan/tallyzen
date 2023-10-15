// Copyright (c) 2023, TallyZEN.com
// License: GNU General Public License v3. See license.txt

frappe.ui.form.on('Cashier Closing', {

	setup: function(frm){
		if (frm.doc.user == "" || frm.doc.user == null) {
			frm.doc.user = frappe.session.user;
		}
	}
});
