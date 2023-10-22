import React from 'react'

export const Total = ({amount, handleReset}) => {

    const {bill,tip,people} = amount

    function TipPerPerson(bill, tip, people){
        let t = 0;
        if (!isNaN(bill) && !isNaN(tip) && !isNaN(people)) {
            if (people !== 0) {
                t = (bill * tip) / people;
            }
        }
        return t;
    }
    
    function TotalPerPerson(bill, tip, people){
        let r = 0;
        if (!isNaN(bill) && !isNaN(tip) && !isNaN(people)) {
            if (people !== 0){
                r = (bill + (bill*tip)) / people;
            }
        }
        return r;
    }

    function handleClickReset() {
        handleReset();
    }

  return (
    <>
        <div className='row'>
            <div className='d-flex'>
                <div className='col-lg-6 col-8'>
                    <div>
                        <span className='text-light'>Tip Amount</span>
                        <br/>
                        <span className='text-secondary'>/ person</span>
                    </div>
                </div>

                <div className='col-lg-6 col-4 amount'>
                    <h2>{`$${isNaN(TipPerPerson(bill,tip,people)) ? '0.00' : TipPerPerson(bill,tip,people).toFixed(2)}`}</h2>
                </div>
            </div>

        <div className='d-flex my-4'>
            <div className='col-lg-6 col-8'>
                <div>
                    <span className='text-light'>Total</span>
                    <br/>
                    <span className='text-secondary'>/person</span>
                </div>
            </div>

            <div className='col-lg-6 col-4 amount'>
                <h2>{`$${isNaN(TotalPerPerson(bill,tip,people)) ? '0.00' : TotalPerPerson(bill,tip,people).toFixed(2)}`}</h2>
            </div>
        </div>

            <input type='button' value='RESET' className='btn my-5 button-reset' onClick={handleClickReset}/>
        </div>
    </>
  )
}
