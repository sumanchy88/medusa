/**
 * @oas [post] /admin/products/{id}/variants/inventory-items/batch
 * operationId: PostProductsIdVariantsInventoryItemsBatch
 * summary: Add Inventory Items to Product
 * description: Add a list of inventory items to a product.
 * x-authenticated: true
 * parameters:
 *   - name: id
 *     in: path
 *     description: The product's ID.
 *     required: true
 *     schema:
 *       type: string
 *   - name: expand
 *     in: query
 *     description: Comma-separated relations that should be expanded in the returned data.
 *     required: false
 *     schema:
 *       type: string
 *       title: expand
 *       description: Comma-separated relations that should be expanded in the returned data.
 *   - name: fields
 *     in: query
 *     description: Comma-separated fields that should be included in the returned
 *       data. if a field is prefixed with `+` it will be added to the default
 *       fields, using `-` will remove it from the default fields. without prefix
 *       it will replace the entire default fields.
 *     required: false
 *     schema:
 *       type: string
 *       title: fields
 *       description: Comma-separated fields that should be included in the returned
 *         data. if a field is prefixed with `+` it will be added to the default
 *         fields, using `-` will remove it from the default fields. without prefix
 *         it will replace the entire default fields.
 *   - name: offset
 *     in: query
 *     description: The number of items to skip when retrieving a list.
 *     required: false
 *     schema:
 *       type: number
 *       title: offset
 *       description: The number of items to skip when retrieving a list.
 *   - name: limit
 *     in: query
 *     description: Limit the number of items returned in the list.
 *     required: false
 *     schema:
 *       type: number
 *       title: limit
 *       description: Limit the number of items returned in the list.
 *   - name: order
 *     in: query
 *     description: The field to sort the data by. By default, the sort order is
 *       ascending. To change the order to descending, prefix the field name with
 *       `-`.
 *     required: false
 *     schema:
 *       type: string
 *       title: order
 *       description: The field to sort the data by. By default, the sort order is
 *         ascending. To change the order to descending, prefix the field name with
 *         `-`.
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         type: object
 *         description: SUMMARY
 *         properties:
 *           create:
 *             type: array
 *             description: The product's create.
 *             items:
 *               type: object
 *               description: The create's details.
 *               required:
 *                 - required_quantity
 *                 - inventory_item_id
 *                 - variant_id
 *               properties:
 *                 required_quantity:
 *                   type: number
 *                   title: required_quantity
 *                   description: The create's required quantity.
 *                 inventory_item_id:
 *                   type: string
 *                   title: inventory_item_id
 *                   description: The create's inventory item id.
 *                 variant_id:
 *                   type: string
 *                   title: variant_id
 *                   description: The create's variant id.
 *           update:
 *             type: array
 *             description: The product's update.
 *             items:
 *               type: object
 *               description: The update's details.
 *               required:
 *                 - required_quantity
 *                 - inventory_item_id
 *                 - variant_id
 *               properties:
 *                 required_quantity:
 *                   type: number
 *                   title: required_quantity
 *                   description: The update's required quantity.
 *                 inventory_item_id:
 *                   type: string
 *                   title: inventory_item_id
 *                   description: The update's inventory item id.
 *                 variant_id:
 *                   type: string
 *                   title: variant_id
 *                   description: The update's variant id.
 *           delete:
 *             type: array
 *             description: The product's delete.
 *             items:
 *               type: object
 *               description: The delete's details.
 *               required:
 *                 - inventory_item_id
 *                 - variant_id
 *               properties:
 *                 inventory_item_id:
 *                   type: string
 *                   title: inventory_item_id
 *                   description: The delete's inventory item id.
 *                 variant_id:
 *                   type: string
 *                   title: variant_id
 *                   description: The delete's variant id.
 * x-codeSamples:
 *   - lang: Shell
 *     label: cURL
 *     source: >-
 *       curl -X POST
 *       '{backend_url}/admin/products/{id}/variants/inventory-items/batch' \
 * 
 *       -H 'x-medusa-access-token: {api_token}'
 * tags:
 *   - Products
 * responses:
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "409":
 *     $ref: "#/components/responses/invalid_state_error"
 *   "422":
 *     $ref: "#/components/responses/invalid_request_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 * 
*/

