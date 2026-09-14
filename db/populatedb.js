#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  text VARCHAR ( 255 ),
  added DATE NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO messages (username, text) 
VALUES
  ('Bryan', 'Hello'),
  ('Odin', 'Hi There'),
  ('Damon', 'Good Afternoon');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.EXTERNAL_DATABASE_URL,
  });
  console.log("plm");
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();