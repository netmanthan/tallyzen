# Copyright (c) 2023, TallyZEN.com
# License: GNU General Public License v3. See license.txt


from tallyzen.selling.report.sales_partner_target_variance_based_on_item_group.item_group_wise_sales_target_variance import (
	get_data_column,
)


def execute(filters=None):
	data = []

	return get_data_column(filters, "Territory")
