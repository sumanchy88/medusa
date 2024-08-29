curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_LRmUKs6igTDv6GgRn0T",
      "quantity": 34438719209472
    }
  ],
  "metadata": {}
}'