import { useState } from 'react';

const useInputCustom = () => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return { value, setValue, isFocused, setIsFocused };
};

export default useInputCustom;
