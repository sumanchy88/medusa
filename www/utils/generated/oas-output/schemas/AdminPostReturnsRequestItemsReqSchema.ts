/**
 * @schema AdminPostReturnsRequestItemsReqSchema
 * type: object
 * description: SUMMARY
 * x-schemaName: AdminPostReturnsRequestItemsReqSchema
 * properties:
 *   items:
 *     type: array
 *     description: The return's items.
 *     items:
 *       type: object
 *       description: The item's items.
 *       required:
 *         - id
 *         - quantity
 *       properties:
 *         id:
 *           type: string
 *           title: id
 *           description: The item's ID.
 *         quantity:
 *           type: number
 *           title: quantity
 *           description: The item's quantity.
 *         description:
 *           type: string
 *           title: description
 *           description: The item's description.
 *         internal_note:
 *           type: string
 *           title: internal_note
 *           description: The item's internal note.
 *         metadata:
 *           type: object
 *           description: The item's metadata.
 * 
*/

