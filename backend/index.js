const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();
app.use(cors());
app.use(bodyParser.json());


const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Hoardings API",
      version: "1.0.0",
      description: "CRUD operations for hoardings table"
    },
    servers: [
      { url: "http://localhost:3000" }
    ],
  },
  apis: ["./index.js"], 
};

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

/**
 * @swagger
 * components:
 *   schemas:
 *     Hoarding:
 *       type: object
 *       properties:
 *         h_id:
 *           type: integer
 *         h_name:
 *           type: string
 *         address:
 *           type: string
 *         city:
 *           type: string
 *         state:
 *           type: string
 *         latitude:
 *           type: string
 *         longitude:
 *           type: string
 *         size:
 *           type: string
 *         owner_name:
 *           type: string
 *         contact_person:
 *           type: string
 *         contact_number:
 *           type: string
 *         ad_start_date:
 *           type: string
 *           format: date
 *         ad_end_date:
 *           type: string
 *           format: date
 *         status:
 *           type: string
 *         rental_cost:
 *           type: integer
 *         contract_start_date:
 *           type: string
 *           format: date
 *         contract_end_date:
 *           type: string
 *           format: date
 *         notes:
 *           type: string
 *         created_at:
 *           type: string
 *           format: date-time
 */


/**
 * @swagger
 * /hoardings:
 *   post:
 *     summary: Create a new hoarding
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Hoarding'
 *     responses:
 *       200:
 *         description: Hoarding created successfully
 */
app.post("/hoardings", (req, res) => {
  const data = req.body;
  const sql = `INSERT INTO hoardings 
    (h_name, address, city, state, latitude, longitude, size, owner_name, contact_person, 
     contact_number, ad_start_date, ad_end_date, status, rental_cost, contract_start_date, 
     contract_end_date, notes) 
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

  db.query(sql, [
    data.h_name, data.address, data.city, data.state, data.latitude, data.longitude, data.size,
    data.owner_name, data.contact_person, data.contact_number, data.ad_start_date, data.ad_end_date,
    data.status, data.rental_cost, data.contract_start_date, data.contract_end_date, data.notes
  ], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Hoarding added", id: result.insertId });
  });
});


/**
 * @swagger
 * /hoardings:
 *   get:
 *     summary: Get all hoardings
 *     responses:
 *       200:
 *         description: List of hoardings
 */
app.get("/hoardings", (req, res) => {
  const sql = `SELECT h_id, h_name, address, city, state, latitude, longitude, size, owner_name, 
                      contact_person, contact_number, ad_start_date, ad_end_date, status, rental_cost, 
                      contract_start_date, contract_end_date, notes, created_at 
               FROM hoardings`;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});


/**
 * @swagger
 * /hoardings/{id}:
 *   get:
 *     summary: Get hoarding by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Hoarding details
 */
app.get("/hoardings/:id", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT h_id, h_name, address, city, state, latitude, longitude, size, owner_name, 
                      contact_person, contact_number, ad_start_date, ad_end_date, status, rental_cost, 
                      contract_start_date, contract_end_date, notes, created_at 
               FROM hoardings WHERE h_id = ?`;
  db.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
});

/**
 * @swagger
 * /hoardings/{id}:
 *   put:
 *     summary: Update hoarding
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Hoarding'
 *     responses:
 *       200:
 *         description: Hoarding updated successfully
 */
app.put("/hoardings/:id", (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const sql = `UPDATE hoardings SET 
    h_name=?, address=?, city=?, state=?, latitude=?, longitude=?, size=?, owner_name=?, 
    contact_person=?, contact_number=?, ad_start_date=?, ad_end_date=?, status=?, rental_cost=?, 
    contract_start_date=?, contract_end_date=?, notes=? 
    WHERE h_id=?`;

  db.query(sql, [
    data.h_name, data.address, data.city, data.state, data.latitude, data.longitude, data.size,
    data.owner_name, data.contact_person, data.contact_number, data.ad_start_date, data.ad_end_date,
    data.status, data.rental_cost, data.contract_start_date, data.contract_end_date, data.notes, id
  ], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Hoarding updated" });
  });
});


/**
 * @swagger
 * /hoardings/{id}:
 *   delete:
 *     summary: Delete hoarding
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Hoarding deleted successfully
 */
app.delete("/hoardings/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM hoardings WHERE h_id = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Hoarding deleted" });
  });
});


app.listen(3000, () => {
  console.log(" Server running on http://localhost:3000");
  console.log("Swagger Docs at http://localhost:3000/api-docs");
});
