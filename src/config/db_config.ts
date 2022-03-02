export default () => ({
  db_type: process.env.DB_TYPE || 'mysql',
  db_host: process.env.DB_HOST || 'localhost',
  db_port: process.env.DB_PORT || 3306,
  db_username: process.env.DB_USERNAME || 'root',
  db_password: process.env.DB_PASSWORD || 'market565',
  db_database: process.env.DB_DATABASE || 'mydbase',
});
