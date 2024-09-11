/**
 * @oas [get] /store/customers/me/addresses
 * operationId: GetCustomersMeAddresses
 * summary: List Customers
 * description: Retrieve a list of customers. The customers can be filtered by
 *   fields such as `id`. The customers can also be sorted or paginated.
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
 *   - name: metadata
 *     in: query
 *     description: The customer's metadata.
 *     required: true
 *     schema:
 *       type: object
 *       description: The customer's metadata.
 *   - name: first_name
 *     in: query
 *     description: The customer's first name.
 *     required: true
 *     schema:
 *       type: string
 *       title: first_name
 *       description: The customer's first name.
 *   - name: last_name
 *     in: query
 *     description: The customer's last name.
 *     required: true
 *     schema:
 *       type: string
 *       title: last_name
 *       description: The customer's last name.
 *   - name: phone
 *     in: query
 *     description: The customer's phone.
 *     required: true
 *     schema:
 *       type: string
 *       title: phone
 *       description: The customer's phone.
 *   - name: company
 *     in: query
 *     description: The customer's company.
 *     required: true
 *     schema:
 *       type: string
 *       title: company
 *       description: The customer's company.
 *   - name: address_1
 *     in: query
 *     description: The customer's address 1.
 *     required: true
 *     schema:
 *       type: string
 *       title: address_1
 *       description: The customer's address 1.
 *   - name: address_2
 *     in: query
 *     description: The customer's address 2.
 *     required: true
 *     schema:
 *       type: string
 *       title: address_2
 *       description: The customer's address 2.
 *   - name: city
 *     in: query
 *     description: The customer's city.
 *     required: true
 *     schema:
 *       type: string
 *       title: city
 *       description: The customer's city.
 *   - name: country_code
 *     in: query
 *     description: The customer's country code.
 *     required: true
 *     schema:
 *       type: string
 *       title: country_code
 *       description: The customer's country code.
 *   - name: province
 *     in: query
 *     description: The customer's province.
 *     required: true
 *     schema:
 *       type: string
 *       title: province
 *       description: The customer's province.
 *   - name: postal_code
 *     in: query
 *     description: The customer's postal code.
 *     required: true
 *     schema:
 *       type: string
 *       title: postal_code
 *       description: The customer's postal code.
 *   - name: address_name
 *     in: query
 *     description: The customer's address name.
 *     required: true
 *     schema:
 *       type: string
 *       title: address_name
 *       description: The customer's address name.
 *   - name: is_default_shipping
 *     in: query
 *     description: The customer's is default shipping.
 *     required: false
 *     schema:
 *       type: boolean
 *       title: is_default_shipping
 *       description: The customer's is default shipping.
 *   - name: is_default_billing
 *     in: query
 *     description: The customer's is default billing.
 *     required: false
 *     schema:
 *       type: boolean
 *       title: is_default_billing
 *       description: The customer's is default billing.
 * security:
 *   - cookie_auth: []
 *   - jwt_token: []
 * x-codeSamples:
 *   - lang: Shell
 *     label: cURL
 *     source: |-
 *       curl '{backend_url}/store/customers/me/addresses' \
 *       -H 'Authorization: Bearer {access_token}'
 * tags:
 *   - Customers
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

