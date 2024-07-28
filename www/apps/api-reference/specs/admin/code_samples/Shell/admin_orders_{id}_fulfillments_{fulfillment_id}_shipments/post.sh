curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_o7dJ7WO7mdefxn",
      "quantity": 6185234278121472
    }
  ],
  "metadata": {}
}'