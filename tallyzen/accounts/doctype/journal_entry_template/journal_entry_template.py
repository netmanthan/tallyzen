# Copyright (c) 2023, TallyZEN.com
# For license information, please see license.txt


import frappe
from frappe.model.document import Document


class JournalEntryTemplate(Document):
	pass


@frappe.whitelist()
def get_naming_series():
	return frappe.get_meta("Journal Entry").get_field("naming_series").options
