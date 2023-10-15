# Copyright (c) 2023, TallyZEN.com
# License: GNU General Public License v3. See license.txt


import frappe

from tallyzen.setup.doctype.company.company import install_country_fixtures


def execute():
	frappe.reload_doc("regional", "report", "fichier_des_ecritures_comptables_[fec]")
	for d in frappe.get_all("Company", filters={"country": "France"}):
		install_country_fixtures(d.name)
