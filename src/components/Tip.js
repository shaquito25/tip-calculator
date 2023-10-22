import React, { useState } from 'react';

export const Tip = ({ handleClickTip, handleTipChange }) => {
  const [activeButtons, setActiveButtons] = useState({});

  function handleClick(e, value) {
    if (activeButtons[value]) {
      setActiveButtons({});
      handleClickTip(e,value)
    } else {
      setActiveButtons({ [value]: true });
      handleClickTip(e, value);
    }
  }
  

  return (
    <>
      <span className='text-secondary'>Select Tip %</span>
      <div className='row'>
        <div className='col-lg-4 col-6 p-2'>
          <input
            type='button'
            value='5%'
            className={`btn w-75 button-tip ${
              activeButtons[0.05] ? 'active' : ''
            }`}
            onClick={(e) => handleClick(e, 0.05)}
          />
        </div>

        <div className='col-lg-4 col-6 p-2'>
          <input
            type='button'
            value='10%'
            className={`btn w-75 button-tip ${
              activeButtons[0.1] ? 'active' : ''
            }`}
            onClick={(e) => handleClick(e, 0.1)}
          />
        </div>

        <div className='col-lg-4 col-6 p-2'>
          <input
            type='button'
            value='15%'
            className={`btn w-75 button-tip ${
              activeButtons[0.15] ? 'active' : ''
            }`}
            onClick={(e) => handleClick(e, 0.15)}
          />
        </div>

        <div className='col-lg-4 col-6 p-2'>
          <input
            type='button'
            value='25%'
            className={`btn w-75 button-tip ${
              activeButtons[0.25] ? 'active' : ''
            }`}
            onClick={(e) => handleClick(e, 0.25)}
          />
        </div>

        <div className='col-lg-4 col-6 p-2'>
          <input
            type='button'
            value='50%'
            className={`btn w-75 button-tip ${
              activeButtons[0.5] ? 'active' : ''
            }`}
            onClick={(e) => handleClick(e, 0.5)}
          />
        </div>

        <div className='col-lg-4 col-6 p-2'>
          <input
            type='number'
            className='btn form-control'
            id='custom-tip'
            placeholder='CUSTOM'
            onChange={handleTipChange}
          />
        </div>
      </div>
    </>
  );
};
