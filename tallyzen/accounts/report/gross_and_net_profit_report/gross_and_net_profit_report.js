// Copyright (c) 2023, TallyZEN.com
// For license information, please see license.txt


frappe.query_reports["Gross and Net Profit Report"] = $.extend(
	{},
	tallyzen.financial_statements
);

frappe.query_reports["Gross and Net Profit Report"]["filters"].push(
	{
		"fieldname": "accumulated_values",
		"label": __("Accumulated Values"),
		"fieldtype": "Check"
	}
);
