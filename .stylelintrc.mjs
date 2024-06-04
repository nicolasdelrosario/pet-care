import ORDER_PROPERTIES from './styelint/order-properties.js'
/** @type {import('stylelint').Config} */

export default {
	extends: ['stylelint-config-standard'],
	plugins: ['stylelint-order'],
	rules: {
		'selector-class-pattern': null,
		'order/properties-order': ORDER_PROPERTIES,
		'no-unknown-animations': [
			true,
			{ message: 'La animación que estas colocando no existe, que fue 🤨?' },
		],
		'color-named': 'never',
		'declaration-no-important': [
			true,
			{ message: 'Alto ahi rufian, no uses important 🤨' },
		],
		'declaration-property-unit-allowed-list': [
			{
				'font-size': ['px', 'rem'],
				'/^animation/': 's',
				'line-height': ['px', 'rem'],
				'/^padding/': ['px', 'auto', 'rem'],
				'/^margin/': ['px', 'auto', 'rem'],
			},
			{ message: 'Esas medidas no estan permitidas' },
		],
		'declaration-empty-line-before': 'never',
		'comment-empty-line-before': 'never',
		'max-nesting-depth': [3, { ignore: ['pseudo-classes'] }],
	},
}
