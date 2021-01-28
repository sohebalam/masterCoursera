import express from "express"
import http from "http"
import path from "path"
const __dirname = path.resolve()

const app = express()

app.use(express.json())
app.use(express.static(__dirname + "/public"))

app.all("/dishes", (req, res, next) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "text/plain")
  next()
})

app.get("/dishes", (req, res, next) => {
  res.end("will send dishes")
})

app.post("/dishes", (req, res, next) => {
  res.end(
    "will add the dish: " +
      req.body.name +
      " with details: " +
      req.body.description
  )
})

app.put("/dishes", (req, res, next) => {
  ;(res.statusCode = 403), res.end("put operation not supported ")
})

app.delete("/dishes", (req, res, next) => {
  res.end("deleting all the dishes")
})
app.get("/dishes/:dishId", (req, res, next) => {
  res.end("will send dish " + req.params.dishId)
})

app.post("/dishes/:dishId", (req, res, next) => {
  res.end((res.statusCode = 403), res.end("post operation not supported "))
})

app.put("/dishes/:dishId", (req, res, next) => {
  res.end("will update " + req.params.dishId)
})

app.delete("/dishes/:dishId", (req, res, next) => {
  res.end("deleting  the dish " + req.params.dishId)
})

app.use((req, res, next) => {
  console.log(req.headers)
  res.statusCode = 200
  res.setHeader("Content-Type", "text,html")
  res.end("<html><body><h1>This is an express server</h1></body></html>")
})

const server = http.createServer(app)

const PORT = 3000

server.listen(PORT, console.log(`Server running on port PORT ` + PORT))
