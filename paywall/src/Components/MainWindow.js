import { Paper, Typography } from '@mui/material'
import * as React from 'react'
import PaperBackground from '../Assets/white-paper-texture.jpg'

const MainWindow = (props) => {

    return (

        <Paper elevation={24} sx={{padding: '20%', backgroundImage: `url(${PaperBackground})`}}>
            <Typography>Papier</Typography>
        </Paper>
    )
}

export default MainWindow;