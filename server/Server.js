import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
const port = 3001;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mypassword',
  database: 'strength_standard_project',
  insecureAuth: true
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

app.use(express.json());
app.use(cors());
app.post('/api/query', (req, res) => {
  const { gender, equipment, division, weightClass, category, weight } = req.body;

  // Construct the SQL query with conditions for each parameter
  let query = `SELECT COUNT(*) AS count FROM IPFDATA WHERE Best3SquatKg > 0 AND Best3BenchKg > 0 AND Best3DeadliftKg > 0`;
  const queryParams = [];

  // Add conditions for additional parameters if they are provided
  if (gender) {
    query += ` AND Sex = ?`;
    queryParams.push(gender);
  }
  if (equipment) {
    query += ` AND Equipment = ?`;
    queryParams.push(equipment);
  }
  if (division) {
    query += ` AND Division = ?`;
    queryParams.push(division);
  }
  if (weightClass) {
    query += ` AND WeightClassKg = ?`;
    queryParams.push(weightClass);
  }
  if (category && weight) {
    // Update the query to use the selected category and weight
    query += ` AND ${category} > ?`;
    queryParams.push(weight);
  }

  // Execute the SQL query with the constructed parameters
  connection.query(query, queryParams, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      const count = results[0].count;
      res.json({ count });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
