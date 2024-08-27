import './index.css';

import type { TPageTitleProps } from '../../shared/types';
import plusIcon from '../../assets/icons/plus.svg';
import { useNavigate } from 'react-router-dom';

const PageTitle = ({ title, count, createLink }: TPageTitleProps) => {
  const navigate = useNavigate();

  const onAddCLick = () => {
    if (!!createLink) {
      navigate(createLink);
    }
  };

  return (
    <div className='pageTitle'>
      <img src={plusIcon} alt='Plus icon' onClick={onAddCLick} />
      {title} / {count}
    </div>
  );
};

export default PageTitle;
