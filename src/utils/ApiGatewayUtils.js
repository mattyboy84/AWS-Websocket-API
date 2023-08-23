const {
  ApiGatewayManagementApi,
} = require('@aws-sdk/client-apigatewaymanagementapi');

async function postToConnection(params) {
  const { endpoint, connectionId, data, region = 'eu-west-2' } = params;
  const client = new ApiGatewayManagementApi({
    endpoint,
    region: region || 'eu-west-2'
  });

  const response = await client.postToConnection({
    ConnectionId: connectionId,
    Data: data,
  });

  return response;
}

module.exports = {
  postToConnection,
};
