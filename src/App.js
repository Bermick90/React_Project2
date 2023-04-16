import { useEffect, useState } from 'react';
import './App.css';
import Select from './components/Select';
import Input from './components/Input';
import Result from './components/Result';

function App() {
  const [selectValue, setSelectValue] = useState('EUR');
  const [inputValue, setInputValue] = useState('');

  const handleSelectChange = (value) => {
    setSelectValue(value);
  };
  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const validateForm = (event) => {
    event.preventDefault();
    if (inputValue) {
      getCurrencies();
    } else alert('uzupełnij pole!');
  };

  const getCurrencies = () => {
    fetch(
      `https://api.nbp.pl/api/exchangerates/rates/A/${selectValue}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.rates[0].mid);
      });
  };

  // const convertCurrency = () => {

  //     if (item.code === currencySelect.value) {
  //       if (currencySelect.value <= 0) {
  //       } else {
  //         const result = item.mid * inputAmount.value;
  //         const resultFixed = result.toFixed(2);
  //         resultValue.innerHTML = resultFixed + ' PLN';
  //       }
  //     }
  //   });
  // };

  return (
    <>
      <form onSubmit={validateForm}>
        <Input onChange={handleInputChange} />
        <Select onChange={handleSelectChange} />
        <input type="submit" value="Przelicz" />
      </form>
      <Result />
    </>
  );
}

export default App;
