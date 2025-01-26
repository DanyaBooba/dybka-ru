import Grid from '@mui/material/Grid2';
import {contestsMainPage} from '../../../data/contests/contests';
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import Chip from '@mui/joy/Chip';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';
import Visibility from '@mui/icons-material/Visibility';
import CreateNewFolder from '@mui/icons-material/CreateNewFolder';

function BlockPhoto({ image, title, link }) {
    return (
        <Card variant="plain" sx={{ bgcolor: 'initial', p: 0 }}>
            <Box sx={{ position: 'relative' }}>
              <AspectRatio ratio="1/1">
                <figure>
                  <img
                    src={`/img/contests/${image}`}
                    loading="lazy"
                    alt={title}
                  />
                </figure>
              </AspectRatio>
              <CardCover
                className="gradient-cover"
                sx={{
                  '&:hover, &:focus-within': {
                    opacity: 1,
                  },
                  opacity: 0,
                  transition: '0.1s ease-in',
                  background:
                    'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
                }}
              >
                <div>
                  <Box
                    sx={{
                      p: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      flexGrow: 1,
                      alignSelf: 'flex-end',
                    }}
                  >
                    <Typography level="h3" sx={{ fontSize: 'lg' }}>
                      <Link
                        href={`/contests#${link}`}
                        overlay
                        underline="none"
                        sx={{
                          color: '#fff',
                          textOverflow: 'ellipsis',
                          overflow: 'hidden',
                          display: 'block',
                        }}
                      >
                        {title}
                      </Link>
                    </Typography>
                  </Box>
                </div>
              </CardCover>
            </Box>
          </Card>
    )
}

function InnerBlockPhotos() {
    const gridSize = {
        lg: 4,
        md: 4,
        sm: 12,
        xs: 12
    }

    return (
        <Grid container spacing={2}>
            {contestsMainPage.map((item, index) => (
                <Grid size={gridSize} key={index}>
                    <BlockPhoto image={item.imageCap} link={item.link} title={item.title} />
                </Grid>
            ))}
        </Grid>
    )
}

export default InnerBlockPhotos;