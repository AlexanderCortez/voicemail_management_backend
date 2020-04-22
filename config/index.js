const {
  SERVER_URL,
  CREDENTIALS,
  ACCOUNT_ID,
  VMBOX_ID,
} = process.env;

const config = {
  serverUrl: SERVER_URL,
  accountId: ACCOUNT_ID,
  credentials: CREDENTIALS,
  vmBoxId: VMBOX_ID,
};

module.exports = config;
