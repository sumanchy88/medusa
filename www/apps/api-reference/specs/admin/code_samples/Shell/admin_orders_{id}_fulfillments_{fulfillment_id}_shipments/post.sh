curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_ziW1ghOjVjc5F10X5",
      "quantity": 7599730303434752
    }
  ],
  "metadata": {}
}'