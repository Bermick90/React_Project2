import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
//

const inputAmount = document.getElementById('amount');
const currencySelect = document.getElementById('currencies');
const resultValue = document.getElementById('result');
const checkButton = document.getElementById('button');
const currencyTable = getCurrencies();

const select = document.getElementById('select');
let currencies;

resultValue.innerHTML = ' XXX PLN';

function getCurrencies() {
  fetch('https://api.nbp.pl/api/exchangerates/tables/A/')
    .then((response) => response.json())
    .then((data) => {
      currencies = data[0].rates;
    });
}
document.addEventListener('DOMContentLoaded', getCurrencies);

function convertCurrency() {
  currencies.forEach((item) => {
    if (item.code === currencySelect.value) {
      if (currencySelect.value <= 0) {
      } else {
        const result = item.mid * inputAmount.value;
        const resultFixed = result.toFixed(2);
        resultValue.innerHTML = resultFixed + ' PLN';
      }
    }
  });
}

const form = document.getElementById('form');
{
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    convertCurrency();
  });
}
