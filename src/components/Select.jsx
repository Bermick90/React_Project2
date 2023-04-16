const Select = ({ onChange }) => {
  return (
    <select
      name="currency"
      id="currencies"
      onChange={(event) => onChange()}
    >
      <option value="EUR">EUR</option>
      <option value="USD">USD</option>
      <option value="CHF">CHF</option>
    </select>
  );
};

export default Select;
