// import React, { Component } from 'react'

// class Counter1 extends Component{
//     constructor(){
//         super()
//         this.state = {
//             count: 0
//         }
//     }

//     Increment(){
//         this.setState({
//             count: this.state.count + 1
//         })
//         console.log(this.state.count)
//     }

//     render(){
//         return(
//             <>
//                 <h1>Count:{this.state.count}</h1>
//                 <button onClick={() => this.Increment()}>Increment</button>
//             </>
//         )
//     }
// }

// export default Counter1

import React, { Component } from 'react'

class Counter1 extends Component{

    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }

    render(){
        return this.state.isLoggedIn ? (<div>Welcome Anu</div>) : (<div>Welcome Guest</div>)
    }
}

export default Counter1