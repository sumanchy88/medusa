/**
 * @schema AdminPostReceiveReturnsReqSchema
 * type: object
 * description: SUMMARY
 * x-schemaName: AdminPostReceiveReturnsReqSchema
 * required:
 *   - return_id
 *   - items
 *   - internal_note
 * properties:
 *   return_id:
 *     type: string
 *     title: return_id
 *     description: The return's return id.
 *   items:
 *     type: array
 *     description: The return's items.
 *     items:
 *       type: object
 *       description: The item's items.
 *       required:
 *         - id
 *         - quantity
 *         - reason_id
 *       properties:
 *         id:
 *           type: string
 *           title: id
 *           description: The item's ID.
 *         quantity:
 *           type: number
 *           title: quantity
 *           description: The item's quantity.
 *         reason_id:
 *           type: string
 *           title: reason_id
 *           description: The item's reason id.
 *         note:
 *           type: string
 *           title: note
 *           description: The item's note.
 *   internal_note:
 *     type: string
 *     title: internal_note
 *     description: The return's internal note.
 * 
*/

