import { button } from '../../types/Types';
import { useState } from 'react';

function Info({ name, children, user, setUser }: button) {
  const [count, setCount] = useState<number>(0);
  const handleIn = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setCount(count + 1);
    console.log(event.target);
    setUser([{ name: 'tohid bin azam', age: 21 }]);
  };
  const handleOut = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setCount(count - 1);
    console.log(event.target);
  };

  return (
    <>
      <h1>{count}</h1>
      {user.map((item, index) => (
        <h1 key={index}>{item.name}</h1>
      ))}
      <button onClick={handleIn}>++</button>
      <button onClick={handleOut}>--</button>
      <h1>{children}</h1>
      <h1>{name}</h1>
    </>
  );
}

export default Info;
