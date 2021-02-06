import './App.css';
import {useState} from 'react' ;

function App() {

  const [text,setText] = useState("");
  const  onTextChange = (event) =>{
    setText(event.target.value);
  };
  return (
    <div className="App">
      <div className="App-header">
      </div>
      <div className="App-chatroom">
        <div className="App-chatroom-text">
          Line1
        </div>
        <div className="App-chatroom-text">
          Line2
        </div>
        <div className="App-chatroom-text">
          Line3
        </div>
        <div className="App-chatroom-text">
          Line4
        </div>
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" value={text} onChange={onTextChange}
        />
        <div className="App-textbox-send">ส่ง</div>
      </div>
    </div>
  );
}

export default App;
