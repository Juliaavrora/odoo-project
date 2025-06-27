{
    'name': 'POS Cashback Per Customer',
    'version': '1.0',
    'summary': 'Override loyalty grant with customer cashback rate',
    'category': 'Point of Sale',
    'depends': ['point_of_sale'],
    'assets': {
        'point_of_sale.assets': [
            '/pos_cashback/static/src/js/loyalty_cashback.js',
        ],
    },
    'installable': True,
    'auto_install': False,
}
