import React from 'react';

export const People = ({ handlePeopleChange, people }) => {
  return (
    <>
      <div className='py-2'>
        <div className='d-flex justify-content-between'>
          <span className='text-secondary'>Number of People</span>
          <span>{people === 0 && <span className='text-danger'>Can't be Zero</span>} </span>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">
            <img src={`${process.env.PUBLIC_URL}/icon-person.svg`} alt="Icono de persona" />
          </span>
          <input type="number" className="form-control onRight" id='people' onChange={handlePeopleChange} placeholder='0' />
        </div>
      </div>
    </>
  );
};

