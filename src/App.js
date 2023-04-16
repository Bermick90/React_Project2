import { useEffect, useState } from 'react';
import './App.css';
import Select from './components/Select';
//import Input from './components/Input';
//import Result from './components/Result';

function App() {
  const [selectValue, setSelectValue] = useState('EUR');
  const handleSelectChange = (event) => {
    console.log(event);
  };
  function getCurrencies() {
    fetch(
      `https://api.nbp.pl/api/exchangerates/rates/A/${selectValue}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }
  getCurrencies();

  return (
    <>
      <form>
        {/* <Input /> */}
        <Select onChange={handleSelectChange} />
        <input type="submit" value="Przelicz" />
      </form>
      {/* <Result /> */}
    </>
  );
}

export default App;
//

// document.addEventListener('DOMContentLoaded', getCurrencies);

// function convertCurrency() {
//   currencies.forEach((item) => {
//     if (item.code === currencySelect.value) {
//       if (currencySelect.value <= 0) {
//       } else {
//         const result = item.mid * inputAmount.value;
//         const resultFixed = result.toFixed(2);
//         resultValue.innerHTML = resultFixed + ' PLN';
//       }
//     }
//   });
// }

// const form = document.getElementById('form');
// {
//   form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     convertCurrency();
//   });
// }
