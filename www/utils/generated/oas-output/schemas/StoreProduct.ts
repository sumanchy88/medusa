/**
 * @schema StoreProduct
 * type: object
 * description: The product's products.
 * x-schemaName: StoreProduct
 * required:
 *   - title
 *   - status
 *   - length
 *   - options
 *   - description
 *   - id
 *   - handle
 *   - hs_code
 *   - weight
 *   - height
 *   - width
 *   - origin_country
 *   - mid_code
 *   - material
 *   - thumbnail
 *   - created_at
 *   - updated_at
 *   - deleted_at
 *   - variants
 *   - subtitle
 *   - is_giftcard
 *   - collection_id
 *   - type_id
 *   - images
 *   - discountable
 *   - external_id
 * properties:
 *   categories:
 *     type: array
 *     description: The product's categories.
 *     items:
 *       $ref: "#/components/schemas/StoreProductCategory"
 *   type:
 *     $ref: "#/components/schemas/StoreProduct"
 *   title:
 *     type: string
 *     title: title
 *     description: The product's title.
 *   status:
 *     type: string
 *     enum:
 *       - draft
 *       - proposed
 *       - published
 *       - rejected
 *   length:
 *     type: number
 *     title: length
 *     description: The product's length.
 *   options:
 *     type: array
 *     description: The product's options.
 *     items:
 *       $ref: "#/components/schemas/BaseProductOption"
 *   description:
 *     type: string
 *     title: description
 *     description: The product's description.
 *   id:
 *     type: string
 *     title: id
 *     description: The product's ID.
 *   handle:
 *     type: string
 *     title: handle
 *     description: The product's handle.
 *   metadata:
 *     type: object
 *     description: The product's metadata.
 *   hs_code:
 *     type: string
 *     title: hs_code
 *     description: The product's hs code.
 *   weight:
 *     type: number
 *     title: weight
 *     description: The product's weight.
 *   height:
 *     type: number
 *     title: height
 *     description: The product's height.
 *   width:
 *     type: number
 *     title: width
 *     description: The product's width.
 *   origin_country:
 *     type: string
 *     title: origin_country
 *     description: The product's origin country.
 *   mid_code:
 *     type: string
 *     title: mid_code
 *     description: The product's mid code.
 *   material:
 *     type: string
 *     title: material
 *     description: The product's material.
 *   thumbnail:
 *     type: string
 *     title: thumbnail
 *     description: The product's thumbnail.
 *   created_at:
 *     type: string
 *     format: date-time
 *     title: created_at
 *     description: The product's created at.
 *   updated_at:
 *     type: string
 *     format: date-time
 *     title: updated_at
 *     description: The product's updated at.
 *   deleted_at:
 *     type: string
 *     format: date-time
 *     title: deleted_at
 *     description: The product's deleted at.
 *   variants:
 *     type: array
 *     description: The product's variants.
 *     items:
 *       $ref: "#/components/schemas/BaseProductVariant"
 *   subtitle:
 *     type: string
 *     title: subtitle
 *     description: The product's subtitle.
 *   is_giftcard:
 *     type: boolean
 *     title: is_giftcard
 *     description: The product's is giftcard.
 *   collection:
 *     $ref: "#/components/schemas/BaseCollection"
 *   collection_id:
 *     type: string
 *     title: collection_id
 *     description: The product's collection id.
 *   type_id:
 *     type: string
 *     title: type_id
 *     description: The product's type id.
 *   tags:
 *     type: array
 *     description: The product's tags.
 *     items:
 *       $ref: "#/components/schemas/BaseProductTag"
 *   images:
 *     type: array
 *     description: The product's images.
 *     items:
 *       $ref: "#/components/schemas/BaseProductImage"
 *   discountable:
 *     type: boolean
 *     title: discountable
 *     description: The product's discountable.
 *   external_id:
 *     type: string
 *     title: external_id
 *     description: The product's external id.
 * 
*/

