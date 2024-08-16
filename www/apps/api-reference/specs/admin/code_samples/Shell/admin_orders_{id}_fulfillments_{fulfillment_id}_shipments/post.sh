curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_yxR1FLUkakkeo9Rdpm7l",
      "quantity": 1730111086788608
    }
  ],
  "metadata": {}
}'