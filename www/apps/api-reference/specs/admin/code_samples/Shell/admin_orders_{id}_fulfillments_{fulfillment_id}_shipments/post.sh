curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_p9B7tnukHbDhCO",
      "quantity": 6855858948407296
    }
  ],
  "metadata": {}
}'