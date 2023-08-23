const {
  WEBSOCKET_CONNECTIONS_TABLE,
} = require('../utils/config');

const dynamo = require('../utils/DynamoDBUtils');

async function handler(event, context) {
  console.log(JSON.stringify(event));
  console.log(JSON.stringify(context));

  const { requestContext: { connectionId }} = event;

  await dynamo.deleteItem({
    tableName: WEBSOCKET_CONNECTIONS_TABLE,
    key: {
      connectionId,
    }
  });

  return {
    statusCode: 200,
    body: 'Disconnected',
  };
}

module.exports = {
  handler,
};
