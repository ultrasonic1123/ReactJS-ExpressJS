import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Modal } from '@material-ui/core'
import * as actions from '../redux/actions'
import { useDispatch } from 'react-redux'
const styles = makeStyles((theme) => ({
   modal:{ width: '20%',
    height: '10%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),}
}))

export default function EditModal({isShow}) {
const dispatch = useDispatch()
const editModalBody = (
    <div className={styles().modal}>
        Delete
    </div>
)

  return (
    <Modal
    open={isShow}
      onClose={() => {
        dispatch(actions.hideEditModal());
        console.log("Edit Modal is closed!");
      }}
    >
        {
            editModalBody
        }
    </Modal>
  )
}
