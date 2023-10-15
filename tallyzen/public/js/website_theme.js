// Copyright (c) 2023, TallyZEN.com
// MIT License. See license.txt

frappe.ui.form.on('Website Theme', {
	validate(frm) {
		let theme_scss = frm.doc.theme_scss;
		if (theme_scss && theme_scss.includes('frappe/public/scss/website')
			&& !theme_scss.includes('tallyzen/public/scss/website')
		) {
			frm.set_value('theme_scss',
				`${frm.doc.theme_scss}\n@import "tallyzen/public/scss/website";`);
		}
	}
});
