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
  // Query the database and return the author with a matching id or null
  // Query the database - save a variable containing the text for our query called queryText and call
  // Await.pool function
  // Pass the query text and id inside the function
  //
  const queryText = "SELECT * FROM authors WHERE authors.id = $1";
  const author = await pool.query(queryText, [id]);
  return author.rows[0] || null;
}

export async function createAuthor(author) {
  const { firstName, lastName } = author;
  // Query the database to create an author and return the newly created author
  const queryText = `
    INSERT INTO authors
    (first_name, last_name)
    VALUES ($1, $2) RETURNING *`;
  const values = [];
}

export async function updateAuthorById(id, updates) {
  // Query the database to update an author and return the newly updated author or null
}

export async function deleteAuthorById(id) {
  // Query the database to delete an author and return the deleted author or null
}
