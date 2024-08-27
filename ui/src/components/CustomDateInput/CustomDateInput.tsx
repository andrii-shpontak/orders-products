import 'react-datepicker/dist/react-datepicker.css';
import './CustomDateInput.css';

import DatePicker from 'react-datepicker';
import type { TDateInputProps } from '../../shared/types';
import { getDualFormatDate } from '../../shared';
import { useState } from 'react';

const CustomDateInput = ({ value, onChange, minDate, maxDate, placeholder }: TDateInputProps) => {
  const [isOpen, setOpen] = useState(false);

  const onInputClick = () => {
    setOpen(true);
  };

  const handleDateChange = (date: Date | null) => {
    onChange(date);
    setOpen(false);
  };

  const stringValue = value ? getDualFormatDate(value.toDateString())[0] : '';

  return (
    <>
      {isOpen ? (
        <div className='custom-date-input__datepicker'>
          <h3 className='custom-date-input__title'>Choose the date</h3>
          <DatePicker
            selected={value}
            onChange={handleDateChange}
            inline
            monthsShown={1}
            dateFormat='yyyy/MM/dd'
            minDate={minDate}
            maxDate={maxDate}
            className='custom-date-input__datepicker-picker'
          />
        </div>
      ) : (
        <div className='custom-date-input__container'>
          <input
            value={stringValue}
            readOnly
            onClick={onInputClick}
            className='custom-date-input__input'
            placeholder={placeholder || 'Choose the date'}
          />
        </div>
      )}
    </>
  );
};

export default CustomDateInput;
