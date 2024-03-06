// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";

export async function getAuthors() {
  //Query the database
  const queryText = "SELECT * FROM authors";
  const authors = await pool.query(queryText);
  // return all authors
  return authors.rows;
}

export async function getAuthorById(id) {
  const queryText = "SELECT * FROM authors WHERE authors.id = $1";
  const author = await pool.query(queryText, [id]);
  return author.rows[0] || null;
}

export async function createAuthor(author) {
  // Destructure the argument
  const { firstName, lastName } = author;

  // Parameterize the query and values before passing to pool function
  const queryText = `
    INSERT INTO authors 
    (first_name, last_name ) 
    VALUES ($1, $2) RETURNING *`;
  const values = [`${firstName}`, `${lastName}`];
  // return the response from the db query
  const res = await pool.query(queryText, values);
  return res.rows;
}

export async function updateAuthorById(id, updates) {
  // Query the database to update an author and return the newly updated author or null
}

export async function deleteAuthorById(id) {
  // Query the database to delete an author and return the deleted author or null
}
