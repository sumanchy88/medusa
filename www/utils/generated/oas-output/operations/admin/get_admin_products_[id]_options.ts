/**
 * @oas [get] /admin/products/{id}/options
 * operationId: GetProductsIdOptions
 * summary: List Options
 * description: Retrieve a list of options in a product. The options can be
 *   filtered by fields like FILTER FIELDS. The options can also be paginated.
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
 *   - name: q
 *     in: query
 *     description: The product's q.
 *     required: false
 *     schema:
 *       type: string
 *       title: q
 *       description: The product's q.
 *   - name: id
 *     in: query
 *     required: false
 *     schema:
 *       oneOf:
 *         - type: string
 *           title: id
 *           description: The product's ID.
 *         - type: array
 *           description: The product's ID.
 *           items:
 *             type: string
 *             title: id
 *             description: The id's ID.
 *   - name: title
 *     in: query
 *     required: false
 *     schema:
 *       oneOf:
 *         - type: string
 *           title: title
 *           description: The product's title.
 *         - type: array
 *           description: The product's title.
 *           items:
 *             type: string
 *             title: title
 *             description: The title's details.
 *   - name: product_id
 *     in: query
 *     required: false
 *     schema:
 *       oneOf:
 *         - type: string
 *           title: product_id
 *           description: The product's product id.
 *         - type: array
 *           description: The product's product id.
 *           items:
 *             type: string
 *             title: product_id
 *             description: The product id's details.
 *   - name: $and
 *     in: query
 *     description: The product's $and.
 *     required: false
 *     schema:
 *       type: array
 *       description: The product's $and.
 *       items:
 *         oneOf:
 *           - type: object
 *             description: The $and's details.
 *             x-schemaName: BaseProductOptionParams
 *             properties:
 *               q:
 *                 type: string
 *                 title: q
 *                 description: The $and's q.
 *               id:
 *                 oneOf:
 *                   - type: string
 *                     title: id
 *                     description: The $and's ID.
 *                   - type: array
 *                     description: The $and's ID.
 *                     items:
 *                       type: string
 *                       title: id
 *                       description: The id's ID.
 *               title:
 *                 oneOf:
 *                   - type: string
 *                     title: title
 *                     description: The $and's title.
 *                   - type: array
 *                     description: The $and's title.
 *                     items:
 *                       type: string
 *                       title: title
 *                       description: The title's details.
 *               product_id:
 *                 oneOf:
 *                   - type: string
 *                     title: product_id
 *                     description: The $and's product id.
 *                   - type: array
 *                     description: The $and's product id.
 *                     items:
 *                       type: string
 *                       title: product_id
 *                       description: The product id's details.
 *               limit:
 *                 type: number
 *                 title: limit
 *                 description: The $and's limit.
 *               offset:
 *                 type: number
 *                 title: offset
 *                 description: The $and's offset.
 *               order:
 *                 type: string
 *                 title: order
 *                 description: The $and's order.
 *               fields:
 *                 type: string
 *                 title: fields
 *                 description: The $and's fields.
 *               $and:
 *                 type: array
 *                 description: The $and's details.
 *                 items:
 *                   oneOf:
 *                     - type: object
 *                       description: The $and's details.
 *                       x-schemaName: BaseProductOptionParams
 *                       properties:
 *                         q:
 *                           type: string
 *                           title: q
 *                           description: The $and's q.
 *                         id:
 *                           oneOf:
 *                             - type: string
 *                               title: id
 *                               description: The $and's ID.
 *                             - type: array
 *                               description: The $and's ID.
 *                               items:
 *                                 type: string
 *                                 title: id
 *                                 description: The id's ID.
 *                         title:
 *                           oneOf:
 *                             - type: string
 *                               title: title
 *                               description: The $and's title.
 *                             - type: array
 *                               description: The $and's title.
 *                               items:
 *                                 type: string
 *                                 title: title
 *                                 description: The title's details.
 *                         product_id:
 *                           oneOf:
 *                             - type: string
 *                               title: product_id
 *                               description: The $and's product id.
 *                             - type: array
 *                               description: The $and's product id.
 *                               items:
 *                                 type: string
 *                                 title: product_id
 *                                 description: The product id's details.
 *                         limit:
 *                           type: number
 *                           title: limit
 *                           description: The $and's limit.
 *                         offset:
 *                           type: number
 *                           title: offset
 *                           description: The $and's offset.
 *                         order:
 *                           type: string
 *                           title: order
 *                           description: The $and's order.
 *                         fields:
 *                           type: string
 *                           title: fields
 *                           description: The $and's fields.
 *                         $and:
 *                           type: array
 *                           description: The $and's details.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $and's details.
 *                                 x-schemaName: BaseProductOptionParams
 *                               - type: object
 *                                 description: The $and's details.
 *                         $or:
 *                           type: array
 *                           description: The $and's $or.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: BaseProductOptionParams
 *                               - type: object
 *                                 description: The $or's details.
 *                     - type: object
 *                       description: The $and's details.
 *                       properties:
 *                         $and:
 *                           type: array
 *                           description: The $and's details.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $and's details.
 *                                 x-schemaName: BaseProductOptionParams
 *                               - type: object
 *                                 description: The $and's details.
 *                         $or:
 *                           type: array
 *                           description: The $and's $or.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: BaseProductOptionParams
 *                               - type: object
 *                                 description: The $or's details.
 *               $or:
 *                 type: array
 *                 description: The $and's $or.
 *                 items:
 *                   oneOf:
 *                     - type: object
 *                       description: The $or's details.
 *                       x-schemaName: BaseProductOptionParams
 *                       properties:
 *                         q:
 *                           type: string
 *                           title: q
 *                           description: The $or's q.
 *                         id:
 *                           oneOf:
 *                             - type: string
 *                               title: id
 *                               description: The $or's ID.
 *                             - type: array
 *                               description: The $or's ID.
 *                               items:
 *                                 type: string
 *                                 title: id
 *                                 description: The id's ID.
 *                         title:
 *                           oneOf:
 *                             - type: string
 *                               title: title
 *                               description: The $or's title.
 *                             - type: array
 *                               description: The $or's title.
 *                               items:
 *                                 type: string
 *                                 title: title
 *                                 description: The title's details.
 *                         product_id:
 *                           oneOf:
 *                             - type: string
 *                               title: product_id
 *                               description: The $or's product id.
 *                             - type: array
 *                               description: The $or's product id.
 *                               items:
 *                                 type: string
 *                                 title: product_id
 *                                 description: The product id's details.
 *                         limit:
 *                           type: number
 *                           title: limit
 *                           description: The $or's limit.
 *                         offset:
 *                           type: number
 *                           title: offset
 *                           description: The $or's offset.
 *                         order:
 *                           type: string
 *                           title: order
 *                           description: The $or's order.
 *                         fields:
 *                           type: string
 *                           title: fields
 *                           description: The $or's fields.
 *                         $and:
 *                           type: array
 *                           description: The $or's $and.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $and's details.
 *                                 x-schemaName: BaseProductOptionParams
 *                               - type: object
 *                                 description: The $and's details.
 *                         $or:
 *                           type: array
 *                           description: The $or's details.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: BaseProductOptionParams
 *                               - type: object
 *                                 description: The $or's details.
 *                     - type: object
 *                       description: The $or's details.
 *                       properties:
 *                         $and:
 *                           type: array
 *                           description: The $or's $and.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $and's details.
 *                                 x-schemaName: BaseProductOptionParams
 *                               - type: object
 *                                 description: The $and's details.
 *                         $or:
 *                           type: array
 *                           description: The $or's details.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: BaseProductOptionParams
 *                               - type: object
 *                                 description: The $or's details.
 *           - type: object
 *             description: The $and's details.
 *             properties:
 *               $and:
 *                 type: array
 *                 description: The $and's details.
 *                 items:
 *                   oneOf:
 *                     - type: object
 *                       description: The $and's details.
 *                       x-schemaName: BaseProductOptionParams
 *                       properties:
 *                         q:
 *                           type: string
 *                           title: q
 *                           description: The $and's q.
 *                         id:
 *                           oneOf:
 *                             - type: string
 *                               title: id
 *                               description: The $and's ID.
 *                             - type: array
 *                               description: The $and's ID.
 *                               items:
 *                                 type: string
 *                                 title: id
 *                                 description: The id's ID.
 *                         title:
 *                           oneOf:
 *                             - type: string
 *                               title: title
 *                               description: The $and's title.
 *                             - type: array
 *                               description: The $and's title.
 *                               items:
 *                                 type: string
 *                                 title: title
 *                                 description: The title's details.
 *                         product_id:
 *                           oneOf:
 *                             - type: string
 *                               title: product_id
 *                               description: The $and's product id.
 *                             - type: array
 *                               description: The $and's product id.
 *                               items:
 *                                 type: string
 *                                 title: product_id
 *                                 description: The product id's details.
 *                         limit:
 *                           type: number
 *                           title: limit
 *                           description: The $and's limit.
 *                         offset:
 *                           type: number
 *                           title: offset
 *                           description: The $and's offset.
 *                         order:
 *                           type: string
 *                           title: order
 *                           description: The $and's order.
 *                         fields:
 *                           type: string
 *                           title: fields
 *                           description: The $and's fields.
 *                         $and:
 *                           type: array
 *                           description: The $and's details.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $and's details.
 *                                 x-schemaName: BaseProductOptionParams
 *                               - type: object
 *                                 description: The $and's details.
 *                         $or:
 *                           type: array
 *                           description: The $and's $or.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: BaseProductOptionParams
 *                               - type: object
 *                                 description: The $or's details.
 *                     - type: object
 *                       description: The $and's details.
 *                       properties:
 *                         $and:
 *                           type: array
 *                           description: The $and's details.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $and's details.
 *                                 x-schemaName: BaseProductOptionParams
 *                               - type: object
 *                                 description: The $and's details.
 *                         $or:
 *                           type: array
 *                           description: The $and's $or.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: BaseProductOptionParams
 *                               - type: object
 *                                 description: The $or's details.
 *               $or:
 *                 type: array
 *                 description: The $and's $or.
 *                 items:
 *                   oneOf:
 *                     - type: object
 *                       description: The $or's details.
 *                       x-schemaName: BaseProductOptionParams
 *                       properties:
 *                         q:
 *                           type: string
 *                           title: q
 *                           description: The $or's q.
 *                         id:
 *                           oneOf:
 *                             - type: string
 *                               title: id
 *                               description: The $or's ID.
 *                             - type: array
 *                               description: The $or's ID.
 *                               items:
 *                                 type: string
 *                                 title: id
 *                                 description: The id's ID.
 *                         title:
 *                           oneOf:
 *                             - type: string
 *                               title: title
 *                               description: The $or's title.
 *                             - type: array
 *                               description: The $or's title.
 *                               items:
 *                                 type: string
 *                                 title: title
 *                                 description: The title's details.
 *                         product_id:
 *                           oneOf:
 *                             - type: string
 *                               title: product_id
 *                               description: The $or's product id.
 *                             - type: array
 *                               description: The $or's product id.
 *                               items:
 *                                 type: string
 *                                 title: product_id
 *                                 description: The product id's details.
 *                         limit:
 *                           type: number
 *                           title: limit
 *                           description: The $or's limit.
 *                         offset:
 *                           type: number
 *                           title: offset
 *                           description: The $or's offset.
 *                         order:
 *                           type: string
 *                           title: order
 *                           description: The $or's order.
 *                         fields:
 *                           type: string
 *                           title: fields
 *                           description: The $or's fields.
 *                         $and:
 *                           type: array
 *                           description: The $or's $and.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $and's details.
 *                                 x-schemaName: BaseProductOptionParams
 *                               - type: object
 *                                 description: The $and's details.
 *                         $or:
 *                           type: array
 *                           description: The $or's details.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: BaseProductOptionParams
 *                               - type: object
 *                                 description: The $or's details.
 *                     - type: object
 *                       description: The $or's details.
 *                       properties:
 *                         $and:
 *                           type: array
 *                           description: The $or's $and.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $and's details.
 *                                 x-schemaName: BaseProductOptionParams
 *                               - type: object
 *                                 description: The $and's details.
 *                         $or:
 *                           type: array
 *                           description: The $or's details.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: BaseProductOptionParams
 *                               - type: object
 *                                 description: The $or's details.
 *   - name: $or
 *     in: query
 *     description: The product's $or.
 *     required: false
 *     schema:
 *       type: array
 *       description: The product's $or.
 *       items:
 *         oneOf:
 *           - type: object
 *             description: The $or's details.
 *             x-schemaName: BaseProductOptionParams
 *             properties:
 *               q:
 *                 type: string
 *                 title: q
 *                 description: The $or's q.
 *               id:
 *                 oneOf:
 *                   - type: string
 *                     title: id
 *                     description: The $or's ID.
 *                   - type: array
 *                     description: The $or's ID.
 *                     items:
 *                       type: string
 *                       title: id
 *                       description: The id's ID.
 *               title:
 *                 oneOf:
 *                   - type: string
 *                     title: title
 *                     description: The $or's title.
 *                   - type: array
 *                     description: The $or's title.
 *                     items:
 *                       type: string
 *                       title: title
 *                       description: The title's details.
 *               product_id:
 *                 oneOf:
 *                   - type: string
 *                     title: product_id
 *                     description: The $or's product id.
 *                   - type: array
 *                     description: The $or's product id.
 *                     items:
 *                       type: string
 *                       title: product_id
 *                       description: The product id's details.
 *               limit:
 *                 type: number
 *                 title: limit
 *                 description: The $or's limit.
 *               offset:
 *                 type: number
 *                 title: offset
 *                 description: The $or's offset.
 *               order:
 *                 type: string
 *                 title: order
 *                 description: The $or's order.
 *               fields:
 *                 type: string
 *                 title: fields
 *                 description: The $or's fields.
 *               $and:
 *                 type: array
 *                 description: The $or's $and.
 *                 items:
 *                   oneOf:
 *                     - type: object
 *                       description: The $and's details.
 *                       x-schemaName: BaseProductOptionParams
 *                       properties:
 *                         q:
 *                           type: string
 *                           title: q
 *                           description: The $and's q.
 *                         id:
 *                           oneOf:
 *                             - type: string
 *                               title: id
 *                               description: The $and's ID.
 *                             - type: array
 *                               description: The $and's ID.
 *                               items:
 *                                 type: string
 *                                 title: id
 *                                 description: The id's ID.
 *                         title:
 *                           oneOf:
 *                             - type: string
 *                               title: title
 *                               description: The $and's title.
 *                             - type: array
 *                               description: The $and's title.
 *                               items:
 *                                 type: string
 *                                 title: title
 *                                 description: The title's details.
 *                         product_id:
 *                           oneOf:
 *                             - type: string
 *                               title: product_id
 *                               description: The $and's product id.
 *                             - type: array
 *                               description: The $and's product id.
 *                               items:
 *                                 type: string
 *                                 title: product_id
 *                                 description: The product id's details.
 *                         limit:
 *                           type: number
 *                           title: limit
 *                           description: The $and's limit.
 *                         offset:
 *                           type: number
 *                           title: offset
 *                           description: The $and's offset.
 *                         order:
 *                           type: string
 *                           title: order
 *                           description: The $and's order.
 *                         fields:
 *                           type: string
 *                           title: fields
 *                           description: The $and's fields.
 *                         $and:
 *                           type: array
 *                           description: The $and's details.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $and's details.
 *                                 x-schemaName: BaseProductOptionParams
 *                               - type: object
 *                                 description: The $and's details.
 *                         $or:
 *                           type: array
 *                           description: The $and's $or.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: BaseProductOptionParams
 *                               - type: object
 *                                 description: The $or's details.
 *                     - type: object
 *                       description: The $and's details.
 *                       properties:
 *                         $and:
 *                           type: array
 *                           description: The $and's details.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $and's details.
 *                                 x-schemaName: BaseProductOptionParams
 *                               - type: object
 *                                 description: The $and's details.
 *                         $or:
 *                           type: array
 *                           description: The $and's $or.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: BaseProductOptionParams
 *                               - type: object
 *                                 description: The $or's details.
 *               $or:
 *                 type: array
 *                 description: The $or's details.
 *                 items:
 *                   oneOf:
 *                     - type: object
 *                       description: The $or's details.
 *                       x-schemaName: BaseProductOptionParams
 *                       properties:
 *                         q:
 *                           type: string
 *                           title: q
 *                           description: The $or's q.
 *                         id:
 *                           oneOf:
 *                             - type: string
 *                               title: id
 *                               description: The $or's ID.
 *                             - type: array
 *                               description: The $or's ID.
 *                               items:
 *                                 type: string
 *                                 title: id
 *                                 description: The id's ID.
 *                         title:
 *                           oneOf:
 *                             - type: string
 *                               title: title
 *                               description: The $or's title.
 *                             - type: array
 *                               description: The $or's title.
 *                               items:
 *                                 type: string
 *                                 title: title
 *                                 description: The title's details.
 *                         product_id:
 *                           oneOf:
 *                             - type: string
 *                               title: product_id
 *                               description: The $or's product id.
 *                             - type: array
 *                               description: The $or's product id.
 *                               items:
 *                                 type: string
 *                                 title: product_id
 *                                 description: The product id's details.
 *                         limit:
 *                           type: number
 *                           title: limit
 *                           description: The $or's limit.
 *                         offset:
 *                           type: number
 *                           title: offset
 *                           description: The $or's offset.
 *                         order:
 *                           type: string
 *                           title: order
 *                           description: The $or's order.
 *                         fields:
 *                           type: string
 *                           title: fields
 *                           description: The $or's fields.
 *                         $and:
 *                           type: array
 *                           description: The $or's $and.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $and's details.
 *                                 x-schemaName: BaseProductOptionParams
 *                               - type: object
 *                                 description: The $and's details.
 *                         $or:
 *                           type: array
 *                           description: The $or's details.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: BaseProductOptionParams
 *                               - type: object
 *                                 description: The $or's details.
 *                     - type: object
 *                       description: The $or's details.
 *                       properties:
 *                         $and:
 *                           type: array
 *                           description: The $or's $and.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $and's details.
 *                                 x-schemaName: BaseProductOptionParams
 *                               - type: object
 *                                 description: The $and's details.
 *                         $or:
 *                           type: array
 *                           description: The $or's details.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: BaseProductOptionParams
 *                               - type: object
 *                                 description: The $or's details.
 *           - type: object
 *             description: The $or's details.
 *             properties:
 *               $and:
 *                 type: array
 *                 description: The $or's $and.
 *                 items:
 *                   oneOf:
 *                     - type: object
 *                       description: The $and's details.
 *                       x-schemaName: BaseProductOptionParams
 *                       properties:
 *                         q:
 *                           type: string
 *                           title: q
 *                           description: The $and's q.
 *                         id:
 *                           oneOf:
 *                             - type: string
 *                               title: id
 *                               description: The $and's ID.
 *                             - type: array
 *                               description: The $and's ID.
 *                               items:
 *                                 type: string
 *                                 title: id
 *                                 description: The id's ID.
 *                         title:
 *                           oneOf:
 *                             - type: string
 *                               title: title
 *                               description: The $and's title.
 *                             - type: array
 *                               description: The $and's title.
 *                               items:
 *                                 type: string
 *                                 title: title
 *                                 description: The title's details.
 *                         product_id:
 *                           oneOf:
 *                             - type: string
 *                               title: product_id
 *                               description: The $and's product id.
 *                             - type: array
 *                               description: The $and's product id.
 *                               items:
 *                                 type: string
 *                                 title: product_id
 *                                 description: The product id's details.
 *                         limit:
 *                           type: number
 *                           title: limit
 *                           description: The $and's limit.
 *                         offset:
 *                           type: number
 *                           title: offset
 *                           description: The $and's offset.
 *                         order:
 *                           type: string
 *                           title: order
 *                           description: The $and's order.
 *                         fields:
 *                           type: string
 *                           title: fields
 *                           description: The $and's fields.
 *                         $and:
 *                           type: array
 *                           description: The $and's details.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $and's details.
 *                                 x-schemaName: BaseProductOptionParams
 *                               - type: object
 *                                 description: The $and's details.
 *                         $or:
 *                           type: array
 *                           description: The $and's $or.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: BaseProductOptionParams
 *                               - type: object
 *                                 description: The $or's details.
 *                     - type: object
 *                       description: The $and's details.
 *                       properties:
 *                         $and:
 *                           type: array
 *                           description: The $and's details.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $and's details.
 *                                 x-schemaName: BaseProductOptionParams
 *                               - type: object
 *                                 description: The $and's details.
 *                         $or:
 *                           type: array
 *                           description: The $and's $or.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: BaseProductOptionParams
 *                               - type: object
 *                                 description: The $or's details.
 *               $or:
 *                 type: array
 *                 description: The $or's details.
 *                 items:
 *                   oneOf:
 *                     - type: object
 *                       description: The $or's details.
 *                       x-schemaName: BaseProductOptionParams
 *                       properties:
 *                         q:
 *                           type: string
 *                           title: q
 *                           description: The $or's q.
 *                         id:
 *                           oneOf:
 *                             - type: string
 *                               title: id
 *                               description: The $or's ID.
 *                             - type: array
 *                               description: The $or's ID.
 *                               items:
 *                                 type: string
 *                                 title: id
 *                                 description: The id's ID.
 *                         title:
 *                           oneOf:
 *                             - type: string
 *                               title: title
 *                               description: The $or's title.
 *                             - type: array
 *                               description: The $or's title.
 *                               items:
 *                                 type: string
 *                                 title: title
 *                                 description: The title's details.
 *                         product_id:
 *                           oneOf:
 *                             - type: string
 *                               title: product_id
 *                               description: The $or's product id.
 *                             - type: array
 *                               description: The $or's product id.
 *                               items:
 *                                 type: string
 *                                 title: product_id
 *                                 description: The product id's details.
 *                         limit:
 *                           type: number
 *                           title: limit
 *                           description: The $or's limit.
 *                         offset:
 *                           type: number
 *                           title: offset
 *                           description: The $or's offset.
 *                         order:
 *                           type: string
 *                           title: order
 *                           description: The $or's order.
 *                         fields:
 *                           type: string
 *                           title: fields
 *                           description: The $or's fields.
 *                         $and:
 *                           type: array
 *                           description: The $or's $and.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $and's details.
 *                                 x-schemaName: BaseProductOptionParams
 *                               - type: object
 *                                 description: The $and's details.
 *                         $or:
 *                           type: array
 *                           description: The $or's details.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: BaseProductOptionParams
 *                               - type: object
 *                                 description: The $or's details.
 *                     - type: object
 *                       description: The $or's details.
 *                       properties:
 *                         $and:
 *                           type: array
 *                           description: The $or's $and.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $and's details.
 *                                 x-schemaName: BaseProductOptionParams
 *                               - type: object
 *                                 description: The $and's details.
 *                         $or:
 *                           type: array
 *                           description: The $or's details.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: BaseProductOptionParams
 *                               - type: object
 *                                 description: The $or's details.
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * x-codeSamples:
 *   - lang: Shell
 *     label: cURL
 *     source: |-
 *       curl '{backend_url}/admin/products/{id}/options' \
 *       -H 'x-medusa-access-token: {api_token}'
 * tags:
 *   - Products
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           allOf:
 *             - type: object
 *               description: SUMMARY
 *               required:
 *                 - limit
 *                 - offset
 *                 - count
 *               properties:
 *                 limit:
 *                   type: number
 *                   title: limit
 *                   description: The product's limit.
 *                 offset:
 *                   type: number
 *                   title: offset
 *                   description: The product's offset.
 *                 count:
 *                   type: number
 *                   title: count
 *                   description: The product's count.
 *             - type: object
 *               description: SUMMARY
 *               required:
 *                 - product_options
 *               properties:
 *                 product_options:
 *                   type: array
 *                   description: The product's product options.
 *                   items:
 *                     $ref: "#/components/schemas/AdminProductOption"
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

