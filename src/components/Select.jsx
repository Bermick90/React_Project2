const Select = ({ onChange }) => {
  const onSelectChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <select name="currency" id="currencies" onChange={onSelectChange}>
      <option value="EUR">EUR</option>
      <option value="USD">USD</option>
      <option value="CHF">CHF</option>
    </select>
  );
};

export default Select;
