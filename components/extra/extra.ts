
const { JWT } = require("google-auth-library");
const fs = require("fs");
const { Url } = require("url");
// const myUrl = new Url("http://example.com");

const file = "./service-account.json";

const a = JSON.parse(fs.readFileSync(file));
const SCOPES = ["https://www.googleapis.com/auth/firebase.messaging"];

const client = new JWT({
  email: a.client_email,
  key: a.private_key,
  scope: SCOPES,
});

// client.authorize();

export const getAccessToken = async () => {
  const token = await client.authorize();
  console.log(token);
  // console.log()
};