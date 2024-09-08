curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_vKhpFiSBZWZ0H7Bvglg",
      "quantity": 5385412176510976
    }
  ],
  "metadata": {}
}'