module.exports.handler = async(event) => {
  const users = [
    { name: "user", token: "secretUserToken" },
    { name: "admin", token: "secretAdminToken" }
  ]
  
  const token = event.headers.authorization 
    ? event.headers.authorization.split(' ')[1]
    : event.headers.Authorization
      ? event.headers.Authorization.split(' ')[1]
      : ''

  const user = users.find(x => x.token === token)

  return {
    "isAuthorized": user !== undefined,
    "context": {
      "user": user ? user.name : "none"
    }
  };

};