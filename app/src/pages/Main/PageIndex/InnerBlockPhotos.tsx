import Grid from '@mui/material/Grid2';
import {contestsMainPage} from '../../../data/contests/contests';
import AspectRatio from "@mui/joy/AspectRatio";

function InnerBlockPhotos() {
    return (
        <Grid container spacing={2}>
            {contestsMainPage.map((item, index) => (
                <Grid size={4} key={index}>
                    <AspectRatio ratio="1/1" className="image-contests">
                        <img src={`/img/contests/${item.imageCap}`} alt={item.title} />
                    </AspectRatio>
                </Grid>
            ))}
        </Grid>
    )
}

export default InnerBlockPhotos;