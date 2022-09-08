import { useEffect, useState } from 'react';

export function Async() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isButtonInvisible, setIsButtonInvisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsButtonInvisible(true)
    }, 1000)
  }, []);
  
  return (
    <div>
      <div>Hello World</div>{!isButtonInvisible && <button>Button</button> }
    </div>
    )
}