// Copyright (c) 2023, TallyZEN.com
// License: GNU General Public License v3. See license.txt

frappe.require("assets/tallyzen/js/purchase_trends_filters.js", function() {
	frappe.query_reports["Purchase Order Trends"] = {
		filters: tallyzen.get_purchase_trends_filters()
	}
});
