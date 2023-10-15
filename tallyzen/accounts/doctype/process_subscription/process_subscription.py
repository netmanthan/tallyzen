# Copyright (c) 2023, TallyZEN.com
# For license information, please see license.txt

from datetime import datetime
from typing import Union

import frappe
from frappe.model.document import Document
from frappe.utils import getdate

from tallyzen.accounts.doctype.subscription.subscription import process_all


class ProcessSubscription(Document):
	def on_submit(self):
		process_all(subscription=self.subscription, posting_date=self.posting_date)


def create_subscription_process(
	subscription: str | None, posting_date: Union[str, datetime.date] | None
):
	"""Create a new Process Subscription document"""
	doc = frappe.new_doc("Process Subscription")
	doc.subscription = subscription
	doc.posting_date = getdate(posting_date)
	doc.insert(ignore_permissions=True)
	doc.submit()
