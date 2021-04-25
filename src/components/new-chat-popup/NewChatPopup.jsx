import { useContext, useState, useRef } from "preact/hooks"
import {AppContext} from "../../context"
const NewChatPopup = () => {
  const textarea = useRef();
  const [userName, updateUserName] = useState("");
  const context = useContext(AppContext);
  const sendForm = () => {
    try{
    let parsed = JSON.parse(textarea.current.value)
    parsed.name = userName;
    console.log(parsed)
      let inlen = parsed.insertKey.length;
    if (userName.length < 2) {throw "Please, change username"}
      if (inlen == 99 || inlen == 100 || inlen == 91){
        context.self.ws.send(JSON.stringify({...parsed, type: "addUser", name: userName }))
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
    <section className="add-chat" style={{display: context.self.showAddNewUserPopUp ? "flex" : "none"}}>
      <h2 className = "add-chat__header">Add chat</h2>
      <div className="add-chat__input-field">
        <input
          className="input add-chat__input"
          placeholder="Chat name"
          value={userName}
          onKeyUp={(input) => {
            updateUserName(input.target.value);
          }}
        />
      </div>
      <textarea ref={textarea} placeholder="config here" className="add-chat__textarea">
        {'{\n"insertKey":"SSK@RJ~uACMHPfiaOUmwGdh5gBNnDbGeLjr1TVcvBMFcdWM,k5Vd7RwqOUcXgKGTl~cR4cUorKv24M4R~tCBAUp2yZo,AQECAAE",\n\n"signKey":"key...",\n\n"id":"e64d137c-e19e-451f-a081-65df31e24492"\n}'}
      </textarea>
      <button className="button submit-button add-chat__button" onClick={sendForm}>Submit</button>
    </section>
  )
}

export default NewChatPopup;
