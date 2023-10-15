# Copyright (c) 2023, TallyZEN.com
# License: GNU General Public License v3. See license.txt


import frappe


def execute():
	frappe.db.sql(
		"""update tabItem set variant_based_on = 'Item Attribute'
		where ifnull(variant_based_on, '') = ''
		and (has_variants=1 or ifnull(variant_of, '') != '')
	"""
	)
