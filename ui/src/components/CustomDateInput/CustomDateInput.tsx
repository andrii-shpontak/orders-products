import 'react-datepicker/dist/react-datepicker.css';
import './CustomDateInput.css';

import DatePicker from 'react-datepicker';
import type { TDateInputProps } from '../../shared/types';
import { getDualFormatDate } from '../../shared';
import { useState } from 'react';

const CustomDateInput = ({ value, onChange, minDate, maxDate }: TDateInputProps) => {
  const [isOpen, setOpen] = useState(false);

  const onInputClick = () => {
    setOpen(true);
  };

  const handleDateChange = (value: Date | null) => {
    onChange(value);
    setOpen(false);
  };

  const stringValue = !!value ? getDualFormatDate(value.toDateString())[0] : '';
  return (
    <>
      {isOpen ? (
        <div className='datePicker'>
          <h3>Choose the order date</h3>
          <DatePicker
            selected={value}
            onChange={handleDateChange}
            inline
            monthsShown={1}
            dateFormat='yyyy/MM/dd'
            minDate={minDate}
            maxDate={maxDate}
          />
        </div>
      ) : (
        <input value={stringValue} readOnly onClick={onInputClick} className='form-control' />
      )}
    </>
  );
};

export default CustomDateInput;
