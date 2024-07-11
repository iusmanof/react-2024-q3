import { Link } from 'react-router-dom';
import { HeaderLi, HeaderUl } from '../../styles/HeaderStyle';

export const Header = () => {
  return (
    <div>
      <HeaderUl>
        <HeaderLi>
          <Link to={`/`}>Search Pokemon Page</Link>
        </HeaderLi>
        <HeaderLi>
          <Link to={`/not_found`}>Not found</Link>
        </HeaderLi>
      </HeaderUl>
    </div>
  );
};
