const {
  WEBSOCKET_CONNECTIONS_TABLE,
} = require('../utils/config');

const dynamo = require('../utils/DynamoDBUtils');

async function handler(event, context) {
  console.log(JSON.stringify(event));
  console.log(JSON.stringify(context));

  const { requestContext: { connectionId }} = event;

  await dynamo.putItem({
    tableName: WEBSOCKET_CONNECTIONS_TABLE,
    item: {
      connectionId,
    }
  });

  return {
    statusCode: 200,
    body: 'Connected',
  };
}

module.exports = {
  handler,
};
