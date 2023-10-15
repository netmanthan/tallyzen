// -*- coding: utf-8 -*-
// Copyright (c) 2023, TallyZEN.com
// For license information, please see license.txt


frappe.query_reports["Share Ledger"] = {
	"filters": [
		{
			"fieldname":"date",
			"label": __("Date"),
			"fieldtype": "Date",
			"default": frappe.datetime.get_today(),
			"reqd": 1
		},
		{
			"fieldname":"shareholder",
			"label": __("Shareholder"),
			"fieldtype": "Link",
			"options": "Shareholder"
		}
	]
};