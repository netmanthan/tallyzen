// Copyright (c) 2023, TallyZEN.com
// For license information, please see license.txt

frappe.ui.form.on('Tax Withholding Category', {
	setup: function(frm) {
		frm.set_query("account", "accounts", function(doc, cdt, cdn) {
			var child = locals[cdt][cdn];
			if (child.company) {
				return {
					filters: {
						'company': child.company,
						'root_type': ['in', ['Asset', 'Liability']]
					}
				};
			}
		});
	}
});
