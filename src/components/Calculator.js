import React, { useState, useEffect} from 'react'
import { Bill } from './Bill'
import { Tip } from './Tip'
import { People } from './People'
import { Total } from './Total'

export const Calculator = () => {

  const [bill, setBill] = useState(0)
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0)
  const [amount, setAmount] = useState({bill:0,tip:0,people:0})

  function handleChangeBill(e) {
    const value = e.target.value;
    setBill(value !== "" ? value : 0);
  }
  
  function handleTipChange(e){
    const value = e.target.value;
    setTip(value !== "" ? value/100 : 0);
  }

  function handlePeopleChange(e){
    const value = e.target.value;
    setPeople(value !== "" ? value : 0);
  }

  function handleClickTip(e, value){
    e.preventDefault();
    if (value === tip) {
      setTip(0);
    } 
    else {
      setTip(value);
    }
  }

  function handleReset(){
    setBill(0)
    setTip(0)
    setPeople(0)

    // Obtiene todos los botones con la clase button-tip
    const buttons = document.getElementsByClassName("button-tip");

    // Itera sobre los botones y quita la clase active solo si la tienen
    for (const button of buttons) {
        if (button.classList.contains("active")) {
            button.classList.remove("active");
        }
    }
    document.getElementById("bill").value = '';
    document.getElementById("people").value = '';
    document.getElementById("custom-tip").value = 'CUSTOM';
  }

  useEffect(() => {
    if (bill !== undefined && tip !== undefined && people !== undefined) {
      setAmount({
        bill: parseFloat(bill),
        tip: parseFloat(tip),
        people: parseInt(people),
      });
    }
  }, [bill, tip, people]);

  
  return (
    <main className='container d-flex justify-content-center min-vh-100 align-items-center'>
        <div className='border p-5 white-container'>
          <div className='row'>
              <div className='col-lg-7 col-12 p-5'>
                  <Bill handleChangeBill={handleChangeBill} value={bill}/>
                  <Tip handleClickTip={handleClickTip} handleTipChange={handleTipChange}/>
                  <People handlePeopleChange={handlePeopleChange} people={people}/>
              </div>
              
              <div className='col-lg-5 col-12 border p-5 total-container'>
                <Total amount={amount} handleReset={handleReset}/>
              </div>
          </div>
        </div>
    </main>
  )
}
