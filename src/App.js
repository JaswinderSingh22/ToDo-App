import logo from './logo.svg';
import react, {useState} from 'react';
import './App.css';
import { List } from './List';


function App() {
  
  const [InitialList, setInitialList] = useState("");
  const [items, setitems] = useState([]);
  const itemsEvents=(event)=>{
    setInitialList(event.target.value);

  };

  const listofItems=()=>{
    setitems((oldItems)=>{
      return [...oldItems, InitialList]});
      setInitialList("");

  }
  const rmList = (id) => {
    setitems((oldItems)=>{    
    return oldItems.filter((arrEle, index)=>{
          return index!==id;
        });
      });
  };

  return (
    <div className="main_div">
      <div className='center_div'>
        <h3>TODO LIST</h3>
        <input type="text" 
        placeholder='Add a Item' 
        value={InitialList} 
        onChange={itemsEvents}/>
        <button 
        onClick={listofItems}> + </button>
        <ol>
          {/* <li>{InitialList}</li> */}
          {
            items.map((itemval, index)=>{
              return (<List key={index} 
                id={index} 
                text={itemval}
                onSelect={rmList}
                />
              );
            })
          }
        </ol>
      </div>
      
    </div>
  );
}

export default App;
