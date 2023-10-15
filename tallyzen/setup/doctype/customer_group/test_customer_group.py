# Copyright (c) 2023, TallyZEN.com
# License: GNU General Public License v3. See license.txt

test_ignore = ["Price List"]


import frappe

test_records = frappe.get_test_records("Customer Group")
