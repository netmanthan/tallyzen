# Copyright (c) 2023, TallyZEN.com
# License: GNU General Public License v3. See license.txt

import frappe

test_records = frappe.get_test_records("Territory")

test_ignore = ["Item Group"]
