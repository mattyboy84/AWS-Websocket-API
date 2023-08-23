const {
  WEBSOCKET_CONNECTIONS_TABLE,
  WSS_API_ENDPOINT,
  HTTPS_API_ENDPOINT,
} = require('./utils/config');

const dynamo = require('./utils/DynamoDBUtils');
const apiGateway = require('./utils/ApiGatewayUtils');

async function handler(event, context) {
  const connections = await dynamo.scan({
    tableName: WEBSOCKET_CONNECTIONS_TABLE,
  });
  console.log(connections);

  for (let i = 0; i < connections.length; i++) {
    const connection = connections[i];
    const { connectionId } = connection;
    
    const response = await apiGateway.postToConnection({
      endpoint: HTTPS_API_ENDPOINT,
      connectionId: connectionId,
      data: JSON.stringify({ 'text': 'hello' }),
    });
    console.log(response);
  }
}

module.exports = {
  handler,
};

/*
(async () => {
  await handler();
})();
*/

/*
async function abc(params) {
  // const client = new ApiGatewayManagementApi({
  //   endpoint: 'https://80f76vvtwg.execute-api.eu-west-2.amazonaws.com/$default',
  //   region: 'eu-west-2'
  // });
  // client.postToConnection({
  //   ConnectionId: 'KEs97eSdLPECG3A=',
  //   Data: JSON.stringify({ 'text': 'hello' }),
  // });
  const response = await apiGateway.postToConnection({
    endpoint: 'https://80f76vvtwg.execute-api.eu-west-2.amazonaws.com/$default',
    connectionId: 'KEs97eSdLPECG3A=',
    data: JSON.stringify({ 'text': 'hello' }),
  });
  console.log(response);
}
*/
