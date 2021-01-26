import {
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@material-ui/core"
import React from "react"
// import { HomePage } from "../components/Main"

// import { dishesLoading } from "../redux/actions/ActionsCreators"
import { baseUrl } from "../shared/baseUrl"

const RenderCard = ({ item, isLoading, errMess }) => {
  if (isLoading) {
    return <CircularProgress />
  } else if (errMess) {
    return <h4>{errMess}</h4>
  } else
    return (
      <Card>
        <img src={baseUrl + item.image} alt={item.name} width="100%" />
        <CardHeader
          title={item.name}
          subheader={
            item.designation && <Typography>{item.designation}</Typography>
          }
        />

        <CardContent>{item.description}</CardContent>
      </Card>
    )
}

const HomeComponent = ({
  dish,
  leader,
  promotion,
  dishesLoading,
  dishesErrMess,
  promosErrMess,
  promosLoading,
  leadersLoading,
  leadersErrMess,
}) => {
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} xs={4}>
            <RenderCard
              item={dish}
              isLoading={dishesLoading}
              errMess={dishesErrMess}
            />
          </Grid>
          <Grid item xs={12} xs={4}>
            <RenderCard
              item={leader}
              isLoading={leadersLoading}
              errMess={leadersErrMess}
            />
          </Grid>
          <Grid item xs={12} xs={4}>
            <RenderCard
              item={promotion}
              isLoading={promosLoading}
              errMess={promosErrMess}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default HomeComponent
