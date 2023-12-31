# Copyright (c) 2023, TallyZEN.com
# For license information, please see license.txt


import frappe
from frappe.utils.nestedset import NestedSet, get_root_of


class SupplierGroup(NestedSet):
	nsm_parent_field = "parent_supplier_group"

	def validate(self):
		if not self.parent_supplier_group:
			self.parent_supplier_group = get_root_of("Supplier Group")

	def on_update(self):
		NestedSet.on_update(self)
		self.validate_one_root()

	def on_trash(self):
		NestedSet.validate_if_child_exists(self)
		frappe.utils.nestedset.update_nsm(self)
