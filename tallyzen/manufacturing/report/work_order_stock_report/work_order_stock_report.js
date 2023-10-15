// Copyright (c) 2023, TallyZEN.com
// For license information, please see license.txt


frappe.query_reports["Work Order Stock Report"] = {
	"filters": [
		{
			"fieldname": "warehouse",
			"label": __("Warehouse"),
			"fieldtype": "Link",
			"options": "Warehouse"
		}
	]
}
