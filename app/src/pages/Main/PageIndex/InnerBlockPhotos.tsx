import Grid from '@mui/material/Grid2';
import { contestsMainPage } from '../../../data/contests/contests';
import AspectRatio from "@mui/joy/AspectRatio";
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';

function BlockPhoto({ image, title, link }) {
  return (
    <Card variant="plain" sx={{ bgcolor: 'initial', p: 0, borderRadius: '20px !important' }}>
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
              '#00000077',
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
    sm: 6,
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
