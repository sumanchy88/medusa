curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_v2Qm4eUGitt6d",
      "quantity": 7630019991961600
    }
  ],
  "metadata": {}
}'