curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_bMtmWty0Zp4tEjzqb4",
      "quantity": 5895650281521152
    }
  ],
  "metadata": {}
}'