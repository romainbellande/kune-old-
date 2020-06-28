import React, { FC } from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
  CardActions,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const maxLines = 3;
const lineHeight = '1.4rem';

const useStyles = makeStyles({
  root: {
    maxWidth: 210,
  },
  media: {
    height: 250,
  },
  description: {
    height: '3.6rem',
    position: 'relative',
    maxHeight: `calc(${maxLines} * ${lineHeight})`,
    overflow: 'hidden',
    paddingRight: '1rem',
  },
  title: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontSize: 13,
  },
});

interface Props {
  externalId: string;
  title: string;
  authors: string[];
  thumbnail: string;
}

const BookCardView: FC<Props> = ({ externalId, title, thumbnail }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={thumbnail} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" component={Link} to={`/books/${externalId}`}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookCardView;
