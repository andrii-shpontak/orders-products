import './index.css';

import type { TPageTitleProps } from '../../shared/types';
import plusIcon from '../../assets/icons/plus.svg';
import { useNavigate } from 'react-router-dom';

const PageTitle = ({ title, count, createLink }: TPageTitleProps) => {
  const navigate = useNavigate();

  const onAddClick = () => {
    if (createLink) {
      navigate(createLink);
    }
  };

  return (
    <div className='page-title'>
      <img src={plusIcon} alt='Add icon' className='page-title__icon' onClick={onAddClick} />
      <span className='page-title__text'>
        {title} / {count}
      </span>
    </div>
  );
};

export default PageTitle;
