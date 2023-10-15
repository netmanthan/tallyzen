// Copyright (c) 2023, TallyZEN.com
// License: GNU General Public License v3. See license.txt

frappe.ui.form.on('Newsletter', {
	refresh() {
		tallyzen.toggle_naming_series();
	}
});
