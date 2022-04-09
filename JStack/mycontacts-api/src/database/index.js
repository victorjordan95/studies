const { Client } = require('pg');

const client = new Client({
  user: 'root',
  host: 'localhost',
  database: 'mycontacts',
  password: 'root',
  port: 5432,
});

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
