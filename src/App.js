import { useEffect, useState } from 'react';
import './App.css';
import Select from './components/Select';
import Input from './components/Input';
import Result from './components/Result';
import companyLogo from './assets/GRU.png';

function App() {
  const [selectValue, setSelectValue] = useState('EUR');
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

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
        convertCurrency(data.rates[0].mid);
      });
  };

  const convertCurrency = (rate) => {
    const result = (rate * inputValue).toFixed(2);
    setOutputValue(result);
  };

  return (
    <>
      <title>Pigeon Currency Calculator</title>
      <div className="container">
        <div className="logo">
          <div className="app__logo">
            <img src={companyLogo} alt="Gołąbek Gru" />
          </div>
          <h1 className="text--center">Pigeon Currency Calculator</h1>
        </div>
        <div className="calculation">
          <form onSubmit={validateForm}>
            <Input onChange={handleInputChange} />
            <Select onChange={handleSelectChange} />
            <input type="submit" value="Przelicz" />
          </form>
          <Result convertedValue={outputValue} />
        </div>
      </div>
    </>
  );
}

export default App;
