const Input = ({ onChange }) => {
  const onInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <input
      id="amount"
      type="number"
      min="1"
      onChange={onInputChange}
    />
  );
};

export default Input;
