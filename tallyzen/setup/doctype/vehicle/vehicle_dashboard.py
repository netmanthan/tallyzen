# Copyright (c) 2023, TallyZEN.com
# See license.txt


def get_data():
	return {
		"fieldname": "license_plate",
		"non_standard_fieldnames": {"Delivery Trip": "vehicle"},
		"transactions": [{"items": ["Vehicle Log"]}, {"items": ["Delivery Trip"]}],
	}
