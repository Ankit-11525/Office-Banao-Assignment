import React,{useState} from 'react';
import Header from './components/Header.jsx'
import BodyContent from './components/BodyContent.jsx'
import Save from './components/table/Save.jsx';


function App() {
  const [active,setActive] = useState(false);
  return (
    <div className="flex-col w-full min-h-screen custom-scrollbar">
      <div className={` ${active ? 'opacity-20' : 'opacity-100'}`}>
        <Header setActive={setActive}/>
        <BodyContent className="flex-grow" active={active} setActive={setActive} />
      </div>
      {
        active && (
          <Save active={active} setActive={setActive}/>
        )
      }
    </div>
  );
}

export default App;
