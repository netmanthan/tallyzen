# Copyright (c) 2013, Netmanthan
# For license information, please see license.txt


from tallyzen.selling.report.sales_analytics.sales_analytics import Analytics


def execute(filters=None):
	return Analytics(filters).run()
