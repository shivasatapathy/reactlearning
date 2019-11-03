import React from "react"
import Class1 from "./class1"
import Test1 from "./test1";

// import { parse } from "querystring";
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a: "",
            b: "",
            c: ""
        }
    }
    store = (event) => {
        this.setState({
            a: event.target.value,
            c:""
        })
    }
    store1 = (event) => {
        this.setState({
            b: event.target.value,
            c:""
        })
    }
    add = () => {
        this.setState({
            c:parseInt(this.state.a)+parseInt(this.state.b)
        })
    }
    render() {
        // var a=10;
        return (
            <div>
                <center>
                    Number1:<input type="number" onChange={(event) => this.store(event)} /><br /><br /><br />
                    Number2:<input type="number" onChange={(event) => this.store1(event)} /><br />
                    <button onClick={() => { this.add() }}>ADD</button><br/>
                    {/* {this.state.c} */}
                    {this.state.c===""?"":
                    <div>{this.state.c % 2 === 0?<Class1/>:<Test1/>}</div>}
                </center>
            </div>
        )
    }
}