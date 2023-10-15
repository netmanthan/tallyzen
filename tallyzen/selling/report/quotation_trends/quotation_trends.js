// Copyright (c) 2023, TallyZEN.com
// License: GNU General Public License v3. See license.txt

frappe.require("assets/tallyzen/js/sales_trends_filters.js", function() {
	frappe.query_reports["Quotation Trends"] = {
		filters: tallyzen.get_sales_trends_filters()
	}
});
