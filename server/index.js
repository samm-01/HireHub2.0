const express = require('express')
const app = express()
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require('./models')

// Routers
const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

db.sequelize.sync().then(() => {
    app.listen(process.env.PORT || '3001', () => {
        console.log("server is running on 3001")
    });
});