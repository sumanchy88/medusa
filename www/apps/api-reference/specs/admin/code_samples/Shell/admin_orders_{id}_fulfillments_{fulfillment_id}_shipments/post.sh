curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_IdweBo5WCkdsGms7O",
      "quantity": 5133957414780928
    }
  ],
  "metadata": {}
}'