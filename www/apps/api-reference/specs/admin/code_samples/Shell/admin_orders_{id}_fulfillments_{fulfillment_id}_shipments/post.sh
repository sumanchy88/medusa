curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_N9UeF0RMkUW9g",
      "quantity": 8299951509471232
    }
  ],
  "metadata": {}
}'