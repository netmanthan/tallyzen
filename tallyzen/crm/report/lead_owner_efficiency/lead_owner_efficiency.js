// Copyright (c) 2023, TallyZEN.com
// For license information, please see license.txt
	frappe.query_reports["Lead Owner Efficiency"] = {
		"filters": [
			{
				"fieldname": "from_date",
				"label": __("From Date"),
				"fieldtype": "Date",
				"default": tallyzen.utils.get_fiscal_year(frappe.datetime.get_today(), true)[1],
			},
			{
				"fieldname": "to_date",
				"label": __("To Date"),
				"fieldtype": "Date",
				"default": tallyzen.utils.get_fiscal_year(frappe.datetime.get_today(), true)[2],
			}
		]};
