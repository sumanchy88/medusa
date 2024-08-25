/**
 * @schema AdminUpdateStore
 * type: object
 * description: SUMMARY
 * x-schemaName: AdminUpdateStore
 * required:
 *   - default_sales_channel_id
 *   - default_region_id
 *   - default_location_id
 *   - metadata
 * properties:
 *   name:
 *     type: string
 *     title: name
 *     description: The store's name.
 *   supported_currencies:
 *     type: array
 *     description: The store's supported currencies.
 *     items:
 *       type: object
 *       description: The supported currency's supported currencies.
 *       required:
 *         - currency_code
 *       properties:
 *         currency_code:
 *           type: string
 *           title: currency_code
 *           description: The supported currency's currency code.
 *         is_default:
 *           type: boolean
 *           title: is_default
 *           description: The supported currency's is default.
 *         is_tax_inclusive:
 *           type: boolean
 *           title: is_tax_inclusive
 *           description: The supported currency's is tax inclusive.
 *   default_sales_channel_id:
 *     type: string
 *     title: default_sales_channel_id
 *     description: The store's default sales channel id.
 *   default_region_id:
 *     type: string
 *     title: default_region_id
 *     description: The store's default region id.
 *   default_location_id:
 *     type: string
 *     title: default_location_id
 *     description: The store's default location id.
 *   metadata:
 *     type: object
 *     description: The store's metadata.
 * 
*/

