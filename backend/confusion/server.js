import cookieParser from "cookie-parser"
import express from "express"
import httpErrors from "http-errors"
import logger from "morgan"
import path from "path"
import dishRouter from "../routes/dishRouter.js"
import leaderRouter from "../routes/leaderRouter.js"
import promoRouter from "../routes/promoRouter.js"
const __dirname = path.resolve()

const app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use("/dishes", dishRouter)
app.use("/promotions", promoRouter)
app.use("/leaders", leaderRouter)
app.use(express.static(path.join(__dirname, "public")))

// app.use("/")

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(httpErrors(404))
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.json(err)
})

const PORT = 3000

app.listen(PORT, console.log(`Server running on port PORT ` + PORT))
