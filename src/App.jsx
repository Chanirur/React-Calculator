import { useState } from 'react'
import Button from './component/button'
import './App.css'

function test() {
    window.location.href = 'https://google.com';
    return;
}

function App() {
  const [input, setInput] = useState('');
  const [currentTotal, setCurrentTotal] = useState(0);
  const [currentOperator, setCurrentOperator] = useState('');
  
  const handleButtonClick = (value) => {
    if (typeof(value) == 'number') {
      setInput((prev) => prev + String(value));
    } else if(value == 'Backspace') {
      if (input != '') {
        setInput((prev) => prev.substring(0, prev.length -1));
      }
    } else if (value == 'C') {
      setInput('');
      setCurrentOperator('');
      setCurrentTotal(0);
    } else if (typeof(value) == 'string' && input != '') {
      if (!currentOperator || currentOperator === '+') {
        setCurrentTotal((prev) => prev + Number(input));
      } else if (currentOperator === '-') {
        setCurrentTotal((prev) => prev - Number(input));
      } else if (currentOperator === '*') {
        setCurrentTotal((prev) => prev * Number(input));
      } else if (currentOperator === '/') {
        setCurrentTotal((prev) => prev / Number(input));
      }
      setInput('');
      if (value != '=') {
        setCurrentOperator(value);
      } else {
        setInput('');
        setCurrentOperator('');
      }
      
    }
  }

  return (
    <>
      <div className="background">
        <div className="display">
          <div className="currentTotal">
            { currentTotal }
          </div>
          <div className="input">
            { input ? input : 0 } 
          </div>
        </div>

        <div className="buttons">
          <div className="row">
            <Button value={'C'} onClick={handleButtonClick} width='220px' />
            <Button value={'Backspace'} onClick={handleButtonClick} width='220px' />
          </div>

          <div className="row">
            <Button value={7} onClick={handleButtonClick} />
            <Button value={8} onClick={handleButtonClick} />
            <Button value={9} onClick={handleButtonClick} />
            <Button value={'+'} onClick={handleButtonClick} />
          </div>

          <div className="row">
            <Button value={4} onClick={handleButtonClick} />
            <Button value={5} onClick={handleButtonClick} />
            <Button value={6} onClick={handleButtonClick} />
            <Button value={'-'} onClick={handleButtonClick} />
          </div>

          <div className="row">
            <Button value={1} onClick={handleButtonClick} />
            <Button value={2} onClick={handleButtonClick} />
            <Button value={3} onClick={handleButtonClick} />
            <Button value={'*'} onClick={handleButtonClick} />
          </div>

          <div className="row">
            <Button value={0} onClick={handleButtonClick} />
            <Button value={'='} onClick={handleButtonClick} width='220px'/>
            <Button value={'/'} onClick={handleButtonClick} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
