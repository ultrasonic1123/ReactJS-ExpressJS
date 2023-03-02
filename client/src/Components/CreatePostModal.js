import React from "react";
import { Button, Modal, TextareaAutosize, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { showPostModal$ } from "../redux/selectors";
import * as actions from "../redux/actions";
import { makeStyles } from "@material-ui/core/styles";
import FileBase64 from "react-file-base64"
import { useState } from "react";

const styles = makeStyles((theme) => ({
    paper: {
      width: "80%",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
    header: {
      margin: "0 0 10px 0",
    },
    title: {
      marginBottom: "10px",
    },
    textarea: {
      padding: "10px",
      marginBottom: "10px",
    },
    footer: {
      marginTop: "10px",
    },
  }));

export default function CreatePostModal() {

    const [data, setData] = useState({
        title: '',
        content: '',
        attachment: ''
    })

  const dispatch = useDispatch();
  const isShow = useSelector(showPostModal$);
  console.log("is show: ", isShow);

  const onSubmit = React.useCallback(() => {
        console.log(data)
        dispatch(actions.createPost.createPostRequest(data))
  }, [data,dispatch])

  const modalBody = (
  <div className={styles().paper}>
    <h2>Create New Post</h2>
    <form noValidate autoComplete="off" className={styles().form}>
        <TextField 
            className={styles().title}
            required
            label='Title'
            value={data.title}
            onChange={(e) => setData({...data, title: e.target.value})}
        />
        <TextareaAutosize 
            className={styles.textarea}
            maxRows={20}
            minRows={10}
            placeholder="Content..."
            value={data.content}
            onChange={(e) => setData({...data, content: e.target.value})}
        />
        <FileBase64
            accept='image/*'
            multiple={false}
            type='file'
            value={data.attachment}
            onDone={({base64}) => setData({...data, attachment: base64})}
        />
        <div className={styles().footer}>
            <Button variant="contained" color="primary" component="span" fullWidth
            onClick={onSubmit}
            >Create</Button>
        </div>
    </form>
  </div>
  )

  return (
    <Modal
      open={isShow}
      onClose={() => {
        dispatch(actions.hideModal());
        console.log("Modal is closed!");
      }}
    >
      {modalBody}
    </Modal>
  );
}

