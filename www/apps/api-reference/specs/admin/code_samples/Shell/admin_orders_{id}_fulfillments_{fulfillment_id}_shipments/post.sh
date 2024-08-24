curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_DRJqVTHVo8Orn",
      "quantity": 7585676411273216
    }
  ],
  "metadata": {}
}'