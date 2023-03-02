import React from "react";
import { Grid } from "@material-ui/core";
import PostDetail from "./PostDetail";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react"
import * as actions from '../redux/actions'
import { postsState$ } from "../redux/selectors";
import { isLoadingState$ } from "../redux/selectors";
import Loading from "./Loading";

export default function PostsList() {


    const posts = useSelector(postsState$)
    const isLoading = useSelector(isLoadingState$)
    const dispatch = useDispatch()

    console.log("[posts]: ", posts)
    useEffect(() => {
        dispatch(actions.getPosts.getPostsRequest())
    }, [dispatch])

  return (
    isLoading ?
    <Loading/>
    :
    <Grid container alignItems="stretch" spacing={3}>
      {
        //xs(phones), sm(tablets), md(desktops), lg(larger desktops)
        posts.map((post, index) => {
          return <Grid key={post._id} xs={12} sm={6} item>
            <PostDetail post={post} />
          </Grid>;
        })
      }
    </Grid>
  );
}
