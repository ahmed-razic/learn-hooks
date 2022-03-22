import { useState } from 'react';

function StateHook() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(23);
  const [fruit, setFruit] = useState('Apple');
  const [todos, setTodos] = useState([{ task1: 'Learn Hooks' }]);

  const handleClick = () => {
    setCount(count + 1);
  };
  console.log(count);

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>Age: {age}</p>
      <p>Fruit: {fruit}</p>
      <p>Todo: {todos[0].task1}</p>
      <button onClick={handleClick}>Add 1</button>
    </div>
  );
}
export default StateHook;
