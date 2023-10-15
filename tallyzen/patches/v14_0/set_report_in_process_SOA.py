# Copyright (c) 2023, TallyZEN.com
# License: MIT. See LICENSE

import frappe


def execute():
	process_soa = frappe.qb.DocType("Process Statement Of Accounts")
	q = frappe.qb.update(process_soa).set(process_soa.report, "General Ledger")
	q.run()
