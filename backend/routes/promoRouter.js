import express from "express"
const promoRouter = express.Router()

promoRouter
  .route("/")

  .all((req, res, next) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    next()
  })

  .get((req, res, next) => {
    res.end("will send promotions")
  })

  .post((req, res, next) => {
    res.end(
      "will add the promotion: " +
        req.body.name +
        " with details: " +
        req.body.description
    )
  })

  .put((req, res, next) => {
    ;(res.statusCode = 403), res.end("put operation not supported ")
  })

  .delete((req, res, next) => {
    res.end("deleting all the promotions")
  })

promoRouter
  .route("/:promoId")
  .get((req, res, next) => {
    res.end("will send promotions " + req.params.promoId)
  })
  .post((req, res, next) => {
    ;(res.statusCode = 403), res.end("post operation not supported ")
    // res.end((res.statusCode = 403), res.end("post operation not supported "))
  })
  .put((req, res, next) => {
    res.end("will update " + req.params.promoId)
  })
  .delete((req, res, next) => {
    res.end("deleting  the promotions " + req.params.promoId)
  })

export default promoRouter
