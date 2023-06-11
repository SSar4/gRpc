
function create(call, callback) {
    const message = call.request;
    const response = { content: ` ${message.content}` };
    callback(null, response);
  }
  
function find(call, callback) {
    const message = call.request;
    const response = { content: ` ${message.content}` };
    callback(null, response);
}

module.exports = {
    create,
    find
}