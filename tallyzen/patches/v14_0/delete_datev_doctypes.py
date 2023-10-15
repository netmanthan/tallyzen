import frappe


def execute():
	install_apps = frappe.get_installed_apps()
	if "tallyzen_datev_uo" in install_apps or "tallyzen_datev" in install_apps:
		return

	# doctypes
	frappe.delete_doc("DocType", "DATEV Settings", ignore_missing=True, force=True)

	# reports
	frappe.delete_doc("Report", "DATEV", ignore_missing=True, force=True)
