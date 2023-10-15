# Copyright (c) 2023, TallyZEN.com
# License: GNU General Public License v3. See license.txt

# For license information, please see license.txt


import frappe
from frappe.model.document import Document


class MaterialRequestItem(Document):
	pass


def on_doctype_update():
	frappe.db.add_index("Material Request Item", ["item_code", "warehouse"])
