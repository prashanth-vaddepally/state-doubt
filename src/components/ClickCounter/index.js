import {component} from "react"
import "./index.css"

class ClickCounter extends component{
    state={count:0}
    increment =()=>{
        this.setState((prevState)=>({count:prevState.count+1}))
    }

    render{
        const {count}= this.state
        return(
            <div className = "thecontainer">
                <h1 className="theheading">The Button has been clicked<span className="spanel">{count}</span> times</h1>
                <p className="thepara">Click the button to increase the count</p>
                <button className="thepara" onClick={this.increment}>Click Me!</button>
            </div>
        )
    }
}
export default ClickCounter
