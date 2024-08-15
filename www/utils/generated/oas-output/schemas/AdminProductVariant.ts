/**
 * @schema AdminProductVariant
 * type: object
 * description: The updated's details.
 * x-schemaName: AdminProductVariant
 * required:
 *   - prices
 *   - id
 *   - title
 *   - sku
 *   - barcode
 *   - ean
 *   - upc
 *   - allow_backorder
 *   - manage_inventory
 *   - hs_code
 *   - origin_country
 *   - mid_code
 *   - material
 *   - weight
 *   - length
 *   - height
 *   - width
 *   - options
 *   - created_at
 *   - updated_at
 *   - deleted_at
 * properties:
 *   prices:
 *     type: array
 *     description: The updated's prices.
 *     items:
 *       $ref: "#/components/schemas/AdminPrice"
 *   id:
 *     type: string
 *     title: id
 *     description: The updated's ID.
 *   title:
 *     type: string
 *     title: title
 *     description: The updated's title.
 *   sku:
 *     type: string
 *     title: sku
 *     description: The updated's sku.
 *   barcode:
 *     type: string
 *     title: barcode
 *     description: The updated's barcode.
 *   ean:
 *     type: string
 *     title: ean
 *     description: The updated's ean.
 *   upc:
 *     type: string
 *     title: upc
 *     description: The updated's upc.
 *   allow_backorder:
 *     type: boolean
 *     title: allow_backorder
 *     description: The updated's allow backorder.
 *   manage_inventory:
 *     type: boolean
 *     title: manage_inventory
 *     description: The updated's manage inventory.
 *   hs_code:
 *     type: string
 *     title: hs_code
 *     description: The updated's hs code.
 *   origin_country:
 *     type: string
 *     title: origin_country
 *     description: The updated's origin country.
 *   mid_code:
 *     type: string
 *     title: mid_code
 *     description: The updated's mid code.
 *   material:
 *     type: string
 *     title: material
 *     description: The updated's material.
 *   weight:
 *     type: number
 *     title: weight
 *     description: The updated's weight.
 *   length:
 *     type: number
 *     title: length
 *     description: The updated's length.
 *   height:
 *     type: number
 *     title: height
 *     description: The updated's height.
 *   width:
 *     type: number
 *     title: width
 *     description: The updated's width.
 *   variant_rank:
 *     type: number
 *     title: variant_rank
 *     description: The updated's variant rank.
 *   options:
 *     type: array
 *     description: The updated's options.
 *     items:
 *       $ref: "#/components/schemas/BaseProductOptionValue"
 *   product:
 *     $ref: "#/components/schemas/BaseProduct"
 *   product_id:
 *     type: string
 *     title: product_id
 *     description: The updated's product id.
 *   calculated_price:
 *     $ref: "#/components/schemas/BaseCalculatedPriceSet"
 *   created_at:
 *     type: string
 *     format: date-time
 *     title: created_at
 *     description: The updated's created at.
 *   updated_at:
 *     type: string
 *     format: date-time
 *     title: updated_at
 *     description: The updated's updated at.
 *   deleted_at:
 *     type: string
 *     format: date-time
 *     title: deleted_at
 *     description: The updated's deleted at.
 *   metadata:
 *     type: object
 *     description: The updated's metadata.
 * 
*/

