# Copyright (c) 2023, TallyZEN.com
# For license information, please see license.txt


import frappe
from frappe.model.document import Document


class DunningType(Document):
	def autoname(self):
		company_abbr = frappe.get_value("Company", self.company, "abbr")
		self.name = f"{self.dunning_type} - {company_abbr}"
