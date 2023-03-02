import React, { useEffect } from "react";
import { Container, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import Header from "../Components/Header"
import PostsList from "../Components/PostsList"
import styles from './styles'
import CreatePostModal from "../Components/CreatePostModal";
import { useDispatch } from "react-redux";
import * as actions from '../redux/actions'
import MuiThemeProvider from '@material-ui/styles/ThemeProvider'


export default function HomePage() {
  const dispatch = useDispatch()
  return (
    <Container maxWidth="lg">
        <Header />
        <PostsList />
        <Fab color='primary' className={styles().fab} onClick={() => {
          console.log('show modal')
          dispatch(actions.showModal())
          }}>
          <AddIcon />
        </Fab>
        <CreatePostModal />
    </Container>
  );
}

