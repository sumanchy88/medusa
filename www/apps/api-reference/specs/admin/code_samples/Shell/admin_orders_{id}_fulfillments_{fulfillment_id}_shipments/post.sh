curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_E7AuABUeaRmWlFjE2i",
      "quantity": 2576106634870784
    }
  ],
  "metadata": {}
}'