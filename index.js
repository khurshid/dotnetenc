// let Password = "usY6UtI6QJ664wxIQoBuCgq+PFM="; //St0ckD1vConn13
let PasswordSalt = "2OojBHUnsmh9PRYMEjZWXw==";
const crypto = require("crypto")
//ueiloiE9aKJ2FzBTLqwSsaJi0A==
//usY6UtI6QJ664wxIQoBuCgq+PFM=
function dotnet_membership_password_hash(pass, salt)
{
  let bytes = new Buffer(pass || '', 'utf16le');
  let src = new Buffer(salt || '', 'base64');
  const dst = new Buffer(src.length + bytes.length);
  src.copy(dst, 0, 0, src.length);
  bytes.copy(dst, src.length, 0, bytes.length);

  return crypto.createHash('sha1').update(dst).digest('base64');
}
let saltx = crypto.randomBytes(16).toString('base64');
console.log(saltx);
console.log(dotnet_membership_password_hash('St0ckD1vConn13',PasswordSalt))