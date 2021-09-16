const decimalBase = 10;
const env = {
  port: parseInt(process.env.PORT, decimalBase) || 5000,
  mongoUri: process.env.MONGO_URI,
};

export default env;
