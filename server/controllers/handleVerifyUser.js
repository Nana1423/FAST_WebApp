const mssql = require("mssql");
const connectDB = require("../connection.js");

const handleVerifyUser = async (req, res) => {
  try {
    const { correo, password } = req.body;
    console.log(correo, password);
    const pool = await connectDB();
    const result = await pool
      .request()
      .query(
        `SELECT * FROM Tbl_Usuario WHERE correo = '${correo}' AND password = '${password}'`
      );

    console.log(result.recordsets[0].length)

    if (result.recordsets[0].length > 0) {
      res.status(200).send({ validated: true, user: result.recordsets });
    } else {
        res.status(400).send({validated: false, user: "Not Found or Incorrect Password"})
    }

  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Invalid Information Provided" });
  }
};

module.exports = handleVerifyUser;
