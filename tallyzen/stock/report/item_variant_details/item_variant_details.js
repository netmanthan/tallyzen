// Copyright (c) 2023, TallyZEN.com
// For license information, please see license.txt


frappe.query_reports["Item Variant Details"] = {
	"filters": [
		{
			reqd: 1,
			default: "",
			options: "Item",
			label: __("Item"),
			fieldname: "item",
			fieldtype: "Link",
			get_query: () => {
				return {
					filters: { "has_variants": 1 }
				}
			}
		}
	]
}
