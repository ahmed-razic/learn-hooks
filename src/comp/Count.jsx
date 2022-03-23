import { useState } from 'react';

function Count() {
  const variables = useState('banana');
  console.log(variables);
  const variable1 = variables[0];
  const function1 = variables[1];

  console.log(variable1);
  console.log(function1);

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export default Count;
