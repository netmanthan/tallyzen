# Copyright (c) 2023, TallyZEN.com
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class CRMSettings(Document):
	def validate(self):
		frappe.db.set_default("campaign_naming_by", self.get("campaign_naming_by", ""))
