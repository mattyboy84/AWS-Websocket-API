
async function handler(event, context) {
  console.log(JSON.stringify(event));
  console.log(JSON.stringify(context));

  return {
    statusCode: 200,
    body: JSON.stringify({
      "text": 'User Created'
    }),
  };
}

module.exports = {
  handler,
};
