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
    <div className='type-selector'>
      <label className='type-selector__label' htmlFor='simple-select'>
        Choose a type:
      </label>
      <select className='type-selector__select' id='simple-select' value={value} onChange={handleChange}>
        <option className='type-selector__option' value=''>
          Show all
        </option>
        {options.map((option, i) => (
          <option className='type-selector__option' value={option} key={i}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TypeSelector;
