/**
 * @oas [get] /admin/shipping-profiles
 * operationId: GetShippingProfiles
 * summary: List Shipping Profiles
 * description: Retrieve a list of shipping profiles. The shipping profiles can be
 *   filtered by fields such as `id`. The shipping profiles can also be sorted or
 *   paginated.
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
 *   - name: id
 *     in: query
 *     required: false
 *     schema:
 *       oneOf:
 *         - type: string
 *           title: id
 *           description: The shipping profile's ID.
 *         - type: array
 *           description: The shipping profile's ID.
 *           items:
 *             type: string
 *             title: id
 *             description: The id's ID.
 *   - name: q
 *     in: query
 *     description: The shipping profile's q.
 *     required: false
 *     schema:
 *       type: string
 *       title: q
 *       description: The shipping profile's q.
 *   - name: type
 *     in: query
 *     description: The shipping profile's type.
 *     required: false
 *     schema:
 *       type: string
 *       title: type
 *       description: The shipping profile's type.
 *   - name: name
 *     in: query
 *     description: The shipping profile's name.
 *     required: false
 *     schema:
 *       type: string
 *       title: name
 *       description: The shipping profile's name.
 *   - name: created_at
 *     in: query
 *     description: The shipping profile's created at.
 *     required: false
 *     schema:
 *       type: object
 *       description: The shipping profile's created at.
 *       required:
 *         - $eq
 *         - $ne
 *         - $in
 *         - $nin
 *         - $like
 *         - $ilike
 *         - $re
 *         - $contains
 *         - $gt
 *         - $gte
 *         - $lt
 *         - $lte
 *       properties:
 *         $eq: {}
 *         $ne: {}
 *         $in: {}
 *         $nin: {}
 *         $like: {}
 *         $ilike: {}
 *         $re: {}
 *         $contains: {}
 *         $gt: {}
 *         $gte: {}
 *         $lt: {}
 *         $lte: {}
 *   - name: updated_at
 *     in: query
 *     description: The shipping profile's updated at.
 *     required: false
 *     schema:
 *       type: object
 *       description: The shipping profile's updated at.
 *       required:
 *         - $eq
 *         - $ne
 *         - $in
 *         - $nin
 *         - $like
 *         - $ilike
 *         - $re
 *         - $contains
 *         - $gt
 *         - $gte
 *         - $lt
 *         - $lte
 *       properties:
 *         $eq: {}
 *         $ne: {}
 *         $in: {}
 *         $nin: {}
 *         $like: {}
 *         $ilike: {}
 *         $re: {}
 *         $contains: {}
 *         $gt: {}
 *         $gte: {}
 *         $lt: {}
 *         $lte: {}
 *   - name: deleted_at
 *     in: query
 *     description: The shipping profile's deleted at.
 *     required: false
 *     schema:
 *       type: object
 *       description: The shipping profile's deleted at.
 *       required:
 *         - $eq
 *         - $ne
 *         - $in
 *         - $nin
 *         - $like
 *         - $ilike
 *         - $re
 *         - $contains
 *         - $gt
 *         - $gte
 *         - $lt
 *         - $lte
 *       properties:
 *         $eq: {}
 *         $ne: {}
 *         $in: {}
 *         $nin: {}
 *         $like: {}
 *         $ilike: {}
 *         $re: {}
 *         $contains: {}
 *         $gt: {}
 *         $gte: {}
 *         $lt: {}
 *         $lte: {}
 *   - name: $and
 *     in: query
 *     required: false
 *     schema: {}
 *   - name: $or
 *     in: query
 *     required: false
 *     schema: {}
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * x-codeSamples:
 *   - lang: Shell
 *     label: cURL
 *     source: |-
 *       curl '{backend_url}/admin/shipping-profiles' \
 *       -H 'x-medusa-access-token: {api_token}'
 * tags:
 *   - Shipping Profiles
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
 *                   description: The shipping profile's limit.
 *                 offset:
 *                   type: number
 *                   title: offset
 *                   description: The shipping profile's offset.
 *                 count:
 *                   type: number
 *                   title: count
 *                   description: The shipping profile's count.
 *             - type: object
 *               description: SUMMARY
 *               required:
 *                 - shipping_profiles
 *               properties:
 *                 shipping_profiles:
 *                   type: array
 *                   description: The shipping profile's shipping profiles.
 *                   items:
 *                     $ref: "#/components/schemas/AdminShippingProfile"
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

