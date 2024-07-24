curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_imbd1tJtc8IzM1vki",
      "quantity": 1836190896488448
    }
  ],
  "metadata": {}
}'