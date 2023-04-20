const Input = ({ onChange }) => {
  const onInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <input
      id="amount"
      type="number"
      min="0.01"
      step="0.01"
      onChange={onInputChange}
      required
    />
  );
};

export default Input;
