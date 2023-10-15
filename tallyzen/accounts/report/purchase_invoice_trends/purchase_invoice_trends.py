# Copyright (c) 2023, TallyZEN.com
# License: GNU General Public License v3. See license.txt


from tallyzen.controllers.trends import get_columns, get_data


def execute(filters=None):
	if not filters:
		filters = {}
	data = []
	conditions = get_columns(filters, "Purchase Invoice")
	data = get_data(filters, conditions)

	return conditions["columns"], data
