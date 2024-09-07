import { Link, useLocation } from 'react-router-dom';
import css from './GoBackBtn.module.css';

export const GoBackBtn = () => {
  const location = useLocation();
  return (
    <Link to={location.state} className={css.link}>
      Go back
    </Link>
  );
};
