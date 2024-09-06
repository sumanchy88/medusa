curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_K7mNTJ0FEYqD9",
      "quantity": 1786470354386944
    }
  ],
  "metadata": {}
}'