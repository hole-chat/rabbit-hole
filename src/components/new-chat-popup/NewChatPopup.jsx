import { useContext, useState, useRef } from "preact/hooks"
import {AppContext} from "../../context"
const NewChatPopup = () => {
  const textarea = useRef();
  const [userName, updateUserName] = useState("");
  const ws = useContext(AppContext).self.ws
  const sendForm = () => {
    try{
    let parsed = JSON.parse(textarea.current.value)
    parsed.name = userName;
    console.log(parsed)
      let inlen = parsed.insertKey.length;
    if (userName.length < 2) {throw "Please, change username"}
      if (inlen == 99 || inlen == 100 || inlen == 91){
        ws.send(JSON.stringify({...parsed, type: "addUser", name: userName }))
      }
      else{
        throw "Failed to parse insert_key\n";
      }
    }
    catch (e) {
       alert(`Wrong formatted new chat info ${e}` )
    }
  }
  return (
    <section>
      <h2>Add Chat</h2>
      <div>
        <p>Chat Name</p>
        <input
          className="input"
          placeholder="Your message"
          value={userName}
          onKeyUp={(input) => {
            updateUserName(input.target.value);
          }}
        />
      </div>
      <textarea ref={textarea} placeholde="somehow">
        {'{\"insertKey\":\"SSK@RJ~uACMHPfiaOUmwGdh5gBNnDbGeLjr1TVcvBMFcdWM,k5Vd7RwqOUcXgKGTl~cR4cUorKv24M4R~tCBAUp2yZo,AQECAAE\",\"signKey\":\"foo\"}'}
      </textarea>
      <button onClick={sendForm}>Submit</button>
    </section>
  )
}

export default NewChatPopup;
