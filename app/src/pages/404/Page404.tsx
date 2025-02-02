import Typography from '@mui/joy/Typography'
import Link from '@mui/joy/Link'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import Box from '@mui/joy/Box'

type Props = {
    elem: string,
    link: string,
    elemTitle: string,
};

const BlockNotFind = ({elem = "", link, elemTitle = "Не удалось найти"}: Props) => (
    <Box sx={{
        height: '100vh !important',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <Link href={link}>
                <img
                    src="/img/illustrations/page-404.png"
                    alt="Страница не найдена"
                    style={{
                        maxWidth: '300px',
                        marginBottom: '1rem',
                        width: '100%',
                        height: 'auto'
                    }}
                />
            </Link>
        </div>
        <Typography level="h1" sx={{mb: '1rem', textAlign: 'center'}}>{elemTitle} {elem}</Typography>
        <Typography sx={{mb: '1rem', textAlign: 'center'}}>Возможно вы ошиблись в ссылке.</Typography>
        <div style={{textAlign: 'center'}}>
            <Link href={link} startDecorator={<KeyboardArrowLeftIcon/>}>Вернуться назад</Link>
        </div>
    </Box>
)

function Page404() {
    return (
        <>
            <BlockNotFind elemTitle="Страница не найдена" link="/" elem=""/>
        </>
    )
}

export default Page404