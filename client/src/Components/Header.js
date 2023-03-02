import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'

const styles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        marginBottom: 20,
        fontWeight: 'lighter',
        padding: '5px 0px'
    }})
)

export default function Header() {
  return (
    <Typography variant='h4' align='center' className={styles().container}>Blog</Typography>
  )
}


