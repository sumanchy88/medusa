curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_bzZ6ceNi2EreqN9S3c",
      "quantity": 7146529156497408
    }
  ],
  "metadata": {}
}'