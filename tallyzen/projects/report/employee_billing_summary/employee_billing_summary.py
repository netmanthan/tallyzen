# Copyright (c) 2013, Netmanthan
# For license information, please see license.txt


import frappe

from tallyzen.projects.report.billing_summary import get_columns, get_data


def execute(filters=None):
	filters = frappe._dict(filters or {})
	columns = get_columns()

	data = get_data(filters)
	return columns, data
