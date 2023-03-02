import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Avatar,
  IconButton,
} from "@material-ui/core";

import moment, { parseTwoDigitYear } from 'moment'

import FavoriteIcon from "@material-ui/icons/Favorite";
import MorevertIcon from "@material-ui/icons/MoreVert";
import { makeStyles } from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../redux/actions";
import EditModal from "./EditModal";
import {showEditModal$} from "../redux/selectors"
const styles = makeStyles(() => ({
    media: {
        height: '200px',
        width: '300px'
    }
}))

export default function PostDetail({post}) {

  const dispatch = useDispatch()
  const isShowEditModal = useSelector(showEditModal$)

  const handleLikeCount = () => {
    console.log("UPDATE LIKE")
    dispatch(actions.updatePost.updatePostRequest({...post, likeCount: ++post.likeCount}))
  }

  return (
    
    <Card>
      <CardHeader
        avatar={<Avatar>{post.author}</Avatar>}
        title={post.title}
        subheader={moment(post.updatedAt).format('HH:MM MMM DD, YYYY')}
        action={
          <IconButton>
            <MorevertIcon onClick={()=>console.log(dispatch(actions.showEditModal()))}/>
          </IconButton>
        }
      />
      <CardMedia image={post.attachment} title="Image's title" className={styles().media}/>
      <CardContent>
        <Typography variant="h5" color="textPrimary">
          {post.title}
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          {post.content}
        </Typography>
      </CardContent>
      <CardActions onClick={handleLikeCount}>
        <IconButton>
          <FavoriteIcon></FavoriteIcon>
          <Typography component="span" color="textSecondary">
           {`${post.likeCount} likes`}
          </Typography>
        </IconButton>
      </CardActions>
      <EditModal isShow={isShowEditModal}/>
    </Card>
    
  );
}
