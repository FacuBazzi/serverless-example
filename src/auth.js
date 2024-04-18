module.exports.handler = async(event) => {
  const users = [
    { name: "user", token: "secretUserToken" },
    { name: "admin", token: "secretAdminToken" }
  ]
  
  const user = users.find(x => x.token === event.headers.token)

  return {
    "isAuthorized": user !== undefined,
    "context": {
      "user": user ? user.name : "none"
    }
  };

};