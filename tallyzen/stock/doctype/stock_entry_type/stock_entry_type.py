# Copyright (c) 2023, TallyZEN.com
# For license information, please see license.txt


# import frappe
from frappe.model.document import Document


class StockEntryType(Document):
	def validate(self):
		if self.add_to_transit and self.purpose != "Material Transfer":
			self.add_to_transit = 0
