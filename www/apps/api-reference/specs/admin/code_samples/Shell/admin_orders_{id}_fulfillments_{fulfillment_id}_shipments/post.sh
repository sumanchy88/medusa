curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_MKE6cwevNKxveLjx9",
      "quantity": 8418385649991680
    }
  ],
  "metadata": {}
}'