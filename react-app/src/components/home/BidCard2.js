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
import './BidCard2.css'

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  media: {
    height: 250,
  },
});

export default function MediaCard2({bid, accepted, handleClick}) {
  const classes = useStyles();
  console.log(bid.event.venuePhoto)


  return (
    <Link to={`/events/${bid.event.id}`} style={{ textDecoration: 'none' }}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={bid.artist.profile_photo}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {bid.artist.artist_name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {/* {bid.artist.email} */}
            </Typography>
          </CardContent>
        </CardActionArea>
        <div className="bid-status-btn">
          <CardActions>
            <Button size="small" color="primary">
                {bid.isAccepted && <h4>Accepted!</h4>}
                {!bid.isAccepted && <h4>Denied! :(</h4>}
              </Button>
              {!accepted && <div classname="accept-bid-btn"><h1><Button color="primary" variant="contained" type="button" size="medium" onClick={handleClick}>Accept Bid</Button></h1></div>}
              {accepted && bid.isAccepted && <h1><Button type="button" onClick={handleClick}>Decline Bid</Button></h1>}
              {accepted && !bid.isAccepted && <h1><Button type="button" disabled onClick={handleClick}>Decline Bid</Button></h1>}
          </CardActions>
        </div>
      </Card>
    </Link>

  );
}
