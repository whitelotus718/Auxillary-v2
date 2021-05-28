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
import './BidCard3.css'

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  media: {
    height: 250,
  },
});

export default function MediaCard2({user}) {
  const classes = useStyles();

  return (
    <Link to={`/users/${user.id}`} style={{ textDecoration: 'none' }}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={user.profile_photo}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {user.artist_name && user.artist_name}
              {!user.artist_name && user.username}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            </Typography>
          </CardContent>
        </CardActionArea>
        <div className="bid-status-btn">
          <CardActions>
          </CardActions>
        </div>
      </Card>
    </Link>

  );
}
