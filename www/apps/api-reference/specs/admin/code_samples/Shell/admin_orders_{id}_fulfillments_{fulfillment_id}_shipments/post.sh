curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_yEWCWkiffa9uoi",
      "quantity": 5166982009716736
    }
  ],
  "metadata": {}
}'