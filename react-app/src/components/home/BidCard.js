import React from 'react';
import { useParams, Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({bid}) {
  const classes = useStyles();
  console.log(bid.event.venuePhoto)
  return (
    <Link to={`/events/${bid.event.id}`} style={{ textDecoration: 'none' }}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={bid.event.venuePhoto}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {bid.event.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {bid.event.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Button size="small" color="primary">
            Share
          </Button> */}
          <Button size="small" color="primary">
            {bid.isAccepted && <h4>Accepted!</h4>}
            {!bid.isAccepted && <h4>Denied! :(</h4>}
          </Button>
        </CardActions>
      </Card>
    </Link>

  );
}
