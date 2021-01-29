import express from "express"
import http from "http"
import path from "path"
import dishRouter from "./routes/dishRouter.js"
import leaderRouter from "./routes/leaderRouter.js"
import promoRouter from "./routes/promoRouter.js"
const __dirname = path.resolve()

const app = express()

app.use(express.json())
app.use(express.static(__dirname + "/public"))

app.use("/dishes", dishRouter)
app.use("/promotions", promoRouter)
app.use("/leaders", leaderRouter)

app.use((req, res, next) => {
  console.log(req.headers)
  res.statusCode = 200
  res.setHeader("Content-Type", "text,html")
  res.end("<html><body><h1>This is an express server</h1></body></html>")
})

const server = http.createServer(app)

const PORT = 3000

server.listen(PORT, console.log(`Server running on port PORT ` + PORT))
