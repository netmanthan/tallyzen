# Copyright (c) 2023, TallyZEN.com
# License: GNU General Public License v3. See license.txt

no_cache = 1

from tallyzen.e_commerce.shopping_cart.cart import get_cart_quotation


def get_context(context):
	context.body_class = "product-page"
	context.update(get_cart_quotation())
