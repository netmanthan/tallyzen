// Copyright (c) 2023, TallyZEN.com
// For license information, please see license.txt


frappe.query_reports["Incorrect Serial No Valuation"] = {
	"filters": [
		{
			label: __('Item Code'),
			fieldtype: 'Link',
			fieldname: 'item_code',
			options: 'Item',
			get_query: function() {
				return {
					filters: {
						'has_serial_no': 1
					}
				}
			}
		},
		{
			label: __('From Date'),
			fieldtype: 'Date',
			fieldname: 'from_date',
			reqd: 1,
			default: tallyzen.utils.get_fiscal_year(frappe.datetime.get_today(), true)[1],
		},
		{
			label: __('To Date'),
			fieldtype: 'Date',
			fieldname: 'to_date',
			reqd: 1,
			default: tallyzen.utils.get_fiscal_year(frappe.datetime.get_today(), true)[2],
		}
	]
};
