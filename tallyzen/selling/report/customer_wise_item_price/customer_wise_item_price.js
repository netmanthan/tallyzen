// Copyright (c) 2023, TallyZEN.com
// For license information, please see license.txt


frappe.query_reports["Customer-wise Item Price"] = {
	"filters": [
		{
			"label": __("Customer"),
			"fieldname": "customer",
			"fieldtype": "Link",
			"options": "Customer",
			"reqd": 1
		},
		{
			"label": __("Item"),
			"fieldname": "item",
			"fieldtype": "Link",
			"options": "Item",
			"get_query": () => {
				return {
					query: "tallyzen.controllers.queries.item_query",
					filters: { 'is_sales_item': 1 }
				}
			}
		}
	]
}