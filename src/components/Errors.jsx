import {useContext, useEffect, useState} from "preact/hooks"
import {AppContext} from "../context"
const Errors = () => {
    const [currentError, updateError] = useState({err: false, message: ""});
    const [close, setClose] = useState(false);
    const context = useContext(AppContext).self;

    useEffect(() => {
        if (!context.ws) {
            updateError({err: true, message: "No connection to core!!!"})
        } else{
            setClose(true)
        }
    }, [context])
    return (
        <section className="error--wrapper" style={{display: currentError.err && !close ? "flex" : "none"}}>
          <div className="error__message">
                {currentError.message}
          </div>
          <button className="error__button" onClick={() => {setClose(true)}}>Close</button>
        </section>
    )
}
export default Errors
