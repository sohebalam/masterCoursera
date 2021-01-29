import express from "express"
const dishRouter = express.Router()

dishRouter
  .route("/")

  .all((req, res, next) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    next()
  })

  .get((req, res, next) => {
    res.end("will send dishes")
  })

  .post((req, res, next) => {
    res.end(
      "will add the dish: " +
        req.body.name +
        " with details: " +
        req.body.description
    )
  })

  .put((req, res, next) => {
    ;(res.statusCode = 403), res.end("put operation not supported ")
  })

  .delete((req, res, next) => {
    res.end("deleting all the dishes")
  })

dishRouter
  .route("/:dishId")
  .get((req, res, next) => {
    res.end("will send dish " + req.params.dishId)
  })
  .post((req, res, next) => {
    ;(res.statusCode = 403), res.end("post operation not supported ")
    // res.end((res.statusCode = 403), res.end("post operation not supported "))
  })
  .put((req, res, next) => {
    res.end("will update " + req.params.dishId)
  })
  .delete((req, res, next) => {
    res.end("deleting  the dish " + req.params.dishId)
  })

export default dishRouter
