curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_FuEHDxWuMi7UC0Zrx",
      "quantity": 5311246198898688
    }
  ],
  "metadata": {}
}'