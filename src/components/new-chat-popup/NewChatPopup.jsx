import { useContext, useState, useRef } from "preact/hooks"
const NewChatPopup = () => {
  const textarea = useRef();
  const [userName, updateUserName] = useState("");
  const sendForm = () => {
    try{
    let parsed = JSON.parse(textarea.current.value)
    parsed.name = userName;
    console.log(parsed)
      let inlen = parsed.insert_key.length;
    if (userName.length < 2) {throw "Please, change username"}
      if (inlen == 99 || inlen == 100 || inlen == 91){
      }
      else{
        throw "Failed to parse insert_key\n";
      }
    }
    catch (e) {
       alert("Wrong formatted new chat info")
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
            console.log(input.target.value);
          }}
        />
      </div>
      <textarea ref={textarea} placeholde="somehow">
        {'{\"insert_key\":\"SSK@RJ~uACMHPfiaOUmwGdh5gBNnDbGeLjr1TVcvBMFcdWM,k5Vd7RwqOUcXgKGTl~cR4cUorKv24M4R~tCBAUp2yZo,AQECAAE\",\"sign_key\":\"foo\"}'}
      </textarea>
      <button onClick={sendForm}>Submit</button>
    </section>
  )
}

export default NewChatPopup;
