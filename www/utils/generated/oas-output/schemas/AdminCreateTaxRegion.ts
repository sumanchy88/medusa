/**
 * @schema AdminCreateTaxRegion
 * type: object
 * description: SUMMARY
 * x-schemaName: AdminCreateTaxRegion
 * required:
 *   - country_code
 *   - province_code
 *   - parent_id
 *   - metadata
 * properties:
 *   country_code:
 *     type: string
 *     title: country_code
 *     description: The tax region's country code.
 *   province_code:
 *     type: string
 *     title: province_code
 *     description: The tax region's province code.
 *   parent_id:
 *     type: string
 *     title: parent_id
 *     description: The tax region's parent id.
 *   default_tax_rate:
 *     type: object
 *     description: The tax region's default tax rate.
 *     required:
 *       - name
 *       - metadata
 *     properties:
 *       rate:
 *         type: number
 *         title: rate
 *         description: The default tax rate's rate.
 *       code:
 *         type: string
 *         title: code
 *         description: The default tax rate's code.
 *       name:
 *         type: string
 *         title: name
 *         description: The default tax rate's name.
 *       is_combinable:
 *         type: boolean
 *         title: is_combinable
 *         description: The default tax rate's is combinable.
 *       metadata:
 *         type: object
 *         description: The default tax rate's metadata.
 *   metadata:
 *     type: object
 *     description: The tax region's metadata.
 * 
*/

