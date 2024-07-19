curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_xiAM39wZ9AkAgmSuBN",
      "quantity": 2295732715388928
    }
  ],
  "metadata": {}
}'