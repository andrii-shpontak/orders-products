import './index.css';

import React from 'react';

export type TTypeSelector = {
  value: string;
  setValue: (value: string) => void;
  options: string[];
};
const TypeSelector = ({ value, setValue, options }: TTypeSelector) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className='typeSelector'>
      <label htmlFor='simple-select'>Choose a type:</label>
      <select value={value} onChange={handleChange}>
        <option value=''>Show all</option>
        {options.map((option, i) => (
          <option value={option} key={i}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TypeSelector;
