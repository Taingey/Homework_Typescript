import React from 'react'
import Header from '../Header'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

const HomeRenderCard = ({ cardReader }) => {
  return (
    <header>
      <Header />
      <Container>
        <div className="flex items-center justify-center">
          <div className="p-5 grid grid-cols-4 gap-[2rem] md:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 text-slate-50">
            {cardReader?.map((e) => (
              <div key={e.id}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 300 }}
                    image={e.image}
                    title="green iguana"
               
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="line-clamp-1"
                    >
                      {e.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="line-clamp-2"
                    >
                      {e.description}
                    </Typography>
                  </CardContent>
                  <CardActions className="flex items-center justify-between">
                    <Button variant="contained">Got To Shop</Button>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="line-clamp-2 flex text-2xl font-bold"
                    >
                      <p className='text-[15px]'>
                        $ {e.price}
                      </p>
                    </Typography>
                  </CardActions>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </header>
  )
}

export default HomeRenderCard
