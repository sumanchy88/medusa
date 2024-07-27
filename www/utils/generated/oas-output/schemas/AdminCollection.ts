/**
 * @schema AdminCollection
 * type: object
 * description: The parent's collection.
 * x-schemaName: AdminCollection
 * required:
 *   - id
 *   - title
 *   - handle
 *   - created_at
 *   - updated_at
 *   - deleted_at
 *   - metadata
 * properties:
 *   id:
 *     type: string
 *     title: id
 *     description: The collection's ID.
 *   title:
 *     type: string
 *     title: title
 *     description: The collection's title.
 *   handle:
 *     type: string
 *     title: handle
 *     description: The collection's handle.
 *   created_at:
 *     type: string
 *     format: date-time
 *     title: created_at
 *     description: The collection's created at.
 *   updated_at:
 *     type: string
 *     format: date-time
 *     title: updated_at
 *     description: The collection's updated at.
 *   deleted_at:
 *     type: string
 *     format: date-time
 *     title: deleted_at
 *     description: The collection's deleted at.
 *   products:
 *     type: array
 *     description: The collection's products.
 *     items:
 *       $ref: "#/components/schemas/AdminProduct"
 *   metadata:
 *     type: object
 *     description: The collection's metadata.
 * 
*/

