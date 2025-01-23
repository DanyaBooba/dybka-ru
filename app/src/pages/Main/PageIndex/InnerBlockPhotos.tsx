import Grid from '@mui/material/Grid2';
import {contestsMainPage} from '../../../data/contests/contests';

function InnerBlockPhotos() {
    return (
        <Grid container spacing={2}>
            {contestsMainPage.map((item, index) => (
                <Grid size={4}>
                    <img alt="" />
                </Grid>
            ))}
        </Grid>
    )
}

export default InnerBlockPhotos;