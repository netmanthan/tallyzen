// Copyright (c) 2023, TallyZEN.com
// For license information, please see license.txt


frappe.query_reports["Employee Billing Summary"] = {
	"filters": [
		{
			fieldname: "employee",
			label: __("Employee"),
			fieldtype: "Link",
			options: "Employee",
			reqd: 1
		},
		{
			fieldname:"from_date",
			label: __("From Date"),
			fieldtype: "Date",
			default: frappe.datetime.add_months(frappe.datetime.month_start(), -1),
			reqd: 1
		},
		{
			fieldname:"to_date",
			label: __("To Date"),
			fieldtype: "Date",
			default: frappe.datetime.add_days(frappe.datetime.month_start(), -1),
			reqd: 1
		},
		{
			fieldname:"include_draft_timesheets",
			label: __("Include Timesheets in Draft Status"),
			fieldtype: "Check",
		},
	]
}