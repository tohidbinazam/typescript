import Info from './components/Info/Info';
import { params, user } from './types/Types';
import { useState } from 'react';
function App() {
  const handleClick = (params: params) => {
    console.log(params.event.target, params.id);
  };
  const [user, setUser] = useState<user>([] as user);
  return (
    <>
      <Info
        style={{ background: 'red' }}
        name='Tohid Bin Azam'
        click={handleClick}
        user={user}
        setUser={setUser}
      >
        <h4>Hello World</h4>
      </Info>
    </>
  );
}

export default App;
