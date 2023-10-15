# Copyright (c) 2013, Netmanthan
# For license information, please see license.txt


from datetime import datetime

import frappe
from frappe.tests.utils import FrappeTestCase

from tallyzen.buying.doctype.purchase_order.purchase_order import make_purchase_receipt
from tallyzen.buying.report.procurement_tracker.procurement_tracker import execute
from tallyzen.stock.doctype.material_request.material_request import make_purchase_order
from tallyzen.stock.doctype.material_request.test_material_request import make_material_request
from tallyzen.stock.doctype.warehouse.test_warehouse import create_warehouse


class TestProcurementTracker(FrappeTestCase):
	pass
