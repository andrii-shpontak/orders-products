import './index.css';

import plusIcon from '../../assets/icons/plus.svg';

const PageTitle = ({ title, count }: { title: string; count: number }) => {
  return (
    <div className='pageTitle'>
      <img src={plusIcon} alt='Plus icon' />
      {title} / {count}
    </div>
  );
};

export default PageTitle;
