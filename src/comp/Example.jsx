import { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.querySelector('#message').innerHTML = `You clicked ${count} times`;
  });

  return (
    <div>
      <p id='message'> </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export default Example;
