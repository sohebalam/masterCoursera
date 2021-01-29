import express from "express"
const leaderRouter = express.Router()

leaderRouter
  .route("/")

  .all((req, res, next) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    next()
  })

  .get((req, res, next) => {
    res.end("will send leaders")
  })

  .post((req, res, next) => {
    res.end(
      "will add the leader: " +
        req.body.name +
        " with details: " +
        req.body.description
    )
  })

  .put((req, res, next) => {
    ;(res.statusCode = 403), res.end("put operation not supported ")
  })

  .delete((req, res, next) => {
    res.end("deleting all the leaders")
  })

leaderRouter
  .route("/:leaderId")
  .get((req, res, next) => {
    res.end("will send leader " + req.params.leaderId)
  })
  .post((req, res, next) => {
    ;(res.statusCode = 403), res.end("post operation not supported ")
    // res.end((res.statusCode = 403), res.end("post operation not supported "))
  })
  .put((req, res, next) => {
    res.end("will update " + req.params.leaderId)
  })
  .delete((req, res, next) => {
    res.end("deleting  the leader " + req.params.leaderId)
  })

export default leaderRouter
