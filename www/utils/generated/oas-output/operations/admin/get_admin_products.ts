/**
 * @oas [get] /admin/products
 * operationId: GetProducts
 * summary: List Products
 * description: Retrieve a list of products. The products can be filtered by fields
 *   such as `id`. The products can also be sorted or paginated.
 * x-authenticated: true
 * parameters:
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
 *   - name: price_list_id
 *     in: query
 *     required: false
 *     schema:
 *       oneOf:
 *         - type: string
 *           title: price_list_id
 *           description: The product's price list id.
 *         - type: array
 *           description: The product's price list id.
 *           items:
 *             type: string
 *             title: price_list_id
 *             description: The price list id's details.
 *   - name: q
 *     in: query
 *     description: The product's q.
 *     required: false
 *     schema:
 *       type: string
 *       title: q
 *       description: The product's q.
 *   - name: status
 *     in: query
 *     required: false
 *     schema:
 *       oneOf:
 *         - type: string
 *           title: status
 *           description: The product's status.
 *         - type: string
 *           title: status
 *           description: The product's status.
 *         - type: string
 *           title: status
 *           description: The product's status.
 *         - type: string
 *           title: status
 *           description: The product's status.
 *         - type: array
 *           description: The product's status.
 *           items:
 *             type: string
 *             enum:
 *               - draft
 *               - proposed
 *               - published
 *               - rejected
 *   - name: sales_channel_id
 *     in: query
 *     required: false
 *     schema:
 *       oneOf:
 *         - type: string
 *           title: sales_channel_id
 *           description: The product's sales channel id.
 *         - type: array
 *           description: The product's sales channel id.
 *           items:
 *             type: string
 *             title: sales_channel_id
 *             description: The sales channel id's details.
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
 *   - name: handle
 *     in: query
 *     required: false
 *     schema:
 *       oneOf:
 *         - type: string
 *           title: handle
 *           description: The product's handle.
 *         - type: array
 *           description: The product's handle.
 *           items:
 *             type: string
 *             title: handle
 *             description: The handle's details.
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
 *   - name: is_giftcard
 *     in: query
 *     description: The product's is giftcard.
 *     required: false
 *     schema:
 *       type: boolean
 *       title: is_giftcard
 *       description: The product's is giftcard.
 *   - name: tags
 *     in: query
 *     description: The product's tags.
 *     required: false
 *     schema:
 *       type: object
 *       description: The product's tags.
 *       properties:
 *         value:
 *           type: array
 *           description: The tag's value.
 *           items:
 *             type: string
 *             title: value
 *             description: The value's details.
 *   - name: type_id
 *     in: query
 *     required: false
 *     schema:
 *       oneOf:
 *         - type: string
 *           title: type_id
 *           description: The product's type id.
 *         - type: array
 *           description: The product's type id.
 *           items:
 *             type: string
 *             title: type_id
 *             description: The type id's details.
 *   - name: category_id
 *     in: query
 *     required: false
 *     schema:
 *       oneOf:
 *         - type: string
 *           title: category_id
 *           description: The product's category id.
 *         - type: array
 *           description: The product's category id.
 *           items:
 *             type: string
 *             title: category_id
 *             description: The category id's details.
 *         - type: object
 *           description: The product's category id.
 *           properties:
 *             $and:
 *               type: array
 *               description: The category id's $and.
 *               items:
 *                 oneOf:
 *                   - type: string
 *                     title: $and
 *                     description: The $and's details.
 *                   - type: object
 *                     description: The $and's details.
 *                     x-schemaName: RegExp
 *                     required:
 *                       - exec
 *                       - test
 *                       - source
 *                       - global
 *                       - ignoreCase
 *                       - multiline
 *                       - lastIndex
 *                       - flags
 *                       - sticky
 *                       - unicode
 *                       - dotAll
 *                       - __@match@1128
 *                       - __@replace@1130
 *                       - __@search@1133
 *                       - __@matchAll@1137
 *                     properties:
 *                       exec:
 *                         type: object
 *                         description: The $and's exec.
 *                       test:
 *                         type: object
 *                         description: The $and's test.
 *                       source:
 *                         type: string
 *                         title: source
 *                         description: The $and's source.
 *                       global:
 *                         type: boolean
 *                         title: global
 *                         description: The $and's global.
 *                       ignoreCase:
 *                         type: boolean
 *                         title: ignoreCase
 *                         description: The $and's ignorecase.
 *                       multiline:
 *                         type: boolean
 *                         title: multiline
 *                         description: The $and's multiline.
 *                       lastIndex:
 *                         type: number
 *                         title: lastIndex
 *                         description: The $and's lastindex.
 *                       compile:
 *                         type: object
 *                         description: The $and's compile.
 *                       flags:
 *                         type: string
 *                         title: flags
 *                         description: The $and's flags.
 *                       sticky:
 *                         type: boolean
 *                         title: sticky
 *                         description: The $and's sticky.
 *                       unicode:
 *                         type: boolean
 *                         title: unicode
 *                         description: The $and's unicode.
 *                       dotAll:
 *                         type: boolean
 *                         title: dotAll
 *                         description: The $and's dotall.
 *                       __@match@1128:
 *                         type: object
 *                         description: The $and's   @match@1128.
 *                       __@replace@1130:
 *                         type: object
 *                         description: The $and's   @replace@1130.
 *                       __@search@1133:
 *                         type: object
 *                         description: The $and's   @search@1133.
 *                       __@split@1135:
 *                         type: object
 *                         description: The $and's   @split@1135.
 *                       __@matchAll@1137:
 *                         type: object
 *                         description: The $and's   @matchall@1137.
 *                   - type: object
 *                     description: The $and's details.
 *                     properties:
 *                       $and:
 *                         type: array
 *                         description: The $and's details.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $and
 *                               description: The $and's details.
 *                             - type: object
 *                               description: The $and's details.
 *                               x-schemaName: RegExp
 *                             - type: object
 *                               description: The $and's details.
 *                             - type: array
 *                               description: The $and's details.
 *                               items:
 *                                 oneOf:
 *                                   - type: string
 *                                     title: $and
 *                                     description: The $and's details.
 *                                   - type: object
 *                                     description: The $and's details.
 *                                     x-schemaName: RegExp
 *                       $or:
 *                         type: array
 *                         description: The $and's $or.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $or
 *                               description: The $or's details.
 *                             - type: object
 *                               description: The $or's details.
 *                               x-schemaName: RegExp
 *                             - type: object
 *                               description: The $or's details.
 *                             - type: array
 *                               description: The $or's details.
 *                               items:
 *                                 oneOf:
 *                                   - type: string
 *                                     title: $or
 *                                     description: The $or's details.
 *                                   - type: object
 *                                     description: The $or's details.
 *                                     x-schemaName: RegExp
 *                       $eq:
 *                         oneOf:
 *                           - type: string
 *                             title: $eq
 *                             description: The $and's $eq.
 *                           - type: object
 *                             description: The $and's $eq.
 *                             x-schemaName: RegExp
 *                           - type: array
 *                             description: The $and's $eq.
 *                             items:
 *                               oneOf:
 *                                 - type: string
 *                                   title: $eq
 *                                   description: The $eq's details.
 *                                 - type: object
 *                                   description: The $eq's details.
 *                                   x-schemaName: RegExp
 *                       $ne:
 *                         oneOf:
 *                           - type: string
 *                             title: $ne
 *                             description: The $and's $ne.
 *                           - type: object
 *                             description: The $and's $ne.
 *                             x-schemaName: RegExp
 *                       $in:
 *                         type: array
 *                         description: The $and's $in.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $in
 *                               description: The $in's details.
 *                             - type: object
 *                               description: The $in's details.
 *                               x-schemaName: RegExp
 *                       $nin:
 *                         type: array
 *                         description: The $and's $nin.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $nin
 *                               description: The $nin's details.
 *                             - type: object
 *                               description: The $nin's details.
 *                               x-schemaName: RegExp
 *                       $not:
 *                         oneOf:
 *                           - type: string
 *                             title: $not
 *                             description: The $and's $not.
 *                           - type: object
 *                             description: The $and's $not.
 *                             x-schemaName: RegExp
 *                           - type: object
 *                             description: The $and's $not.
 *                           - type: array
 *                             description: The $and's $not.
 *                             items:
 *                               oneOf:
 *                                 - type: string
 *                                   title: $not
 *                                   description: The $not's details.
 *                                 - type: object
 *                                   description: The $not's details.
 *                                   x-schemaName: RegExp
 *                       $gt:
 *                         oneOf:
 *                           - type: string
 *                             title: $gt
 *                             description: The $and's $gt.
 *                           - type: object
 *                             description: The $and's $gt.
 *                             x-schemaName: RegExp
 *                       $gte:
 *                         oneOf:
 *                           - type: string
 *                             title: $gte
 *                             description: The $and's $gte.
 *                           - type: object
 *                             description: The $and's $gte.
 *                             x-schemaName: RegExp
 *                       $lt:
 *                         oneOf:
 *                           - type: string
 *                             title: $lt
 *                             description: The $and's $lt.
 *                           - type: object
 *                             description: The $and's $lt.
 *                             x-schemaName: RegExp
 *                       $lte:
 *                         oneOf:
 *                           - type: string
 *                             title: $lte
 *                             description: The $and's $lte.
 *                           - type: object
 *                             description: The $and's $lte.
 *                             x-schemaName: RegExp
 *                       $like:
 *                         type: string
 *                         title: $like
 *                         description: The $and's $like.
 *                       $re:
 *                         type: string
 *                         title: $re
 *                         description: The $and's $re.
 *                       $ilike:
 *                         type: string
 *                         title: $ilike
 *                         description: The $and's $ilike.
 *                       $fulltext:
 *                         type: string
 *                         title: $fulltext
 *                         description: The $and's $fulltext.
 *                       $overlap:
 *                         type: array
 *                         description: The $and's $overlap.
 *                         items:
 *                           type: string
 *                           title: $overlap
 *                           description: The $overlap's details.
 *                       $contains:
 *                         type: array
 *                         description: The $and's $contains.
 *                         items:
 *                           type: string
 *                           title: $contains
 *                           description: The $contain's $contains.
 *                       $contained:
 *                         type: array
 *                         description: The $and's $contained.
 *                         items:
 *                           type: string
 *                           title: $contained
 *                           description: The $contained's details.
 *                       $exists:
 *                         type: boolean
 *                         title: $exists
 *                         description: The $and's $exists.
 *                   - type: array
 *                     description: The $and's details.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $and
 *                           description: The $and's details.
 *                         - type: object
 *                           description: The $and's details.
 *                           x-schemaName: RegExp
 *                           required:
 *                             - exec
 *                             - test
 *                             - source
 *                             - global
 *                             - ignoreCase
 *                             - multiline
 *                             - lastIndex
 *                             - flags
 *                             - sticky
 *                             - unicode
 *                             - dotAll
 *                             - __@match@1128
 *                             - __@replace@1130
 *                             - __@search@1133
 *                             - __@matchAll@1137
 *                           properties:
 *                             exec:
 *                               type: object
 *                               description: The $and's exec.
 *                             test:
 *                               type: object
 *                               description: The $and's test.
 *                             source:
 *                               type: string
 *                               title: source
 *                               description: The $and's source.
 *                             global:
 *                               type: boolean
 *                               title: global
 *                               description: The $and's global.
 *                             ignoreCase:
 *                               type: boolean
 *                               title: ignoreCase
 *                               description: The $and's ignorecase.
 *                             multiline:
 *                               type: boolean
 *                               title: multiline
 *                               description: The $and's multiline.
 *                             lastIndex:
 *                               type: number
 *                               title: lastIndex
 *                               description: The $and's lastindex.
 *                             compile:
 *                               type: object
 *                               description: The $and's compile.
 *                             flags:
 *                               type: string
 *                               title: flags
 *                               description: The $and's flags.
 *                             sticky:
 *                               type: boolean
 *                               title: sticky
 *                               description: The $and's sticky.
 *                             unicode:
 *                               type: boolean
 *                               title: unicode
 *                               description: The $and's unicode.
 *                             dotAll:
 *                               type: boolean
 *                               title: dotAll
 *                               description: The $and's dotall.
 *                             __@match@1128:
 *                               type: object
 *                               description: The $and's   @match@1128.
 *                             __@replace@1130:
 *                               type: object
 *                               description: The $and's   @replace@1130.
 *                             __@search@1133:
 *                               type: object
 *                               description: The $and's   @search@1133.
 *                             __@split@1135:
 *                               type: object
 *                               description: The $and's   @split@1135.
 *                             __@matchAll@1137:
 *                               type: object
 *                               description: The $and's   @matchall@1137.
 *             $or:
 *               type: array
 *               description: The category id's $or.
 *               items:
 *                 oneOf:
 *                   - type: string
 *                     title: $or
 *                     description: The $or's details.
 *                   - type: object
 *                     description: The $or's details.
 *                     x-schemaName: RegExp
 *                     required:
 *                       - exec
 *                       - test
 *                       - source
 *                       - global
 *                       - ignoreCase
 *                       - multiline
 *                       - lastIndex
 *                       - flags
 *                       - sticky
 *                       - unicode
 *                       - dotAll
 *                       - __@match@1128
 *                       - __@replace@1130
 *                       - __@search@1133
 *                       - __@matchAll@1137
 *                     properties:
 *                       exec:
 *                         type: object
 *                         description: The $or's exec.
 *                       test:
 *                         type: object
 *                         description: The $or's test.
 *                       source:
 *                         type: string
 *                         title: source
 *                         description: The $or's source.
 *                       global:
 *                         type: boolean
 *                         title: global
 *                         description: The $or's global.
 *                       ignoreCase:
 *                         type: boolean
 *                         title: ignoreCase
 *                         description: The $or's ignorecase.
 *                       multiline:
 *                         type: boolean
 *                         title: multiline
 *                         description: The $or's multiline.
 *                       lastIndex:
 *                         type: number
 *                         title: lastIndex
 *                         description: The $or's lastindex.
 *                       compile:
 *                         type: object
 *                         description: The $or's compile.
 *                       flags:
 *                         type: string
 *                         title: flags
 *                         description: The $or's flags.
 *                       sticky:
 *                         type: boolean
 *                         title: sticky
 *                         description: The $or's sticky.
 *                       unicode:
 *                         type: boolean
 *                         title: unicode
 *                         description: The $or's unicode.
 *                       dotAll:
 *                         type: boolean
 *                         title: dotAll
 *                         description: The $or's dotall.
 *                       __@match@1128:
 *                         type: object
 *                         description: The $or's   @match@1128.
 *                       __@replace@1130:
 *                         type: object
 *                         description: The $or's   @replace@1130.
 *                       __@search@1133:
 *                         type: object
 *                         description: The $or's   @search@1133.
 *                       __@split@1135:
 *                         type: object
 *                         description: The $or's   @split@1135.
 *                       __@matchAll@1137:
 *                         type: object
 *                         description: The $or's   @matchall@1137.
 *                   - type: object
 *                     description: The $or's details.
 *                     properties:
 *                       $and:
 *                         type: array
 *                         description: The $or's $and.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $and
 *                               description: The $and's details.
 *                             - type: object
 *                               description: The $and's details.
 *                               x-schemaName: RegExp
 *                             - type: object
 *                               description: The $and's details.
 *                             - type: array
 *                               description: The $and's details.
 *                               items:
 *                                 oneOf:
 *                                   - type: string
 *                                     title: $and
 *                                     description: The $and's details.
 *                                   - type: object
 *                                     description: The $and's details.
 *                                     x-schemaName: RegExp
 *                       $or:
 *                         type: array
 *                         description: The $or's details.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $or
 *                               description: The $or's details.
 *                             - type: object
 *                               description: The $or's details.
 *                               x-schemaName: RegExp
 *                             - type: object
 *                               description: The $or's details.
 *                             - type: array
 *                               description: The $or's details.
 *                               items:
 *                                 oneOf:
 *                                   - type: string
 *                                     title: $or
 *                                     description: The $or's details.
 *                                   - type: object
 *                                     description: The $or's details.
 *                                     x-schemaName: RegExp
 *                       $eq:
 *                         oneOf:
 *                           - type: string
 *                             title: $eq
 *                             description: The $or's $eq.
 *                           - type: object
 *                             description: The $or's $eq.
 *                             x-schemaName: RegExp
 *                           - type: array
 *                             description: The $or's $eq.
 *                             items:
 *                               oneOf:
 *                                 - type: string
 *                                   title: $eq
 *                                   description: The $eq's details.
 *                                 - type: object
 *                                   description: The $eq's details.
 *                                   x-schemaName: RegExp
 *                       $ne:
 *                         oneOf:
 *                           - type: string
 *                             title: $ne
 *                             description: The $or's $ne.
 *                           - type: object
 *                             description: The $or's $ne.
 *                             x-schemaName: RegExp
 *                       $in:
 *                         type: array
 *                         description: The $or's $in.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $in
 *                               description: The $in's details.
 *                             - type: object
 *                               description: The $in's details.
 *                               x-schemaName: RegExp
 *                       $nin:
 *                         type: array
 *                         description: The $or's $nin.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $nin
 *                               description: The $nin's details.
 *                             - type: object
 *                               description: The $nin's details.
 *                               x-schemaName: RegExp
 *                       $not:
 *                         oneOf:
 *                           - type: string
 *                             title: $not
 *                             description: The $or's $not.
 *                           - type: object
 *                             description: The $or's $not.
 *                             x-schemaName: RegExp
 *                           - type: object
 *                             description: The $or's $not.
 *                           - type: array
 *                             description: The $or's $not.
 *                             items:
 *                               oneOf:
 *                                 - type: string
 *                                   title: $not
 *                                   description: The $not's details.
 *                                 - type: object
 *                                   description: The $not's details.
 *                                   x-schemaName: RegExp
 *                       $gt:
 *                         oneOf:
 *                           - type: string
 *                             title: $gt
 *                             description: The $or's $gt.
 *                           - type: object
 *                             description: The $or's $gt.
 *                             x-schemaName: RegExp
 *                       $gte:
 *                         oneOf:
 *                           - type: string
 *                             title: $gte
 *                             description: The $or's $gte.
 *                           - type: object
 *                             description: The $or's $gte.
 *                             x-schemaName: RegExp
 *                       $lt:
 *                         oneOf:
 *                           - type: string
 *                             title: $lt
 *                             description: The $or's $lt.
 *                           - type: object
 *                             description: The $or's $lt.
 *                             x-schemaName: RegExp
 *                       $lte:
 *                         oneOf:
 *                           - type: string
 *                             title: $lte
 *                             description: The $or's $lte.
 *                           - type: object
 *                             description: The $or's $lte.
 *                             x-schemaName: RegExp
 *                       $like:
 *                         type: string
 *                         title: $like
 *                         description: The $or's $like.
 *                       $re:
 *                         type: string
 *                         title: $re
 *                         description: The $or's $re.
 *                       $ilike:
 *                         type: string
 *                         title: $ilike
 *                         description: The $or's $ilike.
 *                       $fulltext:
 *                         type: string
 *                         title: $fulltext
 *                         description: The $or's $fulltext.
 *                       $overlap:
 *                         type: array
 *                         description: The $or's $overlap.
 *                         items:
 *                           type: string
 *                           title: $overlap
 *                           description: The $overlap's details.
 *                       $contains:
 *                         type: array
 *                         description: The $or's $contains.
 *                         items:
 *                           type: string
 *                           title: $contains
 *                           description: The $contain's $contains.
 *                       $contained:
 *                         type: array
 *                         description: The $or's $contained.
 *                         items:
 *                           type: string
 *                           title: $contained
 *                           description: The $contained's details.
 *                       $exists:
 *                         type: boolean
 *                         title: $exists
 *                         description: The $or's $exists.
 *                   - type: array
 *                     description: The $or's details.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $or
 *                           description: The $or's details.
 *                         - type: object
 *                           description: The $or's details.
 *                           x-schemaName: RegExp
 *                           required:
 *                             - exec
 *                             - test
 *                             - source
 *                             - global
 *                             - ignoreCase
 *                             - multiline
 *                             - lastIndex
 *                             - flags
 *                             - sticky
 *                             - unicode
 *                             - dotAll
 *                             - __@match@1128
 *                             - __@replace@1130
 *                             - __@search@1133
 *                             - __@matchAll@1137
 *                           properties:
 *                             exec:
 *                               type: object
 *                               description: The $or's exec.
 *                             test:
 *                               type: object
 *                               description: The $or's test.
 *                             source:
 *                               type: string
 *                               title: source
 *                               description: The $or's source.
 *                             global:
 *                               type: boolean
 *                               title: global
 *                               description: The $or's global.
 *                             ignoreCase:
 *                               type: boolean
 *                               title: ignoreCase
 *                               description: The $or's ignorecase.
 *                             multiline:
 *                               type: boolean
 *                               title: multiline
 *                               description: The $or's multiline.
 *                             lastIndex:
 *                               type: number
 *                               title: lastIndex
 *                               description: The $or's lastindex.
 *                             compile:
 *                               type: object
 *                               description: The $or's compile.
 *                             flags:
 *                               type: string
 *                               title: flags
 *                               description: The $or's flags.
 *                             sticky:
 *                               type: boolean
 *                               title: sticky
 *                               description: The $or's sticky.
 *                             unicode:
 *                               type: boolean
 *                               title: unicode
 *                               description: The $or's unicode.
 *                             dotAll:
 *                               type: boolean
 *                               title: dotAll
 *                               description: The $or's dotall.
 *                             __@match@1128:
 *                               type: object
 *                               description: The $or's   @match@1128.
 *                             __@replace@1130:
 *                               type: object
 *                               description: The $or's   @replace@1130.
 *                             __@search@1133:
 *                               type: object
 *                               description: The $or's   @search@1133.
 *                             __@split@1135:
 *                               type: object
 *                               description: The $or's   @split@1135.
 *                             __@matchAll@1137:
 *                               type: object
 *                               description: The $or's   @matchall@1137.
 *             $eq:
 *               oneOf:
 *                 - type: string
 *                   title: $eq
 *                   description: The category id's $eq.
 *                 - type: object
 *                   description: The category id's $eq.
 *                   x-schemaName: RegExp
 *                   required:
 *                     - exec
 *                     - test
 *                     - source
 *                     - global
 *                     - ignoreCase
 *                     - multiline
 *                     - lastIndex
 *                     - flags
 *                     - sticky
 *                     - unicode
 *                     - dotAll
 *                     - __@match@1128
 *                     - __@replace@1130
 *                     - __@search@1133
 *                     - __@matchAll@1137
 *                   properties:
 *                     exec:
 *                       type: object
 *                       description: The $eq's exec.
 *                     test:
 *                       type: object
 *                       description: The $eq's test.
 *                     source:
 *                       type: string
 *                       title: source
 *                       description: The $eq's source.
 *                     global:
 *                       type: boolean
 *                       title: global
 *                       description: The $eq's global.
 *                     ignoreCase:
 *                       type: boolean
 *                       title: ignoreCase
 *                       description: The $eq's ignorecase.
 *                     multiline:
 *                       type: boolean
 *                       title: multiline
 *                       description: The $eq's multiline.
 *                     lastIndex:
 *                       type: number
 *                       title: lastIndex
 *                       description: The $eq's lastindex.
 *                     compile:
 *                       type: object
 *                       description: The $eq's compile.
 *                     flags:
 *                       type: string
 *                       title: flags
 *                       description: The $eq's flags.
 *                     sticky:
 *                       type: boolean
 *                       title: sticky
 *                       description: The $eq's sticky.
 *                     unicode:
 *                       type: boolean
 *                       title: unicode
 *                       description: The $eq's unicode.
 *                     dotAll:
 *                       type: boolean
 *                       title: dotAll
 *                       description: The $eq's dotall.
 *                     __@match@1128:
 *                       type: object
 *                       description: The $eq's   @match@1128.
 *                     __@replace@1130:
 *                       type: object
 *                       description: The $eq's   @replace@1130.
 *                     __@search@1133:
 *                       type: object
 *                       description: The $eq's   @search@1133.
 *                     __@split@1135:
 *                       type: object
 *                       description: The $eq's   @split@1135.
 *                     __@matchAll@1137:
 *                       type: object
 *                       description: The $eq's   @matchall@1137.
 *                 - type: array
 *                   description: The category id's $eq.
 *                   items:
 *                     oneOf:
 *                       - type: string
 *                         title: $eq
 *                         description: The $eq's details.
 *                       - type: object
 *                         description: The $eq's details.
 *                         x-schemaName: RegExp
 *                         required:
 *                           - exec
 *                           - test
 *                           - source
 *                           - global
 *                           - ignoreCase
 *                           - multiline
 *                           - lastIndex
 *                           - flags
 *                           - sticky
 *                           - unicode
 *                           - dotAll
 *                           - __@match@1128
 *                           - __@replace@1130
 *                           - __@search@1133
 *                           - __@matchAll@1137
 *                         properties:
 *                           exec:
 *                             type: object
 *                             description: The $eq's exec.
 *                           test:
 *                             type: object
 *                             description: The $eq's test.
 *                           source:
 *                             type: string
 *                             title: source
 *                             description: The $eq's source.
 *                           global:
 *                             type: boolean
 *                             title: global
 *                             description: The $eq's global.
 *                           ignoreCase:
 *                             type: boolean
 *                             title: ignoreCase
 *                             description: The $eq's ignorecase.
 *                           multiline:
 *                             type: boolean
 *                             title: multiline
 *                             description: The $eq's multiline.
 *                           lastIndex:
 *                             type: number
 *                             title: lastIndex
 *                             description: The $eq's lastindex.
 *                           compile:
 *                             type: object
 *                             description: The $eq's compile.
 *                           flags:
 *                             type: string
 *                             title: flags
 *                             description: The $eq's flags.
 *                           sticky:
 *                             type: boolean
 *                             title: sticky
 *                             description: The $eq's sticky.
 *                           unicode:
 *                             type: boolean
 *                             title: unicode
 *                             description: The $eq's unicode.
 *                           dotAll:
 *                             type: boolean
 *                             title: dotAll
 *                             description: The $eq's dotall.
 *                           __@match@1128:
 *                             type: object
 *                             description: The $eq's   @match@1128.
 *                           __@replace@1130:
 *                             type: object
 *                             description: The $eq's   @replace@1130.
 *                           __@search@1133:
 *                             type: object
 *                             description: The $eq's   @search@1133.
 *                           __@split@1135:
 *                             type: object
 *                             description: The $eq's   @split@1135.
 *                           __@matchAll@1137:
 *                             type: object
 *                             description: The $eq's   @matchall@1137.
 *             $ne:
 *               oneOf:
 *                 - type: string
 *                   title: $ne
 *                   description: The category id's $ne.
 *                 - type: object
 *                   description: The category id's $ne.
 *                   x-schemaName: RegExp
 *                   required:
 *                     - exec
 *                     - test
 *                     - source
 *                     - global
 *                     - ignoreCase
 *                     - multiline
 *                     - lastIndex
 *                     - flags
 *                     - sticky
 *                     - unicode
 *                     - dotAll
 *                     - __@match@1128
 *                     - __@replace@1130
 *                     - __@search@1133
 *                     - __@matchAll@1137
 *                   properties:
 *                     exec:
 *                       type: object
 *                       description: The $ne's exec.
 *                     test:
 *                       type: object
 *                       description: The $ne's test.
 *                     source:
 *                       type: string
 *                       title: source
 *                       description: The $ne's source.
 *                     global:
 *                       type: boolean
 *                       title: global
 *                       description: The $ne's global.
 *                     ignoreCase:
 *                       type: boolean
 *                       title: ignoreCase
 *                       description: The $ne's ignorecase.
 *                     multiline:
 *                       type: boolean
 *                       title: multiline
 *                       description: The $ne's multiline.
 *                     lastIndex:
 *                       type: number
 *                       title: lastIndex
 *                       description: The $ne's lastindex.
 *                     compile:
 *                       type: object
 *                       description: The $ne's compile.
 *                     flags:
 *                       type: string
 *                       title: flags
 *                       description: The $ne's flags.
 *                     sticky:
 *                       type: boolean
 *                       title: sticky
 *                       description: The $ne's sticky.
 *                     unicode:
 *                       type: boolean
 *                       title: unicode
 *                       description: The $ne's unicode.
 *                     dotAll:
 *                       type: boolean
 *                       title: dotAll
 *                       description: The $ne's dotall.
 *                     __@match@1128:
 *                       type: object
 *                       description: The $ne's   @match@1128.
 *                     __@replace@1130:
 *                       type: object
 *                       description: The $ne's   @replace@1130.
 *                     __@search@1133:
 *                       type: object
 *                       description: The $ne's   @search@1133.
 *                     __@split@1135:
 *                       type: object
 *                       description: The $ne's   @split@1135.
 *                     __@matchAll@1137:
 *                       type: object
 *                       description: The $ne's   @matchall@1137.
 *             $in:
 *               type: array
 *               description: The category id's $in.
 *               items:
 *                 oneOf:
 *                   - type: string
 *                     title: $in
 *                     description: The $in's details.
 *                   - type: object
 *                     description: The $in's details.
 *                     x-schemaName: RegExp
 *                     required:
 *                       - exec
 *                       - test
 *                       - source
 *                       - global
 *                       - ignoreCase
 *                       - multiline
 *                       - lastIndex
 *                       - flags
 *                       - sticky
 *                       - unicode
 *                       - dotAll
 *                       - __@match@1128
 *                       - __@replace@1130
 *                       - __@search@1133
 *                       - __@matchAll@1137
 *                     properties:
 *                       exec:
 *                         type: object
 *                         description: The $in's exec.
 *                       test:
 *                         type: object
 *                         description: The $in's test.
 *                       source:
 *                         type: string
 *                         title: source
 *                         description: The $in's source.
 *                       global:
 *                         type: boolean
 *                         title: global
 *                         description: The $in's global.
 *                       ignoreCase:
 *                         type: boolean
 *                         title: ignoreCase
 *                         description: The $in's ignorecase.
 *                       multiline:
 *                         type: boolean
 *                         title: multiline
 *                         description: The $in's multiline.
 *                       lastIndex:
 *                         type: number
 *                         title: lastIndex
 *                         description: The $in's lastindex.
 *                       compile:
 *                         type: object
 *                         description: The $in's compile.
 *                       flags:
 *                         type: string
 *                         title: flags
 *                         description: The $in's flags.
 *                       sticky:
 *                         type: boolean
 *                         title: sticky
 *                         description: The $in's sticky.
 *                       unicode:
 *                         type: boolean
 *                         title: unicode
 *                         description: The $in's unicode.
 *                       dotAll:
 *                         type: boolean
 *                         title: dotAll
 *                         description: The $in's dotall.
 *                       __@match@1128:
 *                         type: object
 *                         description: The $in's   @match@1128.
 *                       __@replace@1130:
 *                         type: object
 *                         description: The $in's   @replace@1130.
 *                       __@search@1133:
 *                         type: object
 *                         description: The $in's   @search@1133.
 *                       __@split@1135:
 *                         type: object
 *                         description: The $in's   @split@1135.
 *                       __@matchAll@1137:
 *                         type: object
 *                         description: The $in's   @matchall@1137.
 *             $nin:
 *               type: array
 *               description: The category id's $nin.
 *               items:
 *                 oneOf:
 *                   - type: string
 *                     title: $nin
 *                     description: The $nin's details.
 *                   - type: object
 *                     description: The $nin's details.
 *                     x-schemaName: RegExp
 *                     required:
 *                       - exec
 *                       - test
 *                       - source
 *                       - global
 *                       - ignoreCase
 *                       - multiline
 *                       - lastIndex
 *                       - flags
 *                       - sticky
 *                       - unicode
 *                       - dotAll
 *                       - __@match@1128
 *                       - __@replace@1130
 *                       - __@search@1133
 *                       - __@matchAll@1137
 *                     properties:
 *                       exec:
 *                         type: object
 *                         description: The $nin's exec.
 *                       test:
 *                         type: object
 *                         description: The $nin's test.
 *                       source:
 *                         type: string
 *                         title: source
 *                         description: The $nin's source.
 *                       global:
 *                         type: boolean
 *                         title: global
 *                         description: The $nin's global.
 *                       ignoreCase:
 *                         type: boolean
 *                         title: ignoreCase
 *                         description: The $nin's ignorecase.
 *                       multiline:
 *                         type: boolean
 *                         title: multiline
 *                         description: The $nin's multiline.
 *                       lastIndex:
 *                         type: number
 *                         title: lastIndex
 *                         description: The $nin's lastindex.
 *                       compile:
 *                         type: object
 *                         description: The $nin's compile.
 *                       flags:
 *                         type: string
 *                         title: flags
 *                         description: The $nin's flags.
 *                       sticky:
 *                         type: boolean
 *                         title: sticky
 *                         description: The $nin's sticky.
 *                       unicode:
 *                         type: boolean
 *                         title: unicode
 *                         description: The $nin's unicode.
 *                       dotAll:
 *                         type: boolean
 *                         title: dotAll
 *                         description: The $nin's dotall.
 *                       __@match@1128:
 *                         type: object
 *                         description: The $nin's   @match@1128.
 *                       __@replace@1130:
 *                         type: object
 *                         description: The $nin's   @replace@1130.
 *                       __@search@1133:
 *                         type: object
 *                         description: The $nin's   @search@1133.
 *                       __@split@1135:
 *                         type: object
 *                         description: The $nin's   @split@1135.
 *                       __@matchAll@1137:
 *                         type: object
 *                         description: The $nin's   @matchall@1137.
 *             $not:
 *               oneOf:
 *                 - type: string
 *                   title: $not
 *                   description: The category id's $not.
 *                 - type: object
 *                   description: The category id's $not.
 *                   x-schemaName: RegExp
 *                   required:
 *                     - exec
 *                     - test
 *                     - source
 *                     - global
 *                     - ignoreCase
 *                     - multiline
 *                     - lastIndex
 *                     - flags
 *                     - sticky
 *                     - unicode
 *                     - dotAll
 *                     - __@match@1128
 *                     - __@replace@1130
 *                     - __@search@1133
 *                     - __@matchAll@1137
 *                   properties:
 *                     exec:
 *                       type: object
 *                       description: The $not's exec.
 *                     test:
 *                       type: object
 *                       description: The $not's test.
 *                     source:
 *                       type: string
 *                       title: source
 *                       description: The $not's source.
 *                     global:
 *                       type: boolean
 *                       title: global
 *                       description: The $not's global.
 *                     ignoreCase:
 *                       type: boolean
 *                       title: ignoreCase
 *                       description: The $not's ignorecase.
 *                     multiline:
 *                       type: boolean
 *                       title: multiline
 *                       description: The $not's multiline.
 *                     lastIndex:
 *                       type: number
 *                       title: lastIndex
 *                       description: The $not's lastindex.
 *                     compile:
 *                       type: object
 *                       description: The $not's compile.
 *                     flags:
 *                       type: string
 *                       title: flags
 *                       description: The $not's flags.
 *                     sticky:
 *                       type: boolean
 *                       title: sticky
 *                       description: The $not's sticky.
 *                     unicode:
 *                       type: boolean
 *                       title: unicode
 *                       description: The $not's unicode.
 *                     dotAll:
 *                       type: boolean
 *                       title: dotAll
 *                       description: The $not's dotall.
 *                     __@match@1128:
 *                       type: object
 *                       description: The $not's   @match@1128.
 *                     __@replace@1130:
 *                       type: object
 *                       description: The $not's   @replace@1130.
 *                     __@search@1133:
 *                       type: object
 *                       description: The $not's   @search@1133.
 *                     __@split@1135:
 *                       type: object
 *                       description: The $not's   @split@1135.
 *                     __@matchAll@1137:
 *                       type: object
 *                       description: The $not's   @matchall@1137.
 *                 - type: object
 *                   description: The category id's $not.
 *                   properties:
 *                     $and:
 *                       type: array
 *                       description: The $not's $and.
 *                       items:
 *                         oneOf:
 *                           - type: string
 *                             title: $and
 *                             description: The $and's details.
 *                           - type: object
 *                             description: The $and's details.
 *                             x-schemaName: RegExp
 *                           - type: object
 *                             description: The $and's details.
 *                           - type: array
 *                             description: The $and's details.
 *                             items:
 *                               oneOf:
 *                                 - type: string
 *                                   title: $and
 *                                   description: The $and's details.
 *                                 - type: object
 *                                   description: The $and's details.
 *                                   x-schemaName: RegExp
 *                     $or:
 *                       type: array
 *                       description: The $not's $or.
 *                       items:
 *                         oneOf:
 *                           - type: string
 *                             title: $or
 *                             description: The $or's details.
 *                           - type: object
 *                             description: The $or's details.
 *                             x-schemaName: RegExp
 *                           - type: object
 *                             description: The $or's details.
 *                           - type: array
 *                             description: The $or's details.
 *                             items:
 *                               oneOf:
 *                                 - type: string
 *                                   title: $or
 *                                   description: The $or's details.
 *                                 - type: object
 *                                   description: The $or's details.
 *                                   x-schemaName: RegExp
 *                     $eq:
 *                       oneOf:
 *                         - type: string
 *                           title: $eq
 *                           description: The $not's $eq.
 *                         - type: object
 *                           description: The $not's $eq.
 *                           x-schemaName: RegExp
 *                         - type: array
 *                           description: The $not's $eq.
 *                           items:
 *                             oneOf:
 *                               - type: string
 *                                 title: $eq
 *                                 description: The $eq's details.
 *                               - type: object
 *                                 description: The $eq's details.
 *                                 x-schemaName: RegExp
 *                     $ne:
 *                       oneOf:
 *                         - type: string
 *                           title: $ne
 *                           description: The $not's $ne.
 *                         - type: object
 *                           description: The $not's $ne.
 *                           x-schemaName: RegExp
 *                     $in:
 *                       type: array
 *                       description: The $not's $in.
 *                       items:
 *                         oneOf:
 *                           - type: string
 *                             title: $in
 *                             description: The $in's details.
 *                           - type: object
 *                             description: The $in's details.
 *                             x-schemaName: RegExp
 *                     $nin:
 *                       type: array
 *                       description: The $not's $nin.
 *                       items:
 *                         oneOf:
 *                           - type: string
 *                             title: $nin
 *                             description: The $nin's details.
 *                           - type: object
 *                             description: The $nin's details.
 *                             x-schemaName: RegExp
 *                     $not:
 *                       oneOf:
 *                         - type: string
 *                           title: $not
 *                           description: The $not's details.
 *                         - type: object
 *                           description: The $not's details.
 *                           x-schemaName: RegExp
 *                         - type: object
 *                           description: The $not's details.
 *                         - type: array
 *                           description: The $not's details.
 *                           items:
 *                             oneOf:
 *                               - type: string
 *                                 title: $not
 *                                 description: The $not's details.
 *                               - type: object
 *                                 description: The $not's details.
 *                                 x-schemaName: RegExp
 *                     $gt:
 *                       oneOf:
 *                         - type: string
 *                           title: $gt
 *                           description: The $not's $gt.
 *                         - type: object
 *                           description: The $not's $gt.
 *                           x-schemaName: RegExp
 *                     $gte:
 *                       oneOf:
 *                         - type: string
 *                           title: $gte
 *                           description: The $not's $gte.
 *                         - type: object
 *                           description: The $not's $gte.
 *                           x-schemaName: RegExp
 *                     $lt:
 *                       oneOf:
 *                         - type: string
 *                           title: $lt
 *                           description: The $not's $lt.
 *                         - type: object
 *                           description: The $not's $lt.
 *                           x-schemaName: RegExp
 *                     $lte:
 *                       oneOf:
 *                         - type: string
 *                           title: $lte
 *                           description: The $not's $lte.
 *                         - type: object
 *                           description: The $not's $lte.
 *                           x-schemaName: RegExp
 *                     $like:
 *                       type: string
 *                       title: $like
 *                       description: The $not's $like.
 *                     $re:
 *                       type: string
 *                       title: $re
 *                       description: The $not's $re.
 *                     $ilike:
 *                       type: string
 *                       title: $ilike
 *                       description: The $not's $ilike.
 *                     $fulltext:
 *                       type: string
 *                       title: $fulltext
 *                       description: The $not's $fulltext.
 *                     $overlap:
 *                       type: array
 *                       description: The $not's $overlap.
 *                       items:
 *                         type: string
 *                         title: $overlap
 *                         description: The $overlap's details.
 *                     $contains:
 *                       type: array
 *                       description: The $not's $contains.
 *                       items:
 *                         type: string
 *                         title: $contains
 *                         description: The $contain's $contains.
 *                     $contained:
 *                       type: array
 *                       description: The $not's $contained.
 *                       items:
 *                         type: string
 *                         title: $contained
 *                         description: The $contained's details.
 *                     $exists:
 *                       type: boolean
 *                       title: $exists
 *                       description: The $not's $exists.
 *                 - type: array
 *                   description: The category id's $not.
 *                   items:
 *                     oneOf:
 *                       - type: string
 *                         title: $not
 *                         description: The $not's details.
 *                       - type: object
 *                         description: The $not's details.
 *                         x-schemaName: RegExp
 *                         required:
 *                           - exec
 *                           - test
 *                           - source
 *                           - global
 *                           - ignoreCase
 *                           - multiline
 *                           - lastIndex
 *                           - flags
 *                           - sticky
 *                           - unicode
 *                           - dotAll
 *                           - __@match@1128
 *                           - __@replace@1130
 *                           - __@search@1133
 *                           - __@matchAll@1137
 *                         properties:
 *                           exec:
 *                             type: object
 *                             description: The $not's exec.
 *                           test:
 *                             type: object
 *                             description: The $not's test.
 *                           source:
 *                             type: string
 *                             title: source
 *                             description: The $not's source.
 *                           global:
 *                             type: boolean
 *                             title: global
 *                             description: The $not's global.
 *                           ignoreCase:
 *                             type: boolean
 *                             title: ignoreCase
 *                             description: The $not's ignorecase.
 *                           multiline:
 *                             type: boolean
 *                             title: multiline
 *                             description: The $not's multiline.
 *                           lastIndex:
 *                             type: number
 *                             title: lastIndex
 *                             description: The $not's lastindex.
 *                           compile:
 *                             type: object
 *                             description: The $not's compile.
 *                           flags:
 *                             type: string
 *                             title: flags
 *                             description: The $not's flags.
 *                           sticky:
 *                             type: boolean
 *                             title: sticky
 *                             description: The $not's sticky.
 *                           unicode:
 *                             type: boolean
 *                             title: unicode
 *                             description: The $not's unicode.
 *                           dotAll:
 *                             type: boolean
 *                             title: dotAll
 *                             description: The $not's dotall.
 *                           __@match@1128:
 *                             type: object
 *                             description: The $not's   @match@1128.
 *                           __@replace@1130:
 *                             type: object
 *                             description: The $not's   @replace@1130.
 *                           __@search@1133:
 *                             type: object
 *                             description: The $not's   @search@1133.
 *                           __@split@1135:
 *                             type: object
 *                             description: The $not's   @split@1135.
 *                           __@matchAll@1137:
 *                             type: object
 *                             description: The $not's   @matchall@1137.
 *             $gt:
 *               oneOf:
 *                 - type: string
 *                   title: $gt
 *                   description: The category id's $gt.
 *                 - type: object
 *                   description: The category id's $gt.
 *                   x-schemaName: RegExp
 *                   required:
 *                     - exec
 *                     - test
 *                     - source
 *                     - global
 *                     - ignoreCase
 *                     - multiline
 *                     - lastIndex
 *                     - flags
 *                     - sticky
 *                     - unicode
 *                     - dotAll
 *                     - __@match@1128
 *                     - __@replace@1130
 *                     - __@search@1133
 *                     - __@matchAll@1137
 *                   properties:
 *                     exec:
 *                       type: object
 *                       description: The $gt's exec.
 *                     test:
 *                       type: object
 *                       description: The $gt's test.
 *                     source:
 *                       type: string
 *                       title: source
 *                       description: The $gt's source.
 *                     global:
 *                       type: boolean
 *                       title: global
 *                       description: The $gt's global.
 *                     ignoreCase:
 *                       type: boolean
 *                       title: ignoreCase
 *                       description: The $gt's ignorecase.
 *                     multiline:
 *                       type: boolean
 *                       title: multiline
 *                       description: The $gt's multiline.
 *                     lastIndex:
 *                       type: number
 *                       title: lastIndex
 *                       description: The $gt's lastindex.
 *                     compile:
 *                       type: object
 *                       description: The $gt's compile.
 *                     flags:
 *                       type: string
 *                       title: flags
 *                       description: The $gt's flags.
 *                     sticky:
 *                       type: boolean
 *                       title: sticky
 *                       description: The $gt's sticky.
 *                     unicode:
 *                       type: boolean
 *                       title: unicode
 *                       description: The $gt's unicode.
 *                     dotAll:
 *                       type: boolean
 *                       title: dotAll
 *                       description: The $gt's dotall.
 *                     __@match@1128:
 *                       type: object
 *                       description: The $gt's   @match@1128.
 *                     __@replace@1130:
 *                       type: object
 *                       description: The $gt's   @replace@1130.
 *                     __@search@1133:
 *                       type: object
 *                       description: The $gt's   @search@1133.
 *                     __@split@1135:
 *                       type: object
 *                       description: The $gt's   @split@1135.
 *                     __@matchAll@1137:
 *                       type: object
 *                       description: The $gt's   @matchall@1137.
 *             $gte:
 *               oneOf:
 *                 - type: string
 *                   title: $gte
 *                   description: The category id's $gte.
 *                 - type: object
 *                   description: The category id's $gte.
 *                   x-schemaName: RegExp
 *                   required:
 *                     - exec
 *                     - test
 *                     - source
 *                     - global
 *                     - ignoreCase
 *                     - multiline
 *                     - lastIndex
 *                     - flags
 *                     - sticky
 *                     - unicode
 *                     - dotAll
 *                     - __@match@1128
 *                     - __@replace@1130
 *                     - __@search@1133
 *                     - __@matchAll@1137
 *                   properties:
 *                     exec:
 *                       type: object
 *                       description: The $gte's exec.
 *                     test:
 *                       type: object
 *                       description: The $gte's test.
 *                     source:
 *                       type: string
 *                       title: source
 *                       description: The $gte's source.
 *                     global:
 *                       type: boolean
 *                       title: global
 *                       description: The $gte's global.
 *                     ignoreCase:
 *                       type: boolean
 *                       title: ignoreCase
 *                       description: The $gte's ignorecase.
 *                     multiline:
 *                       type: boolean
 *                       title: multiline
 *                       description: The $gte's multiline.
 *                     lastIndex:
 *                       type: number
 *                       title: lastIndex
 *                       description: The $gte's lastindex.
 *                     compile:
 *                       type: object
 *                       description: The $gte's compile.
 *                     flags:
 *                       type: string
 *                       title: flags
 *                       description: The $gte's flags.
 *                     sticky:
 *                       type: boolean
 *                       title: sticky
 *                       description: The $gte's sticky.
 *                     unicode:
 *                       type: boolean
 *                       title: unicode
 *                       description: The $gte's unicode.
 *                     dotAll:
 *                       type: boolean
 *                       title: dotAll
 *                       description: The $gte's dotall.
 *                     __@match@1128:
 *                       type: object
 *                       description: The $gte's   @match@1128.
 *                     __@replace@1130:
 *                       type: object
 *                       description: The $gte's   @replace@1130.
 *                     __@search@1133:
 *                       type: object
 *                       description: The $gte's   @search@1133.
 *                     __@split@1135:
 *                       type: object
 *                       description: The $gte's   @split@1135.
 *                     __@matchAll@1137:
 *                       type: object
 *                       description: The $gte's   @matchall@1137.
 *             $lt:
 *               oneOf:
 *                 - type: string
 *                   title: $lt
 *                   description: The category id's $lt.
 *                 - type: object
 *                   description: The category id's $lt.
 *                   x-schemaName: RegExp
 *                   required:
 *                     - exec
 *                     - test
 *                     - source
 *                     - global
 *                     - ignoreCase
 *                     - multiline
 *                     - lastIndex
 *                     - flags
 *                     - sticky
 *                     - unicode
 *                     - dotAll
 *                     - __@match@1128
 *                     - __@replace@1130
 *                     - __@search@1133
 *                     - __@matchAll@1137
 *                   properties:
 *                     exec:
 *                       type: object
 *                       description: The $lt's exec.
 *                     test:
 *                       type: object
 *                       description: The $lt's test.
 *                     source:
 *                       type: string
 *                       title: source
 *                       description: The $lt's source.
 *                     global:
 *                       type: boolean
 *                       title: global
 *                       description: The $lt's global.
 *                     ignoreCase:
 *                       type: boolean
 *                       title: ignoreCase
 *                       description: The $lt's ignorecase.
 *                     multiline:
 *                       type: boolean
 *                       title: multiline
 *                       description: The $lt's multiline.
 *                     lastIndex:
 *                       type: number
 *                       title: lastIndex
 *                       description: The $lt's lastindex.
 *                     compile:
 *                       type: object
 *                       description: The $lt's compile.
 *                     flags:
 *                       type: string
 *                       title: flags
 *                       description: The $lt's flags.
 *                     sticky:
 *                       type: boolean
 *                       title: sticky
 *                       description: The $lt's sticky.
 *                     unicode:
 *                       type: boolean
 *                       title: unicode
 *                       description: The $lt's unicode.
 *                     dotAll:
 *                       type: boolean
 *                       title: dotAll
 *                       description: The $lt's dotall.
 *                     __@match@1128:
 *                       type: object
 *                       description: The $lt's   @match@1128.
 *                     __@replace@1130:
 *                       type: object
 *                       description: The $lt's   @replace@1130.
 *                     __@search@1133:
 *                       type: object
 *                       description: The $lt's   @search@1133.
 *                     __@split@1135:
 *                       type: object
 *                       description: The $lt's   @split@1135.
 *                     __@matchAll@1137:
 *                       type: object
 *                       description: The $lt's   @matchall@1137.
 *             $lte:
 *               oneOf:
 *                 - type: string
 *                   title: $lte
 *                   description: The category id's $lte.
 *                 - type: object
 *                   description: The category id's $lte.
 *                   x-schemaName: RegExp
 *                   required:
 *                     - exec
 *                     - test
 *                     - source
 *                     - global
 *                     - ignoreCase
 *                     - multiline
 *                     - lastIndex
 *                     - flags
 *                     - sticky
 *                     - unicode
 *                     - dotAll
 *                     - __@match@1128
 *                     - __@replace@1130
 *                     - __@search@1133
 *                     - __@matchAll@1137
 *                   properties:
 *                     exec:
 *                       type: object
 *                       description: The $lte's exec.
 *                     test:
 *                       type: object
 *                       description: The $lte's test.
 *                     source:
 *                       type: string
 *                       title: source
 *                       description: The $lte's source.
 *                     global:
 *                       type: boolean
 *                       title: global
 *                       description: The $lte's global.
 *                     ignoreCase:
 *                       type: boolean
 *                       title: ignoreCase
 *                       description: The $lte's ignorecase.
 *                     multiline:
 *                       type: boolean
 *                       title: multiline
 *                       description: The $lte's multiline.
 *                     lastIndex:
 *                       type: number
 *                       title: lastIndex
 *                       description: The $lte's lastindex.
 *                     compile:
 *                       type: object
 *                       description: The $lte's compile.
 *                     flags:
 *                       type: string
 *                       title: flags
 *                       description: The $lte's flags.
 *                     sticky:
 *                       type: boolean
 *                       title: sticky
 *                       description: The $lte's sticky.
 *                     unicode:
 *                       type: boolean
 *                       title: unicode
 *                       description: The $lte's unicode.
 *                     dotAll:
 *                       type: boolean
 *                       title: dotAll
 *                       description: The $lte's dotall.
 *                     __@match@1128:
 *                       type: object
 *                       description: The $lte's   @match@1128.
 *                     __@replace@1130:
 *                       type: object
 *                       description: The $lte's   @replace@1130.
 *                     __@search@1133:
 *                       type: object
 *                       description: The $lte's   @search@1133.
 *                     __@split@1135:
 *                       type: object
 *                       description: The $lte's   @split@1135.
 *                     __@matchAll@1137:
 *                       type: object
 *                       description: The $lte's   @matchall@1137.
 *             $like:
 *               type: string
 *               title: $like
 *               description: The category id's $like.
 *             $re:
 *               type: string
 *               title: $re
 *               description: The category id's $re.
 *             $ilike:
 *               type: string
 *               title: $ilike
 *               description: The category id's $ilike.
 *             $fulltext:
 *               type: string
 *               title: $fulltext
 *               description: The category id's $fulltext.
 *             $overlap:
 *               type: array
 *               description: The category id's $overlap.
 *               items:
 *                 type: string
 *                 title: $overlap
 *                 description: The $overlap's details.
 *             $contains:
 *               type: array
 *               description: The category id's $contains.
 *               items:
 *                 type: string
 *                 title: $contains
 *                 description: The $contain's $contains.
 *             $contained:
 *               type: array
 *               description: The category id's $contained.
 *               items:
 *                 type: string
 *                 title: $contained
 *                 description: The $contained's details.
 *             $exists:
 *               type: boolean
 *               title: $exists
 *               description: The category id's $exists.
 *   - name: categories
 *     in: query
 *     required: false
 *     schema:
 *       oneOf:
 *         - type: object
 *           description: The product's categories.
 *           required:
 *             - id
 *           properties:
 *             id:
 *               type: object
 *               description: The category's ID.
 *               properties:
 *                 $and:
 *                   type: array
 *                   description: The id's $and.
 *                   items:
 *                     oneOf:
 *                       - type: string
 *                         title: $and
 *                         description: The $and's details.
 *                       - type: object
 *                         description: The $and's details.
 *                         x-schemaName: RegExp
 *                       - type: object
 *                         description: The $and's details.
 *                       - type: array
 *                         description: The $and's details.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $and
 *                               description: The $and's details.
 *                             - type: object
 *                               description: The $and's details.
 *                               x-schemaName: RegExp
 *                 $or:
 *                   type: array
 *                   description: The id's $or.
 *                   items:
 *                     oneOf:
 *                       - type: string
 *                         title: $or
 *                         description: The $or's details.
 *                       - type: object
 *                         description: The $or's details.
 *                         x-schemaName: RegExp
 *                       - type: object
 *                         description: The $or's details.
 *                       - type: array
 *                         description: The $or's details.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $or
 *                               description: The $or's details.
 *                             - type: object
 *                               description: The $or's details.
 *                               x-schemaName: RegExp
 *                 $eq:
 *                   oneOf:
 *                     - type: string
 *                       title: $eq
 *                       description: The id's $eq.
 *                     - type: object
 *                       description: The id's $eq.
 *                       x-schemaName: RegExp
 *                     - type: array
 *                       description: The id's $eq.
 *                       items:
 *                         oneOf:
 *                           - type: string
 *                             title: $eq
 *                             description: The $eq's details.
 *                           - type: object
 *                             description: The $eq's details.
 *                             x-schemaName: RegExp
 *                 $ne:
 *                   oneOf:
 *                     - type: string
 *                       title: $ne
 *                       description: The id's $ne.
 *                     - type: object
 *                       description: The id's $ne.
 *                       x-schemaName: RegExp
 *                 $in:
 *                   type: array
 *                   description: The id's $in.
 *                   items:
 *                     oneOf:
 *                       - type: string
 *                         title: $in
 *                         description: The $in's details.
 *                       - type: object
 *                         description: The $in's details.
 *                         x-schemaName: RegExp
 *                 $nin:
 *                   type: array
 *                   description: The id's $nin.
 *                   items:
 *                     oneOf:
 *                       - type: string
 *                         title: $nin
 *                         description: The $nin's details.
 *                       - type: object
 *                         description: The $nin's details.
 *                         x-schemaName: RegExp
 *                 $not:
 *                   oneOf:
 *                     - type: string
 *                       title: $not
 *                       description: The id's $not.
 *                     - type: object
 *                       description: The id's $not.
 *                       x-schemaName: RegExp
 *                     - type: object
 *                       description: The id's $not.
 *                     - type: array
 *                       description: The id's $not.
 *                       items:
 *                         oneOf:
 *                           - type: string
 *                             title: $not
 *                             description: The $not's details.
 *                           - type: object
 *                             description: The $not's details.
 *                             x-schemaName: RegExp
 *                 $gt:
 *                   oneOf:
 *                     - type: string
 *                       title: $gt
 *                       description: The id's $gt.
 *                     - type: object
 *                       description: The id's $gt.
 *                       x-schemaName: RegExp
 *                 $gte:
 *                   oneOf:
 *                     - type: string
 *                       title: $gte
 *                       description: The id's $gte.
 *                     - type: object
 *                       description: The id's $gte.
 *                       x-schemaName: RegExp
 *                 $lt:
 *                   oneOf:
 *                     - type: string
 *                       title: $lt
 *                       description: The id's $lt.
 *                     - type: object
 *                       description: The id's $lt.
 *                       x-schemaName: RegExp
 *                 $lte:
 *                   oneOf:
 *                     - type: string
 *                       title: $lte
 *                       description: The id's $lte.
 *                     - type: object
 *                       description: The id's $lte.
 *                       x-schemaName: RegExp
 *                 $like:
 *                   type: string
 *                   title: $like
 *                   description: The id's $like.
 *                 $re:
 *                   type: string
 *                   title: $re
 *                   description: The id's $re.
 *                 $ilike:
 *                   type: string
 *                   title: $ilike
 *                   description: The id's $ilike.
 *                 $fulltext:
 *                   type: string
 *                   title: $fulltext
 *                   description: The id's $fulltext.
 *                 $overlap:
 *                   type: array
 *                   description: The id's $overlap.
 *                   items:
 *                     type: string
 *                     title: $overlap
 *                     description: The $overlap's details.
 *                 $contains:
 *                   type: array
 *                   description: The id's $contains.
 *                   items:
 *                     type: string
 *                     title: $contains
 *                     description: The $contain's $contains.
 *                 $contained:
 *                   type: array
 *                   description: The id's $contained.
 *                   items:
 *                     type: string
 *                     title: $contained
 *                     description: The $contained's details.
 *                 $exists:
 *                   type: boolean
 *                   title: $exists
 *                   description: The id's $exists.
 *         - type: object
 *           description: The product's categories.
 *           required:
 *             - id
 *           properties:
 *             id:
 *               type: object
 *               description: The category's ID.
 *               properties:
 *                 $and:
 *                   type: array
 *                   description: The id's $and.
 *                   items:
 *                     type: array
 *                     description: The $and's details.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $and
 *                           description: The $and's details.
 *                         - type: object
 *                           description: The $and's details.
 *                 $or:
 *                   type: array
 *                   description: The id's $or.
 *                   items:
 *                     type: array
 *                     description: The $or's details.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $or
 *                           description: The $or's details.
 *                         - type: object
 *                           description: The $or's details.
 *                 $eq:
 *                   oneOf:
 *                     - type: array
 *                       description: The id's $eq.
 *                       items:
 *                         type: string
 *                         title: $eq
 *                         description: The $eq's details.
 *                     - type: array
 *                       description: The id's $eq.
 *                       items:
 *                         type: array
 *                         description: The $eq's details.
 *                         items:
 *                           type: string
 *                           title: $eq
 *                           description: The $eq's details.
 *                 $ne:
 *                   type: array
 *                   description: The id's $ne.
 *                   items:
 *                     type: string
 *                     title: $ne
 *                     description: The $ne's details.
 *                 $in:
 *                   type: array
 *                   description: The id's $in.
 *                   items:
 *                     type: array
 *                     description: The $in's details.
 *                     items:
 *                       type: string
 *                       title: $in
 *                       description: The $in's details.
 *                 $nin:
 *                   type: array
 *                   description: The id's $nin.
 *                   items:
 *                     type: array
 *                     description: The $nin's details.
 *                     items:
 *                       type: string
 *                       title: $nin
 *                       description: The $nin's details.
 *                 $not:
 *                   type: array
 *                   description: The id's $not.
 *                   items:
 *                     oneOf:
 *                       - type: string
 *                         title: $not
 *                         description: The $not's details.
 *                       - type: object
 *                         description: The $not's details.
 *                 $gt:
 *                   type: array
 *                   description: The id's $gt.
 *                   items:
 *                     type: string
 *                     title: $gt
 *                     description: The $gt's details.
 *                 $gte:
 *                   type: array
 *                   description: The id's $gte.
 *                   items:
 *                     type: string
 *                     title: $gte
 *                     description: The $gte's details.
 *                 $lt:
 *                   type: array
 *                   description: The id's $lt.
 *                   items:
 *                     type: string
 *                     title: $lt
 *                     description: The $lt's details.
 *                 $lte:
 *                   type: array
 *                   description: The id's $lte.
 *                   items:
 *                     type: string
 *                     title: $lte
 *                     description: The $lte's details.
 *                 $like:
 *                   type: string
 *                   title: $like
 *                   description: The id's $like.
 *                 $re:
 *                   type: string
 *                   title: $re
 *                   description: The id's $re.
 *                 $ilike:
 *                   type: string
 *                   title: $ilike
 *                   description: The id's $ilike.
 *                 $fulltext:
 *                   type: string
 *                   title: $fulltext
 *                   description: The id's $fulltext.
 *                 $overlap:
 *                   type: array
 *                   description: The id's $overlap.
 *                   items:
 *                     type: string
 *                     title: $overlap
 *                     description: The $overlap's details.
 *                 $contains:
 *                   type: array
 *                   description: The id's $contains.
 *                   items:
 *                     type: string
 *                     title: $contains
 *                     description: The $contain's $contains.
 *                 $contained:
 *                   type: array
 *                   description: The id's $contained.
 *                   items:
 *                     type: string
 *                     title: $contained
 *                     description: The $contained's details.
 *                 $exists:
 *                   type: boolean
 *                   title: $exists
 *                   description: The id's $exists.
 *   - name: collection_id
 *     in: query
 *     required: false
 *     schema:
 *       oneOf:
 *         - type: string
 *           title: collection_id
 *           description: The product's collection id.
 *         - type: array
 *           description: The product's collection id.
 *           items:
 *             type: string
 *             title: collection_id
 *             description: The collection id's details.
 *         - type: object
 *           description: The product's collection id.
 *           properties:
 *             $and:
 *               type: array
 *               description: The collection id's $and.
 *               items:
 *                 oneOf:
 *                   - type: string
 *                     title: $and
 *                     description: The $and's details.
 *                   - type: object
 *                     description: The $and's details.
 *                     x-schemaName: RegExp
 *                     required:
 *                       - exec
 *                       - test
 *                       - source
 *                       - global
 *                       - ignoreCase
 *                       - multiline
 *                       - lastIndex
 *                       - flags
 *                       - sticky
 *                       - unicode
 *                       - dotAll
 *                       - __@match@1128
 *                       - __@replace@1130
 *                       - __@search@1133
 *                       - __@matchAll@1137
 *                     properties:
 *                       exec:
 *                         type: object
 *                         description: The $and's exec.
 *                       test:
 *                         type: object
 *                         description: The $and's test.
 *                       source:
 *                         type: string
 *                         title: source
 *                         description: The $and's source.
 *                       global:
 *                         type: boolean
 *                         title: global
 *                         description: The $and's global.
 *                       ignoreCase:
 *                         type: boolean
 *                         title: ignoreCase
 *                         description: The $and's ignorecase.
 *                       multiline:
 *                         type: boolean
 *                         title: multiline
 *                         description: The $and's multiline.
 *                       lastIndex:
 *                         type: number
 *                         title: lastIndex
 *                         description: The $and's lastindex.
 *                       compile:
 *                         type: object
 *                         description: The $and's compile.
 *                       flags:
 *                         type: string
 *                         title: flags
 *                         description: The $and's flags.
 *                       sticky:
 *                         type: boolean
 *                         title: sticky
 *                         description: The $and's sticky.
 *                       unicode:
 *                         type: boolean
 *                         title: unicode
 *                         description: The $and's unicode.
 *                       dotAll:
 *                         type: boolean
 *                         title: dotAll
 *                         description: The $and's dotall.
 *                       __@match@1128:
 *                         type: object
 *                         description: The $and's   @match@1128.
 *                       __@replace@1130:
 *                         type: object
 *                         description: The $and's   @replace@1130.
 *                       __@search@1133:
 *                         type: object
 *                         description: The $and's   @search@1133.
 *                       __@split@1135:
 *                         type: object
 *                         description: The $and's   @split@1135.
 *                       __@matchAll@1137:
 *                         type: object
 *                         description: The $and's   @matchall@1137.
 *                   - type: object
 *                     description: The $and's details.
 *                     properties:
 *                       $and:
 *                         type: array
 *                         description: The $and's details.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $and
 *                               description: The $and's details.
 *                             - type: object
 *                               description: The $and's details.
 *                               x-schemaName: RegExp
 *                             - type: object
 *                               description: The $and's details.
 *                             - type: array
 *                               description: The $and's details.
 *                               items:
 *                                 oneOf:
 *                                   - type: string
 *                                     title: $and
 *                                     description: The $and's details.
 *                                   - type: object
 *                                     description: The $and's details.
 *                                     x-schemaName: RegExp
 *                       $or:
 *                         type: array
 *                         description: The $and's $or.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $or
 *                               description: The $or's details.
 *                             - type: object
 *                               description: The $or's details.
 *                               x-schemaName: RegExp
 *                             - type: object
 *                               description: The $or's details.
 *                             - type: array
 *                               description: The $or's details.
 *                               items:
 *                                 oneOf:
 *                                   - type: string
 *                                     title: $or
 *                                     description: The $or's details.
 *                                   - type: object
 *                                     description: The $or's details.
 *                                     x-schemaName: RegExp
 *                       $eq:
 *                         oneOf:
 *                           - type: string
 *                             title: $eq
 *                             description: The $and's $eq.
 *                           - type: object
 *                             description: The $and's $eq.
 *                             x-schemaName: RegExp
 *                           - type: array
 *                             description: The $and's $eq.
 *                             items:
 *                               oneOf:
 *                                 - type: string
 *                                   title: $eq
 *                                   description: The $eq's details.
 *                                 - type: object
 *                                   description: The $eq's details.
 *                                   x-schemaName: RegExp
 *                       $ne:
 *                         oneOf:
 *                           - type: string
 *                             title: $ne
 *                             description: The $and's $ne.
 *                           - type: object
 *                             description: The $and's $ne.
 *                             x-schemaName: RegExp
 *                       $in:
 *                         type: array
 *                         description: The $and's $in.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $in
 *                               description: The $in's details.
 *                             - type: object
 *                               description: The $in's details.
 *                               x-schemaName: RegExp
 *                       $nin:
 *                         type: array
 *                         description: The $and's $nin.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $nin
 *                               description: The $nin's details.
 *                             - type: object
 *                               description: The $nin's details.
 *                               x-schemaName: RegExp
 *                       $not:
 *                         oneOf:
 *                           - type: string
 *                             title: $not
 *                             description: The $and's $not.
 *                           - type: object
 *                             description: The $and's $not.
 *                             x-schemaName: RegExp
 *                           - type: object
 *                             description: The $and's $not.
 *                           - type: array
 *                             description: The $and's $not.
 *                             items:
 *                               oneOf:
 *                                 - type: string
 *                                   title: $not
 *                                   description: The $not's details.
 *                                 - type: object
 *                                   description: The $not's details.
 *                                   x-schemaName: RegExp
 *                       $gt:
 *                         oneOf:
 *                           - type: string
 *                             title: $gt
 *                             description: The $and's $gt.
 *                           - type: object
 *                             description: The $and's $gt.
 *                             x-schemaName: RegExp
 *                       $gte:
 *                         oneOf:
 *                           - type: string
 *                             title: $gte
 *                             description: The $and's $gte.
 *                           - type: object
 *                             description: The $and's $gte.
 *                             x-schemaName: RegExp
 *                       $lt:
 *                         oneOf:
 *                           - type: string
 *                             title: $lt
 *                             description: The $and's $lt.
 *                           - type: object
 *                             description: The $and's $lt.
 *                             x-schemaName: RegExp
 *                       $lte:
 *                         oneOf:
 *                           - type: string
 *                             title: $lte
 *                             description: The $and's $lte.
 *                           - type: object
 *                             description: The $and's $lte.
 *                             x-schemaName: RegExp
 *                       $like:
 *                         type: string
 *                         title: $like
 *                         description: The $and's $like.
 *                       $re:
 *                         type: string
 *                         title: $re
 *                         description: The $and's $re.
 *                       $ilike:
 *                         type: string
 *                         title: $ilike
 *                         description: The $and's $ilike.
 *                       $fulltext:
 *                         type: string
 *                         title: $fulltext
 *                         description: The $and's $fulltext.
 *                       $overlap:
 *                         type: array
 *                         description: The $and's $overlap.
 *                         items:
 *                           type: string
 *                           title: $overlap
 *                           description: The $overlap's details.
 *                       $contains:
 *                         type: array
 *                         description: The $and's $contains.
 *                         items:
 *                           type: string
 *                           title: $contains
 *                           description: The $contain's $contains.
 *                       $contained:
 *                         type: array
 *                         description: The $and's $contained.
 *                         items:
 *                           type: string
 *                           title: $contained
 *                           description: The $contained's details.
 *                       $exists:
 *                         type: boolean
 *                         title: $exists
 *                         description: The $and's $exists.
 *                   - type: array
 *                     description: The $and's details.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $and
 *                           description: The $and's details.
 *                         - type: object
 *                           description: The $and's details.
 *                           x-schemaName: RegExp
 *                           required:
 *                             - exec
 *                             - test
 *                             - source
 *                             - global
 *                             - ignoreCase
 *                             - multiline
 *                             - lastIndex
 *                             - flags
 *                             - sticky
 *                             - unicode
 *                             - dotAll
 *                             - __@match@1128
 *                             - __@replace@1130
 *                             - __@search@1133
 *                             - __@matchAll@1137
 *                           properties:
 *                             exec:
 *                               type: object
 *                               description: The $and's exec.
 *                             test:
 *                               type: object
 *                               description: The $and's test.
 *                             source:
 *                               type: string
 *                               title: source
 *                               description: The $and's source.
 *                             global:
 *                               type: boolean
 *                               title: global
 *                               description: The $and's global.
 *                             ignoreCase:
 *                               type: boolean
 *                               title: ignoreCase
 *                               description: The $and's ignorecase.
 *                             multiline:
 *                               type: boolean
 *                               title: multiline
 *                               description: The $and's multiline.
 *                             lastIndex:
 *                               type: number
 *                               title: lastIndex
 *                               description: The $and's lastindex.
 *                             compile:
 *                               type: object
 *                               description: The $and's compile.
 *                             flags:
 *                               type: string
 *                               title: flags
 *                               description: The $and's flags.
 *                             sticky:
 *                               type: boolean
 *                               title: sticky
 *                               description: The $and's sticky.
 *                             unicode:
 *                               type: boolean
 *                               title: unicode
 *                               description: The $and's unicode.
 *                             dotAll:
 *                               type: boolean
 *                               title: dotAll
 *                               description: The $and's dotall.
 *                             __@match@1128:
 *                               type: object
 *                               description: The $and's   @match@1128.
 *                             __@replace@1130:
 *                               type: object
 *                               description: The $and's   @replace@1130.
 *                             __@search@1133:
 *                               type: object
 *                               description: The $and's   @search@1133.
 *                             __@split@1135:
 *                               type: object
 *                               description: The $and's   @split@1135.
 *                             __@matchAll@1137:
 *                               type: object
 *                               description: The $and's   @matchall@1137.
 *             $or:
 *               type: array
 *               description: The collection id's $or.
 *               items:
 *                 oneOf:
 *                   - type: string
 *                     title: $or
 *                     description: The $or's details.
 *                   - type: object
 *                     description: The $or's details.
 *                     x-schemaName: RegExp
 *                     required:
 *                       - exec
 *                       - test
 *                       - source
 *                       - global
 *                       - ignoreCase
 *                       - multiline
 *                       - lastIndex
 *                       - flags
 *                       - sticky
 *                       - unicode
 *                       - dotAll
 *                       - __@match@1128
 *                       - __@replace@1130
 *                       - __@search@1133
 *                       - __@matchAll@1137
 *                     properties:
 *                       exec:
 *                         type: object
 *                         description: The $or's exec.
 *                       test:
 *                         type: object
 *                         description: The $or's test.
 *                       source:
 *                         type: string
 *                         title: source
 *                         description: The $or's source.
 *                       global:
 *                         type: boolean
 *                         title: global
 *                         description: The $or's global.
 *                       ignoreCase:
 *                         type: boolean
 *                         title: ignoreCase
 *                         description: The $or's ignorecase.
 *                       multiline:
 *                         type: boolean
 *                         title: multiline
 *                         description: The $or's multiline.
 *                       lastIndex:
 *                         type: number
 *                         title: lastIndex
 *                         description: The $or's lastindex.
 *                       compile:
 *                         type: object
 *                         description: The $or's compile.
 *                       flags:
 *                         type: string
 *                         title: flags
 *                         description: The $or's flags.
 *                       sticky:
 *                         type: boolean
 *                         title: sticky
 *                         description: The $or's sticky.
 *                       unicode:
 *                         type: boolean
 *                         title: unicode
 *                         description: The $or's unicode.
 *                       dotAll:
 *                         type: boolean
 *                         title: dotAll
 *                         description: The $or's dotall.
 *                       __@match@1128:
 *                         type: object
 *                         description: The $or's   @match@1128.
 *                       __@replace@1130:
 *                         type: object
 *                         description: The $or's   @replace@1130.
 *                       __@search@1133:
 *                         type: object
 *                         description: The $or's   @search@1133.
 *                       __@split@1135:
 *                         type: object
 *                         description: The $or's   @split@1135.
 *                       __@matchAll@1137:
 *                         type: object
 *                         description: The $or's   @matchall@1137.
 *                   - type: object
 *                     description: The $or's details.
 *                     properties:
 *                       $and:
 *                         type: array
 *                         description: The $or's $and.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $and
 *                               description: The $and's details.
 *                             - type: object
 *                               description: The $and's details.
 *                               x-schemaName: RegExp
 *                             - type: object
 *                               description: The $and's details.
 *                             - type: array
 *                               description: The $and's details.
 *                               items:
 *                                 oneOf:
 *                                   - type: string
 *                                     title: $and
 *                                     description: The $and's details.
 *                                   - type: object
 *                                     description: The $and's details.
 *                                     x-schemaName: RegExp
 *                       $or:
 *                         type: array
 *                         description: The $or's details.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $or
 *                               description: The $or's details.
 *                             - type: object
 *                               description: The $or's details.
 *                               x-schemaName: RegExp
 *                             - type: object
 *                               description: The $or's details.
 *                             - type: array
 *                               description: The $or's details.
 *                               items:
 *                                 oneOf:
 *                                   - type: string
 *                                     title: $or
 *                                     description: The $or's details.
 *                                   - type: object
 *                                     description: The $or's details.
 *                                     x-schemaName: RegExp
 *                       $eq:
 *                         oneOf:
 *                           - type: string
 *                             title: $eq
 *                             description: The $or's $eq.
 *                           - type: object
 *                             description: The $or's $eq.
 *                             x-schemaName: RegExp
 *                           - type: array
 *                             description: The $or's $eq.
 *                             items:
 *                               oneOf:
 *                                 - type: string
 *                                   title: $eq
 *                                   description: The $eq's details.
 *                                 - type: object
 *                                   description: The $eq's details.
 *                                   x-schemaName: RegExp
 *                       $ne:
 *                         oneOf:
 *                           - type: string
 *                             title: $ne
 *                             description: The $or's $ne.
 *                           - type: object
 *                             description: The $or's $ne.
 *                             x-schemaName: RegExp
 *                       $in:
 *                         type: array
 *                         description: The $or's $in.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $in
 *                               description: The $in's details.
 *                             - type: object
 *                               description: The $in's details.
 *                               x-schemaName: RegExp
 *                       $nin:
 *                         type: array
 *                         description: The $or's $nin.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $nin
 *                               description: The $nin's details.
 *                             - type: object
 *                               description: The $nin's details.
 *                               x-schemaName: RegExp
 *                       $not:
 *                         oneOf:
 *                           - type: string
 *                             title: $not
 *                             description: The $or's $not.
 *                           - type: object
 *                             description: The $or's $not.
 *                             x-schemaName: RegExp
 *                           - type: object
 *                             description: The $or's $not.
 *                           - type: array
 *                             description: The $or's $not.
 *                             items:
 *                               oneOf:
 *                                 - type: string
 *                                   title: $not
 *                                   description: The $not's details.
 *                                 - type: object
 *                                   description: The $not's details.
 *                                   x-schemaName: RegExp
 *                       $gt:
 *                         oneOf:
 *                           - type: string
 *                             title: $gt
 *                             description: The $or's $gt.
 *                           - type: object
 *                             description: The $or's $gt.
 *                             x-schemaName: RegExp
 *                       $gte:
 *                         oneOf:
 *                           - type: string
 *                             title: $gte
 *                             description: The $or's $gte.
 *                           - type: object
 *                             description: The $or's $gte.
 *                             x-schemaName: RegExp
 *                       $lt:
 *                         oneOf:
 *                           - type: string
 *                             title: $lt
 *                             description: The $or's $lt.
 *                           - type: object
 *                             description: The $or's $lt.
 *                             x-schemaName: RegExp
 *                       $lte:
 *                         oneOf:
 *                           - type: string
 *                             title: $lte
 *                             description: The $or's $lte.
 *                           - type: object
 *                             description: The $or's $lte.
 *                             x-schemaName: RegExp
 *                       $like:
 *                         type: string
 *                         title: $like
 *                         description: The $or's $like.
 *                       $re:
 *                         type: string
 *                         title: $re
 *                         description: The $or's $re.
 *                       $ilike:
 *                         type: string
 *                         title: $ilike
 *                         description: The $or's $ilike.
 *                       $fulltext:
 *                         type: string
 *                         title: $fulltext
 *                         description: The $or's $fulltext.
 *                       $overlap:
 *                         type: array
 *                         description: The $or's $overlap.
 *                         items:
 *                           type: string
 *                           title: $overlap
 *                           description: The $overlap's details.
 *                       $contains:
 *                         type: array
 *                         description: The $or's $contains.
 *                         items:
 *                           type: string
 *                           title: $contains
 *                           description: The $contain's $contains.
 *                       $contained:
 *                         type: array
 *                         description: The $or's $contained.
 *                         items:
 *                           type: string
 *                           title: $contained
 *                           description: The $contained's details.
 *                       $exists:
 *                         type: boolean
 *                         title: $exists
 *                         description: The $or's $exists.
 *                   - type: array
 *                     description: The $or's details.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $or
 *                           description: The $or's details.
 *                         - type: object
 *                           description: The $or's details.
 *                           x-schemaName: RegExp
 *                           required:
 *                             - exec
 *                             - test
 *                             - source
 *                             - global
 *                             - ignoreCase
 *                             - multiline
 *                             - lastIndex
 *                             - flags
 *                             - sticky
 *                             - unicode
 *                             - dotAll
 *                             - __@match@1128
 *                             - __@replace@1130
 *                             - __@search@1133
 *                             - __@matchAll@1137
 *                           properties:
 *                             exec:
 *                               type: object
 *                               description: The $or's exec.
 *                             test:
 *                               type: object
 *                               description: The $or's test.
 *                             source:
 *                               type: string
 *                               title: source
 *                               description: The $or's source.
 *                             global:
 *                               type: boolean
 *                               title: global
 *                               description: The $or's global.
 *                             ignoreCase:
 *                               type: boolean
 *                               title: ignoreCase
 *                               description: The $or's ignorecase.
 *                             multiline:
 *                               type: boolean
 *                               title: multiline
 *                               description: The $or's multiline.
 *                             lastIndex:
 *                               type: number
 *                               title: lastIndex
 *                               description: The $or's lastindex.
 *                             compile:
 *                               type: object
 *                               description: The $or's compile.
 *                             flags:
 *                               type: string
 *                               title: flags
 *                               description: The $or's flags.
 *                             sticky:
 *                               type: boolean
 *                               title: sticky
 *                               description: The $or's sticky.
 *                             unicode:
 *                               type: boolean
 *                               title: unicode
 *                               description: The $or's unicode.
 *                             dotAll:
 *                               type: boolean
 *                               title: dotAll
 *                               description: The $or's dotall.
 *                             __@match@1128:
 *                               type: object
 *                               description: The $or's   @match@1128.
 *                             __@replace@1130:
 *                               type: object
 *                               description: The $or's   @replace@1130.
 *                             __@search@1133:
 *                               type: object
 *                               description: The $or's   @search@1133.
 *                             __@split@1135:
 *                               type: object
 *                               description: The $or's   @split@1135.
 *                             __@matchAll@1137:
 *                               type: object
 *                               description: The $or's   @matchall@1137.
 *             $eq:
 *               oneOf:
 *                 - type: string
 *                   title: $eq
 *                   description: The collection id's $eq.
 *                 - type: object
 *                   description: The collection id's $eq.
 *                   x-schemaName: RegExp
 *                   required:
 *                     - exec
 *                     - test
 *                     - source
 *                     - global
 *                     - ignoreCase
 *                     - multiline
 *                     - lastIndex
 *                     - flags
 *                     - sticky
 *                     - unicode
 *                     - dotAll
 *                     - __@match@1128
 *                     - __@replace@1130
 *                     - __@search@1133
 *                     - __@matchAll@1137
 *                   properties:
 *                     exec:
 *                       type: object
 *                       description: The $eq's exec.
 *                     test:
 *                       type: object
 *                       description: The $eq's test.
 *                     source:
 *                       type: string
 *                       title: source
 *                       description: The $eq's source.
 *                     global:
 *                       type: boolean
 *                       title: global
 *                       description: The $eq's global.
 *                     ignoreCase:
 *                       type: boolean
 *                       title: ignoreCase
 *                       description: The $eq's ignorecase.
 *                     multiline:
 *                       type: boolean
 *                       title: multiline
 *                       description: The $eq's multiline.
 *                     lastIndex:
 *                       type: number
 *                       title: lastIndex
 *                       description: The $eq's lastindex.
 *                     compile:
 *                       type: object
 *                       description: The $eq's compile.
 *                     flags:
 *                       type: string
 *                       title: flags
 *                       description: The $eq's flags.
 *                     sticky:
 *                       type: boolean
 *                       title: sticky
 *                       description: The $eq's sticky.
 *                     unicode:
 *                       type: boolean
 *                       title: unicode
 *                       description: The $eq's unicode.
 *                     dotAll:
 *                       type: boolean
 *                       title: dotAll
 *                       description: The $eq's dotall.
 *                     __@match@1128:
 *                       type: object
 *                       description: The $eq's   @match@1128.
 *                     __@replace@1130:
 *                       type: object
 *                       description: The $eq's   @replace@1130.
 *                     __@search@1133:
 *                       type: object
 *                       description: The $eq's   @search@1133.
 *                     __@split@1135:
 *                       type: object
 *                       description: The $eq's   @split@1135.
 *                     __@matchAll@1137:
 *                       type: object
 *                       description: The $eq's   @matchall@1137.
 *                 - type: array
 *                   description: The collection id's $eq.
 *                   items:
 *                     oneOf:
 *                       - type: string
 *                         title: $eq
 *                         description: The $eq's details.
 *                       - type: object
 *                         description: The $eq's details.
 *                         x-schemaName: RegExp
 *                         required:
 *                           - exec
 *                           - test
 *                           - source
 *                           - global
 *                           - ignoreCase
 *                           - multiline
 *                           - lastIndex
 *                           - flags
 *                           - sticky
 *                           - unicode
 *                           - dotAll
 *                           - __@match@1128
 *                           - __@replace@1130
 *                           - __@search@1133
 *                           - __@matchAll@1137
 *                         properties:
 *                           exec:
 *                             type: object
 *                             description: The $eq's exec.
 *                           test:
 *                             type: object
 *                             description: The $eq's test.
 *                           source:
 *                             type: string
 *                             title: source
 *                             description: The $eq's source.
 *                           global:
 *                             type: boolean
 *                             title: global
 *                             description: The $eq's global.
 *                           ignoreCase:
 *                             type: boolean
 *                             title: ignoreCase
 *                             description: The $eq's ignorecase.
 *                           multiline:
 *                             type: boolean
 *                             title: multiline
 *                             description: The $eq's multiline.
 *                           lastIndex:
 *                             type: number
 *                             title: lastIndex
 *                             description: The $eq's lastindex.
 *                           compile:
 *                             type: object
 *                             description: The $eq's compile.
 *                           flags:
 *                             type: string
 *                             title: flags
 *                             description: The $eq's flags.
 *                           sticky:
 *                             type: boolean
 *                             title: sticky
 *                             description: The $eq's sticky.
 *                           unicode:
 *                             type: boolean
 *                             title: unicode
 *                             description: The $eq's unicode.
 *                           dotAll:
 *                             type: boolean
 *                             title: dotAll
 *                             description: The $eq's dotall.
 *                           __@match@1128:
 *                             type: object
 *                             description: The $eq's   @match@1128.
 *                           __@replace@1130:
 *                             type: object
 *                             description: The $eq's   @replace@1130.
 *                           __@search@1133:
 *                             type: object
 *                             description: The $eq's   @search@1133.
 *                           __@split@1135:
 *                             type: object
 *                             description: The $eq's   @split@1135.
 *                           __@matchAll@1137:
 *                             type: object
 *                             description: The $eq's   @matchall@1137.
 *             $ne:
 *               oneOf:
 *                 - type: string
 *                   title: $ne
 *                   description: The collection id's $ne.
 *                 - type: object
 *                   description: The collection id's $ne.
 *                   x-schemaName: RegExp
 *                   required:
 *                     - exec
 *                     - test
 *                     - source
 *                     - global
 *                     - ignoreCase
 *                     - multiline
 *                     - lastIndex
 *                     - flags
 *                     - sticky
 *                     - unicode
 *                     - dotAll
 *                     - __@match@1128
 *                     - __@replace@1130
 *                     - __@search@1133
 *                     - __@matchAll@1137
 *                   properties:
 *                     exec:
 *                       type: object
 *                       description: The $ne's exec.
 *                     test:
 *                       type: object
 *                       description: The $ne's test.
 *                     source:
 *                       type: string
 *                       title: source
 *                       description: The $ne's source.
 *                     global:
 *                       type: boolean
 *                       title: global
 *                       description: The $ne's global.
 *                     ignoreCase:
 *                       type: boolean
 *                       title: ignoreCase
 *                       description: The $ne's ignorecase.
 *                     multiline:
 *                       type: boolean
 *                       title: multiline
 *                       description: The $ne's multiline.
 *                     lastIndex:
 *                       type: number
 *                       title: lastIndex
 *                       description: The $ne's lastindex.
 *                     compile:
 *                       type: object
 *                       description: The $ne's compile.
 *                     flags:
 *                       type: string
 *                       title: flags
 *                       description: The $ne's flags.
 *                     sticky:
 *                       type: boolean
 *                       title: sticky
 *                       description: The $ne's sticky.
 *                     unicode:
 *                       type: boolean
 *                       title: unicode
 *                       description: The $ne's unicode.
 *                     dotAll:
 *                       type: boolean
 *                       title: dotAll
 *                       description: The $ne's dotall.
 *                     __@match@1128:
 *                       type: object
 *                       description: The $ne's   @match@1128.
 *                     __@replace@1130:
 *                       type: object
 *                       description: The $ne's   @replace@1130.
 *                     __@search@1133:
 *                       type: object
 *                       description: The $ne's   @search@1133.
 *                     __@split@1135:
 *                       type: object
 *                       description: The $ne's   @split@1135.
 *                     __@matchAll@1137:
 *                       type: object
 *                       description: The $ne's   @matchall@1137.
 *             $in:
 *               type: array
 *               description: The collection id's $in.
 *               items:
 *                 oneOf:
 *                   - type: string
 *                     title: $in
 *                     description: The $in's details.
 *                   - type: object
 *                     description: The $in's details.
 *                     x-schemaName: RegExp
 *                     required:
 *                       - exec
 *                       - test
 *                       - source
 *                       - global
 *                       - ignoreCase
 *                       - multiline
 *                       - lastIndex
 *                       - flags
 *                       - sticky
 *                       - unicode
 *                       - dotAll
 *                       - __@match@1128
 *                       - __@replace@1130
 *                       - __@search@1133
 *                       - __@matchAll@1137
 *                     properties:
 *                       exec:
 *                         type: object
 *                         description: The $in's exec.
 *                       test:
 *                         type: object
 *                         description: The $in's test.
 *                       source:
 *                         type: string
 *                         title: source
 *                         description: The $in's source.
 *                       global:
 *                         type: boolean
 *                         title: global
 *                         description: The $in's global.
 *                       ignoreCase:
 *                         type: boolean
 *                         title: ignoreCase
 *                         description: The $in's ignorecase.
 *                       multiline:
 *                         type: boolean
 *                         title: multiline
 *                         description: The $in's multiline.
 *                       lastIndex:
 *                         type: number
 *                         title: lastIndex
 *                         description: The $in's lastindex.
 *                       compile:
 *                         type: object
 *                         description: The $in's compile.
 *                       flags:
 *                         type: string
 *                         title: flags
 *                         description: The $in's flags.
 *                       sticky:
 *                         type: boolean
 *                         title: sticky
 *                         description: The $in's sticky.
 *                       unicode:
 *                         type: boolean
 *                         title: unicode
 *                         description: The $in's unicode.
 *                       dotAll:
 *                         type: boolean
 *                         title: dotAll
 *                         description: The $in's dotall.
 *                       __@match@1128:
 *                         type: object
 *                         description: The $in's   @match@1128.
 *                       __@replace@1130:
 *                         type: object
 *                         description: The $in's   @replace@1130.
 *                       __@search@1133:
 *                         type: object
 *                         description: The $in's   @search@1133.
 *                       __@split@1135:
 *                         type: object
 *                         description: The $in's   @split@1135.
 *                       __@matchAll@1137:
 *                         type: object
 *                         description: The $in's   @matchall@1137.
 *             $nin:
 *               type: array
 *               description: The collection id's $nin.
 *               items:
 *                 oneOf:
 *                   - type: string
 *                     title: $nin
 *                     description: The $nin's details.
 *                   - type: object
 *                     description: The $nin's details.
 *                     x-schemaName: RegExp
 *                     required:
 *                       - exec
 *                       - test
 *                       - source
 *                       - global
 *                       - ignoreCase
 *                       - multiline
 *                       - lastIndex
 *                       - flags
 *                       - sticky
 *                       - unicode
 *                       - dotAll
 *                       - __@match@1128
 *                       - __@replace@1130
 *                       - __@search@1133
 *                       - __@matchAll@1137
 *                     properties:
 *                       exec:
 *                         type: object
 *                         description: The $nin's exec.
 *                       test:
 *                         type: object
 *                         description: The $nin's test.
 *                       source:
 *                         type: string
 *                         title: source
 *                         description: The $nin's source.
 *                       global:
 *                         type: boolean
 *                         title: global
 *                         description: The $nin's global.
 *                       ignoreCase:
 *                         type: boolean
 *                         title: ignoreCase
 *                         description: The $nin's ignorecase.
 *                       multiline:
 *                         type: boolean
 *                         title: multiline
 *                         description: The $nin's multiline.
 *                       lastIndex:
 *                         type: number
 *                         title: lastIndex
 *                         description: The $nin's lastindex.
 *                       compile:
 *                         type: object
 *                         description: The $nin's compile.
 *                       flags:
 *                         type: string
 *                         title: flags
 *                         description: The $nin's flags.
 *                       sticky:
 *                         type: boolean
 *                         title: sticky
 *                         description: The $nin's sticky.
 *                       unicode:
 *                         type: boolean
 *                         title: unicode
 *                         description: The $nin's unicode.
 *                       dotAll:
 *                         type: boolean
 *                         title: dotAll
 *                         description: The $nin's dotall.
 *                       __@match@1128:
 *                         type: object
 *                         description: The $nin's   @match@1128.
 *                       __@replace@1130:
 *                         type: object
 *                         description: The $nin's   @replace@1130.
 *                       __@search@1133:
 *                         type: object
 *                         description: The $nin's   @search@1133.
 *                       __@split@1135:
 *                         type: object
 *                         description: The $nin's   @split@1135.
 *                       __@matchAll@1137:
 *                         type: object
 *                         description: The $nin's   @matchall@1137.
 *             $not:
 *               oneOf:
 *                 - type: string
 *                   title: $not
 *                   description: The collection id's $not.
 *                 - type: object
 *                   description: The collection id's $not.
 *                   x-schemaName: RegExp
 *                   required:
 *                     - exec
 *                     - test
 *                     - source
 *                     - global
 *                     - ignoreCase
 *                     - multiline
 *                     - lastIndex
 *                     - flags
 *                     - sticky
 *                     - unicode
 *                     - dotAll
 *                     - __@match@1128
 *                     - __@replace@1130
 *                     - __@search@1133
 *                     - __@matchAll@1137
 *                   properties:
 *                     exec:
 *                       type: object
 *                       description: The $not's exec.
 *                     test:
 *                       type: object
 *                       description: The $not's test.
 *                     source:
 *                       type: string
 *                       title: source
 *                       description: The $not's source.
 *                     global:
 *                       type: boolean
 *                       title: global
 *                       description: The $not's global.
 *                     ignoreCase:
 *                       type: boolean
 *                       title: ignoreCase
 *                       description: The $not's ignorecase.
 *                     multiline:
 *                       type: boolean
 *                       title: multiline
 *                       description: The $not's multiline.
 *                     lastIndex:
 *                       type: number
 *                       title: lastIndex
 *                       description: The $not's lastindex.
 *                     compile:
 *                       type: object
 *                       description: The $not's compile.
 *                     flags:
 *                       type: string
 *                       title: flags
 *                       description: The $not's flags.
 *                     sticky:
 *                       type: boolean
 *                       title: sticky
 *                       description: The $not's sticky.
 *                     unicode:
 *                       type: boolean
 *                       title: unicode
 *                       description: The $not's unicode.
 *                     dotAll:
 *                       type: boolean
 *                       title: dotAll
 *                       description: The $not's dotall.
 *                     __@match@1128:
 *                       type: object
 *                       description: The $not's   @match@1128.
 *                     __@replace@1130:
 *                       type: object
 *                       description: The $not's   @replace@1130.
 *                     __@search@1133:
 *                       type: object
 *                       description: The $not's   @search@1133.
 *                     __@split@1135:
 *                       type: object
 *                       description: The $not's   @split@1135.
 *                     __@matchAll@1137:
 *                       type: object
 *                       description: The $not's   @matchall@1137.
 *                 - type: object
 *                   description: The collection id's $not.
 *                   properties:
 *                     $and:
 *                       type: array
 *                       description: The $not's $and.
 *                       items:
 *                         oneOf:
 *                           - type: string
 *                             title: $and
 *                             description: The $and's details.
 *                           - type: object
 *                             description: The $and's details.
 *                             x-schemaName: RegExp
 *                           - type: object
 *                             description: The $and's details.
 *                           - type: array
 *                             description: The $and's details.
 *                             items:
 *                               oneOf:
 *                                 - type: string
 *                                   title: $and
 *                                   description: The $and's details.
 *                                 - type: object
 *                                   description: The $and's details.
 *                                   x-schemaName: RegExp
 *                     $or:
 *                       type: array
 *                       description: The $not's $or.
 *                       items:
 *                         oneOf:
 *                           - type: string
 *                             title: $or
 *                             description: The $or's details.
 *                           - type: object
 *                             description: The $or's details.
 *                             x-schemaName: RegExp
 *                           - type: object
 *                             description: The $or's details.
 *                           - type: array
 *                             description: The $or's details.
 *                             items:
 *                               oneOf:
 *                                 - type: string
 *                                   title: $or
 *                                   description: The $or's details.
 *                                 - type: object
 *                                   description: The $or's details.
 *                                   x-schemaName: RegExp
 *                     $eq:
 *                       oneOf:
 *                         - type: string
 *                           title: $eq
 *                           description: The $not's $eq.
 *                         - type: object
 *                           description: The $not's $eq.
 *                           x-schemaName: RegExp
 *                         - type: array
 *                           description: The $not's $eq.
 *                           items:
 *                             oneOf:
 *                               - type: string
 *                                 title: $eq
 *                                 description: The $eq's details.
 *                               - type: object
 *                                 description: The $eq's details.
 *                                 x-schemaName: RegExp
 *                     $ne:
 *                       oneOf:
 *                         - type: string
 *                           title: $ne
 *                           description: The $not's $ne.
 *                         - type: object
 *                           description: The $not's $ne.
 *                           x-schemaName: RegExp
 *                     $in:
 *                       type: array
 *                       description: The $not's $in.
 *                       items:
 *                         oneOf:
 *                           - type: string
 *                             title: $in
 *                             description: The $in's details.
 *                           - type: object
 *                             description: The $in's details.
 *                             x-schemaName: RegExp
 *                     $nin:
 *                       type: array
 *                       description: The $not's $nin.
 *                       items:
 *                         oneOf:
 *                           - type: string
 *                             title: $nin
 *                             description: The $nin's details.
 *                           - type: object
 *                             description: The $nin's details.
 *                             x-schemaName: RegExp
 *                     $not:
 *                       oneOf:
 *                         - type: string
 *                           title: $not
 *                           description: The $not's details.
 *                         - type: object
 *                           description: The $not's details.
 *                           x-schemaName: RegExp
 *                         - type: object
 *                           description: The $not's details.
 *                         - type: array
 *                           description: The $not's details.
 *                           items:
 *                             oneOf:
 *                               - type: string
 *                                 title: $not
 *                                 description: The $not's details.
 *                               - type: object
 *                                 description: The $not's details.
 *                                 x-schemaName: RegExp
 *                     $gt:
 *                       oneOf:
 *                         - type: string
 *                           title: $gt
 *                           description: The $not's $gt.
 *                         - type: object
 *                           description: The $not's $gt.
 *                           x-schemaName: RegExp
 *                     $gte:
 *                       oneOf:
 *                         - type: string
 *                           title: $gte
 *                           description: The $not's $gte.
 *                         - type: object
 *                           description: The $not's $gte.
 *                           x-schemaName: RegExp
 *                     $lt:
 *                       oneOf:
 *                         - type: string
 *                           title: $lt
 *                           description: The $not's $lt.
 *                         - type: object
 *                           description: The $not's $lt.
 *                           x-schemaName: RegExp
 *                     $lte:
 *                       oneOf:
 *                         - type: string
 *                           title: $lte
 *                           description: The $not's $lte.
 *                         - type: object
 *                           description: The $not's $lte.
 *                           x-schemaName: RegExp
 *                     $like:
 *                       type: string
 *                       title: $like
 *                       description: The $not's $like.
 *                     $re:
 *                       type: string
 *                       title: $re
 *                       description: The $not's $re.
 *                     $ilike:
 *                       type: string
 *                       title: $ilike
 *                       description: The $not's $ilike.
 *                     $fulltext:
 *                       type: string
 *                       title: $fulltext
 *                       description: The $not's $fulltext.
 *                     $overlap:
 *                       type: array
 *                       description: The $not's $overlap.
 *                       items:
 *                         type: string
 *                         title: $overlap
 *                         description: The $overlap's details.
 *                     $contains:
 *                       type: array
 *                       description: The $not's $contains.
 *                       items:
 *                         type: string
 *                         title: $contains
 *                         description: The $contain's $contains.
 *                     $contained:
 *                       type: array
 *                       description: The $not's $contained.
 *                       items:
 *                         type: string
 *                         title: $contained
 *                         description: The $contained's details.
 *                     $exists:
 *                       type: boolean
 *                       title: $exists
 *                       description: The $not's $exists.
 *                 - type: array
 *                   description: The collection id's $not.
 *                   items:
 *                     oneOf:
 *                       - type: string
 *                         title: $not
 *                         description: The $not's details.
 *                       - type: object
 *                         description: The $not's details.
 *                         x-schemaName: RegExp
 *                         required:
 *                           - exec
 *                           - test
 *                           - source
 *                           - global
 *                           - ignoreCase
 *                           - multiline
 *                           - lastIndex
 *                           - flags
 *                           - sticky
 *                           - unicode
 *                           - dotAll
 *                           - __@match@1128
 *                           - __@replace@1130
 *                           - __@search@1133
 *                           - __@matchAll@1137
 *                         properties:
 *                           exec:
 *                             type: object
 *                             description: The $not's exec.
 *                           test:
 *                             type: object
 *                             description: The $not's test.
 *                           source:
 *                             type: string
 *                             title: source
 *                             description: The $not's source.
 *                           global:
 *                             type: boolean
 *                             title: global
 *                             description: The $not's global.
 *                           ignoreCase:
 *                             type: boolean
 *                             title: ignoreCase
 *                             description: The $not's ignorecase.
 *                           multiline:
 *                             type: boolean
 *                             title: multiline
 *                             description: The $not's multiline.
 *                           lastIndex:
 *                             type: number
 *                             title: lastIndex
 *                             description: The $not's lastindex.
 *                           compile:
 *                             type: object
 *                             description: The $not's compile.
 *                           flags:
 *                             type: string
 *                             title: flags
 *                             description: The $not's flags.
 *                           sticky:
 *                             type: boolean
 *                             title: sticky
 *                             description: The $not's sticky.
 *                           unicode:
 *                             type: boolean
 *                             title: unicode
 *                             description: The $not's unicode.
 *                           dotAll:
 *                             type: boolean
 *                             title: dotAll
 *                             description: The $not's dotall.
 *                           __@match@1128:
 *                             type: object
 *                             description: The $not's   @match@1128.
 *                           __@replace@1130:
 *                             type: object
 *                             description: The $not's   @replace@1130.
 *                           __@search@1133:
 *                             type: object
 *                             description: The $not's   @search@1133.
 *                           __@split@1135:
 *                             type: object
 *                             description: The $not's   @split@1135.
 *                           __@matchAll@1137:
 *                             type: object
 *                             description: The $not's   @matchall@1137.
 *             $gt:
 *               oneOf:
 *                 - type: string
 *                   title: $gt
 *                   description: The collection id's $gt.
 *                 - type: object
 *                   description: The collection id's $gt.
 *                   x-schemaName: RegExp
 *                   required:
 *                     - exec
 *                     - test
 *                     - source
 *                     - global
 *                     - ignoreCase
 *                     - multiline
 *                     - lastIndex
 *                     - flags
 *                     - sticky
 *                     - unicode
 *                     - dotAll
 *                     - __@match@1128
 *                     - __@replace@1130
 *                     - __@search@1133
 *                     - __@matchAll@1137
 *                   properties:
 *                     exec:
 *                       type: object
 *                       description: The $gt's exec.
 *                     test:
 *                       type: object
 *                       description: The $gt's test.
 *                     source:
 *                       type: string
 *                       title: source
 *                       description: The $gt's source.
 *                     global:
 *                       type: boolean
 *                       title: global
 *                       description: The $gt's global.
 *                     ignoreCase:
 *                       type: boolean
 *                       title: ignoreCase
 *                       description: The $gt's ignorecase.
 *                     multiline:
 *                       type: boolean
 *                       title: multiline
 *                       description: The $gt's multiline.
 *                     lastIndex:
 *                       type: number
 *                       title: lastIndex
 *                       description: The $gt's lastindex.
 *                     compile:
 *                       type: object
 *                       description: The $gt's compile.
 *                     flags:
 *                       type: string
 *                       title: flags
 *                       description: The $gt's flags.
 *                     sticky:
 *                       type: boolean
 *                       title: sticky
 *                       description: The $gt's sticky.
 *                     unicode:
 *                       type: boolean
 *                       title: unicode
 *                       description: The $gt's unicode.
 *                     dotAll:
 *                       type: boolean
 *                       title: dotAll
 *                       description: The $gt's dotall.
 *                     __@match@1128:
 *                       type: object
 *                       description: The $gt's   @match@1128.
 *                     __@replace@1130:
 *                       type: object
 *                       description: The $gt's   @replace@1130.
 *                     __@search@1133:
 *                       type: object
 *                       description: The $gt's   @search@1133.
 *                     __@split@1135:
 *                       type: object
 *                       description: The $gt's   @split@1135.
 *                     __@matchAll@1137:
 *                       type: object
 *                       description: The $gt's   @matchall@1137.
 *             $gte:
 *               oneOf:
 *                 - type: string
 *                   title: $gte
 *                   description: The collection id's $gte.
 *                 - type: object
 *                   description: The collection id's $gte.
 *                   x-schemaName: RegExp
 *                   required:
 *                     - exec
 *                     - test
 *                     - source
 *                     - global
 *                     - ignoreCase
 *                     - multiline
 *                     - lastIndex
 *                     - flags
 *                     - sticky
 *                     - unicode
 *                     - dotAll
 *                     - __@match@1128
 *                     - __@replace@1130
 *                     - __@search@1133
 *                     - __@matchAll@1137
 *                   properties:
 *                     exec:
 *                       type: object
 *                       description: The $gte's exec.
 *                     test:
 *                       type: object
 *                       description: The $gte's test.
 *                     source:
 *                       type: string
 *                       title: source
 *                       description: The $gte's source.
 *                     global:
 *                       type: boolean
 *                       title: global
 *                       description: The $gte's global.
 *                     ignoreCase:
 *                       type: boolean
 *                       title: ignoreCase
 *                       description: The $gte's ignorecase.
 *                     multiline:
 *                       type: boolean
 *                       title: multiline
 *                       description: The $gte's multiline.
 *                     lastIndex:
 *                       type: number
 *                       title: lastIndex
 *                       description: The $gte's lastindex.
 *                     compile:
 *                       type: object
 *                       description: The $gte's compile.
 *                     flags:
 *                       type: string
 *                       title: flags
 *                       description: The $gte's flags.
 *                     sticky:
 *                       type: boolean
 *                       title: sticky
 *                       description: The $gte's sticky.
 *                     unicode:
 *                       type: boolean
 *                       title: unicode
 *                       description: The $gte's unicode.
 *                     dotAll:
 *                       type: boolean
 *                       title: dotAll
 *                       description: The $gte's dotall.
 *                     __@match@1128:
 *                       type: object
 *                       description: The $gte's   @match@1128.
 *                     __@replace@1130:
 *                       type: object
 *                       description: The $gte's   @replace@1130.
 *                     __@search@1133:
 *                       type: object
 *                       description: The $gte's   @search@1133.
 *                     __@split@1135:
 *                       type: object
 *                       description: The $gte's   @split@1135.
 *                     __@matchAll@1137:
 *                       type: object
 *                       description: The $gte's   @matchall@1137.
 *             $lt:
 *               oneOf:
 *                 - type: string
 *                   title: $lt
 *                   description: The collection id's $lt.
 *                 - type: object
 *                   description: The collection id's $lt.
 *                   x-schemaName: RegExp
 *                   required:
 *                     - exec
 *                     - test
 *                     - source
 *                     - global
 *                     - ignoreCase
 *                     - multiline
 *                     - lastIndex
 *                     - flags
 *                     - sticky
 *                     - unicode
 *                     - dotAll
 *                     - __@match@1128
 *                     - __@replace@1130
 *                     - __@search@1133
 *                     - __@matchAll@1137
 *                   properties:
 *                     exec:
 *                       type: object
 *                       description: The $lt's exec.
 *                     test:
 *                       type: object
 *                       description: The $lt's test.
 *                     source:
 *                       type: string
 *                       title: source
 *                       description: The $lt's source.
 *                     global:
 *                       type: boolean
 *                       title: global
 *                       description: The $lt's global.
 *                     ignoreCase:
 *                       type: boolean
 *                       title: ignoreCase
 *                       description: The $lt's ignorecase.
 *                     multiline:
 *                       type: boolean
 *                       title: multiline
 *                       description: The $lt's multiline.
 *                     lastIndex:
 *                       type: number
 *                       title: lastIndex
 *                       description: The $lt's lastindex.
 *                     compile:
 *                       type: object
 *                       description: The $lt's compile.
 *                     flags:
 *                       type: string
 *                       title: flags
 *                       description: The $lt's flags.
 *                     sticky:
 *                       type: boolean
 *                       title: sticky
 *                       description: The $lt's sticky.
 *                     unicode:
 *                       type: boolean
 *                       title: unicode
 *                       description: The $lt's unicode.
 *                     dotAll:
 *                       type: boolean
 *                       title: dotAll
 *                       description: The $lt's dotall.
 *                     __@match@1128:
 *                       type: object
 *                       description: The $lt's   @match@1128.
 *                     __@replace@1130:
 *                       type: object
 *                       description: The $lt's   @replace@1130.
 *                     __@search@1133:
 *                       type: object
 *                       description: The $lt's   @search@1133.
 *                     __@split@1135:
 *                       type: object
 *                       description: The $lt's   @split@1135.
 *                     __@matchAll@1137:
 *                       type: object
 *                       description: The $lt's   @matchall@1137.
 *             $lte:
 *               oneOf:
 *                 - type: string
 *                   title: $lte
 *                   description: The collection id's $lte.
 *                 - type: object
 *                   description: The collection id's $lte.
 *                   x-schemaName: RegExp
 *                   required:
 *                     - exec
 *                     - test
 *                     - source
 *                     - global
 *                     - ignoreCase
 *                     - multiline
 *                     - lastIndex
 *                     - flags
 *                     - sticky
 *                     - unicode
 *                     - dotAll
 *                     - __@match@1128
 *                     - __@replace@1130
 *                     - __@search@1133
 *                     - __@matchAll@1137
 *                   properties:
 *                     exec:
 *                       type: object
 *                       description: The $lte's exec.
 *                     test:
 *                       type: object
 *                       description: The $lte's test.
 *                     source:
 *                       type: string
 *                       title: source
 *                       description: The $lte's source.
 *                     global:
 *                       type: boolean
 *                       title: global
 *                       description: The $lte's global.
 *                     ignoreCase:
 *                       type: boolean
 *                       title: ignoreCase
 *                       description: The $lte's ignorecase.
 *                     multiline:
 *                       type: boolean
 *                       title: multiline
 *                       description: The $lte's multiline.
 *                     lastIndex:
 *                       type: number
 *                       title: lastIndex
 *                       description: The $lte's lastindex.
 *                     compile:
 *                       type: object
 *                       description: The $lte's compile.
 *                     flags:
 *                       type: string
 *                       title: flags
 *                       description: The $lte's flags.
 *                     sticky:
 *                       type: boolean
 *                       title: sticky
 *                       description: The $lte's sticky.
 *                     unicode:
 *                       type: boolean
 *                       title: unicode
 *                       description: The $lte's unicode.
 *                     dotAll:
 *                       type: boolean
 *                       title: dotAll
 *                       description: The $lte's dotall.
 *                     __@match@1128:
 *                       type: object
 *                       description: The $lte's   @match@1128.
 *                     __@replace@1130:
 *                       type: object
 *                       description: The $lte's   @replace@1130.
 *                     __@search@1133:
 *                       type: object
 *                       description: The $lte's   @search@1133.
 *                     __@split@1135:
 *                       type: object
 *                       description: The $lte's   @split@1135.
 *                     __@matchAll@1137:
 *                       type: object
 *                       description: The $lte's   @matchall@1137.
 *             $like:
 *               type: string
 *               title: $like
 *               description: The collection id's $like.
 *             $re:
 *               type: string
 *               title: $re
 *               description: The collection id's $re.
 *             $ilike:
 *               type: string
 *               title: $ilike
 *               description: The collection id's $ilike.
 *             $fulltext:
 *               type: string
 *               title: $fulltext
 *               description: The collection id's $fulltext.
 *             $overlap:
 *               type: array
 *               description: The collection id's $overlap.
 *               items:
 *                 type: string
 *                 title: $overlap
 *                 description: The $overlap's details.
 *             $contains:
 *               type: array
 *               description: The collection id's $contains.
 *               items:
 *                 type: string
 *                 title: $contains
 *                 description: The $contain's $contains.
 *             $contained:
 *               type: array
 *               description: The collection id's $contained.
 *               items:
 *                 type: string
 *                 title: $contained
 *                 description: The $contained's details.
 *             $exists:
 *               type: boolean
 *               title: $exists
 *               description: The collection id's $exists.
 *   - name: created_at
 *     in: query
 *     description: The product's created at.
 *     required: false
 *     schema:
 *       type: object
 *       description: The product's created at.
 *       properties:
 *         $and:
 *           type: array
 *           description: The created at's $and.
 *           items:
 *             oneOf:
 *               - type: string
 *                 title: $and
 *                 description: The $and's details.
 *               - type: object
 *                 description: The $and's details.
 *                 x-schemaName: RegExp
 *                 required:
 *                   - exec
 *                   - test
 *                   - source
 *                   - global
 *                   - ignoreCase
 *                   - multiline
 *                   - lastIndex
 *                   - flags
 *                   - sticky
 *                   - unicode
 *                   - dotAll
 *                   - __@match@1128
 *                   - __@replace@1130
 *                   - __@search@1133
 *                   - __@matchAll@1137
 *                 properties:
 *                   exec:
 *                     type: object
 *                     description: The $and's exec.
 *                   test:
 *                     type: object
 *                     description: The $and's test.
 *                   source:
 *                     type: string
 *                     title: source
 *                     description: The $and's source.
 *                   global:
 *                     type: boolean
 *                     title: global
 *                     description: The $and's global.
 *                   ignoreCase:
 *                     type: boolean
 *                     title: ignoreCase
 *                     description: The $and's ignorecase.
 *                   multiline:
 *                     type: boolean
 *                     title: multiline
 *                     description: The $and's multiline.
 *                   lastIndex:
 *                     type: number
 *                     title: lastIndex
 *                     description: The $and's lastindex.
 *                   compile:
 *                     type: object
 *                     description: The $and's compile.
 *                   flags:
 *                     type: string
 *                     title: flags
 *                     description: The $and's flags.
 *                   sticky:
 *                     type: boolean
 *                     title: sticky
 *                     description: The $and's sticky.
 *                   unicode:
 *                     type: boolean
 *                     title: unicode
 *                     description: The $and's unicode.
 *                   dotAll:
 *                     type: boolean
 *                     title: dotAll
 *                     description: The $and's dotall.
 *                   __@match@1128:
 *                     type: object
 *                     description: The $and's   @match@1128.
 *                   __@replace@1130:
 *                     type: object
 *                     description: The $and's   @replace@1130.
 *                   __@search@1133:
 *                     type: object
 *                     description: The $and's   @search@1133.
 *                   __@split@1135:
 *                     type: object
 *                     description: The $and's   @split@1135.
 *                   __@matchAll@1137:
 *                     type: object
 *                     description: The $and's   @matchall@1137.
 *               - type: object
 *                 description: The $and's details.
 *                 properties:
 *                   $and:
 *                     type: array
 *                     description: The $and's details.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $and
 *                           description: The $and's details.
 *                         - type: object
 *                           description: The $and's details.
 *                           x-schemaName: RegExp
 *                         - type: object
 *                           description: The $and's details.
 *                         - type: array
 *                           description: The $and's details.
 *                           items:
 *                             oneOf:
 *                               - type: string
 *                                 title: $and
 *                                 description: The $and's details.
 *                               - type: object
 *                                 description: The $and's details.
 *                                 x-schemaName: RegExp
 *                   $or:
 *                     type: array
 *                     description: The $and's $or.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $or
 *                           description: The $or's details.
 *                         - type: object
 *                           description: The $or's details.
 *                           x-schemaName: RegExp
 *                         - type: object
 *                           description: The $or's details.
 *                         - type: array
 *                           description: The $or's details.
 *                           items:
 *                             oneOf:
 *                               - type: string
 *                                 title: $or
 *                                 description: The $or's details.
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: RegExp
 *                   $eq:
 *                     oneOf:
 *                       - type: string
 *                         title: $eq
 *                         description: The $and's $eq.
 *                       - type: object
 *                         description: The $and's $eq.
 *                         x-schemaName: RegExp
 *                       - type: array
 *                         description: The $and's $eq.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $eq
 *                               description: The $eq's details.
 *                             - type: object
 *                               description: The $eq's details.
 *                               x-schemaName: RegExp
 *                   $ne:
 *                     oneOf:
 *                       - type: string
 *                         title: $ne
 *                         description: The $and's $ne.
 *                       - type: object
 *                         description: The $and's $ne.
 *                         x-schemaName: RegExp
 *                   $in:
 *                     type: array
 *                     description: The $and's $in.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $in
 *                           description: The $in's details.
 *                         - type: object
 *                           description: The $in's details.
 *                           x-schemaName: RegExp
 *                   $nin:
 *                     type: array
 *                     description: The $and's $nin.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $nin
 *                           description: The $nin's details.
 *                         - type: object
 *                           description: The $nin's details.
 *                           x-schemaName: RegExp
 *                   $not:
 *                     oneOf:
 *                       - type: string
 *                         title: $not
 *                         description: The $and's $not.
 *                       - type: object
 *                         description: The $and's $not.
 *                         x-schemaName: RegExp
 *                       - type: object
 *                         description: The $and's $not.
 *                       - type: array
 *                         description: The $and's $not.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $not
 *                               description: The $not's details.
 *                             - type: object
 *                               description: The $not's details.
 *                               x-schemaName: RegExp
 *                   $gt:
 *                     oneOf:
 *                       - type: string
 *                         title: $gt
 *                         description: The $and's $gt.
 *                       - type: object
 *                         description: The $and's $gt.
 *                         x-schemaName: RegExp
 *                   $gte:
 *                     oneOf:
 *                       - type: string
 *                         title: $gte
 *                         description: The $and's $gte.
 *                       - type: object
 *                         description: The $and's $gte.
 *                         x-schemaName: RegExp
 *                   $lt:
 *                     oneOf:
 *                       - type: string
 *                         title: $lt
 *                         description: The $and's $lt.
 *                       - type: object
 *                         description: The $and's $lt.
 *                         x-schemaName: RegExp
 *                   $lte:
 *                     oneOf:
 *                       - type: string
 *                         title: $lte
 *                         description: The $and's $lte.
 *                       - type: object
 *                         description: The $and's $lte.
 *                         x-schemaName: RegExp
 *                   $like:
 *                     type: string
 *                     title: $like
 *                     description: The $and's $like.
 *                   $re:
 *                     type: string
 *                     title: $re
 *                     description: The $and's $re.
 *                   $ilike:
 *                     type: string
 *                     title: $ilike
 *                     description: The $and's $ilike.
 *                   $fulltext:
 *                     type: string
 *                     title: $fulltext
 *                     description: The $and's $fulltext.
 *                   $overlap:
 *                     type: array
 *                     description: The $and's $overlap.
 *                     items:
 *                       type: string
 *                       title: $overlap
 *                       description: The $overlap's details.
 *                   $contains:
 *                     type: array
 *                     description: The $and's $contains.
 *                     items:
 *                       type: string
 *                       title: $contains
 *                       description: The $contain's $contains.
 *                   $contained:
 *                     type: array
 *                     description: The $and's $contained.
 *                     items:
 *                       type: string
 *                       title: $contained
 *                       description: The $contained's details.
 *                   $exists:
 *                     type: boolean
 *                     title: $exists
 *                     description: The $and's $exists.
 *               - type: array
 *                 description: The $and's details.
 *                 items:
 *                   oneOf:
 *                     - type: string
 *                       title: $and
 *                       description: The $and's details.
 *                     - type: object
 *                       description: The $and's details.
 *                       x-schemaName: RegExp
 *                       required:
 *                         - exec
 *                         - test
 *                         - source
 *                         - global
 *                         - ignoreCase
 *                         - multiline
 *                         - lastIndex
 *                         - flags
 *                         - sticky
 *                         - unicode
 *                         - dotAll
 *                         - __@match@1128
 *                         - __@replace@1130
 *                         - __@search@1133
 *                         - __@matchAll@1137
 *                       properties:
 *                         exec:
 *                           type: object
 *                           description: The $and's exec.
 *                         test:
 *                           type: object
 *                           description: The $and's test.
 *                         source:
 *                           type: string
 *                           title: source
 *                           description: The $and's source.
 *                         global:
 *                           type: boolean
 *                           title: global
 *                           description: The $and's global.
 *                         ignoreCase:
 *                           type: boolean
 *                           title: ignoreCase
 *                           description: The $and's ignorecase.
 *                         multiline:
 *                           type: boolean
 *                           title: multiline
 *                           description: The $and's multiline.
 *                         lastIndex:
 *                           type: number
 *                           title: lastIndex
 *                           description: The $and's lastindex.
 *                         compile:
 *                           type: object
 *                           description: The $and's compile.
 *                         flags:
 *                           type: string
 *                           title: flags
 *                           description: The $and's flags.
 *                         sticky:
 *                           type: boolean
 *                           title: sticky
 *                           description: The $and's sticky.
 *                         unicode:
 *                           type: boolean
 *                           title: unicode
 *                           description: The $and's unicode.
 *                         dotAll:
 *                           type: boolean
 *                           title: dotAll
 *                           description: The $and's dotall.
 *                         __@match@1128:
 *                           type: object
 *                           description: The $and's   @match@1128.
 *                         __@replace@1130:
 *                           type: object
 *                           description: The $and's   @replace@1130.
 *                         __@search@1133:
 *                           type: object
 *                           description: The $and's   @search@1133.
 *                         __@split@1135:
 *                           type: object
 *                           description: The $and's   @split@1135.
 *                         __@matchAll@1137:
 *                           type: object
 *                           description: The $and's   @matchall@1137.
 *         $or:
 *           type: array
 *           description: The created at's $or.
 *           items:
 *             oneOf:
 *               - type: string
 *                 title: $or
 *                 description: The $or's details.
 *               - type: object
 *                 description: The $or's details.
 *                 x-schemaName: RegExp
 *                 required:
 *                   - exec
 *                   - test
 *                   - source
 *                   - global
 *                   - ignoreCase
 *                   - multiline
 *                   - lastIndex
 *                   - flags
 *                   - sticky
 *                   - unicode
 *                   - dotAll
 *                   - __@match@1128
 *                   - __@replace@1130
 *                   - __@search@1133
 *                   - __@matchAll@1137
 *                 properties:
 *                   exec:
 *                     type: object
 *                     description: The $or's exec.
 *                   test:
 *                     type: object
 *                     description: The $or's test.
 *                   source:
 *                     type: string
 *                     title: source
 *                     description: The $or's source.
 *                   global:
 *                     type: boolean
 *                     title: global
 *                     description: The $or's global.
 *                   ignoreCase:
 *                     type: boolean
 *                     title: ignoreCase
 *                     description: The $or's ignorecase.
 *                   multiline:
 *                     type: boolean
 *                     title: multiline
 *                     description: The $or's multiline.
 *                   lastIndex:
 *                     type: number
 *                     title: lastIndex
 *                     description: The $or's lastindex.
 *                   compile:
 *                     type: object
 *                     description: The $or's compile.
 *                   flags:
 *                     type: string
 *                     title: flags
 *                     description: The $or's flags.
 *                   sticky:
 *                     type: boolean
 *                     title: sticky
 *                     description: The $or's sticky.
 *                   unicode:
 *                     type: boolean
 *                     title: unicode
 *                     description: The $or's unicode.
 *                   dotAll:
 *                     type: boolean
 *                     title: dotAll
 *                     description: The $or's dotall.
 *                   __@match@1128:
 *                     type: object
 *                     description: The $or's   @match@1128.
 *                   __@replace@1130:
 *                     type: object
 *                     description: The $or's   @replace@1130.
 *                   __@search@1133:
 *                     type: object
 *                     description: The $or's   @search@1133.
 *                   __@split@1135:
 *                     type: object
 *                     description: The $or's   @split@1135.
 *                   __@matchAll@1137:
 *                     type: object
 *                     description: The $or's   @matchall@1137.
 *               - type: object
 *                 description: The $or's details.
 *                 properties:
 *                   $and:
 *                     type: array
 *                     description: The $or's $and.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $and
 *                           description: The $and's details.
 *                         - type: object
 *                           description: The $and's details.
 *                           x-schemaName: RegExp
 *                         - type: object
 *                           description: The $and's details.
 *                         - type: array
 *                           description: The $and's details.
 *                           items:
 *                             oneOf:
 *                               - type: string
 *                                 title: $and
 *                                 description: The $and's details.
 *                               - type: object
 *                                 description: The $and's details.
 *                                 x-schemaName: RegExp
 *                   $or:
 *                     type: array
 *                     description: The $or's details.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $or
 *                           description: The $or's details.
 *                         - type: object
 *                           description: The $or's details.
 *                           x-schemaName: RegExp
 *                         - type: object
 *                           description: The $or's details.
 *                         - type: array
 *                           description: The $or's details.
 *                           items:
 *                             oneOf:
 *                               - type: string
 *                                 title: $or
 *                                 description: The $or's details.
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: RegExp
 *                   $eq:
 *                     oneOf:
 *                       - type: string
 *                         title: $eq
 *                         description: The $or's $eq.
 *                       - type: object
 *                         description: The $or's $eq.
 *                         x-schemaName: RegExp
 *                       - type: array
 *                         description: The $or's $eq.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $eq
 *                               description: The $eq's details.
 *                             - type: object
 *                               description: The $eq's details.
 *                               x-schemaName: RegExp
 *                   $ne:
 *                     oneOf:
 *                       - type: string
 *                         title: $ne
 *                         description: The $or's $ne.
 *                       - type: object
 *                         description: The $or's $ne.
 *                         x-schemaName: RegExp
 *                   $in:
 *                     type: array
 *                     description: The $or's $in.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $in
 *                           description: The $in's details.
 *                         - type: object
 *                           description: The $in's details.
 *                           x-schemaName: RegExp
 *                   $nin:
 *                     type: array
 *                     description: The $or's $nin.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $nin
 *                           description: The $nin's details.
 *                         - type: object
 *                           description: The $nin's details.
 *                           x-schemaName: RegExp
 *                   $not:
 *                     oneOf:
 *                       - type: string
 *                         title: $not
 *                         description: The $or's $not.
 *                       - type: object
 *                         description: The $or's $not.
 *                         x-schemaName: RegExp
 *                       - type: object
 *                         description: The $or's $not.
 *                       - type: array
 *                         description: The $or's $not.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $not
 *                               description: The $not's details.
 *                             - type: object
 *                               description: The $not's details.
 *                               x-schemaName: RegExp
 *                   $gt:
 *                     oneOf:
 *                       - type: string
 *                         title: $gt
 *                         description: The $or's $gt.
 *                       - type: object
 *                         description: The $or's $gt.
 *                         x-schemaName: RegExp
 *                   $gte:
 *                     oneOf:
 *                       - type: string
 *                         title: $gte
 *                         description: The $or's $gte.
 *                       - type: object
 *                         description: The $or's $gte.
 *                         x-schemaName: RegExp
 *                   $lt:
 *                     oneOf:
 *                       - type: string
 *                         title: $lt
 *                         description: The $or's $lt.
 *                       - type: object
 *                         description: The $or's $lt.
 *                         x-schemaName: RegExp
 *                   $lte:
 *                     oneOf:
 *                       - type: string
 *                         title: $lte
 *                         description: The $or's $lte.
 *                       - type: object
 *                         description: The $or's $lte.
 *                         x-schemaName: RegExp
 *                   $like:
 *                     type: string
 *                     title: $like
 *                     description: The $or's $like.
 *                   $re:
 *                     type: string
 *                     title: $re
 *                     description: The $or's $re.
 *                   $ilike:
 *                     type: string
 *                     title: $ilike
 *                     description: The $or's $ilike.
 *                   $fulltext:
 *                     type: string
 *                     title: $fulltext
 *                     description: The $or's $fulltext.
 *                   $overlap:
 *                     type: array
 *                     description: The $or's $overlap.
 *                     items:
 *                       type: string
 *                       title: $overlap
 *                       description: The $overlap's details.
 *                   $contains:
 *                     type: array
 *                     description: The $or's $contains.
 *                     items:
 *                       type: string
 *                       title: $contains
 *                       description: The $contain's $contains.
 *                   $contained:
 *                     type: array
 *                     description: The $or's $contained.
 *                     items:
 *                       type: string
 *                       title: $contained
 *                       description: The $contained's details.
 *                   $exists:
 *                     type: boolean
 *                     title: $exists
 *                     description: The $or's $exists.
 *               - type: array
 *                 description: The $or's details.
 *                 items:
 *                   oneOf:
 *                     - type: string
 *                       title: $or
 *                       description: The $or's details.
 *                     - type: object
 *                       description: The $or's details.
 *                       x-schemaName: RegExp
 *                       required:
 *                         - exec
 *                         - test
 *                         - source
 *                         - global
 *                         - ignoreCase
 *                         - multiline
 *                         - lastIndex
 *                         - flags
 *                         - sticky
 *                         - unicode
 *                         - dotAll
 *                         - __@match@1128
 *                         - __@replace@1130
 *                         - __@search@1133
 *                         - __@matchAll@1137
 *                       properties:
 *                         exec:
 *                           type: object
 *                           description: The $or's exec.
 *                         test:
 *                           type: object
 *                           description: The $or's test.
 *                         source:
 *                           type: string
 *                           title: source
 *                           description: The $or's source.
 *                         global:
 *                           type: boolean
 *                           title: global
 *                           description: The $or's global.
 *                         ignoreCase:
 *                           type: boolean
 *                           title: ignoreCase
 *                           description: The $or's ignorecase.
 *                         multiline:
 *                           type: boolean
 *                           title: multiline
 *                           description: The $or's multiline.
 *                         lastIndex:
 *                           type: number
 *                           title: lastIndex
 *                           description: The $or's lastindex.
 *                         compile:
 *                           type: object
 *                           description: The $or's compile.
 *                         flags:
 *                           type: string
 *                           title: flags
 *                           description: The $or's flags.
 *                         sticky:
 *                           type: boolean
 *                           title: sticky
 *                           description: The $or's sticky.
 *                         unicode:
 *                           type: boolean
 *                           title: unicode
 *                           description: The $or's unicode.
 *                         dotAll:
 *                           type: boolean
 *                           title: dotAll
 *                           description: The $or's dotall.
 *                         __@match@1128:
 *                           type: object
 *                           description: The $or's   @match@1128.
 *                         __@replace@1130:
 *                           type: object
 *                           description: The $or's   @replace@1130.
 *                         __@search@1133:
 *                           type: object
 *                           description: The $or's   @search@1133.
 *                         __@split@1135:
 *                           type: object
 *                           description: The $or's   @split@1135.
 *                         __@matchAll@1137:
 *                           type: object
 *                           description: The $or's   @matchall@1137.
 *         $eq:
 *           oneOf:
 *             - type: string
 *               title: $eq
 *               description: The created at's $eq.
 *             - type: object
 *               description: The created at's $eq.
 *               x-schemaName: RegExp
 *               required:
 *                 - exec
 *                 - test
 *                 - source
 *                 - global
 *                 - ignoreCase
 *                 - multiline
 *                 - lastIndex
 *                 - flags
 *                 - sticky
 *                 - unicode
 *                 - dotAll
 *                 - __@match@1128
 *                 - __@replace@1130
 *                 - __@search@1133
 *                 - __@matchAll@1137
 *               properties:
 *                 exec:
 *                   type: object
 *                   description: The $eq's exec.
 *                 test:
 *                   type: object
 *                   description: The $eq's test.
 *                 source:
 *                   type: string
 *                   title: source
 *                   description: The $eq's source.
 *                 global:
 *                   type: boolean
 *                   title: global
 *                   description: The $eq's global.
 *                 ignoreCase:
 *                   type: boolean
 *                   title: ignoreCase
 *                   description: The $eq's ignorecase.
 *                 multiline:
 *                   type: boolean
 *                   title: multiline
 *                   description: The $eq's multiline.
 *                 lastIndex:
 *                   type: number
 *                   title: lastIndex
 *                   description: The $eq's lastindex.
 *                 compile:
 *                   type: object
 *                   description: The $eq's compile.
 *                 flags:
 *                   type: string
 *                   title: flags
 *                   description: The $eq's flags.
 *                 sticky:
 *                   type: boolean
 *                   title: sticky
 *                   description: The $eq's sticky.
 *                 unicode:
 *                   type: boolean
 *                   title: unicode
 *                   description: The $eq's unicode.
 *                 dotAll:
 *                   type: boolean
 *                   title: dotAll
 *                   description: The $eq's dotall.
 *                 __@match@1128:
 *                   type: object
 *                   description: The $eq's   @match@1128.
 *                 __@replace@1130:
 *                   type: object
 *                   description: The $eq's   @replace@1130.
 *                 __@search@1133:
 *                   type: object
 *                   description: The $eq's   @search@1133.
 *                 __@split@1135:
 *                   type: object
 *                   description: The $eq's   @split@1135.
 *                 __@matchAll@1137:
 *                   type: object
 *                   description: The $eq's   @matchall@1137.
 *             - type: array
 *               description: The created at's $eq.
 *               items:
 *                 oneOf:
 *                   - type: string
 *                     title: $eq
 *                     description: The $eq's details.
 *                   - type: object
 *                     description: The $eq's details.
 *                     x-schemaName: RegExp
 *                     required:
 *                       - exec
 *                       - test
 *                       - source
 *                       - global
 *                       - ignoreCase
 *                       - multiline
 *                       - lastIndex
 *                       - flags
 *                       - sticky
 *                       - unicode
 *                       - dotAll
 *                       - __@match@1128
 *                       - __@replace@1130
 *                       - __@search@1133
 *                       - __@matchAll@1137
 *                     properties:
 *                       exec:
 *                         type: object
 *                         description: The $eq's exec.
 *                       test:
 *                         type: object
 *                         description: The $eq's test.
 *                       source:
 *                         type: string
 *                         title: source
 *                         description: The $eq's source.
 *                       global:
 *                         type: boolean
 *                         title: global
 *                         description: The $eq's global.
 *                       ignoreCase:
 *                         type: boolean
 *                         title: ignoreCase
 *                         description: The $eq's ignorecase.
 *                       multiline:
 *                         type: boolean
 *                         title: multiline
 *                         description: The $eq's multiline.
 *                       lastIndex:
 *                         type: number
 *                         title: lastIndex
 *                         description: The $eq's lastindex.
 *                       compile:
 *                         type: object
 *                         description: The $eq's compile.
 *                       flags:
 *                         type: string
 *                         title: flags
 *                         description: The $eq's flags.
 *                       sticky:
 *                         type: boolean
 *                         title: sticky
 *                         description: The $eq's sticky.
 *                       unicode:
 *                         type: boolean
 *                         title: unicode
 *                         description: The $eq's unicode.
 *                       dotAll:
 *                         type: boolean
 *                         title: dotAll
 *                         description: The $eq's dotall.
 *                       __@match@1128:
 *                         type: object
 *                         description: The $eq's   @match@1128.
 *                       __@replace@1130:
 *                         type: object
 *                         description: The $eq's   @replace@1130.
 *                       __@search@1133:
 *                         type: object
 *                         description: The $eq's   @search@1133.
 *                       __@split@1135:
 *                         type: object
 *                         description: The $eq's   @split@1135.
 *                       __@matchAll@1137:
 *                         type: object
 *                         description: The $eq's   @matchall@1137.
 *         $ne:
 *           oneOf:
 *             - type: string
 *               title: $ne
 *               description: The created at's $ne.
 *             - type: object
 *               description: The created at's $ne.
 *               x-schemaName: RegExp
 *               required:
 *                 - exec
 *                 - test
 *                 - source
 *                 - global
 *                 - ignoreCase
 *                 - multiline
 *                 - lastIndex
 *                 - flags
 *                 - sticky
 *                 - unicode
 *                 - dotAll
 *                 - __@match@1128
 *                 - __@replace@1130
 *                 - __@search@1133
 *                 - __@matchAll@1137
 *               properties:
 *                 exec:
 *                   type: object
 *                   description: The $ne's exec.
 *                 test:
 *                   type: object
 *                   description: The $ne's test.
 *                 source:
 *                   type: string
 *                   title: source
 *                   description: The $ne's source.
 *                 global:
 *                   type: boolean
 *                   title: global
 *                   description: The $ne's global.
 *                 ignoreCase:
 *                   type: boolean
 *                   title: ignoreCase
 *                   description: The $ne's ignorecase.
 *                 multiline:
 *                   type: boolean
 *                   title: multiline
 *                   description: The $ne's multiline.
 *                 lastIndex:
 *                   type: number
 *                   title: lastIndex
 *                   description: The $ne's lastindex.
 *                 compile:
 *                   type: object
 *                   description: The $ne's compile.
 *                 flags:
 *                   type: string
 *                   title: flags
 *                   description: The $ne's flags.
 *                 sticky:
 *                   type: boolean
 *                   title: sticky
 *                   description: The $ne's sticky.
 *                 unicode:
 *                   type: boolean
 *                   title: unicode
 *                   description: The $ne's unicode.
 *                 dotAll:
 *                   type: boolean
 *                   title: dotAll
 *                   description: The $ne's dotall.
 *                 __@match@1128:
 *                   type: object
 *                   description: The $ne's   @match@1128.
 *                 __@replace@1130:
 *                   type: object
 *                   description: The $ne's   @replace@1130.
 *                 __@search@1133:
 *                   type: object
 *                   description: The $ne's   @search@1133.
 *                 __@split@1135:
 *                   type: object
 *                   description: The $ne's   @split@1135.
 *                 __@matchAll@1137:
 *                   type: object
 *                   description: The $ne's   @matchall@1137.
 *         $in:
 *           type: array
 *           description: The created at's $in.
 *           items:
 *             oneOf:
 *               - type: string
 *                 title: $in
 *                 description: The $in's details.
 *               - type: object
 *                 description: The $in's details.
 *                 x-schemaName: RegExp
 *                 required:
 *                   - exec
 *                   - test
 *                   - source
 *                   - global
 *                   - ignoreCase
 *                   - multiline
 *                   - lastIndex
 *                   - flags
 *                   - sticky
 *                   - unicode
 *                   - dotAll
 *                   - __@match@1128
 *                   - __@replace@1130
 *                   - __@search@1133
 *                   - __@matchAll@1137
 *                 properties:
 *                   exec:
 *                     type: object
 *                     description: The $in's exec.
 *                   test:
 *                     type: object
 *                     description: The $in's test.
 *                   source:
 *                     type: string
 *                     title: source
 *                     description: The $in's source.
 *                   global:
 *                     type: boolean
 *                     title: global
 *                     description: The $in's global.
 *                   ignoreCase:
 *                     type: boolean
 *                     title: ignoreCase
 *                     description: The $in's ignorecase.
 *                   multiline:
 *                     type: boolean
 *                     title: multiline
 *                     description: The $in's multiline.
 *                   lastIndex:
 *                     type: number
 *                     title: lastIndex
 *                     description: The $in's lastindex.
 *                   compile:
 *                     type: object
 *                     description: The $in's compile.
 *                   flags:
 *                     type: string
 *                     title: flags
 *                     description: The $in's flags.
 *                   sticky:
 *                     type: boolean
 *                     title: sticky
 *                     description: The $in's sticky.
 *                   unicode:
 *                     type: boolean
 *                     title: unicode
 *                     description: The $in's unicode.
 *                   dotAll:
 *                     type: boolean
 *                     title: dotAll
 *                     description: The $in's dotall.
 *                   __@match@1128:
 *                     type: object
 *                     description: The $in's   @match@1128.
 *                   __@replace@1130:
 *                     type: object
 *                     description: The $in's   @replace@1130.
 *                   __@search@1133:
 *                     type: object
 *                     description: The $in's   @search@1133.
 *                   __@split@1135:
 *                     type: object
 *                     description: The $in's   @split@1135.
 *                   __@matchAll@1137:
 *                     type: object
 *                     description: The $in's   @matchall@1137.
 *         $nin:
 *           type: array
 *           description: The created at's $nin.
 *           items:
 *             oneOf:
 *               - type: string
 *                 title: $nin
 *                 description: The $nin's details.
 *               - type: object
 *                 description: The $nin's details.
 *                 x-schemaName: RegExp
 *                 required:
 *                   - exec
 *                   - test
 *                   - source
 *                   - global
 *                   - ignoreCase
 *                   - multiline
 *                   - lastIndex
 *                   - flags
 *                   - sticky
 *                   - unicode
 *                   - dotAll
 *                   - __@match@1128
 *                   - __@replace@1130
 *                   - __@search@1133
 *                   - __@matchAll@1137
 *                 properties:
 *                   exec:
 *                     type: object
 *                     description: The $nin's exec.
 *                   test:
 *                     type: object
 *                     description: The $nin's test.
 *                   source:
 *                     type: string
 *                     title: source
 *                     description: The $nin's source.
 *                   global:
 *                     type: boolean
 *                     title: global
 *                     description: The $nin's global.
 *                   ignoreCase:
 *                     type: boolean
 *                     title: ignoreCase
 *                     description: The $nin's ignorecase.
 *                   multiline:
 *                     type: boolean
 *                     title: multiline
 *                     description: The $nin's multiline.
 *                   lastIndex:
 *                     type: number
 *                     title: lastIndex
 *                     description: The $nin's lastindex.
 *                   compile:
 *                     type: object
 *                     description: The $nin's compile.
 *                   flags:
 *                     type: string
 *                     title: flags
 *                     description: The $nin's flags.
 *                   sticky:
 *                     type: boolean
 *                     title: sticky
 *                     description: The $nin's sticky.
 *                   unicode:
 *                     type: boolean
 *                     title: unicode
 *                     description: The $nin's unicode.
 *                   dotAll:
 *                     type: boolean
 *                     title: dotAll
 *                     description: The $nin's dotall.
 *                   __@match@1128:
 *                     type: object
 *                     description: The $nin's   @match@1128.
 *                   __@replace@1130:
 *                     type: object
 *                     description: The $nin's   @replace@1130.
 *                   __@search@1133:
 *                     type: object
 *                     description: The $nin's   @search@1133.
 *                   __@split@1135:
 *                     type: object
 *                     description: The $nin's   @split@1135.
 *                   __@matchAll@1137:
 *                     type: object
 *                     description: The $nin's   @matchall@1137.
 *         $not:
 *           oneOf:
 *             - type: string
 *               title: $not
 *               description: The created at's $not.
 *             - type: object
 *               description: The created at's $not.
 *               x-schemaName: RegExp
 *               required:
 *                 - exec
 *                 - test
 *                 - source
 *                 - global
 *                 - ignoreCase
 *                 - multiline
 *                 - lastIndex
 *                 - flags
 *                 - sticky
 *                 - unicode
 *                 - dotAll
 *                 - __@match@1128
 *                 - __@replace@1130
 *                 - __@search@1133
 *                 - __@matchAll@1137
 *               properties:
 *                 exec:
 *                   type: object
 *                   description: The $not's exec.
 *                 test:
 *                   type: object
 *                   description: The $not's test.
 *                 source:
 *                   type: string
 *                   title: source
 *                   description: The $not's source.
 *                 global:
 *                   type: boolean
 *                   title: global
 *                   description: The $not's global.
 *                 ignoreCase:
 *                   type: boolean
 *                   title: ignoreCase
 *                   description: The $not's ignorecase.
 *                 multiline:
 *                   type: boolean
 *                   title: multiline
 *                   description: The $not's multiline.
 *                 lastIndex:
 *                   type: number
 *                   title: lastIndex
 *                   description: The $not's lastindex.
 *                 compile:
 *                   type: object
 *                   description: The $not's compile.
 *                 flags:
 *                   type: string
 *                   title: flags
 *                   description: The $not's flags.
 *                 sticky:
 *                   type: boolean
 *                   title: sticky
 *                   description: The $not's sticky.
 *                 unicode:
 *                   type: boolean
 *                   title: unicode
 *                   description: The $not's unicode.
 *                 dotAll:
 *                   type: boolean
 *                   title: dotAll
 *                   description: The $not's dotall.
 *                 __@match@1128:
 *                   type: object
 *                   description: The $not's   @match@1128.
 *                 __@replace@1130:
 *                   type: object
 *                   description: The $not's   @replace@1130.
 *                 __@search@1133:
 *                   type: object
 *                   description: The $not's   @search@1133.
 *                 __@split@1135:
 *                   type: object
 *                   description: The $not's   @split@1135.
 *                 __@matchAll@1137:
 *                   type: object
 *                   description: The $not's   @matchall@1137.
 *             - type: object
 *               description: The created at's $not.
 *               properties:
 *                 $and:
 *                   type: array
 *                   description: The $not's $and.
 *                   items:
 *                     oneOf:
 *                       - type: string
 *                         title: $and
 *                         description: The $and's details.
 *                       - type: object
 *                         description: The $and's details.
 *                         x-schemaName: RegExp
 *                       - type: object
 *                         description: The $and's details.
 *                       - type: array
 *                         description: The $and's details.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $and
 *                               description: The $and's details.
 *                             - type: object
 *                               description: The $and's details.
 *                               x-schemaName: RegExp
 *                 $or:
 *                   type: array
 *                   description: The $not's $or.
 *                   items:
 *                     oneOf:
 *                       - type: string
 *                         title: $or
 *                         description: The $or's details.
 *                       - type: object
 *                         description: The $or's details.
 *                         x-schemaName: RegExp
 *                       - type: object
 *                         description: The $or's details.
 *                       - type: array
 *                         description: The $or's details.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $or
 *                               description: The $or's details.
 *                             - type: object
 *                               description: The $or's details.
 *                               x-schemaName: RegExp
 *                 $eq:
 *                   oneOf:
 *                     - type: string
 *                       title: $eq
 *                       description: The $not's $eq.
 *                     - type: object
 *                       description: The $not's $eq.
 *                       x-schemaName: RegExp
 *                     - type: array
 *                       description: The $not's $eq.
 *                       items:
 *                         oneOf:
 *                           - type: string
 *                             title: $eq
 *                             description: The $eq's details.
 *                           - type: object
 *                             description: The $eq's details.
 *                             x-schemaName: RegExp
 *                 $ne:
 *                   oneOf:
 *                     - type: string
 *                       title: $ne
 *                       description: The $not's $ne.
 *                     - type: object
 *                       description: The $not's $ne.
 *                       x-schemaName: RegExp
 *                 $in:
 *                   type: array
 *                   description: The $not's $in.
 *                   items:
 *                     oneOf:
 *                       - type: string
 *                         title: $in
 *                         description: The $in's details.
 *                       - type: object
 *                         description: The $in's details.
 *                         x-schemaName: RegExp
 *                 $nin:
 *                   type: array
 *                   description: The $not's $nin.
 *                   items:
 *                     oneOf:
 *                       - type: string
 *                         title: $nin
 *                         description: The $nin's details.
 *                       - type: object
 *                         description: The $nin's details.
 *                         x-schemaName: RegExp
 *                 $not:
 *                   oneOf:
 *                     - type: string
 *                       title: $not
 *                       description: The $not's details.
 *                     - type: object
 *                       description: The $not's details.
 *                       x-schemaName: RegExp
 *                     - type: object
 *                       description: The $not's details.
 *                     - type: array
 *                       description: The $not's details.
 *                       items:
 *                         oneOf:
 *                           - type: string
 *                             title: $not
 *                             description: The $not's details.
 *                           - type: object
 *                             description: The $not's details.
 *                             x-schemaName: RegExp
 *                 $gt:
 *                   oneOf:
 *                     - type: string
 *                       title: $gt
 *                       description: The $not's $gt.
 *                     - type: object
 *                       description: The $not's $gt.
 *                       x-schemaName: RegExp
 *                 $gte:
 *                   oneOf:
 *                     - type: string
 *                       title: $gte
 *                       description: The $not's $gte.
 *                     - type: object
 *                       description: The $not's $gte.
 *                       x-schemaName: RegExp
 *                 $lt:
 *                   oneOf:
 *                     - type: string
 *                       title: $lt
 *                       description: The $not's $lt.
 *                     - type: object
 *                       description: The $not's $lt.
 *                       x-schemaName: RegExp
 *                 $lte:
 *                   oneOf:
 *                     - type: string
 *                       title: $lte
 *                       description: The $not's $lte.
 *                     - type: object
 *                       description: The $not's $lte.
 *                       x-schemaName: RegExp
 *                 $like:
 *                   type: string
 *                   title: $like
 *                   description: The $not's $like.
 *                 $re:
 *                   type: string
 *                   title: $re
 *                   description: The $not's $re.
 *                 $ilike:
 *                   type: string
 *                   title: $ilike
 *                   description: The $not's $ilike.
 *                 $fulltext:
 *                   type: string
 *                   title: $fulltext
 *                   description: The $not's $fulltext.
 *                 $overlap:
 *                   type: array
 *                   description: The $not's $overlap.
 *                   items:
 *                     type: string
 *                     title: $overlap
 *                     description: The $overlap's details.
 *                 $contains:
 *                   type: array
 *                   description: The $not's $contains.
 *                   items:
 *                     type: string
 *                     title: $contains
 *                     description: The $contain's $contains.
 *                 $contained:
 *                   type: array
 *                   description: The $not's $contained.
 *                   items:
 *                     type: string
 *                     title: $contained
 *                     description: The $contained's details.
 *                 $exists:
 *                   type: boolean
 *                   title: $exists
 *                   description: The $not's $exists.
 *             - type: array
 *               description: The created at's $not.
 *               items:
 *                 oneOf:
 *                   - type: string
 *                     title: $not
 *                     description: The $not's details.
 *                   - type: object
 *                     description: The $not's details.
 *                     x-schemaName: RegExp
 *                     required:
 *                       - exec
 *                       - test
 *                       - source
 *                       - global
 *                       - ignoreCase
 *                       - multiline
 *                       - lastIndex
 *                       - flags
 *                       - sticky
 *                       - unicode
 *                       - dotAll
 *                       - __@match@1128
 *                       - __@replace@1130
 *                       - __@search@1133
 *                       - __@matchAll@1137
 *                     properties:
 *                       exec:
 *                         type: object
 *                         description: The $not's exec.
 *                       test:
 *                         type: object
 *                         description: The $not's test.
 *                       source:
 *                         type: string
 *                         title: source
 *                         description: The $not's source.
 *                       global:
 *                         type: boolean
 *                         title: global
 *                         description: The $not's global.
 *                       ignoreCase:
 *                         type: boolean
 *                         title: ignoreCase
 *                         description: The $not's ignorecase.
 *                       multiline:
 *                         type: boolean
 *                         title: multiline
 *                         description: The $not's multiline.
 *                       lastIndex:
 *                         type: number
 *                         title: lastIndex
 *                         description: The $not's lastindex.
 *                       compile:
 *                         type: object
 *                         description: The $not's compile.
 *                       flags:
 *                         type: string
 *                         title: flags
 *                         description: The $not's flags.
 *                       sticky:
 *                         type: boolean
 *                         title: sticky
 *                         description: The $not's sticky.
 *                       unicode:
 *                         type: boolean
 *                         title: unicode
 *                         description: The $not's unicode.
 *                       dotAll:
 *                         type: boolean
 *                         title: dotAll
 *                         description: The $not's dotall.
 *                       __@match@1128:
 *                         type: object
 *                         description: The $not's   @match@1128.
 *                       __@replace@1130:
 *                         type: object
 *                         description: The $not's   @replace@1130.
 *                       __@search@1133:
 *                         type: object
 *                         description: The $not's   @search@1133.
 *                       __@split@1135:
 *                         type: object
 *                         description: The $not's   @split@1135.
 *                       __@matchAll@1137:
 *                         type: object
 *                         description: The $not's   @matchall@1137.
 *         $gt:
 *           oneOf:
 *             - type: string
 *               title: $gt
 *               description: The created at's $gt.
 *             - type: object
 *               description: The created at's $gt.
 *               x-schemaName: RegExp
 *               required:
 *                 - exec
 *                 - test
 *                 - source
 *                 - global
 *                 - ignoreCase
 *                 - multiline
 *                 - lastIndex
 *                 - flags
 *                 - sticky
 *                 - unicode
 *                 - dotAll
 *                 - __@match@1128
 *                 - __@replace@1130
 *                 - __@search@1133
 *                 - __@matchAll@1137
 *               properties:
 *                 exec:
 *                   type: object
 *                   description: The $gt's exec.
 *                 test:
 *                   type: object
 *                   description: The $gt's test.
 *                 source:
 *                   type: string
 *                   title: source
 *                   description: The $gt's source.
 *                 global:
 *                   type: boolean
 *                   title: global
 *                   description: The $gt's global.
 *                 ignoreCase:
 *                   type: boolean
 *                   title: ignoreCase
 *                   description: The $gt's ignorecase.
 *                 multiline:
 *                   type: boolean
 *                   title: multiline
 *                   description: The $gt's multiline.
 *                 lastIndex:
 *                   type: number
 *                   title: lastIndex
 *                   description: The $gt's lastindex.
 *                 compile:
 *                   type: object
 *                   description: The $gt's compile.
 *                 flags:
 *                   type: string
 *                   title: flags
 *                   description: The $gt's flags.
 *                 sticky:
 *                   type: boolean
 *                   title: sticky
 *                   description: The $gt's sticky.
 *                 unicode:
 *                   type: boolean
 *                   title: unicode
 *                   description: The $gt's unicode.
 *                 dotAll:
 *                   type: boolean
 *                   title: dotAll
 *                   description: The $gt's dotall.
 *                 __@match@1128:
 *                   type: object
 *                   description: The $gt's   @match@1128.
 *                 __@replace@1130:
 *                   type: object
 *                   description: The $gt's   @replace@1130.
 *                 __@search@1133:
 *                   type: object
 *                   description: The $gt's   @search@1133.
 *                 __@split@1135:
 *                   type: object
 *                   description: The $gt's   @split@1135.
 *                 __@matchAll@1137:
 *                   type: object
 *                   description: The $gt's   @matchall@1137.
 *         $gte:
 *           oneOf:
 *             - type: string
 *               title: $gte
 *               description: The created at's $gte.
 *             - type: object
 *               description: The created at's $gte.
 *               x-schemaName: RegExp
 *               required:
 *                 - exec
 *                 - test
 *                 - source
 *                 - global
 *                 - ignoreCase
 *                 - multiline
 *                 - lastIndex
 *                 - flags
 *                 - sticky
 *                 - unicode
 *                 - dotAll
 *                 - __@match@1128
 *                 - __@replace@1130
 *                 - __@search@1133
 *                 - __@matchAll@1137
 *               properties:
 *                 exec:
 *                   type: object
 *                   description: The $gte's exec.
 *                 test:
 *                   type: object
 *                   description: The $gte's test.
 *                 source:
 *                   type: string
 *                   title: source
 *                   description: The $gte's source.
 *                 global:
 *                   type: boolean
 *                   title: global
 *                   description: The $gte's global.
 *                 ignoreCase:
 *                   type: boolean
 *                   title: ignoreCase
 *                   description: The $gte's ignorecase.
 *                 multiline:
 *                   type: boolean
 *                   title: multiline
 *                   description: The $gte's multiline.
 *                 lastIndex:
 *                   type: number
 *                   title: lastIndex
 *                   description: The $gte's lastindex.
 *                 compile:
 *                   type: object
 *                   description: The $gte's compile.
 *                 flags:
 *                   type: string
 *                   title: flags
 *                   description: The $gte's flags.
 *                 sticky:
 *                   type: boolean
 *                   title: sticky
 *                   description: The $gte's sticky.
 *                 unicode:
 *                   type: boolean
 *                   title: unicode
 *                   description: The $gte's unicode.
 *                 dotAll:
 *                   type: boolean
 *                   title: dotAll
 *                   description: The $gte's dotall.
 *                 __@match@1128:
 *                   type: object
 *                   description: The $gte's   @match@1128.
 *                 __@replace@1130:
 *                   type: object
 *                   description: The $gte's   @replace@1130.
 *                 __@search@1133:
 *                   type: object
 *                   description: The $gte's   @search@1133.
 *                 __@split@1135:
 *                   type: object
 *                   description: The $gte's   @split@1135.
 *                 __@matchAll@1137:
 *                   type: object
 *                   description: The $gte's   @matchall@1137.
 *         $lt:
 *           oneOf:
 *             - type: string
 *               title: $lt
 *               description: The created at's $lt.
 *             - type: object
 *               description: The created at's $lt.
 *               x-schemaName: RegExp
 *               required:
 *                 - exec
 *                 - test
 *                 - source
 *                 - global
 *                 - ignoreCase
 *                 - multiline
 *                 - lastIndex
 *                 - flags
 *                 - sticky
 *                 - unicode
 *                 - dotAll
 *                 - __@match@1128
 *                 - __@replace@1130
 *                 - __@search@1133
 *                 - __@matchAll@1137
 *               properties:
 *                 exec:
 *                   type: object
 *                   description: The $lt's exec.
 *                 test:
 *                   type: object
 *                   description: The $lt's test.
 *                 source:
 *                   type: string
 *                   title: source
 *                   description: The $lt's source.
 *                 global:
 *                   type: boolean
 *                   title: global
 *                   description: The $lt's global.
 *                 ignoreCase:
 *                   type: boolean
 *                   title: ignoreCase
 *                   description: The $lt's ignorecase.
 *                 multiline:
 *                   type: boolean
 *                   title: multiline
 *                   description: The $lt's multiline.
 *                 lastIndex:
 *                   type: number
 *                   title: lastIndex
 *                   description: The $lt's lastindex.
 *                 compile:
 *                   type: object
 *                   description: The $lt's compile.
 *                 flags:
 *                   type: string
 *                   title: flags
 *                   description: The $lt's flags.
 *                 sticky:
 *                   type: boolean
 *                   title: sticky
 *                   description: The $lt's sticky.
 *                 unicode:
 *                   type: boolean
 *                   title: unicode
 *                   description: The $lt's unicode.
 *                 dotAll:
 *                   type: boolean
 *                   title: dotAll
 *                   description: The $lt's dotall.
 *                 __@match@1128:
 *                   type: object
 *                   description: The $lt's   @match@1128.
 *                 __@replace@1130:
 *                   type: object
 *                   description: The $lt's   @replace@1130.
 *                 __@search@1133:
 *                   type: object
 *                   description: The $lt's   @search@1133.
 *                 __@split@1135:
 *                   type: object
 *                   description: The $lt's   @split@1135.
 *                 __@matchAll@1137:
 *                   type: object
 *                   description: The $lt's   @matchall@1137.
 *         $lte:
 *           oneOf:
 *             - type: string
 *               title: $lte
 *               description: The created at's $lte.
 *             - type: object
 *               description: The created at's $lte.
 *               x-schemaName: RegExp
 *               required:
 *                 - exec
 *                 - test
 *                 - source
 *                 - global
 *                 - ignoreCase
 *                 - multiline
 *                 - lastIndex
 *                 - flags
 *                 - sticky
 *                 - unicode
 *                 - dotAll
 *                 - __@match@1128
 *                 - __@replace@1130
 *                 - __@search@1133
 *                 - __@matchAll@1137
 *               properties:
 *                 exec:
 *                   type: object
 *                   description: The $lte's exec.
 *                 test:
 *                   type: object
 *                   description: The $lte's test.
 *                 source:
 *                   type: string
 *                   title: source
 *                   description: The $lte's source.
 *                 global:
 *                   type: boolean
 *                   title: global
 *                   description: The $lte's global.
 *                 ignoreCase:
 *                   type: boolean
 *                   title: ignoreCase
 *                   description: The $lte's ignorecase.
 *                 multiline:
 *                   type: boolean
 *                   title: multiline
 *                   description: The $lte's multiline.
 *                 lastIndex:
 *                   type: number
 *                   title: lastIndex
 *                   description: The $lte's lastindex.
 *                 compile:
 *                   type: object
 *                   description: The $lte's compile.
 *                 flags:
 *                   type: string
 *                   title: flags
 *                   description: The $lte's flags.
 *                 sticky:
 *                   type: boolean
 *                   title: sticky
 *                   description: The $lte's sticky.
 *                 unicode:
 *                   type: boolean
 *                   title: unicode
 *                   description: The $lte's unicode.
 *                 dotAll:
 *                   type: boolean
 *                   title: dotAll
 *                   description: The $lte's dotall.
 *                 __@match@1128:
 *                   type: object
 *                   description: The $lte's   @match@1128.
 *                 __@replace@1130:
 *                   type: object
 *                   description: The $lte's   @replace@1130.
 *                 __@search@1133:
 *                   type: object
 *                   description: The $lte's   @search@1133.
 *                 __@split@1135:
 *                   type: object
 *                   description: The $lte's   @split@1135.
 *                 __@matchAll@1137:
 *                   type: object
 *                   description: The $lte's   @matchall@1137.
 *         $like:
 *           type: string
 *           title: $like
 *           description: The created at's $like.
 *         $re:
 *           type: string
 *           title: $re
 *           description: The created at's $re.
 *         $ilike:
 *           type: string
 *           title: $ilike
 *           description: The created at's $ilike.
 *         $fulltext:
 *           type: string
 *           title: $fulltext
 *           description: The created at's $fulltext.
 *         $overlap:
 *           type: array
 *           description: The created at's $overlap.
 *           items:
 *             type: string
 *             title: $overlap
 *             description: The $overlap's details.
 *         $contains:
 *           type: array
 *           description: The created at's $contains.
 *           items:
 *             type: string
 *             title: $contains
 *             description: The $contain's $contains.
 *         $contained:
 *           type: array
 *           description: The created at's $contained.
 *           items:
 *             type: string
 *             title: $contained
 *             description: The $contained's details.
 *         $exists:
 *           type: boolean
 *           title: $exists
 *           description: The created at's $exists.
 *   - name: updated_at
 *     in: query
 *     description: The product's updated at.
 *     required: false
 *     schema:
 *       type: object
 *       description: The product's updated at.
 *       properties:
 *         $and:
 *           type: array
 *           description: The updated at's $and.
 *           items:
 *             oneOf:
 *               - type: string
 *                 title: $and
 *                 description: The $and's details.
 *               - type: object
 *                 description: The $and's details.
 *                 x-schemaName: RegExp
 *                 required:
 *                   - exec
 *                   - test
 *                   - source
 *                   - global
 *                   - ignoreCase
 *                   - multiline
 *                   - lastIndex
 *                   - flags
 *                   - sticky
 *                   - unicode
 *                   - dotAll
 *                   - __@match@1128
 *                   - __@replace@1130
 *                   - __@search@1133
 *                   - __@matchAll@1137
 *                 properties:
 *                   exec:
 *                     type: object
 *                     description: The $and's exec.
 *                   test:
 *                     type: object
 *                     description: The $and's test.
 *                   source:
 *                     type: string
 *                     title: source
 *                     description: The $and's source.
 *                   global:
 *                     type: boolean
 *                     title: global
 *                     description: The $and's global.
 *                   ignoreCase:
 *                     type: boolean
 *                     title: ignoreCase
 *                     description: The $and's ignorecase.
 *                   multiline:
 *                     type: boolean
 *                     title: multiline
 *                     description: The $and's multiline.
 *                   lastIndex:
 *                     type: number
 *                     title: lastIndex
 *                     description: The $and's lastindex.
 *                   compile:
 *                     type: object
 *                     description: The $and's compile.
 *                   flags:
 *                     type: string
 *                     title: flags
 *                     description: The $and's flags.
 *                   sticky:
 *                     type: boolean
 *                     title: sticky
 *                     description: The $and's sticky.
 *                   unicode:
 *                     type: boolean
 *                     title: unicode
 *                     description: The $and's unicode.
 *                   dotAll:
 *                     type: boolean
 *                     title: dotAll
 *                     description: The $and's dotall.
 *                   __@match@1128:
 *                     type: object
 *                     description: The $and's   @match@1128.
 *                   __@replace@1130:
 *                     type: object
 *                     description: The $and's   @replace@1130.
 *                   __@search@1133:
 *                     type: object
 *                     description: The $and's   @search@1133.
 *                   __@split@1135:
 *                     type: object
 *                     description: The $and's   @split@1135.
 *                   __@matchAll@1137:
 *                     type: object
 *                     description: The $and's   @matchall@1137.
 *               - type: object
 *                 description: The $and's details.
 *                 properties:
 *                   $and:
 *                     type: array
 *                     description: The $and's details.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $and
 *                           description: The $and's details.
 *                         - type: object
 *                           description: The $and's details.
 *                           x-schemaName: RegExp
 *                         - type: object
 *                           description: The $and's details.
 *                         - type: array
 *                           description: The $and's details.
 *                           items:
 *                             oneOf:
 *                               - type: string
 *                                 title: $and
 *                                 description: The $and's details.
 *                               - type: object
 *                                 description: The $and's details.
 *                                 x-schemaName: RegExp
 *                   $or:
 *                     type: array
 *                     description: The $and's $or.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $or
 *                           description: The $or's details.
 *                         - type: object
 *                           description: The $or's details.
 *                           x-schemaName: RegExp
 *                         - type: object
 *                           description: The $or's details.
 *                         - type: array
 *                           description: The $or's details.
 *                           items:
 *                             oneOf:
 *                               - type: string
 *                                 title: $or
 *                                 description: The $or's details.
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: RegExp
 *                   $eq:
 *                     oneOf:
 *                       - type: string
 *                         title: $eq
 *                         description: The $and's $eq.
 *                       - type: object
 *                         description: The $and's $eq.
 *                         x-schemaName: RegExp
 *                       - type: array
 *                         description: The $and's $eq.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $eq
 *                               description: The $eq's details.
 *                             - type: object
 *                               description: The $eq's details.
 *                               x-schemaName: RegExp
 *                   $ne:
 *                     oneOf:
 *                       - type: string
 *                         title: $ne
 *                         description: The $and's $ne.
 *                       - type: object
 *                         description: The $and's $ne.
 *                         x-schemaName: RegExp
 *                   $in:
 *                     type: array
 *                     description: The $and's $in.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $in
 *                           description: The $in's details.
 *                         - type: object
 *                           description: The $in's details.
 *                           x-schemaName: RegExp
 *                   $nin:
 *                     type: array
 *                     description: The $and's $nin.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $nin
 *                           description: The $nin's details.
 *                         - type: object
 *                           description: The $nin's details.
 *                           x-schemaName: RegExp
 *                   $not:
 *                     oneOf:
 *                       - type: string
 *                         title: $not
 *                         description: The $and's $not.
 *                       - type: object
 *                         description: The $and's $not.
 *                         x-schemaName: RegExp
 *                       - type: object
 *                         description: The $and's $not.
 *                       - type: array
 *                         description: The $and's $not.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $not
 *                               description: The $not's details.
 *                             - type: object
 *                               description: The $not's details.
 *                               x-schemaName: RegExp
 *                   $gt:
 *                     oneOf:
 *                       - type: string
 *                         title: $gt
 *                         description: The $and's $gt.
 *                       - type: object
 *                         description: The $and's $gt.
 *                         x-schemaName: RegExp
 *                   $gte:
 *                     oneOf:
 *                       - type: string
 *                         title: $gte
 *                         description: The $and's $gte.
 *                       - type: object
 *                         description: The $and's $gte.
 *                         x-schemaName: RegExp
 *                   $lt:
 *                     oneOf:
 *                       - type: string
 *                         title: $lt
 *                         description: The $and's $lt.
 *                       - type: object
 *                         description: The $and's $lt.
 *                         x-schemaName: RegExp
 *                   $lte:
 *                     oneOf:
 *                       - type: string
 *                         title: $lte
 *                         description: The $and's $lte.
 *                       - type: object
 *                         description: The $and's $lte.
 *                         x-schemaName: RegExp
 *                   $like:
 *                     type: string
 *                     title: $like
 *                     description: The $and's $like.
 *                   $re:
 *                     type: string
 *                     title: $re
 *                     description: The $and's $re.
 *                   $ilike:
 *                     type: string
 *                     title: $ilike
 *                     description: The $and's $ilike.
 *                   $fulltext:
 *                     type: string
 *                     title: $fulltext
 *                     description: The $and's $fulltext.
 *                   $overlap:
 *                     type: array
 *                     description: The $and's $overlap.
 *                     items:
 *                       type: string
 *                       title: $overlap
 *                       description: The $overlap's details.
 *                   $contains:
 *                     type: array
 *                     description: The $and's $contains.
 *                     items:
 *                       type: string
 *                       title: $contains
 *                       description: The $contain's $contains.
 *                   $contained:
 *                     type: array
 *                     description: The $and's $contained.
 *                     items:
 *                       type: string
 *                       title: $contained
 *                       description: The $contained's details.
 *                   $exists:
 *                     type: boolean
 *                     title: $exists
 *                     description: The $and's $exists.
 *               - type: array
 *                 description: The $and's details.
 *                 items:
 *                   oneOf:
 *                     - type: string
 *                       title: $and
 *                       description: The $and's details.
 *                     - type: object
 *                       description: The $and's details.
 *                       x-schemaName: RegExp
 *                       required:
 *                         - exec
 *                         - test
 *                         - source
 *                         - global
 *                         - ignoreCase
 *                         - multiline
 *                         - lastIndex
 *                         - flags
 *                         - sticky
 *                         - unicode
 *                         - dotAll
 *                         - __@match@1128
 *                         - __@replace@1130
 *                         - __@search@1133
 *                         - __@matchAll@1137
 *                       properties:
 *                         exec:
 *                           type: object
 *                           description: The $and's exec.
 *                         test:
 *                           type: object
 *                           description: The $and's test.
 *                         source:
 *                           type: string
 *                           title: source
 *                           description: The $and's source.
 *                         global:
 *                           type: boolean
 *                           title: global
 *                           description: The $and's global.
 *                         ignoreCase:
 *                           type: boolean
 *                           title: ignoreCase
 *                           description: The $and's ignorecase.
 *                         multiline:
 *                           type: boolean
 *                           title: multiline
 *                           description: The $and's multiline.
 *                         lastIndex:
 *                           type: number
 *                           title: lastIndex
 *                           description: The $and's lastindex.
 *                         compile:
 *                           type: object
 *                           description: The $and's compile.
 *                         flags:
 *                           type: string
 *                           title: flags
 *                           description: The $and's flags.
 *                         sticky:
 *                           type: boolean
 *                           title: sticky
 *                           description: The $and's sticky.
 *                         unicode:
 *                           type: boolean
 *                           title: unicode
 *                           description: The $and's unicode.
 *                         dotAll:
 *                           type: boolean
 *                           title: dotAll
 *                           description: The $and's dotall.
 *                         __@match@1128:
 *                           type: object
 *                           description: The $and's   @match@1128.
 *                         __@replace@1130:
 *                           type: object
 *                           description: The $and's   @replace@1130.
 *                         __@search@1133:
 *                           type: object
 *                           description: The $and's   @search@1133.
 *                         __@split@1135:
 *                           type: object
 *                           description: The $and's   @split@1135.
 *                         __@matchAll@1137:
 *                           type: object
 *                           description: The $and's   @matchall@1137.
 *         $or:
 *           type: array
 *           description: The updated at's $or.
 *           items:
 *             oneOf:
 *               - type: string
 *                 title: $or
 *                 description: The $or's details.
 *               - type: object
 *                 description: The $or's details.
 *                 x-schemaName: RegExp
 *                 required:
 *                   - exec
 *                   - test
 *                   - source
 *                   - global
 *                   - ignoreCase
 *                   - multiline
 *                   - lastIndex
 *                   - flags
 *                   - sticky
 *                   - unicode
 *                   - dotAll
 *                   - __@match@1128
 *                   - __@replace@1130
 *                   - __@search@1133
 *                   - __@matchAll@1137
 *                 properties:
 *                   exec:
 *                     type: object
 *                     description: The $or's exec.
 *                   test:
 *                     type: object
 *                     description: The $or's test.
 *                   source:
 *                     type: string
 *                     title: source
 *                     description: The $or's source.
 *                   global:
 *                     type: boolean
 *                     title: global
 *                     description: The $or's global.
 *                   ignoreCase:
 *                     type: boolean
 *                     title: ignoreCase
 *                     description: The $or's ignorecase.
 *                   multiline:
 *                     type: boolean
 *                     title: multiline
 *                     description: The $or's multiline.
 *                   lastIndex:
 *                     type: number
 *                     title: lastIndex
 *                     description: The $or's lastindex.
 *                   compile:
 *                     type: object
 *                     description: The $or's compile.
 *                   flags:
 *                     type: string
 *                     title: flags
 *                     description: The $or's flags.
 *                   sticky:
 *                     type: boolean
 *                     title: sticky
 *                     description: The $or's sticky.
 *                   unicode:
 *                     type: boolean
 *                     title: unicode
 *                     description: The $or's unicode.
 *                   dotAll:
 *                     type: boolean
 *                     title: dotAll
 *                     description: The $or's dotall.
 *                   __@match@1128:
 *                     type: object
 *                     description: The $or's   @match@1128.
 *                   __@replace@1130:
 *                     type: object
 *                     description: The $or's   @replace@1130.
 *                   __@search@1133:
 *                     type: object
 *                     description: The $or's   @search@1133.
 *                   __@split@1135:
 *                     type: object
 *                     description: The $or's   @split@1135.
 *                   __@matchAll@1137:
 *                     type: object
 *                     description: The $or's   @matchall@1137.
 *               - type: object
 *                 description: The $or's details.
 *                 properties:
 *                   $and:
 *                     type: array
 *                     description: The $or's $and.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $and
 *                           description: The $and's details.
 *                         - type: object
 *                           description: The $and's details.
 *                           x-schemaName: RegExp
 *                         - type: object
 *                           description: The $and's details.
 *                         - type: array
 *                           description: The $and's details.
 *                           items:
 *                             oneOf:
 *                               - type: string
 *                                 title: $and
 *                                 description: The $and's details.
 *                               - type: object
 *                                 description: The $and's details.
 *                                 x-schemaName: RegExp
 *                   $or:
 *                     type: array
 *                     description: The $or's details.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $or
 *                           description: The $or's details.
 *                         - type: object
 *                           description: The $or's details.
 *                           x-schemaName: RegExp
 *                         - type: object
 *                           description: The $or's details.
 *                         - type: array
 *                           description: The $or's details.
 *                           items:
 *                             oneOf:
 *                               - type: string
 *                                 title: $or
 *                                 description: The $or's details.
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: RegExp
 *                   $eq:
 *                     oneOf:
 *                       - type: string
 *                         title: $eq
 *                         description: The $or's $eq.
 *                       - type: object
 *                         description: The $or's $eq.
 *                         x-schemaName: RegExp
 *                       - type: array
 *                         description: The $or's $eq.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $eq
 *                               description: The $eq's details.
 *                             - type: object
 *                               description: The $eq's details.
 *                               x-schemaName: RegExp
 *                   $ne:
 *                     oneOf:
 *                       - type: string
 *                         title: $ne
 *                         description: The $or's $ne.
 *                       - type: object
 *                         description: The $or's $ne.
 *                         x-schemaName: RegExp
 *                   $in:
 *                     type: array
 *                     description: The $or's $in.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $in
 *                           description: The $in's details.
 *                         - type: object
 *                           description: The $in's details.
 *                           x-schemaName: RegExp
 *                   $nin:
 *                     type: array
 *                     description: The $or's $nin.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $nin
 *                           description: The $nin's details.
 *                         - type: object
 *                           description: The $nin's details.
 *                           x-schemaName: RegExp
 *                   $not:
 *                     oneOf:
 *                       - type: string
 *                         title: $not
 *                         description: The $or's $not.
 *                       - type: object
 *                         description: The $or's $not.
 *                         x-schemaName: RegExp
 *                       - type: object
 *                         description: The $or's $not.
 *                       - type: array
 *                         description: The $or's $not.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $not
 *                               description: The $not's details.
 *                             - type: object
 *                               description: The $not's details.
 *                               x-schemaName: RegExp
 *                   $gt:
 *                     oneOf:
 *                       - type: string
 *                         title: $gt
 *                         description: The $or's $gt.
 *                       - type: object
 *                         description: The $or's $gt.
 *                         x-schemaName: RegExp
 *                   $gte:
 *                     oneOf:
 *                       - type: string
 *                         title: $gte
 *                         description: The $or's $gte.
 *                       - type: object
 *                         description: The $or's $gte.
 *                         x-schemaName: RegExp
 *                   $lt:
 *                     oneOf:
 *                       - type: string
 *                         title: $lt
 *                         description: The $or's $lt.
 *                       - type: object
 *                         description: The $or's $lt.
 *                         x-schemaName: RegExp
 *                   $lte:
 *                     oneOf:
 *                       - type: string
 *                         title: $lte
 *                         description: The $or's $lte.
 *                       - type: object
 *                         description: The $or's $lte.
 *                         x-schemaName: RegExp
 *                   $like:
 *                     type: string
 *                     title: $like
 *                     description: The $or's $like.
 *                   $re:
 *                     type: string
 *                     title: $re
 *                     description: The $or's $re.
 *                   $ilike:
 *                     type: string
 *                     title: $ilike
 *                     description: The $or's $ilike.
 *                   $fulltext:
 *                     type: string
 *                     title: $fulltext
 *                     description: The $or's $fulltext.
 *                   $overlap:
 *                     type: array
 *                     description: The $or's $overlap.
 *                     items:
 *                       type: string
 *                       title: $overlap
 *                       description: The $overlap's details.
 *                   $contains:
 *                     type: array
 *                     description: The $or's $contains.
 *                     items:
 *                       type: string
 *                       title: $contains
 *                       description: The $contain's $contains.
 *                   $contained:
 *                     type: array
 *                     description: The $or's $contained.
 *                     items:
 *                       type: string
 *                       title: $contained
 *                       description: The $contained's details.
 *                   $exists:
 *                     type: boolean
 *                     title: $exists
 *                     description: The $or's $exists.
 *               - type: array
 *                 description: The $or's details.
 *                 items:
 *                   oneOf:
 *                     - type: string
 *                       title: $or
 *                       description: The $or's details.
 *                     - type: object
 *                       description: The $or's details.
 *                       x-schemaName: RegExp
 *                       required:
 *                         - exec
 *                         - test
 *                         - source
 *                         - global
 *                         - ignoreCase
 *                         - multiline
 *                         - lastIndex
 *                         - flags
 *                         - sticky
 *                         - unicode
 *                         - dotAll
 *                         - __@match@1128
 *                         - __@replace@1130
 *                         - __@search@1133
 *                         - __@matchAll@1137
 *                       properties:
 *                         exec:
 *                           type: object
 *                           description: The $or's exec.
 *                         test:
 *                           type: object
 *                           description: The $or's test.
 *                         source:
 *                           type: string
 *                           title: source
 *                           description: The $or's source.
 *                         global:
 *                           type: boolean
 *                           title: global
 *                           description: The $or's global.
 *                         ignoreCase:
 *                           type: boolean
 *                           title: ignoreCase
 *                           description: The $or's ignorecase.
 *                         multiline:
 *                           type: boolean
 *                           title: multiline
 *                           description: The $or's multiline.
 *                         lastIndex:
 *                           type: number
 *                           title: lastIndex
 *                           description: The $or's lastindex.
 *                         compile:
 *                           type: object
 *                           description: The $or's compile.
 *                         flags:
 *                           type: string
 *                           title: flags
 *                           description: The $or's flags.
 *                         sticky:
 *                           type: boolean
 *                           title: sticky
 *                           description: The $or's sticky.
 *                         unicode:
 *                           type: boolean
 *                           title: unicode
 *                           description: The $or's unicode.
 *                         dotAll:
 *                           type: boolean
 *                           title: dotAll
 *                           description: The $or's dotall.
 *                         __@match@1128:
 *                           type: object
 *                           description: The $or's   @match@1128.
 *                         __@replace@1130:
 *                           type: object
 *                           description: The $or's   @replace@1130.
 *                         __@search@1133:
 *                           type: object
 *                           description: The $or's   @search@1133.
 *                         __@split@1135:
 *                           type: object
 *                           description: The $or's   @split@1135.
 *                         __@matchAll@1137:
 *                           type: object
 *                           description: The $or's   @matchall@1137.
 *         $eq:
 *           oneOf:
 *             - type: string
 *               title: $eq
 *               description: The updated at's $eq.
 *             - type: object
 *               description: The updated at's $eq.
 *               x-schemaName: RegExp
 *               required:
 *                 - exec
 *                 - test
 *                 - source
 *                 - global
 *                 - ignoreCase
 *                 - multiline
 *                 - lastIndex
 *                 - flags
 *                 - sticky
 *                 - unicode
 *                 - dotAll
 *                 - __@match@1128
 *                 - __@replace@1130
 *                 - __@search@1133
 *                 - __@matchAll@1137
 *               properties:
 *                 exec:
 *                   type: object
 *                   description: The $eq's exec.
 *                 test:
 *                   type: object
 *                   description: The $eq's test.
 *                 source:
 *                   type: string
 *                   title: source
 *                   description: The $eq's source.
 *                 global:
 *                   type: boolean
 *                   title: global
 *                   description: The $eq's global.
 *                 ignoreCase:
 *                   type: boolean
 *                   title: ignoreCase
 *                   description: The $eq's ignorecase.
 *                 multiline:
 *                   type: boolean
 *                   title: multiline
 *                   description: The $eq's multiline.
 *                 lastIndex:
 *                   type: number
 *                   title: lastIndex
 *                   description: The $eq's lastindex.
 *                 compile:
 *                   type: object
 *                   description: The $eq's compile.
 *                 flags:
 *                   type: string
 *                   title: flags
 *                   description: The $eq's flags.
 *                 sticky:
 *                   type: boolean
 *                   title: sticky
 *                   description: The $eq's sticky.
 *                 unicode:
 *                   type: boolean
 *                   title: unicode
 *                   description: The $eq's unicode.
 *                 dotAll:
 *                   type: boolean
 *                   title: dotAll
 *                   description: The $eq's dotall.
 *                 __@match@1128:
 *                   type: object
 *                   description: The $eq's   @match@1128.
 *                 __@replace@1130:
 *                   type: object
 *                   description: The $eq's   @replace@1130.
 *                 __@search@1133:
 *                   type: object
 *                   description: The $eq's   @search@1133.
 *                 __@split@1135:
 *                   type: object
 *                   description: The $eq's   @split@1135.
 *                 __@matchAll@1137:
 *                   type: object
 *                   description: The $eq's   @matchall@1137.
 *             - type: array
 *               description: The updated at's $eq.
 *               items:
 *                 oneOf:
 *                   - type: string
 *                     title: $eq
 *                     description: The $eq's details.
 *                   - type: object
 *                     description: The $eq's details.
 *                     x-schemaName: RegExp
 *                     required:
 *                       - exec
 *                       - test
 *                       - source
 *                       - global
 *                       - ignoreCase
 *                       - multiline
 *                       - lastIndex
 *                       - flags
 *                       - sticky
 *                       - unicode
 *                       - dotAll
 *                       - __@match@1128
 *                       - __@replace@1130
 *                       - __@search@1133
 *                       - __@matchAll@1137
 *                     properties:
 *                       exec:
 *                         type: object
 *                         description: The $eq's exec.
 *                       test:
 *                         type: object
 *                         description: The $eq's test.
 *                       source:
 *                         type: string
 *                         title: source
 *                         description: The $eq's source.
 *                       global:
 *                         type: boolean
 *                         title: global
 *                         description: The $eq's global.
 *                       ignoreCase:
 *                         type: boolean
 *                         title: ignoreCase
 *                         description: The $eq's ignorecase.
 *                       multiline:
 *                         type: boolean
 *                         title: multiline
 *                         description: The $eq's multiline.
 *                       lastIndex:
 *                         type: number
 *                         title: lastIndex
 *                         description: The $eq's lastindex.
 *                       compile:
 *                         type: object
 *                         description: The $eq's compile.
 *                       flags:
 *                         type: string
 *                         title: flags
 *                         description: The $eq's flags.
 *                       sticky:
 *                         type: boolean
 *                         title: sticky
 *                         description: The $eq's sticky.
 *                       unicode:
 *                         type: boolean
 *                         title: unicode
 *                         description: The $eq's unicode.
 *                       dotAll:
 *                         type: boolean
 *                         title: dotAll
 *                         description: The $eq's dotall.
 *                       __@match@1128:
 *                         type: object
 *                         description: The $eq's   @match@1128.
 *                       __@replace@1130:
 *                         type: object
 *                         description: The $eq's   @replace@1130.
 *                       __@search@1133:
 *                         type: object
 *                         description: The $eq's   @search@1133.
 *                       __@split@1135:
 *                         type: object
 *                         description: The $eq's   @split@1135.
 *                       __@matchAll@1137:
 *                         type: object
 *                         description: The $eq's   @matchall@1137.
 *         $ne:
 *           oneOf:
 *             - type: string
 *               title: $ne
 *               description: The updated at's $ne.
 *             - type: object
 *               description: The updated at's $ne.
 *               x-schemaName: RegExp
 *               required:
 *                 - exec
 *                 - test
 *                 - source
 *                 - global
 *                 - ignoreCase
 *                 - multiline
 *                 - lastIndex
 *                 - flags
 *                 - sticky
 *                 - unicode
 *                 - dotAll
 *                 - __@match@1128
 *                 - __@replace@1130
 *                 - __@search@1133
 *                 - __@matchAll@1137
 *               properties:
 *                 exec:
 *                   type: object
 *                   description: The $ne's exec.
 *                 test:
 *                   type: object
 *                   description: The $ne's test.
 *                 source:
 *                   type: string
 *                   title: source
 *                   description: The $ne's source.
 *                 global:
 *                   type: boolean
 *                   title: global
 *                   description: The $ne's global.
 *                 ignoreCase:
 *                   type: boolean
 *                   title: ignoreCase
 *                   description: The $ne's ignorecase.
 *                 multiline:
 *                   type: boolean
 *                   title: multiline
 *                   description: The $ne's multiline.
 *                 lastIndex:
 *                   type: number
 *                   title: lastIndex
 *                   description: The $ne's lastindex.
 *                 compile:
 *                   type: object
 *                   description: The $ne's compile.
 *                 flags:
 *                   type: string
 *                   title: flags
 *                   description: The $ne's flags.
 *                 sticky:
 *                   type: boolean
 *                   title: sticky
 *                   description: The $ne's sticky.
 *                 unicode:
 *                   type: boolean
 *                   title: unicode
 *                   description: The $ne's unicode.
 *                 dotAll:
 *                   type: boolean
 *                   title: dotAll
 *                   description: The $ne's dotall.
 *                 __@match@1128:
 *                   type: object
 *                   description: The $ne's   @match@1128.
 *                 __@replace@1130:
 *                   type: object
 *                   description: The $ne's   @replace@1130.
 *                 __@search@1133:
 *                   type: object
 *                   description: The $ne's   @search@1133.
 *                 __@split@1135:
 *                   type: object
 *                   description: The $ne's   @split@1135.
 *                 __@matchAll@1137:
 *                   type: object
 *                   description: The $ne's   @matchall@1137.
 *         $in:
 *           type: array
 *           description: The updated at's $in.
 *           items:
 *             oneOf:
 *               - type: string
 *                 title: $in
 *                 description: The $in's details.
 *               - type: object
 *                 description: The $in's details.
 *                 x-schemaName: RegExp
 *                 required:
 *                   - exec
 *                   - test
 *                   - source
 *                   - global
 *                   - ignoreCase
 *                   - multiline
 *                   - lastIndex
 *                   - flags
 *                   - sticky
 *                   - unicode
 *                   - dotAll
 *                   - __@match@1128
 *                   - __@replace@1130
 *                   - __@search@1133
 *                   - __@matchAll@1137
 *                 properties:
 *                   exec:
 *                     type: object
 *                     description: The $in's exec.
 *                   test:
 *                     type: object
 *                     description: The $in's test.
 *                   source:
 *                     type: string
 *                     title: source
 *                     description: The $in's source.
 *                   global:
 *                     type: boolean
 *                     title: global
 *                     description: The $in's global.
 *                   ignoreCase:
 *                     type: boolean
 *                     title: ignoreCase
 *                     description: The $in's ignorecase.
 *                   multiline:
 *                     type: boolean
 *                     title: multiline
 *                     description: The $in's multiline.
 *                   lastIndex:
 *                     type: number
 *                     title: lastIndex
 *                     description: The $in's lastindex.
 *                   compile:
 *                     type: object
 *                     description: The $in's compile.
 *                   flags:
 *                     type: string
 *                     title: flags
 *                     description: The $in's flags.
 *                   sticky:
 *                     type: boolean
 *                     title: sticky
 *                     description: The $in's sticky.
 *                   unicode:
 *                     type: boolean
 *                     title: unicode
 *                     description: The $in's unicode.
 *                   dotAll:
 *                     type: boolean
 *                     title: dotAll
 *                     description: The $in's dotall.
 *                   __@match@1128:
 *                     type: object
 *                     description: The $in's   @match@1128.
 *                   __@replace@1130:
 *                     type: object
 *                     description: The $in's   @replace@1130.
 *                   __@search@1133:
 *                     type: object
 *                     description: The $in's   @search@1133.
 *                   __@split@1135:
 *                     type: object
 *                     description: The $in's   @split@1135.
 *                   __@matchAll@1137:
 *                     type: object
 *                     description: The $in's   @matchall@1137.
 *         $nin:
 *           type: array
 *           description: The updated at's $nin.
 *           items:
 *             oneOf:
 *               - type: string
 *                 title: $nin
 *                 description: The $nin's details.
 *               - type: object
 *                 description: The $nin's details.
 *                 x-schemaName: RegExp
 *                 required:
 *                   - exec
 *                   - test
 *                   - source
 *                   - global
 *                   - ignoreCase
 *                   - multiline
 *                   - lastIndex
 *                   - flags
 *                   - sticky
 *                   - unicode
 *                   - dotAll
 *                   - __@match@1128
 *                   - __@replace@1130
 *                   - __@search@1133
 *                   - __@matchAll@1137
 *                 properties:
 *                   exec:
 *                     type: object
 *                     description: The $nin's exec.
 *                   test:
 *                     type: object
 *                     description: The $nin's test.
 *                   source:
 *                     type: string
 *                     title: source
 *                     description: The $nin's source.
 *                   global:
 *                     type: boolean
 *                     title: global
 *                     description: The $nin's global.
 *                   ignoreCase:
 *                     type: boolean
 *                     title: ignoreCase
 *                     description: The $nin's ignorecase.
 *                   multiline:
 *                     type: boolean
 *                     title: multiline
 *                     description: The $nin's multiline.
 *                   lastIndex:
 *                     type: number
 *                     title: lastIndex
 *                     description: The $nin's lastindex.
 *                   compile:
 *                     type: object
 *                     description: The $nin's compile.
 *                   flags:
 *                     type: string
 *                     title: flags
 *                     description: The $nin's flags.
 *                   sticky:
 *                     type: boolean
 *                     title: sticky
 *                     description: The $nin's sticky.
 *                   unicode:
 *                     type: boolean
 *                     title: unicode
 *                     description: The $nin's unicode.
 *                   dotAll:
 *                     type: boolean
 *                     title: dotAll
 *                     description: The $nin's dotall.
 *                   __@match@1128:
 *                     type: object
 *                     description: The $nin's   @match@1128.
 *                   __@replace@1130:
 *                     type: object
 *                     description: The $nin's   @replace@1130.
 *                   __@search@1133:
 *                     type: object
 *                     description: The $nin's   @search@1133.
 *                   __@split@1135:
 *                     type: object
 *                     description: The $nin's   @split@1135.
 *                   __@matchAll@1137:
 *                     type: object
 *                     description: The $nin's   @matchall@1137.
 *         $not:
 *           oneOf:
 *             - type: string
 *               title: $not
 *               description: The updated at's $not.
 *             - type: object
 *               description: The updated at's $not.
 *               x-schemaName: RegExp
 *               required:
 *                 - exec
 *                 - test
 *                 - source
 *                 - global
 *                 - ignoreCase
 *                 - multiline
 *                 - lastIndex
 *                 - flags
 *                 - sticky
 *                 - unicode
 *                 - dotAll
 *                 - __@match@1128
 *                 - __@replace@1130
 *                 - __@search@1133
 *                 - __@matchAll@1137
 *               properties:
 *                 exec:
 *                   type: object
 *                   description: The $not's exec.
 *                 test:
 *                   type: object
 *                   description: The $not's test.
 *                 source:
 *                   type: string
 *                   title: source
 *                   description: The $not's source.
 *                 global:
 *                   type: boolean
 *                   title: global
 *                   description: The $not's global.
 *                 ignoreCase:
 *                   type: boolean
 *                   title: ignoreCase
 *                   description: The $not's ignorecase.
 *                 multiline:
 *                   type: boolean
 *                   title: multiline
 *                   description: The $not's multiline.
 *                 lastIndex:
 *                   type: number
 *                   title: lastIndex
 *                   description: The $not's lastindex.
 *                 compile:
 *                   type: object
 *                   description: The $not's compile.
 *                 flags:
 *                   type: string
 *                   title: flags
 *                   description: The $not's flags.
 *                 sticky:
 *                   type: boolean
 *                   title: sticky
 *                   description: The $not's sticky.
 *                 unicode:
 *                   type: boolean
 *                   title: unicode
 *                   description: The $not's unicode.
 *                 dotAll:
 *                   type: boolean
 *                   title: dotAll
 *                   description: The $not's dotall.
 *                 __@match@1128:
 *                   type: object
 *                   description: The $not's   @match@1128.
 *                 __@replace@1130:
 *                   type: object
 *                   description: The $not's   @replace@1130.
 *                 __@search@1133:
 *                   type: object
 *                   description: The $not's   @search@1133.
 *                 __@split@1135:
 *                   type: object
 *                   description: The $not's   @split@1135.
 *                 __@matchAll@1137:
 *                   type: object
 *                   description: The $not's   @matchall@1137.
 *             - type: object
 *               description: The updated at's $not.
 *               properties:
 *                 $and:
 *                   type: array
 *                   description: The $not's $and.
 *                   items:
 *                     oneOf:
 *                       - type: string
 *                         title: $and
 *                         description: The $and's details.
 *                       - type: object
 *                         description: The $and's details.
 *                         x-schemaName: RegExp
 *                       - type: object
 *                         description: The $and's details.
 *                       - type: array
 *                         description: The $and's details.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $and
 *                               description: The $and's details.
 *                             - type: object
 *                               description: The $and's details.
 *                               x-schemaName: RegExp
 *                 $or:
 *                   type: array
 *                   description: The $not's $or.
 *                   items:
 *                     oneOf:
 *                       - type: string
 *                         title: $or
 *                         description: The $or's details.
 *                       - type: object
 *                         description: The $or's details.
 *                         x-schemaName: RegExp
 *                       - type: object
 *                         description: The $or's details.
 *                       - type: array
 *                         description: The $or's details.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $or
 *                               description: The $or's details.
 *                             - type: object
 *                               description: The $or's details.
 *                               x-schemaName: RegExp
 *                 $eq:
 *                   oneOf:
 *                     - type: string
 *                       title: $eq
 *                       description: The $not's $eq.
 *                     - type: object
 *                       description: The $not's $eq.
 *                       x-schemaName: RegExp
 *                     - type: array
 *                       description: The $not's $eq.
 *                       items:
 *                         oneOf:
 *                           - type: string
 *                             title: $eq
 *                             description: The $eq's details.
 *                           - type: object
 *                             description: The $eq's details.
 *                             x-schemaName: RegExp
 *                 $ne:
 *                   oneOf:
 *                     - type: string
 *                       title: $ne
 *                       description: The $not's $ne.
 *                     - type: object
 *                       description: The $not's $ne.
 *                       x-schemaName: RegExp
 *                 $in:
 *                   type: array
 *                   description: The $not's $in.
 *                   items:
 *                     oneOf:
 *                       - type: string
 *                         title: $in
 *                         description: The $in's details.
 *                       - type: object
 *                         description: The $in's details.
 *                         x-schemaName: RegExp
 *                 $nin:
 *                   type: array
 *                   description: The $not's $nin.
 *                   items:
 *                     oneOf:
 *                       - type: string
 *                         title: $nin
 *                         description: The $nin's details.
 *                       - type: object
 *                         description: The $nin's details.
 *                         x-schemaName: RegExp
 *                 $not:
 *                   oneOf:
 *                     - type: string
 *                       title: $not
 *                       description: The $not's details.
 *                     - type: object
 *                       description: The $not's details.
 *                       x-schemaName: RegExp
 *                     - type: object
 *                       description: The $not's details.
 *                     - type: array
 *                       description: The $not's details.
 *                       items:
 *                         oneOf:
 *                           - type: string
 *                             title: $not
 *                             description: The $not's details.
 *                           - type: object
 *                             description: The $not's details.
 *                             x-schemaName: RegExp
 *                 $gt:
 *                   oneOf:
 *                     - type: string
 *                       title: $gt
 *                       description: The $not's $gt.
 *                     - type: object
 *                       description: The $not's $gt.
 *                       x-schemaName: RegExp
 *                 $gte:
 *                   oneOf:
 *                     - type: string
 *                       title: $gte
 *                       description: The $not's $gte.
 *                     - type: object
 *                       description: The $not's $gte.
 *                       x-schemaName: RegExp
 *                 $lt:
 *                   oneOf:
 *                     - type: string
 *                       title: $lt
 *                       description: The $not's $lt.
 *                     - type: object
 *                       description: The $not's $lt.
 *                       x-schemaName: RegExp
 *                 $lte:
 *                   oneOf:
 *                     - type: string
 *                       title: $lte
 *                       description: The $not's $lte.
 *                     - type: object
 *                       description: The $not's $lte.
 *                       x-schemaName: RegExp
 *                 $like:
 *                   type: string
 *                   title: $like
 *                   description: The $not's $like.
 *                 $re:
 *                   type: string
 *                   title: $re
 *                   description: The $not's $re.
 *                 $ilike:
 *                   type: string
 *                   title: $ilike
 *                   description: The $not's $ilike.
 *                 $fulltext:
 *                   type: string
 *                   title: $fulltext
 *                   description: The $not's $fulltext.
 *                 $overlap:
 *                   type: array
 *                   description: The $not's $overlap.
 *                   items:
 *                     type: string
 *                     title: $overlap
 *                     description: The $overlap's details.
 *                 $contains:
 *                   type: array
 *                   description: The $not's $contains.
 *                   items:
 *                     type: string
 *                     title: $contains
 *                     description: The $contain's $contains.
 *                 $contained:
 *                   type: array
 *                   description: The $not's $contained.
 *                   items:
 *                     type: string
 *                     title: $contained
 *                     description: The $contained's details.
 *                 $exists:
 *                   type: boolean
 *                   title: $exists
 *                   description: The $not's $exists.
 *             - type: array
 *               description: The updated at's $not.
 *               items:
 *                 oneOf:
 *                   - type: string
 *                     title: $not
 *                     description: The $not's details.
 *                   - type: object
 *                     description: The $not's details.
 *                     x-schemaName: RegExp
 *                     required:
 *                       - exec
 *                       - test
 *                       - source
 *                       - global
 *                       - ignoreCase
 *                       - multiline
 *                       - lastIndex
 *                       - flags
 *                       - sticky
 *                       - unicode
 *                       - dotAll
 *                       - __@match@1128
 *                       - __@replace@1130
 *                       - __@search@1133
 *                       - __@matchAll@1137
 *                     properties:
 *                       exec:
 *                         type: object
 *                         description: The $not's exec.
 *                       test:
 *                         type: object
 *                         description: The $not's test.
 *                       source:
 *                         type: string
 *                         title: source
 *                         description: The $not's source.
 *                       global:
 *                         type: boolean
 *                         title: global
 *                         description: The $not's global.
 *                       ignoreCase:
 *                         type: boolean
 *                         title: ignoreCase
 *                         description: The $not's ignorecase.
 *                       multiline:
 *                         type: boolean
 *                         title: multiline
 *                         description: The $not's multiline.
 *                       lastIndex:
 *                         type: number
 *                         title: lastIndex
 *                         description: The $not's lastindex.
 *                       compile:
 *                         type: object
 *                         description: The $not's compile.
 *                       flags:
 *                         type: string
 *                         title: flags
 *                         description: The $not's flags.
 *                       sticky:
 *                         type: boolean
 *                         title: sticky
 *                         description: The $not's sticky.
 *                       unicode:
 *                         type: boolean
 *                         title: unicode
 *                         description: The $not's unicode.
 *                       dotAll:
 *                         type: boolean
 *                         title: dotAll
 *                         description: The $not's dotall.
 *                       __@match@1128:
 *                         type: object
 *                         description: The $not's   @match@1128.
 *                       __@replace@1130:
 *                         type: object
 *                         description: The $not's   @replace@1130.
 *                       __@search@1133:
 *                         type: object
 *                         description: The $not's   @search@1133.
 *                       __@split@1135:
 *                         type: object
 *                         description: The $not's   @split@1135.
 *                       __@matchAll@1137:
 *                         type: object
 *                         description: The $not's   @matchall@1137.
 *         $gt:
 *           oneOf:
 *             - type: string
 *               title: $gt
 *               description: The updated at's $gt.
 *             - type: object
 *               description: The updated at's $gt.
 *               x-schemaName: RegExp
 *               required:
 *                 - exec
 *                 - test
 *                 - source
 *                 - global
 *                 - ignoreCase
 *                 - multiline
 *                 - lastIndex
 *                 - flags
 *                 - sticky
 *                 - unicode
 *                 - dotAll
 *                 - __@match@1128
 *                 - __@replace@1130
 *                 - __@search@1133
 *                 - __@matchAll@1137
 *               properties:
 *                 exec:
 *                   type: object
 *                   description: The $gt's exec.
 *                 test:
 *                   type: object
 *                   description: The $gt's test.
 *                 source:
 *                   type: string
 *                   title: source
 *                   description: The $gt's source.
 *                 global:
 *                   type: boolean
 *                   title: global
 *                   description: The $gt's global.
 *                 ignoreCase:
 *                   type: boolean
 *                   title: ignoreCase
 *                   description: The $gt's ignorecase.
 *                 multiline:
 *                   type: boolean
 *                   title: multiline
 *                   description: The $gt's multiline.
 *                 lastIndex:
 *                   type: number
 *                   title: lastIndex
 *                   description: The $gt's lastindex.
 *                 compile:
 *                   type: object
 *                   description: The $gt's compile.
 *                 flags:
 *                   type: string
 *                   title: flags
 *                   description: The $gt's flags.
 *                 sticky:
 *                   type: boolean
 *                   title: sticky
 *                   description: The $gt's sticky.
 *                 unicode:
 *                   type: boolean
 *                   title: unicode
 *                   description: The $gt's unicode.
 *                 dotAll:
 *                   type: boolean
 *                   title: dotAll
 *                   description: The $gt's dotall.
 *                 __@match@1128:
 *                   type: object
 *                   description: The $gt's   @match@1128.
 *                 __@replace@1130:
 *                   type: object
 *                   description: The $gt's   @replace@1130.
 *                 __@search@1133:
 *                   type: object
 *                   description: The $gt's   @search@1133.
 *                 __@split@1135:
 *                   type: object
 *                   description: The $gt's   @split@1135.
 *                 __@matchAll@1137:
 *                   type: object
 *                   description: The $gt's   @matchall@1137.
 *         $gte:
 *           oneOf:
 *             - type: string
 *               title: $gte
 *               description: The updated at's $gte.
 *             - type: object
 *               description: The updated at's $gte.
 *               x-schemaName: RegExp
 *               required:
 *                 - exec
 *                 - test
 *                 - source
 *                 - global
 *                 - ignoreCase
 *                 - multiline
 *                 - lastIndex
 *                 - flags
 *                 - sticky
 *                 - unicode
 *                 - dotAll
 *                 - __@match@1128
 *                 - __@replace@1130
 *                 - __@search@1133
 *                 - __@matchAll@1137
 *               properties:
 *                 exec:
 *                   type: object
 *                   description: The $gte's exec.
 *                 test:
 *                   type: object
 *                   description: The $gte's test.
 *                 source:
 *                   type: string
 *                   title: source
 *                   description: The $gte's source.
 *                 global:
 *                   type: boolean
 *                   title: global
 *                   description: The $gte's global.
 *                 ignoreCase:
 *                   type: boolean
 *                   title: ignoreCase
 *                   description: The $gte's ignorecase.
 *                 multiline:
 *                   type: boolean
 *                   title: multiline
 *                   description: The $gte's multiline.
 *                 lastIndex:
 *                   type: number
 *                   title: lastIndex
 *                   description: The $gte's lastindex.
 *                 compile:
 *                   type: object
 *                   description: The $gte's compile.
 *                 flags:
 *                   type: string
 *                   title: flags
 *                   description: The $gte's flags.
 *                 sticky:
 *                   type: boolean
 *                   title: sticky
 *                   description: The $gte's sticky.
 *                 unicode:
 *                   type: boolean
 *                   title: unicode
 *                   description: The $gte's unicode.
 *                 dotAll:
 *                   type: boolean
 *                   title: dotAll
 *                   description: The $gte's dotall.
 *                 __@match@1128:
 *                   type: object
 *                   description: The $gte's   @match@1128.
 *                 __@replace@1130:
 *                   type: object
 *                   description: The $gte's   @replace@1130.
 *                 __@search@1133:
 *                   type: object
 *                   description: The $gte's   @search@1133.
 *                 __@split@1135:
 *                   type: object
 *                   description: The $gte's   @split@1135.
 *                 __@matchAll@1137:
 *                   type: object
 *                   description: The $gte's   @matchall@1137.
 *         $lt:
 *           oneOf:
 *             - type: string
 *               title: $lt
 *               description: The updated at's $lt.
 *             - type: object
 *               description: The updated at's $lt.
 *               x-schemaName: RegExp
 *               required:
 *                 - exec
 *                 - test
 *                 - source
 *                 - global
 *                 - ignoreCase
 *                 - multiline
 *                 - lastIndex
 *                 - flags
 *                 - sticky
 *                 - unicode
 *                 - dotAll
 *                 - __@match@1128
 *                 - __@replace@1130
 *                 - __@search@1133
 *                 - __@matchAll@1137
 *               properties:
 *                 exec:
 *                   type: object
 *                   description: The $lt's exec.
 *                 test:
 *                   type: object
 *                   description: The $lt's test.
 *                 source:
 *                   type: string
 *                   title: source
 *                   description: The $lt's source.
 *                 global:
 *                   type: boolean
 *                   title: global
 *                   description: The $lt's global.
 *                 ignoreCase:
 *                   type: boolean
 *                   title: ignoreCase
 *                   description: The $lt's ignorecase.
 *                 multiline:
 *                   type: boolean
 *                   title: multiline
 *                   description: The $lt's multiline.
 *                 lastIndex:
 *                   type: number
 *                   title: lastIndex
 *                   description: The $lt's lastindex.
 *                 compile:
 *                   type: object
 *                   description: The $lt's compile.
 *                 flags:
 *                   type: string
 *                   title: flags
 *                   description: The $lt's flags.
 *                 sticky:
 *                   type: boolean
 *                   title: sticky
 *                   description: The $lt's sticky.
 *                 unicode:
 *                   type: boolean
 *                   title: unicode
 *                   description: The $lt's unicode.
 *                 dotAll:
 *                   type: boolean
 *                   title: dotAll
 *                   description: The $lt's dotall.
 *                 __@match@1128:
 *                   type: object
 *                   description: The $lt's   @match@1128.
 *                 __@replace@1130:
 *                   type: object
 *                   description: The $lt's   @replace@1130.
 *                 __@search@1133:
 *                   type: object
 *                   description: The $lt's   @search@1133.
 *                 __@split@1135:
 *                   type: object
 *                   description: The $lt's   @split@1135.
 *                 __@matchAll@1137:
 *                   type: object
 *                   description: The $lt's   @matchall@1137.
 *         $lte:
 *           oneOf:
 *             - type: string
 *               title: $lte
 *               description: The updated at's $lte.
 *             - type: object
 *               description: The updated at's $lte.
 *               x-schemaName: RegExp
 *               required:
 *                 - exec
 *                 - test
 *                 - source
 *                 - global
 *                 - ignoreCase
 *                 - multiline
 *                 - lastIndex
 *                 - flags
 *                 - sticky
 *                 - unicode
 *                 - dotAll
 *                 - __@match@1128
 *                 - __@replace@1130
 *                 - __@search@1133
 *                 - __@matchAll@1137
 *               properties:
 *                 exec:
 *                   type: object
 *                   description: The $lte's exec.
 *                 test:
 *                   type: object
 *                   description: The $lte's test.
 *                 source:
 *                   type: string
 *                   title: source
 *                   description: The $lte's source.
 *                 global:
 *                   type: boolean
 *                   title: global
 *                   description: The $lte's global.
 *                 ignoreCase:
 *                   type: boolean
 *                   title: ignoreCase
 *                   description: The $lte's ignorecase.
 *                 multiline:
 *                   type: boolean
 *                   title: multiline
 *                   description: The $lte's multiline.
 *                 lastIndex:
 *                   type: number
 *                   title: lastIndex
 *                   description: The $lte's lastindex.
 *                 compile:
 *                   type: object
 *                   description: The $lte's compile.
 *                 flags:
 *                   type: string
 *                   title: flags
 *                   description: The $lte's flags.
 *                 sticky:
 *                   type: boolean
 *                   title: sticky
 *                   description: The $lte's sticky.
 *                 unicode:
 *                   type: boolean
 *                   title: unicode
 *                   description: The $lte's unicode.
 *                 dotAll:
 *                   type: boolean
 *                   title: dotAll
 *                   description: The $lte's dotall.
 *                 __@match@1128:
 *                   type: object
 *                   description: The $lte's   @match@1128.
 *                 __@replace@1130:
 *                   type: object
 *                   description: The $lte's   @replace@1130.
 *                 __@search@1133:
 *                   type: object
 *                   description: The $lte's   @search@1133.
 *                 __@split@1135:
 *                   type: object
 *                   description: The $lte's   @split@1135.
 *                 __@matchAll@1137:
 *                   type: object
 *                   description: The $lte's   @matchall@1137.
 *         $like:
 *           type: string
 *           title: $like
 *           description: The updated at's $like.
 *         $re:
 *           type: string
 *           title: $re
 *           description: The updated at's $re.
 *         $ilike:
 *           type: string
 *           title: $ilike
 *           description: The updated at's $ilike.
 *         $fulltext:
 *           type: string
 *           title: $fulltext
 *           description: The updated at's $fulltext.
 *         $overlap:
 *           type: array
 *           description: The updated at's $overlap.
 *           items:
 *             type: string
 *             title: $overlap
 *             description: The $overlap's details.
 *         $contains:
 *           type: array
 *           description: The updated at's $contains.
 *           items:
 *             type: string
 *             title: $contains
 *             description: The $contain's $contains.
 *         $contained:
 *           type: array
 *           description: The updated at's $contained.
 *           items:
 *             type: string
 *             title: $contained
 *             description: The $contained's details.
 *         $exists:
 *           type: boolean
 *           title: $exists
 *           description: The updated at's $exists.
 *   - name: deleted_at
 *     in: query
 *     description: The product's deleted at.
 *     required: false
 *     schema:
 *       type: object
 *       description: The product's deleted at.
 *       properties:
 *         $and:
 *           type: array
 *           description: The deleted at's $and.
 *           items:
 *             oneOf:
 *               - type: string
 *                 title: $and
 *                 description: The $and's details.
 *               - type: object
 *                 description: The $and's details.
 *                 x-schemaName: RegExp
 *                 required:
 *                   - exec
 *                   - test
 *                   - source
 *                   - global
 *                   - ignoreCase
 *                   - multiline
 *                   - lastIndex
 *                   - flags
 *                   - sticky
 *                   - unicode
 *                   - dotAll
 *                   - __@match@1128
 *                   - __@replace@1130
 *                   - __@search@1133
 *                   - __@matchAll@1137
 *                 properties:
 *                   exec:
 *                     type: object
 *                     description: The $and's exec.
 *                   test:
 *                     type: object
 *                     description: The $and's test.
 *                   source:
 *                     type: string
 *                     title: source
 *                     description: The $and's source.
 *                   global:
 *                     type: boolean
 *                     title: global
 *                     description: The $and's global.
 *                   ignoreCase:
 *                     type: boolean
 *                     title: ignoreCase
 *                     description: The $and's ignorecase.
 *                   multiline:
 *                     type: boolean
 *                     title: multiline
 *                     description: The $and's multiline.
 *                   lastIndex:
 *                     type: number
 *                     title: lastIndex
 *                     description: The $and's lastindex.
 *                   compile:
 *                     type: object
 *                     description: The $and's compile.
 *                   flags:
 *                     type: string
 *                     title: flags
 *                     description: The $and's flags.
 *                   sticky:
 *                     type: boolean
 *                     title: sticky
 *                     description: The $and's sticky.
 *                   unicode:
 *                     type: boolean
 *                     title: unicode
 *                     description: The $and's unicode.
 *                   dotAll:
 *                     type: boolean
 *                     title: dotAll
 *                     description: The $and's dotall.
 *                   __@match@1128:
 *                     type: object
 *                     description: The $and's   @match@1128.
 *                   __@replace@1130:
 *                     type: object
 *                     description: The $and's   @replace@1130.
 *                   __@search@1133:
 *                     type: object
 *                     description: The $and's   @search@1133.
 *                   __@split@1135:
 *                     type: object
 *                     description: The $and's   @split@1135.
 *                   __@matchAll@1137:
 *                     type: object
 *                     description: The $and's   @matchall@1137.
 *               - type: object
 *                 description: The $and's details.
 *                 properties:
 *                   $and:
 *                     type: array
 *                     description: The $and's details.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $and
 *                           description: The $and's details.
 *                         - type: object
 *                           description: The $and's details.
 *                           x-schemaName: RegExp
 *                         - type: object
 *                           description: The $and's details.
 *                         - type: array
 *                           description: The $and's details.
 *                           items:
 *                             oneOf:
 *                               - type: string
 *                                 title: $and
 *                                 description: The $and's details.
 *                               - type: object
 *                                 description: The $and's details.
 *                                 x-schemaName: RegExp
 *                   $or:
 *                     type: array
 *                     description: The $and's $or.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $or
 *                           description: The $or's details.
 *                         - type: object
 *                           description: The $or's details.
 *                           x-schemaName: RegExp
 *                         - type: object
 *                           description: The $or's details.
 *                         - type: array
 *                           description: The $or's details.
 *                           items:
 *                             oneOf:
 *                               - type: string
 *                                 title: $or
 *                                 description: The $or's details.
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: RegExp
 *                   $eq:
 *                     oneOf:
 *                       - type: string
 *                         title: $eq
 *                         description: The $and's $eq.
 *                       - type: object
 *                         description: The $and's $eq.
 *                         x-schemaName: RegExp
 *                       - type: array
 *                         description: The $and's $eq.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $eq
 *                               description: The $eq's details.
 *                             - type: object
 *                               description: The $eq's details.
 *                               x-schemaName: RegExp
 *                   $ne:
 *                     oneOf:
 *                       - type: string
 *                         title: $ne
 *                         description: The $and's $ne.
 *                       - type: object
 *                         description: The $and's $ne.
 *                         x-schemaName: RegExp
 *                   $in:
 *                     type: array
 *                     description: The $and's $in.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $in
 *                           description: The $in's details.
 *                         - type: object
 *                           description: The $in's details.
 *                           x-schemaName: RegExp
 *                   $nin:
 *                     type: array
 *                     description: The $and's $nin.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $nin
 *                           description: The $nin's details.
 *                         - type: object
 *                           description: The $nin's details.
 *                           x-schemaName: RegExp
 *                   $not:
 *                     oneOf:
 *                       - type: string
 *                         title: $not
 *                         description: The $and's $not.
 *                       - type: object
 *                         description: The $and's $not.
 *                         x-schemaName: RegExp
 *                       - type: object
 *                         description: The $and's $not.
 *                       - type: array
 *                         description: The $and's $not.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $not
 *                               description: The $not's details.
 *                             - type: object
 *                               description: The $not's details.
 *                               x-schemaName: RegExp
 *                   $gt:
 *                     oneOf:
 *                       - type: string
 *                         title: $gt
 *                         description: The $and's $gt.
 *                       - type: object
 *                         description: The $and's $gt.
 *                         x-schemaName: RegExp
 *                   $gte:
 *                     oneOf:
 *                       - type: string
 *                         title: $gte
 *                         description: The $and's $gte.
 *                       - type: object
 *                         description: The $and's $gte.
 *                         x-schemaName: RegExp
 *                   $lt:
 *                     oneOf:
 *                       - type: string
 *                         title: $lt
 *                         description: The $and's $lt.
 *                       - type: object
 *                         description: The $and's $lt.
 *                         x-schemaName: RegExp
 *                   $lte:
 *                     oneOf:
 *                       - type: string
 *                         title: $lte
 *                         description: The $and's $lte.
 *                       - type: object
 *                         description: The $and's $lte.
 *                         x-schemaName: RegExp
 *                   $like:
 *                     type: string
 *                     title: $like
 *                     description: The $and's $like.
 *                   $re:
 *                     type: string
 *                     title: $re
 *                     description: The $and's $re.
 *                   $ilike:
 *                     type: string
 *                     title: $ilike
 *                     description: The $and's $ilike.
 *                   $fulltext:
 *                     type: string
 *                     title: $fulltext
 *                     description: The $and's $fulltext.
 *                   $overlap:
 *                     type: array
 *                     description: The $and's $overlap.
 *                     items:
 *                       type: string
 *                       title: $overlap
 *                       description: The $overlap's details.
 *                   $contains:
 *                     type: array
 *                     description: The $and's $contains.
 *                     items:
 *                       type: string
 *                       title: $contains
 *                       description: The $contain's $contains.
 *                   $contained:
 *                     type: array
 *                     description: The $and's $contained.
 *                     items:
 *                       type: string
 *                       title: $contained
 *                       description: The $contained's details.
 *                   $exists:
 *                     type: boolean
 *                     title: $exists
 *                     description: The $and's $exists.
 *               - type: array
 *                 description: The $and's details.
 *                 items:
 *                   oneOf:
 *                     - type: string
 *                       title: $and
 *                       description: The $and's details.
 *                     - type: object
 *                       description: The $and's details.
 *                       x-schemaName: RegExp
 *                       required:
 *                         - exec
 *                         - test
 *                         - source
 *                         - global
 *                         - ignoreCase
 *                         - multiline
 *                         - lastIndex
 *                         - flags
 *                         - sticky
 *                         - unicode
 *                         - dotAll
 *                         - __@match@1128
 *                         - __@replace@1130
 *                         - __@search@1133
 *                         - __@matchAll@1137
 *                       properties:
 *                         exec:
 *                           type: object
 *                           description: The $and's exec.
 *                         test:
 *                           type: object
 *                           description: The $and's test.
 *                         source:
 *                           type: string
 *                           title: source
 *                           description: The $and's source.
 *                         global:
 *                           type: boolean
 *                           title: global
 *                           description: The $and's global.
 *                         ignoreCase:
 *                           type: boolean
 *                           title: ignoreCase
 *                           description: The $and's ignorecase.
 *                         multiline:
 *                           type: boolean
 *                           title: multiline
 *                           description: The $and's multiline.
 *                         lastIndex:
 *                           type: number
 *                           title: lastIndex
 *                           description: The $and's lastindex.
 *                         compile:
 *                           type: object
 *                           description: The $and's compile.
 *                         flags:
 *                           type: string
 *                           title: flags
 *                           description: The $and's flags.
 *                         sticky:
 *                           type: boolean
 *                           title: sticky
 *                           description: The $and's sticky.
 *                         unicode:
 *                           type: boolean
 *                           title: unicode
 *                           description: The $and's unicode.
 *                         dotAll:
 *                           type: boolean
 *                           title: dotAll
 *                           description: The $and's dotall.
 *                         __@match@1128:
 *                           type: object
 *                           description: The $and's   @match@1128.
 *                         __@replace@1130:
 *                           type: object
 *                           description: The $and's   @replace@1130.
 *                         __@search@1133:
 *                           type: object
 *                           description: The $and's   @search@1133.
 *                         __@split@1135:
 *                           type: object
 *                           description: The $and's   @split@1135.
 *                         __@matchAll@1137:
 *                           type: object
 *                           description: The $and's   @matchall@1137.
 *         $or:
 *           type: array
 *           description: The deleted at's $or.
 *           items:
 *             oneOf:
 *               - type: string
 *                 title: $or
 *                 description: The $or's details.
 *               - type: object
 *                 description: The $or's details.
 *                 x-schemaName: RegExp
 *                 required:
 *                   - exec
 *                   - test
 *                   - source
 *                   - global
 *                   - ignoreCase
 *                   - multiline
 *                   - lastIndex
 *                   - flags
 *                   - sticky
 *                   - unicode
 *                   - dotAll
 *                   - __@match@1128
 *                   - __@replace@1130
 *                   - __@search@1133
 *                   - __@matchAll@1137
 *                 properties:
 *                   exec:
 *                     type: object
 *                     description: The $or's exec.
 *                   test:
 *                     type: object
 *                     description: The $or's test.
 *                   source:
 *                     type: string
 *                     title: source
 *                     description: The $or's source.
 *                   global:
 *                     type: boolean
 *                     title: global
 *                     description: The $or's global.
 *                   ignoreCase:
 *                     type: boolean
 *                     title: ignoreCase
 *                     description: The $or's ignorecase.
 *                   multiline:
 *                     type: boolean
 *                     title: multiline
 *                     description: The $or's multiline.
 *                   lastIndex:
 *                     type: number
 *                     title: lastIndex
 *                     description: The $or's lastindex.
 *                   compile:
 *                     type: object
 *                     description: The $or's compile.
 *                   flags:
 *                     type: string
 *                     title: flags
 *                     description: The $or's flags.
 *                   sticky:
 *                     type: boolean
 *                     title: sticky
 *                     description: The $or's sticky.
 *                   unicode:
 *                     type: boolean
 *                     title: unicode
 *                     description: The $or's unicode.
 *                   dotAll:
 *                     type: boolean
 *                     title: dotAll
 *                     description: The $or's dotall.
 *                   __@match@1128:
 *                     type: object
 *                     description: The $or's   @match@1128.
 *                   __@replace@1130:
 *                     type: object
 *                     description: The $or's   @replace@1130.
 *                   __@search@1133:
 *                     type: object
 *                     description: The $or's   @search@1133.
 *                   __@split@1135:
 *                     type: object
 *                     description: The $or's   @split@1135.
 *                   __@matchAll@1137:
 *                     type: object
 *                     description: The $or's   @matchall@1137.
 *               - type: object
 *                 description: The $or's details.
 *                 properties:
 *                   $and:
 *                     type: array
 *                     description: The $or's $and.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $and
 *                           description: The $and's details.
 *                         - type: object
 *                           description: The $and's details.
 *                           x-schemaName: RegExp
 *                         - type: object
 *                           description: The $and's details.
 *                         - type: array
 *                           description: The $and's details.
 *                           items:
 *                             oneOf:
 *                               - type: string
 *                                 title: $and
 *                                 description: The $and's details.
 *                               - type: object
 *                                 description: The $and's details.
 *                                 x-schemaName: RegExp
 *                   $or:
 *                     type: array
 *                     description: The $or's details.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $or
 *                           description: The $or's details.
 *                         - type: object
 *                           description: The $or's details.
 *                           x-schemaName: RegExp
 *                         - type: object
 *                           description: The $or's details.
 *                         - type: array
 *                           description: The $or's details.
 *                           items:
 *                             oneOf:
 *                               - type: string
 *                                 title: $or
 *                                 description: The $or's details.
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: RegExp
 *                   $eq:
 *                     oneOf:
 *                       - type: string
 *                         title: $eq
 *                         description: The $or's $eq.
 *                       - type: object
 *                         description: The $or's $eq.
 *                         x-schemaName: RegExp
 *                       - type: array
 *                         description: The $or's $eq.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $eq
 *                               description: The $eq's details.
 *                             - type: object
 *                               description: The $eq's details.
 *                               x-schemaName: RegExp
 *                   $ne:
 *                     oneOf:
 *                       - type: string
 *                         title: $ne
 *                         description: The $or's $ne.
 *                       - type: object
 *                         description: The $or's $ne.
 *                         x-schemaName: RegExp
 *                   $in:
 *                     type: array
 *                     description: The $or's $in.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $in
 *                           description: The $in's details.
 *                         - type: object
 *                           description: The $in's details.
 *                           x-schemaName: RegExp
 *                   $nin:
 *                     type: array
 *                     description: The $or's $nin.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $nin
 *                           description: The $nin's details.
 *                         - type: object
 *                           description: The $nin's details.
 *                           x-schemaName: RegExp
 *                   $not:
 *                     oneOf:
 *                       - type: string
 *                         title: $not
 *                         description: The $or's $not.
 *                       - type: object
 *                         description: The $or's $not.
 *                         x-schemaName: RegExp
 *                       - type: object
 *                         description: The $or's $not.
 *                       - type: array
 *                         description: The $or's $not.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $not
 *                               description: The $not's details.
 *                             - type: object
 *                               description: The $not's details.
 *                               x-schemaName: RegExp
 *                   $gt:
 *                     oneOf:
 *                       - type: string
 *                         title: $gt
 *                         description: The $or's $gt.
 *                       - type: object
 *                         description: The $or's $gt.
 *                         x-schemaName: RegExp
 *                   $gte:
 *                     oneOf:
 *                       - type: string
 *                         title: $gte
 *                         description: The $or's $gte.
 *                       - type: object
 *                         description: The $or's $gte.
 *                         x-schemaName: RegExp
 *                   $lt:
 *                     oneOf:
 *                       - type: string
 *                         title: $lt
 *                         description: The $or's $lt.
 *                       - type: object
 *                         description: The $or's $lt.
 *                         x-schemaName: RegExp
 *                   $lte:
 *                     oneOf:
 *                       - type: string
 *                         title: $lte
 *                         description: The $or's $lte.
 *                       - type: object
 *                         description: The $or's $lte.
 *                         x-schemaName: RegExp
 *                   $like:
 *                     type: string
 *                     title: $like
 *                     description: The $or's $like.
 *                   $re:
 *                     type: string
 *                     title: $re
 *                     description: The $or's $re.
 *                   $ilike:
 *                     type: string
 *                     title: $ilike
 *                     description: The $or's $ilike.
 *                   $fulltext:
 *                     type: string
 *                     title: $fulltext
 *                     description: The $or's $fulltext.
 *                   $overlap:
 *                     type: array
 *                     description: The $or's $overlap.
 *                     items:
 *                       type: string
 *                       title: $overlap
 *                       description: The $overlap's details.
 *                   $contains:
 *                     type: array
 *                     description: The $or's $contains.
 *                     items:
 *                       type: string
 *                       title: $contains
 *                       description: The $contain's $contains.
 *                   $contained:
 *                     type: array
 *                     description: The $or's $contained.
 *                     items:
 *                       type: string
 *                       title: $contained
 *                       description: The $contained's details.
 *                   $exists:
 *                     type: boolean
 *                     title: $exists
 *                     description: The $or's $exists.
 *               - type: array
 *                 description: The $or's details.
 *                 items:
 *                   oneOf:
 *                     - type: string
 *                       title: $or
 *                       description: The $or's details.
 *                     - type: object
 *                       description: The $or's details.
 *                       x-schemaName: RegExp
 *                       required:
 *                         - exec
 *                         - test
 *                         - source
 *                         - global
 *                         - ignoreCase
 *                         - multiline
 *                         - lastIndex
 *                         - flags
 *                         - sticky
 *                         - unicode
 *                         - dotAll
 *                         - __@match@1128
 *                         - __@replace@1130
 *                         - __@search@1133
 *                         - __@matchAll@1137
 *                       properties:
 *                         exec:
 *                           type: object
 *                           description: The $or's exec.
 *                         test:
 *                           type: object
 *                           description: The $or's test.
 *                         source:
 *                           type: string
 *                           title: source
 *                           description: The $or's source.
 *                         global:
 *                           type: boolean
 *                           title: global
 *                           description: The $or's global.
 *                         ignoreCase:
 *                           type: boolean
 *                           title: ignoreCase
 *                           description: The $or's ignorecase.
 *                         multiline:
 *                           type: boolean
 *                           title: multiline
 *                           description: The $or's multiline.
 *                         lastIndex:
 *                           type: number
 *                           title: lastIndex
 *                           description: The $or's lastindex.
 *                         compile:
 *                           type: object
 *                           description: The $or's compile.
 *                         flags:
 *                           type: string
 *                           title: flags
 *                           description: The $or's flags.
 *                         sticky:
 *                           type: boolean
 *                           title: sticky
 *                           description: The $or's sticky.
 *                         unicode:
 *                           type: boolean
 *                           title: unicode
 *                           description: The $or's unicode.
 *                         dotAll:
 *                           type: boolean
 *                           title: dotAll
 *                           description: The $or's dotall.
 *                         __@match@1128:
 *                           type: object
 *                           description: The $or's   @match@1128.
 *                         __@replace@1130:
 *                           type: object
 *                           description: The $or's   @replace@1130.
 *                         __@search@1133:
 *                           type: object
 *                           description: The $or's   @search@1133.
 *                         __@split@1135:
 *                           type: object
 *                           description: The $or's   @split@1135.
 *                         __@matchAll@1137:
 *                           type: object
 *                           description: The $or's   @matchall@1137.
 *         $eq:
 *           oneOf:
 *             - type: string
 *               title: $eq
 *               description: The deleted at's $eq.
 *             - type: object
 *               description: The deleted at's $eq.
 *               x-schemaName: RegExp
 *               required:
 *                 - exec
 *                 - test
 *                 - source
 *                 - global
 *                 - ignoreCase
 *                 - multiline
 *                 - lastIndex
 *                 - flags
 *                 - sticky
 *                 - unicode
 *                 - dotAll
 *                 - __@match@1128
 *                 - __@replace@1130
 *                 - __@search@1133
 *                 - __@matchAll@1137
 *               properties:
 *                 exec:
 *                   type: object
 *                   description: The $eq's exec.
 *                 test:
 *                   type: object
 *                   description: The $eq's test.
 *                 source:
 *                   type: string
 *                   title: source
 *                   description: The $eq's source.
 *                 global:
 *                   type: boolean
 *                   title: global
 *                   description: The $eq's global.
 *                 ignoreCase:
 *                   type: boolean
 *                   title: ignoreCase
 *                   description: The $eq's ignorecase.
 *                 multiline:
 *                   type: boolean
 *                   title: multiline
 *                   description: The $eq's multiline.
 *                 lastIndex:
 *                   type: number
 *                   title: lastIndex
 *                   description: The $eq's lastindex.
 *                 compile:
 *                   type: object
 *                   description: The $eq's compile.
 *                 flags:
 *                   type: string
 *                   title: flags
 *                   description: The $eq's flags.
 *                 sticky:
 *                   type: boolean
 *                   title: sticky
 *                   description: The $eq's sticky.
 *                 unicode:
 *                   type: boolean
 *                   title: unicode
 *                   description: The $eq's unicode.
 *                 dotAll:
 *                   type: boolean
 *                   title: dotAll
 *                   description: The $eq's dotall.
 *                 __@match@1128:
 *                   type: object
 *                   description: The $eq's   @match@1128.
 *                 __@replace@1130:
 *                   type: object
 *                   description: The $eq's   @replace@1130.
 *                 __@search@1133:
 *                   type: object
 *                   description: The $eq's   @search@1133.
 *                 __@split@1135:
 *                   type: object
 *                   description: The $eq's   @split@1135.
 *                 __@matchAll@1137:
 *                   type: object
 *                   description: The $eq's   @matchall@1137.
 *             - type: array
 *               description: The deleted at's $eq.
 *               items:
 *                 oneOf:
 *                   - type: string
 *                     title: $eq
 *                     description: The $eq's details.
 *                   - type: object
 *                     description: The $eq's details.
 *                     x-schemaName: RegExp
 *                     required:
 *                       - exec
 *                       - test
 *                       - source
 *                       - global
 *                       - ignoreCase
 *                       - multiline
 *                       - lastIndex
 *                       - flags
 *                       - sticky
 *                       - unicode
 *                       - dotAll
 *                       - __@match@1128
 *                       - __@replace@1130
 *                       - __@search@1133
 *                       - __@matchAll@1137
 *                     properties:
 *                       exec:
 *                         type: object
 *                         description: The $eq's exec.
 *                       test:
 *                         type: object
 *                         description: The $eq's test.
 *                       source:
 *                         type: string
 *                         title: source
 *                         description: The $eq's source.
 *                       global:
 *                         type: boolean
 *                         title: global
 *                         description: The $eq's global.
 *                       ignoreCase:
 *                         type: boolean
 *                         title: ignoreCase
 *                         description: The $eq's ignorecase.
 *                       multiline:
 *                         type: boolean
 *                         title: multiline
 *                         description: The $eq's multiline.
 *                       lastIndex:
 *                         type: number
 *                         title: lastIndex
 *                         description: The $eq's lastindex.
 *                       compile:
 *                         type: object
 *                         description: The $eq's compile.
 *                       flags:
 *                         type: string
 *                         title: flags
 *                         description: The $eq's flags.
 *                       sticky:
 *                         type: boolean
 *                         title: sticky
 *                         description: The $eq's sticky.
 *                       unicode:
 *                         type: boolean
 *                         title: unicode
 *                         description: The $eq's unicode.
 *                       dotAll:
 *                         type: boolean
 *                         title: dotAll
 *                         description: The $eq's dotall.
 *                       __@match@1128:
 *                         type: object
 *                         description: The $eq's   @match@1128.
 *                       __@replace@1130:
 *                         type: object
 *                         description: The $eq's   @replace@1130.
 *                       __@search@1133:
 *                         type: object
 *                         description: The $eq's   @search@1133.
 *                       __@split@1135:
 *                         type: object
 *                         description: The $eq's   @split@1135.
 *                       __@matchAll@1137:
 *                         type: object
 *                         description: The $eq's   @matchall@1137.
 *         $ne:
 *           oneOf:
 *             - type: string
 *               title: $ne
 *               description: The deleted at's $ne.
 *             - type: object
 *               description: The deleted at's $ne.
 *               x-schemaName: RegExp
 *               required:
 *                 - exec
 *                 - test
 *                 - source
 *                 - global
 *                 - ignoreCase
 *                 - multiline
 *                 - lastIndex
 *                 - flags
 *                 - sticky
 *                 - unicode
 *                 - dotAll
 *                 - __@match@1128
 *                 - __@replace@1130
 *                 - __@search@1133
 *                 - __@matchAll@1137
 *               properties:
 *                 exec:
 *                   type: object
 *                   description: The $ne's exec.
 *                 test:
 *                   type: object
 *                   description: The $ne's test.
 *                 source:
 *                   type: string
 *                   title: source
 *                   description: The $ne's source.
 *                 global:
 *                   type: boolean
 *                   title: global
 *                   description: The $ne's global.
 *                 ignoreCase:
 *                   type: boolean
 *                   title: ignoreCase
 *                   description: The $ne's ignorecase.
 *                 multiline:
 *                   type: boolean
 *                   title: multiline
 *                   description: The $ne's multiline.
 *                 lastIndex:
 *                   type: number
 *                   title: lastIndex
 *                   description: The $ne's lastindex.
 *                 compile:
 *                   type: object
 *                   description: The $ne's compile.
 *                 flags:
 *                   type: string
 *                   title: flags
 *                   description: The $ne's flags.
 *                 sticky:
 *                   type: boolean
 *                   title: sticky
 *                   description: The $ne's sticky.
 *                 unicode:
 *                   type: boolean
 *                   title: unicode
 *                   description: The $ne's unicode.
 *                 dotAll:
 *                   type: boolean
 *                   title: dotAll
 *                   description: The $ne's dotall.
 *                 __@match@1128:
 *                   type: object
 *                   description: The $ne's   @match@1128.
 *                 __@replace@1130:
 *                   type: object
 *                   description: The $ne's   @replace@1130.
 *                 __@search@1133:
 *                   type: object
 *                   description: The $ne's   @search@1133.
 *                 __@split@1135:
 *                   type: object
 *                   description: The $ne's   @split@1135.
 *                 __@matchAll@1137:
 *                   type: object
 *                   description: The $ne's   @matchall@1137.
 *         $in:
 *           type: array
 *           description: The deleted at's $in.
 *           items:
 *             oneOf:
 *               - type: string
 *                 title: $in
 *                 description: The $in's details.
 *               - type: object
 *                 description: The $in's details.
 *                 x-schemaName: RegExp
 *                 required:
 *                   - exec
 *                   - test
 *                   - source
 *                   - global
 *                   - ignoreCase
 *                   - multiline
 *                   - lastIndex
 *                   - flags
 *                   - sticky
 *                   - unicode
 *                   - dotAll
 *                   - __@match@1128
 *                   - __@replace@1130
 *                   - __@search@1133
 *                   - __@matchAll@1137
 *                 properties:
 *                   exec:
 *                     type: object
 *                     description: The $in's exec.
 *                   test:
 *                     type: object
 *                     description: The $in's test.
 *                   source:
 *                     type: string
 *                     title: source
 *                     description: The $in's source.
 *                   global:
 *                     type: boolean
 *                     title: global
 *                     description: The $in's global.
 *                   ignoreCase:
 *                     type: boolean
 *                     title: ignoreCase
 *                     description: The $in's ignorecase.
 *                   multiline:
 *                     type: boolean
 *                     title: multiline
 *                     description: The $in's multiline.
 *                   lastIndex:
 *                     type: number
 *                     title: lastIndex
 *                     description: The $in's lastindex.
 *                   compile:
 *                     type: object
 *                     description: The $in's compile.
 *                   flags:
 *                     type: string
 *                     title: flags
 *                     description: The $in's flags.
 *                   sticky:
 *                     type: boolean
 *                     title: sticky
 *                     description: The $in's sticky.
 *                   unicode:
 *                     type: boolean
 *                     title: unicode
 *                     description: The $in's unicode.
 *                   dotAll:
 *                     type: boolean
 *                     title: dotAll
 *                     description: The $in's dotall.
 *                   __@match@1128:
 *                     type: object
 *                     description: The $in's   @match@1128.
 *                   __@replace@1130:
 *                     type: object
 *                     description: The $in's   @replace@1130.
 *                   __@search@1133:
 *                     type: object
 *                     description: The $in's   @search@1133.
 *                   __@split@1135:
 *                     type: object
 *                     description: The $in's   @split@1135.
 *                   __@matchAll@1137:
 *                     type: object
 *                     description: The $in's   @matchall@1137.
 *         $nin:
 *           type: array
 *           description: The deleted at's $nin.
 *           items:
 *             oneOf:
 *               - type: string
 *                 title: $nin
 *                 description: The $nin's details.
 *               - type: object
 *                 description: The $nin's details.
 *                 x-schemaName: RegExp
 *                 required:
 *                   - exec
 *                   - test
 *                   - source
 *                   - global
 *                   - ignoreCase
 *                   - multiline
 *                   - lastIndex
 *                   - flags
 *                   - sticky
 *                   - unicode
 *                   - dotAll
 *                   - __@match@1128
 *                   - __@replace@1130
 *                   - __@search@1133
 *                   - __@matchAll@1137
 *                 properties:
 *                   exec:
 *                     type: object
 *                     description: The $nin's exec.
 *                   test:
 *                     type: object
 *                     description: The $nin's test.
 *                   source:
 *                     type: string
 *                     title: source
 *                     description: The $nin's source.
 *                   global:
 *                     type: boolean
 *                     title: global
 *                     description: The $nin's global.
 *                   ignoreCase:
 *                     type: boolean
 *                     title: ignoreCase
 *                     description: The $nin's ignorecase.
 *                   multiline:
 *                     type: boolean
 *                     title: multiline
 *                     description: The $nin's multiline.
 *                   lastIndex:
 *                     type: number
 *                     title: lastIndex
 *                     description: The $nin's lastindex.
 *                   compile:
 *                     type: object
 *                     description: The $nin's compile.
 *                   flags:
 *                     type: string
 *                     title: flags
 *                     description: The $nin's flags.
 *                   sticky:
 *                     type: boolean
 *                     title: sticky
 *                     description: The $nin's sticky.
 *                   unicode:
 *                     type: boolean
 *                     title: unicode
 *                     description: The $nin's unicode.
 *                   dotAll:
 *                     type: boolean
 *                     title: dotAll
 *                     description: The $nin's dotall.
 *                   __@match@1128:
 *                     type: object
 *                     description: The $nin's   @match@1128.
 *                   __@replace@1130:
 *                     type: object
 *                     description: The $nin's   @replace@1130.
 *                   __@search@1133:
 *                     type: object
 *                     description: The $nin's   @search@1133.
 *                   __@split@1135:
 *                     type: object
 *                     description: The $nin's   @split@1135.
 *                   __@matchAll@1137:
 *                     type: object
 *                     description: The $nin's   @matchall@1137.
 *         $not:
 *           oneOf:
 *             - type: string
 *               title: $not
 *               description: The deleted at's $not.
 *             - type: object
 *               description: The deleted at's $not.
 *               x-schemaName: RegExp
 *               required:
 *                 - exec
 *                 - test
 *                 - source
 *                 - global
 *                 - ignoreCase
 *                 - multiline
 *                 - lastIndex
 *                 - flags
 *                 - sticky
 *                 - unicode
 *                 - dotAll
 *                 - __@match@1128
 *                 - __@replace@1130
 *                 - __@search@1133
 *                 - __@matchAll@1137
 *               properties:
 *                 exec:
 *                   type: object
 *                   description: The $not's exec.
 *                 test:
 *                   type: object
 *                   description: The $not's test.
 *                 source:
 *                   type: string
 *                   title: source
 *                   description: The $not's source.
 *                 global:
 *                   type: boolean
 *                   title: global
 *                   description: The $not's global.
 *                 ignoreCase:
 *                   type: boolean
 *                   title: ignoreCase
 *                   description: The $not's ignorecase.
 *                 multiline:
 *                   type: boolean
 *                   title: multiline
 *                   description: The $not's multiline.
 *                 lastIndex:
 *                   type: number
 *                   title: lastIndex
 *                   description: The $not's lastindex.
 *                 compile:
 *                   type: object
 *                   description: The $not's compile.
 *                 flags:
 *                   type: string
 *                   title: flags
 *                   description: The $not's flags.
 *                 sticky:
 *                   type: boolean
 *                   title: sticky
 *                   description: The $not's sticky.
 *                 unicode:
 *                   type: boolean
 *                   title: unicode
 *                   description: The $not's unicode.
 *                 dotAll:
 *                   type: boolean
 *                   title: dotAll
 *                   description: The $not's dotall.
 *                 __@match@1128:
 *                   type: object
 *                   description: The $not's   @match@1128.
 *                 __@replace@1130:
 *                   type: object
 *                   description: The $not's   @replace@1130.
 *                 __@search@1133:
 *                   type: object
 *                   description: The $not's   @search@1133.
 *                 __@split@1135:
 *                   type: object
 *                   description: The $not's   @split@1135.
 *                 __@matchAll@1137:
 *                   type: object
 *                   description: The $not's   @matchall@1137.
 *             - type: object
 *               description: The deleted at's $not.
 *               properties:
 *                 $and:
 *                   type: array
 *                   description: The $not's $and.
 *                   items:
 *                     oneOf:
 *                       - type: string
 *                         title: $and
 *                         description: The $and's details.
 *                       - type: object
 *                         description: The $and's details.
 *                         x-schemaName: RegExp
 *                       - type: object
 *                         description: The $and's details.
 *                       - type: array
 *                         description: The $and's details.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $and
 *                               description: The $and's details.
 *                             - type: object
 *                               description: The $and's details.
 *                               x-schemaName: RegExp
 *                 $or:
 *                   type: array
 *                   description: The $not's $or.
 *                   items:
 *                     oneOf:
 *                       - type: string
 *                         title: $or
 *                         description: The $or's details.
 *                       - type: object
 *                         description: The $or's details.
 *                         x-schemaName: RegExp
 *                       - type: object
 *                         description: The $or's details.
 *                       - type: array
 *                         description: The $or's details.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $or
 *                               description: The $or's details.
 *                             - type: object
 *                               description: The $or's details.
 *                               x-schemaName: RegExp
 *                 $eq:
 *                   oneOf:
 *                     - type: string
 *                       title: $eq
 *                       description: The $not's $eq.
 *                     - type: object
 *                       description: The $not's $eq.
 *                       x-schemaName: RegExp
 *                     - type: array
 *                       description: The $not's $eq.
 *                       items:
 *                         oneOf:
 *                           - type: string
 *                             title: $eq
 *                             description: The $eq's details.
 *                           - type: object
 *                             description: The $eq's details.
 *                             x-schemaName: RegExp
 *                 $ne:
 *                   oneOf:
 *                     - type: string
 *                       title: $ne
 *                       description: The $not's $ne.
 *                     - type: object
 *                       description: The $not's $ne.
 *                       x-schemaName: RegExp
 *                 $in:
 *                   type: array
 *                   description: The $not's $in.
 *                   items:
 *                     oneOf:
 *                       - type: string
 *                         title: $in
 *                         description: The $in's details.
 *                       - type: object
 *                         description: The $in's details.
 *                         x-schemaName: RegExp
 *                 $nin:
 *                   type: array
 *                   description: The $not's $nin.
 *                   items:
 *                     oneOf:
 *                       - type: string
 *                         title: $nin
 *                         description: The $nin's details.
 *                       - type: object
 *                         description: The $nin's details.
 *                         x-schemaName: RegExp
 *                 $not:
 *                   oneOf:
 *                     - type: string
 *                       title: $not
 *                       description: The $not's details.
 *                     - type: object
 *                       description: The $not's details.
 *                       x-schemaName: RegExp
 *                     - type: object
 *                       description: The $not's details.
 *                     - type: array
 *                       description: The $not's details.
 *                       items:
 *                         oneOf:
 *                           - type: string
 *                             title: $not
 *                             description: The $not's details.
 *                           - type: object
 *                             description: The $not's details.
 *                             x-schemaName: RegExp
 *                 $gt:
 *                   oneOf:
 *                     - type: string
 *                       title: $gt
 *                       description: The $not's $gt.
 *                     - type: object
 *                       description: The $not's $gt.
 *                       x-schemaName: RegExp
 *                 $gte:
 *                   oneOf:
 *                     - type: string
 *                       title: $gte
 *                       description: The $not's $gte.
 *                     - type: object
 *                       description: The $not's $gte.
 *                       x-schemaName: RegExp
 *                 $lt:
 *                   oneOf:
 *                     - type: string
 *                       title: $lt
 *                       description: The $not's $lt.
 *                     - type: object
 *                       description: The $not's $lt.
 *                       x-schemaName: RegExp
 *                 $lte:
 *                   oneOf:
 *                     - type: string
 *                       title: $lte
 *                       description: The $not's $lte.
 *                     - type: object
 *                       description: The $not's $lte.
 *                       x-schemaName: RegExp
 *                 $like:
 *                   type: string
 *                   title: $like
 *                   description: The $not's $like.
 *                 $re:
 *                   type: string
 *                   title: $re
 *                   description: The $not's $re.
 *                 $ilike:
 *                   type: string
 *                   title: $ilike
 *                   description: The $not's $ilike.
 *                 $fulltext:
 *                   type: string
 *                   title: $fulltext
 *                   description: The $not's $fulltext.
 *                 $overlap:
 *                   type: array
 *                   description: The $not's $overlap.
 *                   items:
 *                     type: string
 *                     title: $overlap
 *                     description: The $overlap's details.
 *                 $contains:
 *                   type: array
 *                   description: The $not's $contains.
 *                   items:
 *                     type: string
 *                     title: $contains
 *                     description: The $contain's $contains.
 *                 $contained:
 *                   type: array
 *                   description: The $not's $contained.
 *                   items:
 *                     type: string
 *                     title: $contained
 *                     description: The $contained's details.
 *                 $exists:
 *                   type: boolean
 *                   title: $exists
 *                   description: The $not's $exists.
 *             - type: array
 *               description: The deleted at's $not.
 *               items:
 *                 oneOf:
 *                   - type: string
 *                     title: $not
 *                     description: The $not's details.
 *                   - type: object
 *                     description: The $not's details.
 *                     x-schemaName: RegExp
 *                     required:
 *                       - exec
 *                       - test
 *                       - source
 *                       - global
 *                       - ignoreCase
 *                       - multiline
 *                       - lastIndex
 *                       - flags
 *                       - sticky
 *                       - unicode
 *                       - dotAll
 *                       - __@match@1128
 *                       - __@replace@1130
 *                       - __@search@1133
 *                       - __@matchAll@1137
 *                     properties:
 *                       exec:
 *                         type: object
 *                         description: The $not's exec.
 *                       test:
 *                         type: object
 *                         description: The $not's test.
 *                       source:
 *                         type: string
 *                         title: source
 *                         description: The $not's source.
 *                       global:
 *                         type: boolean
 *                         title: global
 *                         description: The $not's global.
 *                       ignoreCase:
 *                         type: boolean
 *                         title: ignoreCase
 *                         description: The $not's ignorecase.
 *                       multiline:
 *                         type: boolean
 *                         title: multiline
 *                         description: The $not's multiline.
 *                       lastIndex:
 *                         type: number
 *                         title: lastIndex
 *                         description: The $not's lastindex.
 *                       compile:
 *                         type: object
 *                         description: The $not's compile.
 *                       flags:
 *                         type: string
 *                         title: flags
 *                         description: The $not's flags.
 *                       sticky:
 *                         type: boolean
 *                         title: sticky
 *                         description: The $not's sticky.
 *                       unicode:
 *                         type: boolean
 *                         title: unicode
 *                         description: The $not's unicode.
 *                       dotAll:
 *                         type: boolean
 *                         title: dotAll
 *                         description: The $not's dotall.
 *                       __@match@1128:
 *                         type: object
 *                         description: The $not's   @match@1128.
 *                       __@replace@1130:
 *                         type: object
 *                         description: The $not's   @replace@1130.
 *                       __@search@1133:
 *                         type: object
 *                         description: The $not's   @search@1133.
 *                       __@split@1135:
 *                         type: object
 *                         description: The $not's   @split@1135.
 *                       __@matchAll@1137:
 *                         type: object
 *                         description: The $not's   @matchall@1137.
 *         $gt:
 *           oneOf:
 *             - type: string
 *               title: $gt
 *               description: The deleted at's $gt.
 *             - type: object
 *               description: The deleted at's $gt.
 *               x-schemaName: RegExp
 *               required:
 *                 - exec
 *                 - test
 *                 - source
 *                 - global
 *                 - ignoreCase
 *                 - multiline
 *                 - lastIndex
 *                 - flags
 *                 - sticky
 *                 - unicode
 *                 - dotAll
 *                 - __@match@1128
 *                 - __@replace@1130
 *                 - __@search@1133
 *                 - __@matchAll@1137
 *               properties:
 *                 exec:
 *                   type: object
 *                   description: The $gt's exec.
 *                 test:
 *                   type: object
 *                   description: The $gt's test.
 *                 source:
 *                   type: string
 *                   title: source
 *                   description: The $gt's source.
 *                 global:
 *                   type: boolean
 *                   title: global
 *                   description: The $gt's global.
 *                 ignoreCase:
 *                   type: boolean
 *                   title: ignoreCase
 *                   description: The $gt's ignorecase.
 *                 multiline:
 *                   type: boolean
 *                   title: multiline
 *                   description: The $gt's multiline.
 *                 lastIndex:
 *                   type: number
 *                   title: lastIndex
 *                   description: The $gt's lastindex.
 *                 compile:
 *                   type: object
 *                   description: The $gt's compile.
 *                 flags:
 *                   type: string
 *                   title: flags
 *                   description: The $gt's flags.
 *                 sticky:
 *                   type: boolean
 *                   title: sticky
 *                   description: The $gt's sticky.
 *                 unicode:
 *                   type: boolean
 *                   title: unicode
 *                   description: The $gt's unicode.
 *                 dotAll:
 *                   type: boolean
 *                   title: dotAll
 *                   description: The $gt's dotall.
 *                 __@match@1128:
 *                   type: object
 *                   description: The $gt's   @match@1128.
 *                 __@replace@1130:
 *                   type: object
 *                   description: The $gt's   @replace@1130.
 *                 __@search@1133:
 *                   type: object
 *                   description: The $gt's   @search@1133.
 *                 __@split@1135:
 *                   type: object
 *                   description: The $gt's   @split@1135.
 *                 __@matchAll@1137:
 *                   type: object
 *                   description: The $gt's   @matchall@1137.
 *         $gte:
 *           oneOf:
 *             - type: string
 *               title: $gte
 *               description: The deleted at's $gte.
 *             - type: object
 *               description: The deleted at's $gte.
 *               x-schemaName: RegExp
 *               required:
 *                 - exec
 *                 - test
 *                 - source
 *                 - global
 *                 - ignoreCase
 *                 - multiline
 *                 - lastIndex
 *                 - flags
 *                 - sticky
 *                 - unicode
 *                 - dotAll
 *                 - __@match@1128
 *                 - __@replace@1130
 *                 - __@search@1133
 *                 - __@matchAll@1137
 *               properties:
 *                 exec:
 *                   type: object
 *                   description: The $gte's exec.
 *                 test:
 *                   type: object
 *                   description: The $gte's test.
 *                 source:
 *                   type: string
 *                   title: source
 *                   description: The $gte's source.
 *                 global:
 *                   type: boolean
 *                   title: global
 *                   description: The $gte's global.
 *                 ignoreCase:
 *                   type: boolean
 *                   title: ignoreCase
 *                   description: The $gte's ignorecase.
 *                 multiline:
 *                   type: boolean
 *                   title: multiline
 *                   description: The $gte's multiline.
 *                 lastIndex:
 *                   type: number
 *                   title: lastIndex
 *                   description: The $gte's lastindex.
 *                 compile:
 *                   type: object
 *                   description: The $gte's compile.
 *                 flags:
 *                   type: string
 *                   title: flags
 *                   description: The $gte's flags.
 *                 sticky:
 *                   type: boolean
 *                   title: sticky
 *                   description: The $gte's sticky.
 *                 unicode:
 *                   type: boolean
 *                   title: unicode
 *                   description: The $gte's unicode.
 *                 dotAll:
 *                   type: boolean
 *                   title: dotAll
 *                   description: The $gte's dotall.
 *                 __@match@1128:
 *                   type: object
 *                   description: The $gte's   @match@1128.
 *                 __@replace@1130:
 *                   type: object
 *                   description: The $gte's   @replace@1130.
 *                 __@search@1133:
 *                   type: object
 *                   description: The $gte's   @search@1133.
 *                 __@split@1135:
 *                   type: object
 *                   description: The $gte's   @split@1135.
 *                 __@matchAll@1137:
 *                   type: object
 *                   description: The $gte's   @matchall@1137.
 *         $lt:
 *           oneOf:
 *             - type: string
 *               title: $lt
 *               description: The deleted at's $lt.
 *             - type: object
 *               description: The deleted at's $lt.
 *               x-schemaName: RegExp
 *               required:
 *                 - exec
 *                 - test
 *                 - source
 *                 - global
 *                 - ignoreCase
 *                 - multiline
 *                 - lastIndex
 *                 - flags
 *                 - sticky
 *                 - unicode
 *                 - dotAll
 *                 - __@match@1128
 *                 - __@replace@1130
 *                 - __@search@1133
 *                 - __@matchAll@1137
 *               properties:
 *                 exec:
 *                   type: object
 *                   description: The $lt's exec.
 *                 test:
 *                   type: object
 *                   description: The $lt's test.
 *                 source:
 *                   type: string
 *                   title: source
 *                   description: The $lt's source.
 *                 global:
 *                   type: boolean
 *                   title: global
 *                   description: The $lt's global.
 *                 ignoreCase:
 *                   type: boolean
 *                   title: ignoreCase
 *                   description: The $lt's ignorecase.
 *                 multiline:
 *                   type: boolean
 *                   title: multiline
 *                   description: The $lt's multiline.
 *                 lastIndex:
 *                   type: number
 *                   title: lastIndex
 *                   description: The $lt's lastindex.
 *                 compile:
 *                   type: object
 *                   description: The $lt's compile.
 *                 flags:
 *                   type: string
 *                   title: flags
 *                   description: The $lt's flags.
 *                 sticky:
 *                   type: boolean
 *                   title: sticky
 *                   description: The $lt's sticky.
 *                 unicode:
 *                   type: boolean
 *                   title: unicode
 *                   description: The $lt's unicode.
 *                 dotAll:
 *                   type: boolean
 *                   title: dotAll
 *                   description: The $lt's dotall.
 *                 __@match@1128:
 *                   type: object
 *                   description: The $lt's   @match@1128.
 *                 __@replace@1130:
 *                   type: object
 *                   description: The $lt's   @replace@1130.
 *                 __@search@1133:
 *                   type: object
 *                   description: The $lt's   @search@1133.
 *                 __@split@1135:
 *                   type: object
 *                   description: The $lt's   @split@1135.
 *                 __@matchAll@1137:
 *                   type: object
 *                   description: The $lt's   @matchall@1137.
 *         $lte:
 *           oneOf:
 *             - type: string
 *               title: $lte
 *               description: The deleted at's $lte.
 *             - type: object
 *               description: The deleted at's $lte.
 *               x-schemaName: RegExp
 *               required:
 *                 - exec
 *                 - test
 *                 - source
 *                 - global
 *                 - ignoreCase
 *                 - multiline
 *                 - lastIndex
 *                 - flags
 *                 - sticky
 *                 - unicode
 *                 - dotAll
 *                 - __@match@1128
 *                 - __@replace@1130
 *                 - __@search@1133
 *                 - __@matchAll@1137
 *               properties:
 *                 exec:
 *                   type: object
 *                   description: The $lte's exec.
 *                 test:
 *                   type: object
 *                   description: The $lte's test.
 *                 source:
 *                   type: string
 *                   title: source
 *                   description: The $lte's source.
 *                 global:
 *                   type: boolean
 *                   title: global
 *                   description: The $lte's global.
 *                 ignoreCase:
 *                   type: boolean
 *                   title: ignoreCase
 *                   description: The $lte's ignorecase.
 *                 multiline:
 *                   type: boolean
 *                   title: multiline
 *                   description: The $lte's multiline.
 *                 lastIndex:
 *                   type: number
 *                   title: lastIndex
 *                   description: The $lte's lastindex.
 *                 compile:
 *                   type: object
 *                   description: The $lte's compile.
 *                 flags:
 *                   type: string
 *                   title: flags
 *                   description: The $lte's flags.
 *                 sticky:
 *                   type: boolean
 *                   title: sticky
 *                   description: The $lte's sticky.
 *                 unicode:
 *                   type: boolean
 *                   title: unicode
 *                   description: The $lte's unicode.
 *                 dotAll:
 *                   type: boolean
 *                   title: dotAll
 *                   description: The $lte's dotall.
 *                 __@match@1128:
 *                   type: object
 *                   description: The $lte's   @match@1128.
 *                 __@replace@1130:
 *                   type: object
 *                   description: The $lte's   @replace@1130.
 *                 __@search@1133:
 *                   type: object
 *                   description: The $lte's   @search@1133.
 *                 __@split@1135:
 *                   type: object
 *                   description: The $lte's   @split@1135.
 *                 __@matchAll@1137:
 *                   type: object
 *                   description: The $lte's   @matchall@1137.
 *         $like:
 *           type: string
 *           title: $like
 *           description: The deleted at's $like.
 *         $re:
 *           type: string
 *           title: $re
 *           description: The deleted at's $re.
 *         $ilike:
 *           type: string
 *           title: $ilike
 *           description: The deleted at's $ilike.
 *         $fulltext:
 *           type: string
 *           title: $fulltext
 *           description: The deleted at's $fulltext.
 *         $overlap:
 *           type: array
 *           description: The deleted at's $overlap.
 *           items:
 *             type: string
 *             title: $overlap
 *             description: The $overlap's details.
 *         $contains:
 *           type: array
 *           description: The deleted at's $contains.
 *           items:
 *             type: string
 *             title: $contains
 *             description: The $contain's $contains.
 *         $contained:
 *           type: array
 *           description: The deleted at's $contained.
 *           items:
 *             type: string
 *             title: $contained
 *             description: The $contained's details.
 *         $exists:
 *           type: boolean
 *           title: $exists
 *           description: The deleted at's $exists.
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
 *             x-schemaName: BaseProductListParams
 *             properties:
 *               q:
 *                 type: string
 *                 title: q
 *                 description: The $and's q.
 *               status:
 *                 oneOf:
 *                   - type: string
 *                     title: status
 *                     description: The $and's status.
 *                   - type: string
 *                     title: status
 *                     description: The $and's status.
 *                   - type: string
 *                     title: status
 *                     description: The $and's status.
 *                   - type: string
 *                     title: status
 *                     description: The $and's status.
 *                   - type: array
 *                     description: The $and's status.
 *                     items:
 *                       type: string
 *                       enum:
 *                         - draft
 *                         - proposed
 *                         - published
 *                         - rejected
 *               sales_channel_id:
 *                 oneOf:
 *                   - type: string
 *                     title: sales_channel_id
 *                     description: The $and's sales channel id.
 *                   - type: array
 *                     description: The $and's sales channel id.
 *                     items:
 *                       type: string
 *                       title: sales_channel_id
 *                       description: The sales channel id's details.
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
 *               handle:
 *                 oneOf:
 *                   - type: string
 *                     title: handle
 *                     description: The $and's handle.
 *                   - type: array
 *                     description: The $and's handle.
 *                     items:
 *                       type: string
 *                       title: handle
 *                       description: The handle's details.
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
 *               is_giftcard:
 *                 type: boolean
 *                 title: is_giftcard
 *                 description: The $and's is giftcard.
 *               tags:
 *                 type: object
 *                 description: The $and's tags.
 *                 properties:
 *                   value:
 *                     type: array
 *                     description: The tag's value.
 *                     items:
 *                       type: string
 *                       title: value
 *                       description: The value's details.
 *               type_id:
 *                 oneOf:
 *                   - type: string
 *                     title: type_id
 *                     description: The $and's type id.
 *                   - type: array
 *                     description: The $and's type id.
 *                     items:
 *                       type: string
 *                       title: type_id
 *                       description: The type id's details.
 *               category_id:
 *                 oneOf:
 *                   - type: string
 *                     title: category_id
 *                     description: The $and's category id.
 *                   - type: array
 *                     description: The $and's category id.
 *                     items:
 *                       type: string
 *                       title: category_id
 *                       description: The category id's details.
 *                   - type: object
 *                     description: The $and's category id.
 *                     properties:
 *                       $and:
 *                         type: array
 *                         description: The category id's $and.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $and
 *                               description: The $and's details.
 *                             - type: object
 *                               description: The $and's details.
 *                               x-schemaName: RegExp
 *                             - type: object
 *                               description: The $and's details.
 *                             - type: array
 *                               description: The $and's details.
 *                               items:
 *                                 oneOf:
 *                                   - type: string
 *                                     title: $and
 *                                     description: The $and's details.
 *                                   - type: object
 *                                     description: The $and's details.
 *                                     x-schemaName: RegExp
 *                       $or:
 *                         type: array
 *                         description: The category id's $or.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $or
 *                               description: The $or's details.
 *                             - type: object
 *                               description: The $or's details.
 *                               x-schemaName: RegExp
 *                             - type: object
 *                               description: The $or's details.
 *                             - type: array
 *                               description: The $or's details.
 *                               items:
 *                                 oneOf:
 *                                   - type: string
 *                                     title: $or
 *                                     description: The $or's details.
 *                                   - type: object
 *                                     description: The $or's details.
 *                                     x-schemaName: RegExp
 *                       $eq:
 *                         oneOf:
 *                           - type: string
 *                             title: $eq
 *                             description: The category id's $eq.
 *                           - type: object
 *                             description: The category id's $eq.
 *                             x-schemaName: RegExp
 *                           - type: array
 *                             description: The category id's $eq.
 *                             items:
 *                               oneOf:
 *                                 - type: string
 *                                   title: $eq
 *                                   description: The $eq's details.
 *                                 - type: object
 *                                   description: The $eq's details.
 *                                   x-schemaName: RegExp
 *                       $ne:
 *                         oneOf:
 *                           - type: string
 *                             title: $ne
 *                             description: The category id's $ne.
 *                           - type: object
 *                             description: The category id's $ne.
 *                             x-schemaName: RegExp
 *                       $in:
 *                         type: array
 *                         description: The category id's $in.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $in
 *                               description: The $in's details.
 *                             - type: object
 *                               description: The $in's details.
 *                               x-schemaName: RegExp
 *                       $nin:
 *                         type: array
 *                         description: The category id's $nin.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $nin
 *                               description: The $nin's details.
 *                             - type: object
 *                               description: The $nin's details.
 *                               x-schemaName: RegExp
 *                       $not:
 *                         oneOf:
 *                           - type: string
 *                             title: $not
 *                             description: The category id's $not.
 *                           - type: object
 *                             description: The category id's $not.
 *                             x-schemaName: RegExp
 *                           - type: object
 *                             description: The category id's $not.
 *                           - type: array
 *                             description: The category id's $not.
 *                             items:
 *                               oneOf:
 *                                 - type: string
 *                                   title: $not
 *                                   description: The $not's details.
 *                                 - type: object
 *                                   description: The $not's details.
 *                                   x-schemaName: RegExp
 *                       $gt:
 *                         oneOf:
 *                           - type: string
 *                             title: $gt
 *                             description: The category id's $gt.
 *                           - type: object
 *                             description: The category id's $gt.
 *                             x-schemaName: RegExp
 *                       $gte:
 *                         oneOf:
 *                           - type: string
 *                             title: $gte
 *                             description: The category id's $gte.
 *                           - type: object
 *                             description: The category id's $gte.
 *                             x-schemaName: RegExp
 *                       $lt:
 *                         oneOf:
 *                           - type: string
 *                             title: $lt
 *                             description: The category id's $lt.
 *                           - type: object
 *                             description: The category id's $lt.
 *                             x-schemaName: RegExp
 *                       $lte:
 *                         oneOf:
 *                           - type: string
 *                             title: $lte
 *                             description: The category id's $lte.
 *                           - type: object
 *                             description: The category id's $lte.
 *                             x-schemaName: RegExp
 *                       $like:
 *                         type: string
 *                         title: $like
 *                         description: The category id's $like.
 *                       $re:
 *                         type: string
 *                         title: $re
 *                         description: The category id's $re.
 *                       $ilike:
 *                         type: string
 *                         title: $ilike
 *                         description: The category id's $ilike.
 *                       $fulltext:
 *                         type: string
 *                         title: $fulltext
 *                         description: The category id's $fulltext.
 *                       $overlap:
 *                         type: array
 *                         description: The category id's $overlap.
 *                         items:
 *                           type: string
 *                           title: $overlap
 *                           description: The $overlap's details.
 *                       $contains:
 *                         type: array
 *                         description: The category id's $contains.
 *                         items:
 *                           type: string
 *                           title: $contains
 *                           description: The $contain's $contains.
 *                       $contained:
 *                         type: array
 *                         description: The category id's $contained.
 *                         items:
 *                           type: string
 *                           title: $contained
 *                           description: The $contained's details.
 *                       $exists:
 *                         type: boolean
 *                         title: $exists
 *                         description: The category id's $exists.
 *               categories:
 *                 oneOf:
 *                   - type: object
 *                     description: The $and's categories.
 *                     required:
 *                       - id
 *                     properties:
 *                       id:
 *                         type: object
 *                         description: The category's ID.
 *                   - type: object
 *                     description: The $and's categories.
 *                     required:
 *                       - id
 *                     properties:
 *                       id:
 *                         type: object
 *                         description: The category's ID.
 *               collection_id:
 *                 oneOf:
 *                   - type: string
 *                     title: collection_id
 *                     description: The $and's collection id.
 *                   - type: array
 *                     description: The $and's collection id.
 *                     items:
 *                       type: string
 *                       title: collection_id
 *                       description: The collection id's details.
 *                   - type: object
 *                     description: The $and's collection id.
 *                     properties:
 *                       $and:
 *                         type: array
 *                         description: The collection id's $and.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $and
 *                               description: The $and's details.
 *                             - type: object
 *                               description: The $and's details.
 *                               x-schemaName: RegExp
 *                             - type: object
 *                               description: The $and's details.
 *                             - type: array
 *                               description: The $and's details.
 *                               items:
 *                                 oneOf:
 *                                   - type: string
 *                                     title: $and
 *                                     description: The $and's details.
 *                                   - type: object
 *                                     description: The $and's details.
 *                                     x-schemaName: RegExp
 *                       $or:
 *                         type: array
 *                         description: The collection id's $or.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $or
 *                               description: The $or's details.
 *                             - type: object
 *                               description: The $or's details.
 *                               x-schemaName: RegExp
 *                             - type: object
 *                               description: The $or's details.
 *                             - type: array
 *                               description: The $or's details.
 *                               items:
 *                                 oneOf:
 *                                   - type: string
 *                                     title: $or
 *                                     description: The $or's details.
 *                                   - type: object
 *                                     description: The $or's details.
 *                                     x-schemaName: RegExp
 *                       $eq:
 *                         oneOf:
 *                           - type: string
 *                             title: $eq
 *                             description: The collection id's $eq.
 *                           - type: object
 *                             description: The collection id's $eq.
 *                             x-schemaName: RegExp
 *                           - type: array
 *                             description: The collection id's $eq.
 *                             items:
 *                               oneOf:
 *                                 - type: string
 *                                   title: $eq
 *                                   description: The $eq's details.
 *                                 - type: object
 *                                   description: The $eq's details.
 *                                   x-schemaName: RegExp
 *                       $ne:
 *                         oneOf:
 *                           - type: string
 *                             title: $ne
 *                             description: The collection id's $ne.
 *                           - type: object
 *                             description: The collection id's $ne.
 *                             x-schemaName: RegExp
 *                       $in:
 *                         type: array
 *                         description: The collection id's $in.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $in
 *                               description: The $in's details.
 *                             - type: object
 *                               description: The $in's details.
 *                               x-schemaName: RegExp
 *                       $nin:
 *                         type: array
 *                         description: The collection id's $nin.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $nin
 *                               description: The $nin's details.
 *                             - type: object
 *                               description: The $nin's details.
 *                               x-schemaName: RegExp
 *                       $not:
 *                         oneOf:
 *                           - type: string
 *                             title: $not
 *                             description: The collection id's $not.
 *                           - type: object
 *                             description: The collection id's $not.
 *                             x-schemaName: RegExp
 *                           - type: object
 *                             description: The collection id's $not.
 *                           - type: array
 *                             description: The collection id's $not.
 *                             items:
 *                               oneOf:
 *                                 - type: string
 *                                   title: $not
 *                                   description: The $not's details.
 *                                 - type: object
 *                                   description: The $not's details.
 *                                   x-schemaName: RegExp
 *                       $gt:
 *                         oneOf:
 *                           - type: string
 *                             title: $gt
 *                             description: The collection id's $gt.
 *                           - type: object
 *                             description: The collection id's $gt.
 *                             x-schemaName: RegExp
 *                       $gte:
 *                         oneOf:
 *                           - type: string
 *                             title: $gte
 *                             description: The collection id's $gte.
 *                           - type: object
 *                             description: The collection id's $gte.
 *                             x-schemaName: RegExp
 *                       $lt:
 *                         oneOf:
 *                           - type: string
 *                             title: $lt
 *                             description: The collection id's $lt.
 *                           - type: object
 *                             description: The collection id's $lt.
 *                             x-schemaName: RegExp
 *                       $lte:
 *                         oneOf:
 *                           - type: string
 *                             title: $lte
 *                             description: The collection id's $lte.
 *                           - type: object
 *                             description: The collection id's $lte.
 *                             x-schemaName: RegExp
 *                       $like:
 *                         type: string
 *                         title: $like
 *                         description: The collection id's $like.
 *                       $re:
 *                         type: string
 *                         title: $re
 *                         description: The collection id's $re.
 *                       $ilike:
 *                         type: string
 *                         title: $ilike
 *                         description: The collection id's $ilike.
 *                       $fulltext:
 *                         type: string
 *                         title: $fulltext
 *                         description: The collection id's $fulltext.
 *                       $overlap:
 *                         type: array
 *                         description: The collection id's $overlap.
 *                         items:
 *                           type: string
 *                           title: $overlap
 *                           description: The $overlap's details.
 *                       $contains:
 *                         type: array
 *                         description: The collection id's $contains.
 *                         items:
 *                           type: string
 *                           title: $contains
 *                           description: The $contain's $contains.
 *                       $contained:
 *                         type: array
 *                         description: The collection id's $contained.
 *                         items:
 *                           type: string
 *                           title: $contained
 *                           description: The $contained's details.
 *                       $exists:
 *                         type: boolean
 *                         title: $exists
 *                         description: The collection id's $exists.
 *               created_at:
 *                 type: object
 *                 description: The $and's created at.
 *                 properties:
 *                   $and:
 *                     type: array
 *                     description: The created at's $and.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $and
 *                           description: The $and's details.
 *                         - type: object
 *                           description: The $and's details.
 *                           x-schemaName: RegExp
 *                         - type: object
 *                           description: The $and's details.
 *                         - type: array
 *                           description: The $and's details.
 *                           items:
 *                             oneOf:
 *                               - type: string
 *                                 title: $and
 *                                 description: The $and's details.
 *                               - type: object
 *                                 description: The $and's details.
 *                                 x-schemaName: RegExp
 *                   $or:
 *                     type: array
 *                     description: The created at's $or.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $or
 *                           description: The $or's details.
 *                         - type: object
 *                           description: The $or's details.
 *                           x-schemaName: RegExp
 *                         - type: object
 *                           description: The $or's details.
 *                         - type: array
 *                           description: The $or's details.
 *                           items:
 *                             oneOf:
 *                               - type: string
 *                                 title: $or
 *                                 description: The $or's details.
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: RegExp
 *                   $eq:
 *                     oneOf:
 *                       - type: string
 *                         title: $eq
 *                         description: The created at's $eq.
 *                       - type: object
 *                         description: The created at's $eq.
 *                         x-schemaName: RegExp
 *                       - type: array
 *                         description: The created at's $eq.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $eq
 *                               description: The $eq's details.
 *                             - type: object
 *                               description: The $eq's details.
 *                               x-schemaName: RegExp
 *                   $ne:
 *                     oneOf:
 *                       - type: string
 *                         title: $ne
 *                         description: The created at's $ne.
 *                       - type: object
 *                         description: The created at's $ne.
 *                         x-schemaName: RegExp
 *                   $in:
 *                     type: array
 *                     description: The created at's $in.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $in
 *                           description: The $in's details.
 *                         - type: object
 *                           description: The $in's details.
 *                           x-schemaName: RegExp
 *                   $nin:
 *                     type: array
 *                     description: The created at's $nin.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $nin
 *                           description: The $nin's details.
 *                         - type: object
 *                           description: The $nin's details.
 *                           x-schemaName: RegExp
 *                   $not:
 *                     oneOf:
 *                       - type: string
 *                         title: $not
 *                         description: The created at's $not.
 *                       - type: object
 *                         description: The created at's $not.
 *                         x-schemaName: RegExp
 *                       - type: object
 *                         description: The created at's $not.
 *                       - type: array
 *                         description: The created at's $not.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $not
 *                               description: The $not's details.
 *                             - type: object
 *                               description: The $not's details.
 *                               x-schemaName: RegExp
 *                   $gt:
 *                     oneOf:
 *                       - type: string
 *                         title: $gt
 *                         description: The created at's $gt.
 *                       - type: object
 *                         description: The created at's $gt.
 *                         x-schemaName: RegExp
 *                   $gte:
 *                     oneOf:
 *                       - type: string
 *                         title: $gte
 *                         description: The created at's $gte.
 *                       - type: object
 *                         description: The created at's $gte.
 *                         x-schemaName: RegExp
 *                   $lt:
 *                     oneOf:
 *                       - type: string
 *                         title: $lt
 *                         description: The created at's $lt.
 *                       - type: object
 *                         description: The created at's $lt.
 *                         x-schemaName: RegExp
 *                   $lte:
 *                     oneOf:
 *                       - type: string
 *                         title: $lte
 *                         description: The created at's $lte.
 *                       - type: object
 *                         description: The created at's $lte.
 *                         x-schemaName: RegExp
 *                   $like:
 *                     type: string
 *                     title: $like
 *                     description: The created at's $like.
 *                   $re:
 *                     type: string
 *                     title: $re
 *                     description: The created at's $re.
 *                   $ilike:
 *                     type: string
 *                     title: $ilike
 *                     description: The created at's $ilike.
 *                   $fulltext:
 *                     type: string
 *                     title: $fulltext
 *                     description: The created at's $fulltext.
 *                   $overlap:
 *                     type: array
 *                     description: The created at's $overlap.
 *                     items:
 *                       type: string
 *                       title: $overlap
 *                       description: The $overlap's details.
 *                   $contains:
 *                     type: array
 *                     description: The created at's $contains.
 *                     items:
 *                       type: string
 *                       title: $contains
 *                       description: The $contain's $contains.
 *                   $contained:
 *                     type: array
 *                     description: The created at's $contained.
 *                     items:
 *                       type: string
 *                       title: $contained
 *                       description: The $contained's details.
 *                   $exists:
 *                     type: boolean
 *                     title: $exists
 *                     description: The created at's $exists.
 *               updated_at:
 *                 type: object
 *                 description: The $and's updated at.
 *                 properties:
 *                   $and:
 *                     type: array
 *                     description: The updated at's $and.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $and
 *                           description: The $and's details.
 *                         - type: object
 *                           description: The $and's details.
 *                           x-schemaName: RegExp
 *                         - type: object
 *                           description: The $and's details.
 *                         - type: array
 *                           description: The $and's details.
 *                           items:
 *                             oneOf:
 *                               - type: string
 *                                 title: $and
 *                                 description: The $and's details.
 *                               - type: object
 *                                 description: The $and's details.
 *                                 x-schemaName: RegExp
 *                   $or:
 *                     type: array
 *                     description: The updated at's $or.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $or
 *                           description: The $or's details.
 *                         - type: object
 *                           description: The $or's details.
 *                           x-schemaName: RegExp
 *                         - type: object
 *                           description: The $or's details.
 *                         - type: array
 *                           description: The $or's details.
 *                           items:
 *                             oneOf:
 *                               - type: string
 *                                 title: $or
 *                                 description: The $or's details.
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: RegExp
 *                   $eq:
 *                     oneOf:
 *                       - type: string
 *                         title: $eq
 *                         description: The updated at's $eq.
 *                       - type: object
 *                         description: The updated at's $eq.
 *                         x-schemaName: RegExp
 *                       - type: array
 *                         description: The updated at's $eq.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $eq
 *                               description: The $eq's details.
 *                             - type: object
 *                               description: The $eq's details.
 *                               x-schemaName: RegExp
 *                   $ne:
 *                     oneOf:
 *                       - type: string
 *                         title: $ne
 *                         description: The updated at's $ne.
 *                       - type: object
 *                         description: The updated at's $ne.
 *                         x-schemaName: RegExp
 *                   $in:
 *                     type: array
 *                     description: The updated at's $in.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $in
 *                           description: The $in's details.
 *                         - type: object
 *                           description: The $in's details.
 *                           x-schemaName: RegExp
 *                   $nin:
 *                     type: array
 *                     description: The updated at's $nin.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $nin
 *                           description: The $nin's details.
 *                         - type: object
 *                           description: The $nin's details.
 *                           x-schemaName: RegExp
 *                   $not:
 *                     oneOf:
 *                       - type: string
 *                         title: $not
 *                         description: The updated at's $not.
 *                       - type: object
 *                         description: The updated at's $not.
 *                         x-schemaName: RegExp
 *                       - type: object
 *                         description: The updated at's $not.
 *                       - type: array
 *                         description: The updated at's $not.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $not
 *                               description: The $not's details.
 *                             - type: object
 *                               description: The $not's details.
 *                               x-schemaName: RegExp
 *                   $gt:
 *                     oneOf:
 *                       - type: string
 *                         title: $gt
 *                         description: The updated at's $gt.
 *                       - type: object
 *                         description: The updated at's $gt.
 *                         x-schemaName: RegExp
 *                   $gte:
 *                     oneOf:
 *                       - type: string
 *                         title: $gte
 *                         description: The updated at's $gte.
 *                       - type: object
 *                         description: The updated at's $gte.
 *                         x-schemaName: RegExp
 *                   $lt:
 *                     oneOf:
 *                       - type: string
 *                         title: $lt
 *                         description: The updated at's $lt.
 *                       - type: object
 *                         description: The updated at's $lt.
 *                         x-schemaName: RegExp
 *                   $lte:
 *                     oneOf:
 *                       - type: string
 *                         title: $lte
 *                         description: The updated at's $lte.
 *                       - type: object
 *                         description: The updated at's $lte.
 *                         x-schemaName: RegExp
 *                   $like:
 *                     type: string
 *                     title: $like
 *                     description: The updated at's $like.
 *                   $re:
 *                     type: string
 *                     title: $re
 *                     description: The updated at's $re.
 *                   $ilike:
 *                     type: string
 *                     title: $ilike
 *                     description: The updated at's $ilike.
 *                   $fulltext:
 *                     type: string
 *                     title: $fulltext
 *                     description: The updated at's $fulltext.
 *                   $overlap:
 *                     type: array
 *                     description: The updated at's $overlap.
 *                     items:
 *                       type: string
 *                       title: $overlap
 *                       description: The $overlap's details.
 *                   $contains:
 *                     type: array
 *                     description: The updated at's $contains.
 *                     items:
 *                       type: string
 *                       title: $contains
 *                       description: The $contain's $contains.
 *                   $contained:
 *                     type: array
 *                     description: The updated at's $contained.
 *                     items:
 *                       type: string
 *                       title: $contained
 *                       description: The $contained's details.
 *                   $exists:
 *                     type: boolean
 *                     title: $exists
 *                     description: The updated at's $exists.
 *               deleted_at:
 *                 type: object
 *                 description: The $and's deleted at.
 *                 properties:
 *                   $and:
 *                     type: array
 *                     description: The deleted at's $and.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $and
 *                           description: The $and's details.
 *                         - type: object
 *                           description: The $and's details.
 *                           x-schemaName: RegExp
 *                         - type: object
 *                           description: The $and's details.
 *                         - type: array
 *                           description: The $and's details.
 *                           items:
 *                             oneOf:
 *                               - type: string
 *                                 title: $and
 *                                 description: The $and's details.
 *                               - type: object
 *                                 description: The $and's details.
 *                                 x-schemaName: RegExp
 *                   $or:
 *                     type: array
 *                     description: The deleted at's $or.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $or
 *                           description: The $or's details.
 *                         - type: object
 *                           description: The $or's details.
 *                           x-schemaName: RegExp
 *                         - type: object
 *                           description: The $or's details.
 *                         - type: array
 *                           description: The $or's details.
 *                           items:
 *                             oneOf:
 *                               - type: string
 *                                 title: $or
 *                                 description: The $or's details.
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: RegExp
 *                   $eq:
 *                     oneOf:
 *                       - type: string
 *                         title: $eq
 *                         description: The deleted at's $eq.
 *                       - type: object
 *                         description: The deleted at's $eq.
 *                         x-schemaName: RegExp
 *                       - type: array
 *                         description: The deleted at's $eq.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $eq
 *                               description: The $eq's details.
 *                             - type: object
 *                               description: The $eq's details.
 *                               x-schemaName: RegExp
 *                   $ne:
 *                     oneOf:
 *                       - type: string
 *                         title: $ne
 *                         description: The deleted at's $ne.
 *                       - type: object
 *                         description: The deleted at's $ne.
 *                         x-schemaName: RegExp
 *                   $in:
 *                     type: array
 *                     description: The deleted at's $in.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $in
 *                           description: The $in's details.
 *                         - type: object
 *                           description: The $in's details.
 *                           x-schemaName: RegExp
 *                   $nin:
 *                     type: array
 *                     description: The deleted at's $nin.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $nin
 *                           description: The $nin's details.
 *                         - type: object
 *                           description: The $nin's details.
 *                           x-schemaName: RegExp
 *                   $not:
 *                     oneOf:
 *                       - type: string
 *                         title: $not
 *                         description: The deleted at's $not.
 *                       - type: object
 *                         description: The deleted at's $not.
 *                         x-schemaName: RegExp
 *                       - type: object
 *                         description: The deleted at's $not.
 *                       - type: array
 *                         description: The deleted at's $not.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $not
 *                               description: The $not's details.
 *                             - type: object
 *                               description: The $not's details.
 *                               x-schemaName: RegExp
 *                   $gt:
 *                     oneOf:
 *                       - type: string
 *                         title: $gt
 *                         description: The deleted at's $gt.
 *                       - type: object
 *                         description: The deleted at's $gt.
 *                         x-schemaName: RegExp
 *                   $gte:
 *                     oneOf:
 *                       - type: string
 *                         title: $gte
 *                         description: The deleted at's $gte.
 *                       - type: object
 *                         description: The deleted at's $gte.
 *                         x-schemaName: RegExp
 *                   $lt:
 *                     oneOf:
 *                       - type: string
 *                         title: $lt
 *                         description: The deleted at's $lt.
 *                       - type: object
 *                         description: The deleted at's $lt.
 *                         x-schemaName: RegExp
 *                   $lte:
 *                     oneOf:
 *                       - type: string
 *                         title: $lte
 *                         description: The deleted at's $lte.
 *                       - type: object
 *                         description: The deleted at's $lte.
 *                         x-schemaName: RegExp
 *                   $like:
 *                     type: string
 *                     title: $like
 *                     description: The deleted at's $like.
 *                   $re:
 *                     type: string
 *                     title: $re
 *                     description: The deleted at's $re.
 *                   $ilike:
 *                     type: string
 *                     title: $ilike
 *                     description: The deleted at's $ilike.
 *                   $fulltext:
 *                     type: string
 *                     title: $fulltext
 *                     description: The deleted at's $fulltext.
 *                   $overlap:
 *                     type: array
 *                     description: The deleted at's $overlap.
 *                     items:
 *                       type: string
 *                       title: $overlap
 *                       description: The $overlap's details.
 *                   $contains:
 *                     type: array
 *                     description: The deleted at's $contains.
 *                     items:
 *                       type: string
 *                       title: $contains
 *                       description: The $contain's $contains.
 *                   $contained:
 *                     type: array
 *                     description: The deleted at's $contained.
 *                     items:
 *                       type: string
 *                       title: $contained
 *                       description: The $contained's details.
 *                   $exists:
 *                     type: boolean
 *                     title: $exists
 *                     description: The deleted at's $exists.
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
 *                       x-schemaName: BaseProductListParams
 *                       properties:
 *                         q:
 *                           type: string
 *                           title: q
 *                           description: The $and's q.
 *                         status:
 *                           oneOf:
 *                             - type: string
 *                               title: status
 *                               description: The $and's status.
 *                             - type: string
 *                               title: status
 *                               description: The $and's status.
 *                             - type: string
 *                               title: status
 *                               description: The $and's status.
 *                             - type: string
 *                               title: status
 *                               description: The $and's status.
 *                             - type: array
 *                               description: The $and's status.
 *                               items:
 *                                 type: string
 *                                 enum:
 *                                   - draft
 *                                   - proposed
 *                                   - published
 *                                   - rejected
 *                         sales_channel_id:
 *                           oneOf:
 *                             - type: string
 *                               title: sales_channel_id
 *                               description: The $and's sales channel id.
 *                             - type: array
 *                               description: The $and's sales channel id.
 *                               items:
 *                                 type: string
 *                                 title: sales_channel_id
 *                                 description: The sales channel id's details.
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
 *                         handle:
 *                           oneOf:
 *                             - type: string
 *                               title: handle
 *                               description: The $and's handle.
 *                             - type: array
 *                               description: The $and's handle.
 *                               items:
 *                                 type: string
 *                                 title: handle
 *                                 description: The handle's details.
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
 *                         is_giftcard:
 *                           type: boolean
 *                           title: is_giftcard
 *                           description: The $and's is giftcard.
 *                         tags:
 *                           type: object
 *                           description: The $and's tags.
 *                         type_id:
 *                           oneOf:
 *                             - type: string
 *                               title: type_id
 *                               description: The $and's type id.
 *                             - type: array
 *                               description: The $and's type id.
 *                               items:
 *                                 type: string
 *                                 title: type_id
 *                                 description: The type id's details.
 *                         category_id:
 *                           oneOf:
 *                             - type: string
 *                               title: category_id
 *                               description: The $and's category id.
 *                             - type: array
 *                               description: The $and's category id.
 *                               items:
 *                                 type: string
 *                                 title: category_id
 *                                 description: The category id's details.
 *                             - type: object
 *                               description: The $and's category id.
 *                         categories:
 *                           oneOf:
 *                             - type: object
 *                               description: The $and's categories.
 *                             - type: object
 *                               description: The $and's categories.
 *                         collection_id:
 *                           oneOf:
 *                             - type: string
 *                               title: collection_id
 *                               description: The $and's collection id.
 *                             - type: array
 *                               description: The $and's collection id.
 *                               items:
 *                                 type: string
 *                                 title: collection_id
 *                                 description: The collection id's details.
 *                             - type: object
 *                               description: The $and's collection id.
 *                         created_at:
 *                           type: object
 *                           description: The $and's created at.
 *                         updated_at:
 *                           type: object
 *                           description: The $and's updated at.
 *                         deleted_at:
 *                           type: object
 *                           description: The $and's deleted at.
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
 *                                 x-schemaName: BaseProductListParams
 *                               - type: object
 *                                 description: The $and's details.
 *                         $or:
 *                           type: array
 *                           description: The $and's $or.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: BaseProductListParams
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
 *                                 x-schemaName: BaseProductListParams
 *                               - type: object
 *                                 description: The $and's details.
 *                         $or:
 *                           type: array
 *                           description: The $and's $or.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: BaseProductListParams
 *                               - type: object
 *                                 description: The $or's details.
 *               $or:
 *                 type: array
 *                 description: The $and's $or.
 *                 items:
 *                   oneOf:
 *                     - type: object
 *                       description: The $or's details.
 *                       x-schemaName: BaseProductListParams
 *                       properties:
 *                         q:
 *                           type: string
 *                           title: q
 *                           description: The $or's q.
 *                         status:
 *                           oneOf:
 *                             - type: string
 *                               title: status
 *                               description: The $or's status.
 *                             - type: string
 *                               title: status
 *                               description: The $or's status.
 *                             - type: string
 *                               title: status
 *                               description: The $or's status.
 *                             - type: string
 *                               title: status
 *                               description: The $or's status.
 *                             - type: array
 *                               description: The $or's status.
 *                               items:
 *                                 type: string
 *                                 enum:
 *                                   - draft
 *                                   - proposed
 *                                   - published
 *                                   - rejected
 *                         sales_channel_id:
 *                           oneOf:
 *                             - type: string
 *                               title: sales_channel_id
 *                               description: The $or's sales channel id.
 *                             - type: array
 *                               description: The $or's sales channel id.
 *                               items:
 *                                 type: string
 *                                 title: sales_channel_id
 *                                 description: The sales channel id's details.
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
 *                         handle:
 *                           oneOf:
 *                             - type: string
 *                               title: handle
 *                               description: The $or's handle.
 *                             - type: array
 *                               description: The $or's handle.
 *                               items:
 *                                 type: string
 *                                 title: handle
 *                                 description: The handle's details.
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
 *                         is_giftcard:
 *                           type: boolean
 *                           title: is_giftcard
 *                           description: The $or's is giftcard.
 *                         tags:
 *                           type: object
 *                           description: The $or's tags.
 *                         type_id:
 *                           oneOf:
 *                             - type: string
 *                               title: type_id
 *                               description: The $or's type id.
 *                             - type: array
 *                               description: The $or's type id.
 *                               items:
 *                                 type: string
 *                                 title: type_id
 *                                 description: The type id's details.
 *                         category_id:
 *                           oneOf:
 *                             - type: string
 *                               title: category_id
 *                               description: The $or's category id.
 *                             - type: array
 *                               description: The $or's category id.
 *                               items:
 *                                 type: string
 *                                 title: category_id
 *                                 description: The category id's details.
 *                             - type: object
 *                               description: The $or's category id.
 *                         categories:
 *                           oneOf:
 *                             - type: object
 *                               description: The $or's categories.
 *                             - type: object
 *                               description: The $or's categories.
 *                         collection_id:
 *                           oneOf:
 *                             - type: string
 *                               title: collection_id
 *                               description: The $or's collection id.
 *                             - type: array
 *                               description: The $or's collection id.
 *                               items:
 *                                 type: string
 *                                 title: collection_id
 *                                 description: The collection id's details.
 *                             - type: object
 *                               description: The $or's collection id.
 *                         created_at:
 *                           type: object
 *                           description: The $or's created at.
 *                         updated_at:
 *                           type: object
 *                           description: The $or's updated at.
 *                         deleted_at:
 *                           type: object
 *                           description: The $or's deleted at.
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
 *                                 x-schemaName: BaseProductListParams
 *                               - type: object
 *                                 description: The $and's details.
 *                         $or:
 *                           type: array
 *                           description: The $or's details.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: BaseProductListParams
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
 *                                 x-schemaName: BaseProductListParams
 *                               - type: object
 *                                 description: The $and's details.
 *                         $or:
 *                           type: array
 *                           description: The $or's details.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: BaseProductListParams
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
 *                       x-schemaName: BaseProductListParams
 *                       properties:
 *                         q:
 *                           type: string
 *                           title: q
 *                           description: The $and's q.
 *                         status:
 *                           oneOf:
 *                             - type: string
 *                               title: status
 *                               description: The $and's status.
 *                             - type: string
 *                               title: status
 *                               description: The $and's status.
 *                             - type: string
 *                               title: status
 *                               description: The $and's status.
 *                             - type: string
 *                               title: status
 *                               description: The $and's status.
 *                             - type: array
 *                               description: The $and's status.
 *                               items:
 *                                 type: string
 *                                 enum:
 *                                   - draft
 *                                   - proposed
 *                                   - published
 *                                   - rejected
 *                         sales_channel_id:
 *                           oneOf:
 *                             - type: string
 *                               title: sales_channel_id
 *                               description: The $and's sales channel id.
 *                             - type: array
 *                               description: The $and's sales channel id.
 *                               items:
 *                                 type: string
 *                                 title: sales_channel_id
 *                                 description: The sales channel id's details.
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
 *                         handle:
 *                           oneOf:
 *                             - type: string
 *                               title: handle
 *                               description: The $and's handle.
 *                             - type: array
 *                               description: The $and's handle.
 *                               items:
 *                                 type: string
 *                                 title: handle
 *                                 description: The handle's details.
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
 *                         is_giftcard:
 *                           type: boolean
 *                           title: is_giftcard
 *                           description: The $and's is giftcard.
 *                         tags:
 *                           type: object
 *                           description: The $and's tags.
 *                         type_id:
 *                           oneOf:
 *                             - type: string
 *                               title: type_id
 *                               description: The $and's type id.
 *                             - type: array
 *                               description: The $and's type id.
 *                               items:
 *                                 type: string
 *                                 title: type_id
 *                                 description: The type id's details.
 *                         category_id:
 *                           oneOf:
 *                             - type: string
 *                               title: category_id
 *                               description: The $and's category id.
 *                             - type: array
 *                               description: The $and's category id.
 *                               items:
 *                                 type: string
 *                                 title: category_id
 *                                 description: The category id's details.
 *                             - type: object
 *                               description: The $and's category id.
 *                         categories:
 *                           oneOf:
 *                             - type: object
 *                               description: The $and's categories.
 *                             - type: object
 *                               description: The $and's categories.
 *                         collection_id:
 *                           oneOf:
 *                             - type: string
 *                               title: collection_id
 *                               description: The $and's collection id.
 *                             - type: array
 *                               description: The $and's collection id.
 *                               items:
 *                                 type: string
 *                                 title: collection_id
 *                                 description: The collection id's details.
 *                             - type: object
 *                               description: The $and's collection id.
 *                         created_at:
 *                           type: object
 *                           description: The $and's created at.
 *                         updated_at:
 *                           type: object
 *                           description: The $and's updated at.
 *                         deleted_at:
 *                           type: object
 *                           description: The $and's deleted at.
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
 *                                 x-schemaName: BaseProductListParams
 *                               - type: object
 *                                 description: The $and's details.
 *                         $or:
 *                           type: array
 *                           description: The $and's $or.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: BaseProductListParams
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
 *                                 x-schemaName: BaseProductListParams
 *                               - type: object
 *                                 description: The $and's details.
 *                         $or:
 *                           type: array
 *                           description: The $and's $or.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: BaseProductListParams
 *                               - type: object
 *                                 description: The $or's details.
 *               $or:
 *                 type: array
 *                 description: The $and's $or.
 *                 items:
 *                   oneOf:
 *                     - type: object
 *                       description: The $or's details.
 *                       x-schemaName: BaseProductListParams
 *                       properties:
 *                         q:
 *                           type: string
 *                           title: q
 *                           description: The $or's q.
 *                         status:
 *                           oneOf:
 *                             - type: string
 *                               title: status
 *                               description: The $or's status.
 *                             - type: string
 *                               title: status
 *                               description: The $or's status.
 *                             - type: string
 *                               title: status
 *                               description: The $or's status.
 *                             - type: string
 *                               title: status
 *                               description: The $or's status.
 *                             - type: array
 *                               description: The $or's status.
 *                               items:
 *                                 type: string
 *                                 enum:
 *                                   - draft
 *                                   - proposed
 *                                   - published
 *                                   - rejected
 *                         sales_channel_id:
 *                           oneOf:
 *                             - type: string
 *                               title: sales_channel_id
 *                               description: The $or's sales channel id.
 *                             - type: array
 *                               description: The $or's sales channel id.
 *                               items:
 *                                 type: string
 *                                 title: sales_channel_id
 *                                 description: The sales channel id's details.
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
 *                         handle:
 *                           oneOf:
 *                             - type: string
 *                               title: handle
 *                               description: The $or's handle.
 *                             - type: array
 *                               description: The $or's handle.
 *                               items:
 *                                 type: string
 *                                 title: handle
 *                                 description: The handle's details.
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
 *                         is_giftcard:
 *                           type: boolean
 *                           title: is_giftcard
 *                           description: The $or's is giftcard.
 *                         tags:
 *                           type: object
 *                           description: The $or's tags.
 *                         type_id:
 *                           oneOf:
 *                             - type: string
 *                               title: type_id
 *                               description: The $or's type id.
 *                             - type: array
 *                               description: The $or's type id.
 *                               items:
 *                                 type: string
 *                                 title: type_id
 *                                 description: The type id's details.
 *                         category_id:
 *                           oneOf:
 *                             - type: string
 *                               title: category_id
 *                               description: The $or's category id.
 *                             - type: array
 *                               description: The $or's category id.
 *                               items:
 *                                 type: string
 *                                 title: category_id
 *                                 description: The category id's details.
 *                             - type: object
 *                               description: The $or's category id.
 *                         categories:
 *                           oneOf:
 *                             - type: object
 *                               description: The $or's categories.
 *                             - type: object
 *                               description: The $or's categories.
 *                         collection_id:
 *                           oneOf:
 *                             - type: string
 *                               title: collection_id
 *                               description: The $or's collection id.
 *                             - type: array
 *                               description: The $or's collection id.
 *                               items:
 *                                 type: string
 *                                 title: collection_id
 *                                 description: The collection id's details.
 *                             - type: object
 *                               description: The $or's collection id.
 *                         created_at:
 *                           type: object
 *                           description: The $or's created at.
 *                         updated_at:
 *                           type: object
 *                           description: The $or's updated at.
 *                         deleted_at:
 *                           type: object
 *                           description: The $or's deleted at.
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
 *                                 x-schemaName: BaseProductListParams
 *                               - type: object
 *                                 description: The $and's details.
 *                         $or:
 *                           type: array
 *                           description: The $or's details.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: BaseProductListParams
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
 *                                 x-schemaName: BaseProductListParams
 *                               - type: object
 *                                 description: The $and's details.
 *                         $or:
 *                           type: array
 *                           description: The $or's details.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: BaseProductListParams
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
 *             x-schemaName: BaseProductListParams
 *             properties:
 *               q:
 *                 type: string
 *                 title: q
 *                 description: The $or's q.
 *               status:
 *                 oneOf:
 *                   - type: string
 *                     title: status
 *                     description: The $or's status.
 *                   - type: string
 *                     title: status
 *                     description: The $or's status.
 *                   - type: string
 *                     title: status
 *                     description: The $or's status.
 *                   - type: string
 *                     title: status
 *                     description: The $or's status.
 *                   - type: array
 *                     description: The $or's status.
 *                     items:
 *                       type: string
 *                       enum:
 *                         - draft
 *                         - proposed
 *                         - published
 *                         - rejected
 *               sales_channel_id:
 *                 oneOf:
 *                   - type: string
 *                     title: sales_channel_id
 *                     description: The $or's sales channel id.
 *                   - type: array
 *                     description: The $or's sales channel id.
 *                     items:
 *                       type: string
 *                       title: sales_channel_id
 *                       description: The sales channel id's details.
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
 *               handle:
 *                 oneOf:
 *                   - type: string
 *                     title: handle
 *                     description: The $or's handle.
 *                   - type: array
 *                     description: The $or's handle.
 *                     items:
 *                       type: string
 *                       title: handle
 *                       description: The handle's details.
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
 *               is_giftcard:
 *                 type: boolean
 *                 title: is_giftcard
 *                 description: The $or's is giftcard.
 *               tags:
 *                 type: object
 *                 description: The $or's tags.
 *                 properties:
 *                   value:
 *                     type: array
 *                     description: The tag's value.
 *                     items:
 *                       type: string
 *                       title: value
 *                       description: The value's details.
 *               type_id:
 *                 oneOf:
 *                   - type: string
 *                     title: type_id
 *                     description: The $or's type id.
 *                   - type: array
 *                     description: The $or's type id.
 *                     items:
 *                       type: string
 *                       title: type_id
 *                       description: The type id's details.
 *               category_id:
 *                 oneOf:
 *                   - type: string
 *                     title: category_id
 *                     description: The $or's category id.
 *                   - type: array
 *                     description: The $or's category id.
 *                     items:
 *                       type: string
 *                       title: category_id
 *                       description: The category id's details.
 *                   - type: object
 *                     description: The $or's category id.
 *                     properties:
 *                       $and:
 *                         type: array
 *                         description: The category id's $and.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $and
 *                               description: The $and's details.
 *                             - type: object
 *                               description: The $and's details.
 *                               x-schemaName: RegExp
 *                             - type: object
 *                               description: The $and's details.
 *                             - type: array
 *                               description: The $and's details.
 *                               items:
 *                                 oneOf:
 *                                   - type: string
 *                                     title: $and
 *                                     description: The $and's details.
 *                                   - type: object
 *                                     description: The $and's details.
 *                                     x-schemaName: RegExp
 *                       $or:
 *                         type: array
 *                         description: The category id's $or.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $or
 *                               description: The $or's details.
 *                             - type: object
 *                               description: The $or's details.
 *                               x-schemaName: RegExp
 *                             - type: object
 *                               description: The $or's details.
 *                             - type: array
 *                               description: The $or's details.
 *                               items:
 *                                 oneOf:
 *                                   - type: string
 *                                     title: $or
 *                                     description: The $or's details.
 *                                   - type: object
 *                                     description: The $or's details.
 *                                     x-schemaName: RegExp
 *                       $eq:
 *                         oneOf:
 *                           - type: string
 *                             title: $eq
 *                             description: The category id's $eq.
 *                           - type: object
 *                             description: The category id's $eq.
 *                             x-schemaName: RegExp
 *                           - type: array
 *                             description: The category id's $eq.
 *                             items:
 *                               oneOf:
 *                                 - type: string
 *                                   title: $eq
 *                                   description: The $eq's details.
 *                                 - type: object
 *                                   description: The $eq's details.
 *                                   x-schemaName: RegExp
 *                       $ne:
 *                         oneOf:
 *                           - type: string
 *                             title: $ne
 *                             description: The category id's $ne.
 *                           - type: object
 *                             description: The category id's $ne.
 *                             x-schemaName: RegExp
 *                       $in:
 *                         type: array
 *                         description: The category id's $in.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $in
 *                               description: The $in's details.
 *                             - type: object
 *                               description: The $in's details.
 *                               x-schemaName: RegExp
 *                       $nin:
 *                         type: array
 *                         description: The category id's $nin.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $nin
 *                               description: The $nin's details.
 *                             - type: object
 *                               description: The $nin's details.
 *                               x-schemaName: RegExp
 *                       $not:
 *                         oneOf:
 *                           - type: string
 *                             title: $not
 *                             description: The category id's $not.
 *                           - type: object
 *                             description: The category id's $not.
 *                             x-schemaName: RegExp
 *                           - type: object
 *                             description: The category id's $not.
 *                           - type: array
 *                             description: The category id's $not.
 *                             items:
 *                               oneOf:
 *                                 - type: string
 *                                   title: $not
 *                                   description: The $not's details.
 *                                 - type: object
 *                                   description: The $not's details.
 *                                   x-schemaName: RegExp
 *                       $gt:
 *                         oneOf:
 *                           - type: string
 *                             title: $gt
 *                             description: The category id's $gt.
 *                           - type: object
 *                             description: The category id's $gt.
 *                             x-schemaName: RegExp
 *                       $gte:
 *                         oneOf:
 *                           - type: string
 *                             title: $gte
 *                             description: The category id's $gte.
 *                           - type: object
 *                             description: The category id's $gte.
 *                             x-schemaName: RegExp
 *                       $lt:
 *                         oneOf:
 *                           - type: string
 *                             title: $lt
 *                             description: The category id's $lt.
 *                           - type: object
 *                             description: The category id's $lt.
 *                             x-schemaName: RegExp
 *                       $lte:
 *                         oneOf:
 *                           - type: string
 *                             title: $lte
 *                             description: The category id's $lte.
 *                           - type: object
 *                             description: The category id's $lte.
 *                             x-schemaName: RegExp
 *                       $like:
 *                         type: string
 *                         title: $like
 *                         description: The category id's $like.
 *                       $re:
 *                         type: string
 *                         title: $re
 *                         description: The category id's $re.
 *                       $ilike:
 *                         type: string
 *                         title: $ilike
 *                         description: The category id's $ilike.
 *                       $fulltext:
 *                         type: string
 *                         title: $fulltext
 *                         description: The category id's $fulltext.
 *                       $overlap:
 *                         type: array
 *                         description: The category id's $overlap.
 *                         items:
 *                           type: string
 *                           title: $overlap
 *                           description: The $overlap's details.
 *                       $contains:
 *                         type: array
 *                         description: The category id's $contains.
 *                         items:
 *                           type: string
 *                           title: $contains
 *                           description: The $contain's $contains.
 *                       $contained:
 *                         type: array
 *                         description: The category id's $contained.
 *                         items:
 *                           type: string
 *                           title: $contained
 *                           description: The $contained's details.
 *                       $exists:
 *                         type: boolean
 *                         title: $exists
 *                         description: The category id's $exists.
 *               categories:
 *                 oneOf:
 *                   - type: object
 *                     description: The $or's categories.
 *                     required:
 *                       - id
 *                     properties:
 *                       id:
 *                         type: object
 *                         description: The category's ID.
 *                   - type: object
 *                     description: The $or's categories.
 *                     required:
 *                       - id
 *                     properties:
 *                       id:
 *                         type: object
 *                         description: The category's ID.
 *               collection_id:
 *                 oneOf:
 *                   - type: string
 *                     title: collection_id
 *                     description: The $or's collection id.
 *                   - type: array
 *                     description: The $or's collection id.
 *                     items:
 *                       type: string
 *                       title: collection_id
 *                       description: The collection id's details.
 *                   - type: object
 *                     description: The $or's collection id.
 *                     properties:
 *                       $and:
 *                         type: array
 *                         description: The collection id's $and.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $and
 *                               description: The $and's details.
 *                             - type: object
 *                               description: The $and's details.
 *                               x-schemaName: RegExp
 *                             - type: object
 *                               description: The $and's details.
 *                             - type: array
 *                               description: The $and's details.
 *                               items:
 *                                 oneOf:
 *                                   - type: string
 *                                     title: $and
 *                                     description: The $and's details.
 *                                   - type: object
 *                                     description: The $and's details.
 *                                     x-schemaName: RegExp
 *                       $or:
 *                         type: array
 *                         description: The collection id's $or.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $or
 *                               description: The $or's details.
 *                             - type: object
 *                               description: The $or's details.
 *                               x-schemaName: RegExp
 *                             - type: object
 *                               description: The $or's details.
 *                             - type: array
 *                               description: The $or's details.
 *                               items:
 *                                 oneOf:
 *                                   - type: string
 *                                     title: $or
 *                                     description: The $or's details.
 *                                   - type: object
 *                                     description: The $or's details.
 *                                     x-schemaName: RegExp
 *                       $eq:
 *                         oneOf:
 *                           - type: string
 *                             title: $eq
 *                             description: The collection id's $eq.
 *                           - type: object
 *                             description: The collection id's $eq.
 *                             x-schemaName: RegExp
 *                           - type: array
 *                             description: The collection id's $eq.
 *                             items:
 *                               oneOf:
 *                                 - type: string
 *                                   title: $eq
 *                                   description: The $eq's details.
 *                                 - type: object
 *                                   description: The $eq's details.
 *                                   x-schemaName: RegExp
 *                       $ne:
 *                         oneOf:
 *                           - type: string
 *                             title: $ne
 *                             description: The collection id's $ne.
 *                           - type: object
 *                             description: The collection id's $ne.
 *                             x-schemaName: RegExp
 *                       $in:
 *                         type: array
 *                         description: The collection id's $in.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $in
 *                               description: The $in's details.
 *                             - type: object
 *                               description: The $in's details.
 *                               x-schemaName: RegExp
 *                       $nin:
 *                         type: array
 *                         description: The collection id's $nin.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $nin
 *                               description: The $nin's details.
 *                             - type: object
 *                               description: The $nin's details.
 *                               x-schemaName: RegExp
 *                       $not:
 *                         oneOf:
 *                           - type: string
 *                             title: $not
 *                             description: The collection id's $not.
 *                           - type: object
 *                             description: The collection id's $not.
 *                             x-schemaName: RegExp
 *                           - type: object
 *                             description: The collection id's $not.
 *                           - type: array
 *                             description: The collection id's $not.
 *                             items:
 *                               oneOf:
 *                                 - type: string
 *                                   title: $not
 *                                   description: The $not's details.
 *                                 - type: object
 *                                   description: The $not's details.
 *                                   x-schemaName: RegExp
 *                       $gt:
 *                         oneOf:
 *                           - type: string
 *                             title: $gt
 *                             description: The collection id's $gt.
 *                           - type: object
 *                             description: The collection id's $gt.
 *                             x-schemaName: RegExp
 *                       $gte:
 *                         oneOf:
 *                           - type: string
 *                             title: $gte
 *                             description: The collection id's $gte.
 *                           - type: object
 *                             description: The collection id's $gte.
 *                             x-schemaName: RegExp
 *                       $lt:
 *                         oneOf:
 *                           - type: string
 *                             title: $lt
 *                             description: The collection id's $lt.
 *                           - type: object
 *                             description: The collection id's $lt.
 *                             x-schemaName: RegExp
 *                       $lte:
 *                         oneOf:
 *                           - type: string
 *                             title: $lte
 *                             description: The collection id's $lte.
 *                           - type: object
 *                             description: The collection id's $lte.
 *                             x-schemaName: RegExp
 *                       $like:
 *                         type: string
 *                         title: $like
 *                         description: The collection id's $like.
 *                       $re:
 *                         type: string
 *                         title: $re
 *                         description: The collection id's $re.
 *                       $ilike:
 *                         type: string
 *                         title: $ilike
 *                         description: The collection id's $ilike.
 *                       $fulltext:
 *                         type: string
 *                         title: $fulltext
 *                         description: The collection id's $fulltext.
 *                       $overlap:
 *                         type: array
 *                         description: The collection id's $overlap.
 *                         items:
 *                           type: string
 *                           title: $overlap
 *                           description: The $overlap's details.
 *                       $contains:
 *                         type: array
 *                         description: The collection id's $contains.
 *                         items:
 *                           type: string
 *                           title: $contains
 *                           description: The $contain's $contains.
 *                       $contained:
 *                         type: array
 *                         description: The collection id's $contained.
 *                         items:
 *                           type: string
 *                           title: $contained
 *                           description: The $contained's details.
 *                       $exists:
 *                         type: boolean
 *                         title: $exists
 *                         description: The collection id's $exists.
 *               created_at:
 *                 type: object
 *                 description: The $or's created at.
 *                 properties:
 *                   $and:
 *                     type: array
 *                     description: The created at's $and.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $and
 *                           description: The $and's details.
 *                         - type: object
 *                           description: The $and's details.
 *                           x-schemaName: RegExp
 *                         - type: object
 *                           description: The $and's details.
 *                         - type: array
 *                           description: The $and's details.
 *                           items:
 *                             oneOf:
 *                               - type: string
 *                                 title: $and
 *                                 description: The $and's details.
 *                               - type: object
 *                                 description: The $and's details.
 *                                 x-schemaName: RegExp
 *                   $or:
 *                     type: array
 *                     description: The created at's $or.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $or
 *                           description: The $or's details.
 *                         - type: object
 *                           description: The $or's details.
 *                           x-schemaName: RegExp
 *                         - type: object
 *                           description: The $or's details.
 *                         - type: array
 *                           description: The $or's details.
 *                           items:
 *                             oneOf:
 *                               - type: string
 *                                 title: $or
 *                                 description: The $or's details.
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: RegExp
 *                   $eq:
 *                     oneOf:
 *                       - type: string
 *                         title: $eq
 *                         description: The created at's $eq.
 *                       - type: object
 *                         description: The created at's $eq.
 *                         x-schemaName: RegExp
 *                       - type: array
 *                         description: The created at's $eq.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $eq
 *                               description: The $eq's details.
 *                             - type: object
 *                               description: The $eq's details.
 *                               x-schemaName: RegExp
 *                   $ne:
 *                     oneOf:
 *                       - type: string
 *                         title: $ne
 *                         description: The created at's $ne.
 *                       - type: object
 *                         description: The created at's $ne.
 *                         x-schemaName: RegExp
 *                   $in:
 *                     type: array
 *                     description: The created at's $in.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $in
 *                           description: The $in's details.
 *                         - type: object
 *                           description: The $in's details.
 *                           x-schemaName: RegExp
 *                   $nin:
 *                     type: array
 *                     description: The created at's $nin.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $nin
 *                           description: The $nin's details.
 *                         - type: object
 *                           description: The $nin's details.
 *                           x-schemaName: RegExp
 *                   $not:
 *                     oneOf:
 *                       - type: string
 *                         title: $not
 *                         description: The created at's $not.
 *                       - type: object
 *                         description: The created at's $not.
 *                         x-schemaName: RegExp
 *                       - type: object
 *                         description: The created at's $not.
 *                       - type: array
 *                         description: The created at's $not.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $not
 *                               description: The $not's details.
 *                             - type: object
 *                               description: The $not's details.
 *                               x-schemaName: RegExp
 *                   $gt:
 *                     oneOf:
 *                       - type: string
 *                         title: $gt
 *                         description: The created at's $gt.
 *                       - type: object
 *                         description: The created at's $gt.
 *                         x-schemaName: RegExp
 *                   $gte:
 *                     oneOf:
 *                       - type: string
 *                         title: $gte
 *                         description: The created at's $gte.
 *                       - type: object
 *                         description: The created at's $gte.
 *                         x-schemaName: RegExp
 *                   $lt:
 *                     oneOf:
 *                       - type: string
 *                         title: $lt
 *                         description: The created at's $lt.
 *                       - type: object
 *                         description: The created at's $lt.
 *                         x-schemaName: RegExp
 *                   $lte:
 *                     oneOf:
 *                       - type: string
 *                         title: $lte
 *                         description: The created at's $lte.
 *                       - type: object
 *                         description: The created at's $lte.
 *                         x-schemaName: RegExp
 *                   $like:
 *                     type: string
 *                     title: $like
 *                     description: The created at's $like.
 *                   $re:
 *                     type: string
 *                     title: $re
 *                     description: The created at's $re.
 *                   $ilike:
 *                     type: string
 *                     title: $ilike
 *                     description: The created at's $ilike.
 *                   $fulltext:
 *                     type: string
 *                     title: $fulltext
 *                     description: The created at's $fulltext.
 *                   $overlap:
 *                     type: array
 *                     description: The created at's $overlap.
 *                     items:
 *                       type: string
 *                       title: $overlap
 *                       description: The $overlap's details.
 *                   $contains:
 *                     type: array
 *                     description: The created at's $contains.
 *                     items:
 *                       type: string
 *                       title: $contains
 *                       description: The $contain's $contains.
 *                   $contained:
 *                     type: array
 *                     description: The created at's $contained.
 *                     items:
 *                       type: string
 *                       title: $contained
 *                       description: The $contained's details.
 *                   $exists:
 *                     type: boolean
 *                     title: $exists
 *                     description: The created at's $exists.
 *               updated_at:
 *                 type: object
 *                 description: The $or's updated at.
 *                 properties:
 *                   $and:
 *                     type: array
 *                     description: The updated at's $and.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $and
 *                           description: The $and's details.
 *                         - type: object
 *                           description: The $and's details.
 *                           x-schemaName: RegExp
 *                         - type: object
 *                           description: The $and's details.
 *                         - type: array
 *                           description: The $and's details.
 *                           items:
 *                             oneOf:
 *                               - type: string
 *                                 title: $and
 *                                 description: The $and's details.
 *                               - type: object
 *                                 description: The $and's details.
 *                                 x-schemaName: RegExp
 *                   $or:
 *                     type: array
 *                     description: The updated at's $or.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $or
 *                           description: The $or's details.
 *                         - type: object
 *                           description: The $or's details.
 *                           x-schemaName: RegExp
 *                         - type: object
 *                           description: The $or's details.
 *                         - type: array
 *                           description: The $or's details.
 *                           items:
 *                             oneOf:
 *                               - type: string
 *                                 title: $or
 *                                 description: The $or's details.
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: RegExp
 *                   $eq:
 *                     oneOf:
 *                       - type: string
 *                         title: $eq
 *                         description: The updated at's $eq.
 *                       - type: object
 *                         description: The updated at's $eq.
 *                         x-schemaName: RegExp
 *                       - type: array
 *                         description: The updated at's $eq.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $eq
 *                               description: The $eq's details.
 *                             - type: object
 *                               description: The $eq's details.
 *                               x-schemaName: RegExp
 *                   $ne:
 *                     oneOf:
 *                       - type: string
 *                         title: $ne
 *                         description: The updated at's $ne.
 *                       - type: object
 *                         description: The updated at's $ne.
 *                         x-schemaName: RegExp
 *                   $in:
 *                     type: array
 *                     description: The updated at's $in.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $in
 *                           description: The $in's details.
 *                         - type: object
 *                           description: The $in's details.
 *                           x-schemaName: RegExp
 *                   $nin:
 *                     type: array
 *                     description: The updated at's $nin.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $nin
 *                           description: The $nin's details.
 *                         - type: object
 *                           description: The $nin's details.
 *                           x-schemaName: RegExp
 *                   $not:
 *                     oneOf:
 *                       - type: string
 *                         title: $not
 *                         description: The updated at's $not.
 *                       - type: object
 *                         description: The updated at's $not.
 *                         x-schemaName: RegExp
 *                       - type: object
 *                         description: The updated at's $not.
 *                       - type: array
 *                         description: The updated at's $not.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $not
 *                               description: The $not's details.
 *                             - type: object
 *                               description: The $not's details.
 *                               x-schemaName: RegExp
 *                   $gt:
 *                     oneOf:
 *                       - type: string
 *                         title: $gt
 *                         description: The updated at's $gt.
 *                       - type: object
 *                         description: The updated at's $gt.
 *                         x-schemaName: RegExp
 *                   $gte:
 *                     oneOf:
 *                       - type: string
 *                         title: $gte
 *                         description: The updated at's $gte.
 *                       - type: object
 *                         description: The updated at's $gte.
 *                         x-schemaName: RegExp
 *                   $lt:
 *                     oneOf:
 *                       - type: string
 *                         title: $lt
 *                         description: The updated at's $lt.
 *                       - type: object
 *                         description: The updated at's $lt.
 *                         x-schemaName: RegExp
 *                   $lte:
 *                     oneOf:
 *                       - type: string
 *                         title: $lte
 *                         description: The updated at's $lte.
 *                       - type: object
 *                         description: The updated at's $lte.
 *                         x-schemaName: RegExp
 *                   $like:
 *                     type: string
 *                     title: $like
 *                     description: The updated at's $like.
 *                   $re:
 *                     type: string
 *                     title: $re
 *                     description: The updated at's $re.
 *                   $ilike:
 *                     type: string
 *                     title: $ilike
 *                     description: The updated at's $ilike.
 *                   $fulltext:
 *                     type: string
 *                     title: $fulltext
 *                     description: The updated at's $fulltext.
 *                   $overlap:
 *                     type: array
 *                     description: The updated at's $overlap.
 *                     items:
 *                       type: string
 *                       title: $overlap
 *                       description: The $overlap's details.
 *                   $contains:
 *                     type: array
 *                     description: The updated at's $contains.
 *                     items:
 *                       type: string
 *                       title: $contains
 *                       description: The $contain's $contains.
 *                   $contained:
 *                     type: array
 *                     description: The updated at's $contained.
 *                     items:
 *                       type: string
 *                       title: $contained
 *                       description: The $contained's details.
 *                   $exists:
 *                     type: boolean
 *                     title: $exists
 *                     description: The updated at's $exists.
 *               deleted_at:
 *                 type: object
 *                 description: The $or's deleted at.
 *                 properties:
 *                   $and:
 *                     type: array
 *                     description: The deleted at's $and.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $and
 *                           description: The $and's details.
 *                         - type: object
 *                           description: The $and's details.
 *                           x-schemaName: RegExp
 *                         - type: object
 *                           description: The $and's details.
 *                         - type: array
 *                           description: The $and's details.
 *                           items:
 *                             oneOf:
 *                               - type: string
 *                                 title: $and
 *                                 description: The $and's details.
 *                               - type: object
 *                                 description: The $and's details.
 *                                 x-schemaName: RegExp
 *                   $or:
 *                     type: array
 *                     description: The deleted at's $or.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $or
 *                           description: The $or's details.
 *                         - type: object
 *                           description: The $or's details.
 *                           x-schemaName: RegExp
 *                         - type: object
 *                           description: The $or's details.
 *                         - type: array
 *                           description: The $or's details.
 *                           items:
 *                             oneOf:
 *                               - type: string
 *                                 title: $or
 *                                 description: The $or's details.
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: RegExp
 *                   $eq:
 *                     oneOf:
 *                       - type: string
 *                         title: $eq
 *                         description: The deleted at's $eq.
 *                       - type: object
 *                         description: The deleted at's $eq.
 *                         x-schemaName: RegExp
 *                       - type: array
 *                         description: The deleted at's $eq.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $eq
 *                               description: The $eq's details.
 *                             - type: object
 *                               description: The $eq's details.
 *                               x-schemaName: RegExp
 *                   $ne:
 *                     oneOf:
 *                       - type: string
 *                         title: $ne
 *                         description: The deleted at's $ne.
 *                       - type: object
 *                         description: The deleted at's $ne.
 *                         x-schemaName: RegExp
 *                   $in:
 *                     type: array
 *                     description: The deleted at's $in.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $in
 *                           description: The $in's details.
 *                         - type: object
 *                           description: The $in's details.
 *                           x-schemaName: RegExp
 *                   $nin:
 *                     type: array
 *                     description: The deleted at's $nin.
 *                     items:
 *                       oneOf:
 *                         - type: string
 *                           title: $nin
 *                           description: The $nin's details.
 *                         - type: object
 *                           description: The $nin's details.
 *                           x-schemaName: RegExp
 *                   $not:
 *                     oneOf:
 *                       - type: string
 *                         title: $not
 *                         description: The deleted at's $not.
 *                       - type: object
 *                         description: The deleted at's $not.
 *                         x-schemaName: RegExp
 *                       - type: object
 *                         description: The deleted at's $not.
 *                       - type: array
 *                         description: The deleted at's $not.
 *                         items:
 *                           oneOf:
 *                             - type: string
 *                               title: $not
 *                               description: The $not's details.
 *                             - type: object
 *                               description: The $not's details.
 *                               x-schemaName: RegExp
 *                   $gt:
 *                     oneOf:
 *                       - type: string
 *                         title: $gt
 *                         description: The deleted at's $gt.
 *                       - type: object
 *                         description: The deleted at's $gt.
 *                         x-schemaName: RegExp
 *                   $gte:
 *                     oneOf:
 *                       - type: string
 *                         title: $gte
 *                         description: The deleted at's $gte.
 *                       - type: object
 *                         description: The deleted at's $gte.
 *                         x-schemaName: RegExp
 *                   $lt:
 *                     oneOf:
 *                       - type: string
 *                         title: $lt
 *                         description: The deleted at's $lt.
 *                       - type: object
 *                         description: The deleted at's $lt.
 *                         x-schemaName: RegExp
 *                   $lte:
 *                     oneOf:
 *                       - type: string
 *                         title: $lte
 *                         description: The deleted at's $lte.
 *                       - type: object
 *                         description: The deleted at's $lte.
 *                         x-schemaName: RegExp
 *                   $like:
 *                     type: string
 *                     title: $like
 *                     description: The deleted at's $like.
 *                   $re:
 *                     type: string
 *                     title: $re
 *                     description: The deleted at's $re.
 *                   $ilike:
 *                     type: string
 *                     title: $ilike
 *                     description: The deleted at's $ilike.
 *                   $fulltext:
 *                     type: string
 *                     title: $fulltext
 *                     description: The deleted at's $fulltext.
 *                   $overlap:
 *                     type: array
 *                     description: The deleted at's $overlap.
 *                     items:
 *                       type: string
 *                       title: $overlap
 *                       description: The $overlap's details.
 *                   $contains:
 *                     type: array
 *                     description: The deleted at's $contains.
 *                     items:
 *                       type: string
 *                       title: $contains
 *                       description: The $contain's $contains.
 *                   $contained:
 *                     type: array
 *                     description: The deleted at's $contained.
 *                     items:
 *                       type: string
 *                       title: $contained
 *                       description: The $contained's details.
 *                   $exists:
 *                     type: boolean
 *                     title: $exists
 *                     description: The deleted at's $exists.
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
 *                       x-schemaName: BaseProductListParams
 *                       properties:
 *                         q:
 *                           type: string
 *                           title: q
 *                           description: The $and's q.
 *                         status:
 *                           oneOf:
 *                             - type: string
 *                               title: status
 *                               description: The $and's status.
 *                             - type: string
 *                               title: status
 *                               description: The $and's status.
 *                             - type: string
 *                               title: status
 *                               description: The $and's status.
 *                             - type: string
 *                               title: status
 *                               description: The $and's status.
 *                             - type: array
 *                               description: The $and's status.
 *                               items:
 *                                 type: string
 *                                 enum:
 *                                   - draft
 *                                   - proposed
 *                                   - published
 *                                   - rejected
 *                         sales_channel_id:
 *                           oneOf:
 *                             - type: string
 *                               title: sales_channel_id
 *                               description: The $and's sales channel id.
 *                             - type: array
 *                               description: The $and's sales channel id.
 *                               items:
 *                                 type: string
 *                                 title: sales_channel_id
 *                                 description: The sales channel id's details.
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
 *                         handle:
 *                           oneOf:
 *                             - type: string
 *                               title: handle
 *                               description: The $and's handle.
 *                             - type: array
 *                               description: The $and's handle.
 *                               items:
 *                                 type: string
 *                                 title: handle
 *                                 description: The handle's details.
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
 *                         is_giftcard:
 *                           type: boolean
 *                           title: is_giftcard
 *                           description: The $and's is giftcard.
 *                         tags:
 *                           type: object
 *                           description: The $and's tags.
 *                         type_id:
 *                           oneOf:
 *                             - type: string
 *                               title: type_id
 *                               description: The $and's type id.
 *                             - type: array
 *                               description: The $and's type id.
 *                               items:
 *                                 type: string
 *                                 title: type_id
 *                                 description: The type id's details.
 *                         category_id:
 *                           oneOf:
 *                             - type: string
 *                               title: category_id
 *                               description: The $and's category id.
 *                             - type: array
 *                               description: The $and's category id.
 *                               items:
 *                                 type: string
 *                                 title: category_id
 *                                 description: The category id's details.
 *                             - type: object
 *                               description: The $and's category id.
 *                         categories:
 *                           oneOf:
 *                             - type: object
 *                               description: The $and's categories.
 *                             - type: object
 *                               description: The $and's categories.
 *                         collection_id:
 *                           oneOf:
 *                             - type: string
 *                               title: collection_id
 *                               description: The $and's collection id.
 *                             - type: array
 *                               description: The $and's collection id.
 *                               items:
 *                                 type: string
 *                                 title: collection_id
 *                                 description: The collection id's details.
 *                             - type: object
 *                               description: The $and's collection id.
 *                         created_at:
 *                           type: object
 *                           description: The $and's created at.
 *                         updated_at:
 *                           type: object
 *                           description: The $and's updated at.
 *                         deleted_at:
 *                           type: object
 *                           description: The $and's deleted at.
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
 *                                 x-schemaName: BaseProductListParams
 *                               - type: object
 *                                 description: The $and's details.
 *                         $or:
 *                           type: array
 *                           description: The $and's $or.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: BaseProductListParams
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
 *                                 x-schemaName: BaseProductListParams
 *                               - type: object
 *                                 description: The $and's details.
 *                         $or:
 *                           type: array
 *                           description: The $and's $or.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: BaseProductListParams
 *                               - type: object
 *                                 description: The $or's details.
 *               $or:
 *                 type: array
 *                 description: The $or's details.
 *                 items:
 *                   oneOf:
 *                     - type: object
 *                       description: The $or's details.
 *                       x-schemaName: BaseProductListParams
 *                       properties:
 *                         q:
 *                           type: string
 *                           title: q
 *                           description: The $or's q.
 *                         status:
 *                           oneOf:
 *                             - type: string
 *                               title: status
 *                               description: The $or's status.
 *                             - type: string
 *                               title: status
 *                               description: The $or's status.
 *                             - type: string
 *                               title: status
 *                               description: The $or's status.
 *                             - type: string
 *                               title: status
 *                               description: The $or's status.
 *                             - type: array
 *                               description: The $or's status.
 *                               items:
 *                                 type: string
 *                                 enum:
 *                                   - draft
 *                                   - proposed
 *                                   - published
 *                                   - rejected
 *                         sales_channel_id:
 *                           oneOf:
 *                             - type: string
 *                               title: sales_channel_id
 *                               description: The $or's sales channel id.
 *                             - type: array
 *                               description: The $or's sales channel id.
 *                               items:
 *                                 type: string
 *                                 title: sales_channel_id
 *                                 description: The sales channel id's details.
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
 *                         handle:
 *                           oneOf:
 *                             - type: string
 *                               title: handle
 *                               description: The $or's handle.
 *                             - type: array
 *                               description: The $or's handle.
 *                               items:
 *                                 type: string
 *                                 title: handle
 *                                 description: The handle's details.
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
 *                         is_giftcard:
 *                           type: boolean
 *                           title: is_giftcard
 *                           description: The $or's is giftcard.
 *                         tags:
 *                           type: object
 *                           description: The $or's tags.
 *                         type_id:
 *                           oneOf:
 *                             - type: string
 *                               title: type_id
 *                               description: The $or's type id.
 *                             - type: array
 *                               description: The $or's type id.
 *                               items:
 *                                 type: string
 *                                 title: type_id
 *                                 description: The type id's details.
 *                         category_id:
 *                           oneOf:
 *                             - type: string
 *                               title: category_id
 *                               description: The $or's category id.
 *                             - type: array
 *                               description: The $or's category id.
 *                               items:
 *                                 type: string
 *                                 title: category_id
 *                                 description: The category id's details.
 *                             - type: object
 *                               description: The $or's category id.
 *                         categories:
 *                           oneOf:
 *                             - type: object
 *                               description: The $or's categories.
 *                             - type: object
 *                               description: The $or's categories.
 *                         collection_id:
 *                           oneOf:
 *                             - type: string
 *                               title: collection_id
 *                               description: The $or's collection id.
 *                             - type: array
 *                               description: The $or's collection id.
 *                               items:
 *                                 type: string
 *                                 title: collection_id
 *                                 description: The collection id's details.
 *                             - type: object
 *                               description: The $or's collection id.
 *                         created_at:
 *                           type: object
 *                           description: The $or's created at.
 *                         updated_at:
 *                           type: object
 *                           description: The $or's updated at.
 *                         deleted_at:
 *                           type: object
 *                           description: The $or's deleted at.
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
 *                                 x-schemaName: BaseProductListParams
 *                               - type: object
 *                                 description: The $and's details.
 *                         $or:
 *                           type: array
 *                           description: The $or's details.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: BaseProductListParams
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
 *                                 x-schemaName: BaseProductListParams
 *                               - type: object
 *                                 description: The $and's details.
 *                         $or:
 *                           type: array
 *                           description: The $or's details.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: BaseProductListParams
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
 *                       x-schemaName: BaseProductListParams
 *                       properties:
 *                         q:
 *                           type: string
 *                           title: q
 *                           description: The $and's q.
 *                         status:
 *                           oneOf:
 *                             - type: string
 *                               title: status
 *                               description: The $and's status.
 *                             - type: string
 *                               title: status
 *                               description: The $and's status.
 *                             - type: string
 *                               title: status
 *                               description: The $and's status.
 *                             - type: string
 *                               title: status
 *                               description: The $and's status.
 *                             - type: array
 *                               description: The $and's status.
 *                               items:
 *                                 type: string
 *                                 enum:
 *                                   - draft
 *                                   - proposed
 *                                   - published
 *                                   - rejected
 *                         sales_channel_id:
 *                           oneOf:
 *                             - type: string
 *                               title: sales_channel_id
 *                               description: The $and's sales channel id.
 *                             - type: array
 *                               description: The $and's sales channel id.
 *                               items:
 *                                 type: string
 *                                 title: sales_channel_id
 *                                 description: The sales channel id's details.
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
 *                         handle:
 *                           oneOf:
 *                             - type: string
 *                               title: handle
 *                               description: The $and's handle.
 *                             - type: array
 *                               description: The $and's handle.
 *                               items:
 *                                 type: string
 *                                 title: handle
 *                                 description: The handle's details.
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
 *                         is_giftcard:
 *                           type: boolean
 *                           title: is_giftcard
 *                           description: The $and's is giftcard.
 *                         tags:
 *                           type: object
 *                           description: The $and's tags.
 *                         type_id:
 *                           oneOf:
 *                             - type: string
 *                               title: type_id
 *                               description: The $and's type id.
 *                             - type: array
 *                               description: The $and's type id.
 *                               items:
 *                                 type: string
 *                                 title: type_id
 *                                 description: The type id's details.
 *                         category_id:
 *                           oneOf:
 *                             - type: string
 *                               title: category_id
 *                               description: The $and's category id.
 *                             - type: array
 *                               description: The $and's category id.
 *                               items:
 *                                 type: string
 *                                 title: category_id
 *                                 description: The category id's details.
 *                             - type: object
 *                               description: The $and's category id.
 *                         categories:
 *                           oneOf:
 *                             - type: object
 *                               description: The $and's categories.
 *                             - type: object
 *                               description: The $and's categories.
 *                         collection_id:
 *                           oneOf:
 *                             - type: string
 *                               title: collection_id
 *                               description: The $and's collection id.
 *                             - type: array
 *                               description: The $and's collection id.
 *                               items:
 *                                 type: string
 *                                 title: collection_id
 *                                 description: The collection id's details.
 *                             - type: object
 *                               description: The $and's collection id.
 *                         created_at:
 *                           type: object
 *                           description: The $and's created at.
 *                         updated_at:
 *                           type: object
 *                           description: The $and's updated at.
 *                         deleted_at:
 *                           type: object
 *                           description: The $and's deleted at.
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
 *                                 x-schemaName: BaseProductListParams
 *                               - type: object
 *                                 description: The $and's details.
 *                         $or:
 *                           type: array
 *                           description: The $and's $or.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: BaseProductListParams
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
 *                                 x-schemaName: BaseProductListParams
 *                               - type: object
 *                                 description: The $and's details.
 *                         $or:
 *                           type: array
 *                           description: The $and's $or.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: BaseProductListParams
 *                               - type: object
 *                                 description: The $or's details.
 *               $or:
 *                 type: array
 *                 description: The $or's details.
 *                 items:
 *                   oneOf:
 *                     - type: object
 *                       description: The $or's details.
 *                       x-schemaName: BaseProductListParams
 *                       properties:
 *                         q:
 *                           type: string
 *                           title: q
 *                           description: The $or's q.
 *                         status:
 *                           oneOf:
 *                             - type: string
 *                               title: status
 *                               description: The $or's status.
 *                             - type: string
 *                               title: status
 *                               description: The $or's status.
 *                             - type: string
 *                               title: status
 *                               description: The $or's status.
 *                             - type: string
 *                               title: status
 *                               description: The $or's status.
 *                             - type: array
 *                               description: The $or's status.
 *                               items:
 *                                 type: string
 *                                 enum:
 *                                   - draft
 *                                   - proposed
 *                                   - published
 *                                   - rejected
 *                         sales_channel_id:
 *                           oneOf:
 *                             - type: string
 *                               title: sales_channel_id
 *                               description: The $or's sales channel id.
 *                             - type: array
 *                               description: The $or's sales channel id.
 *                               items:
 *                                 type: string
 *                                 title: sales_channel_id
 *                                 description: The sales channel id's details.
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
 *                         handle:
 *                           oneOf:
 *                             - type: string
 *                               title: handle
 *                               description: The $or's handle.
 *                             - type: array
 *                               description: The $or's handle.
 *                               items:
 *                                 type: string
 *                                 title: handle
 *                                 description: The handle's details.
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
 *                         is_giftcard:
 *                           type: boolean
 *                           title: is_giftcard
 *                           description: The $or's is giftcard.
 *                         tags:
 *                           type: object
 *                           description: The $or's tags.
 *                         type_id:
 *                           oneOf:
 *                             - type: string
 *                               title: type_id
 *                               description: The $or's type id.
 *                             - type: array
 *                               description: The $or's type id.
 *                               items:
 *                                 type: string
 *                                 title: type_id
 *                                 description: The type id's details.
 *                         category_id:
 *                           oneOf:
 *                             - type: string
 *                               title: category_id
 *                               description: The $or's category id.
 *                             - type: array
 *                               description: The $or's category id.
 *                               items:
 *                                 type: string
 *                                 title: category_id
 *                                 description: The category id's details.
 *                             - type: object
 *                               description: The $or's category id.
 *                         categories:
 *                           oneOf:
 *                             - type: object
 *                               description: The $or's categories.
 *                             - type: object
 *                               description: The $or's categories.
 *                         collection_id:
 *                           oneOf:
 *                             - type: string
 *                               title: collection_id
 *                               description: The $or's collection id.
 *                             - type: array
 *                               description: The $or's collection id.
 *                               items:
 *                                 type: string
 *                                 title: collection_id
 *                                 description: The collection id's details.
 *                             - type: object
 *                               description: The $or's collection id.
 *                         created_at:
 *                           type: object
 *                           description: The $or's created at.
 *                         updated_at:
 *                           type: object
 *                           description: The $or's updated at.
 *                         deleted_at:
 *                           type: object
 *                           description: The $or's deleted at.
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
 *                                 x-schemaName: BaseProductListParams
 *                               - type: object
 *                                 description: The $and's details.
 *                         $or:
 *                           type: array
 *                           description: The $or's details.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: BaseProductListParams
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
 *                                 x-schemaName: BaseProductListParams
 *                               - type: object
 *                                 description: The $and's details.
 *                         $or:
 *                           type: array
 *                           description: The $or's details.
 *                           items:
 *                             oneOf:
 *                               - type: object
 *                                 description: The $or's details.
 *                                 x-schemaName: BaseProductListParams
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
 *       curl '{backend_url}/admin/products' \
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
 *                 - products
 *               properties:
 *                 products:
 *                   type: array
 *                   description: The product's products.
 *                   items:
 *                     $ref: "#/components/schemas/AdminProduct"
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

