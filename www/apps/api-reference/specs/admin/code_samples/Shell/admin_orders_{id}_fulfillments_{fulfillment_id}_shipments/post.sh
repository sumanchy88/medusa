curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_9rVMhI8EW9B3hduEHTon",
      "quantity": 7547269433786368
    }
  ],
  "metadata": {}
}'