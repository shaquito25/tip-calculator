import React from 'react'

export const Bill = (props) => {
  return (
    <>
        <span className='text-secondary'>Bill</span>
        <div className="input-group mb-3">
          <span className="input-group-text border" id="basic-addon1">
            <img src={`${process.env.PUBLIC_URL}/icon-dollar.svg`} alt="Icono de dolar"/>
          </span>
          <input type="number" className="form-control onRight" placeholder='0' id='bill' value={props.bill} onChange={props.handleChangeBill}/>
        </div>
    </>
  )
}
