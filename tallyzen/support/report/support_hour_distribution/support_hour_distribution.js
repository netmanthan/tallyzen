// Copyright (c) 2023, TallyZEN.com
// For license information, please see license.txt


frappe.query_reports["Support Hour Distribution"] = {
	"filters": [
		{
			'lable': __("From Date"),
			'fieldname': 'from_date',
			'fieldtype': 'Date',
			'default': frappe.datetime.nowdate(),
			'reqd': 1
		},
		{
			'lable': __("To Date"),
			'fieldname': 'to_date',
			'fieldtype': 'Date',
			'default': frappe.datetime.nowdate(),
			'reqd': 1
		}
	]
}
