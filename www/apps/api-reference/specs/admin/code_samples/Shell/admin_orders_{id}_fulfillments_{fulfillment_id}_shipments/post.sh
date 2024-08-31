curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_d1syV5V0JFTJdcS14M",
      "quantity": 6624719337947136
    }
  ],
  "metadata": {}
}'