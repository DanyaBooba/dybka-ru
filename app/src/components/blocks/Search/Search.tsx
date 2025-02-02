import {useState} from 'react';
import Input from '@mui/joy/Input';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/joy/Typography';

export function highlightText(text, searchTerm) {
    if (!searchTerm) return text;

    const regex = new RegExp(`(${searchTerm})`, 'gi');

    return text.split(regex).map(function (part, index) {
      return regex.test(part) ? <mark key={index}>{part}</mark> : part;
    });
}

export function SearchAllCount({ count, mb="0" }) {
    return (
        <Typography sx={{ textAlign: 'center', pt: '1rem', mb: mb }}>
            Всего найдено: {count}
        </Typography>
    )
}

function Search(props) {
    const [searchTerm, setSearchTerm] = useState('');

    function handleChange(event) {
          const value = event.target.value;
          setSearchTerm(value);
          props.onSearch(value); // Передаем значение поиска в родительский компонент
    }

    return (
        <div>
            <Input
                value={searchTerm}
                onChange={handleChange}
                startDecorator={<SearchIcon />}
                placeholder="Найти..."
                size="lg"
                variant="outlined"
                autoFocus
                className="search"
                sx={{
                    mb: '1.5rem',
                    borderRadius: '50px',
                    py: '1rem',
                    px: '2rem'
                }}
              />
        </div>
    )
}

export default Search;