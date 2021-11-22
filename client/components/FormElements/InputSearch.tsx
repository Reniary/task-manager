import React, { useState } from 'react';
import { Button } from '../Button/Button';
import './inputSearch.scss';
import { InputIcon, InputTypeWithIcon } from './InputWithIcon';

export type InputTypeSearch = {
  inputIcon: InputTypeWithIcon;
  onClick?: VoidFunction;
};

export const InputSearch: React.ComponentType<InputTypeSearch> = ({
  inputIcon,
}) => {
  const [value, setValue] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setValue('');
    (
      document.querySelector('.input__text--search') as HTMLInputElement
    )?.focus();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className='search__box'>
      <InputIcon
        {...inputIcon}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        className={isActive ? 'input__search--active' : ''}
      />
      <Button
        type='button'
        color='transparent'
        onClick={handleClick}
        icon={{
          id: 'close',
          width: 10,
          height: 10,
        }}
        className={`search__box-btn__reset ${isActive ? 'show' : ''}`}
      />
      {/* {icon && (
        <div className={`search__box-icon ${isActive ? 'show' : ''}`}>
          <CustomIcon {...icon} onClick={() => { setIsActive(true); setValue('');}} />
        </div>
      )} */}
    </div>
  );
};