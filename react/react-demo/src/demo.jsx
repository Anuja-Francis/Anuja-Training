// import React from 'react'

// // function Greet(){
// //     return <h1>Hello Anu...</h1>
// // }

// const Greet = () => {return <h1>Hello Anu...</h1>}

// export default Greet

// import React, { Component } from 'react'

// class Greet extends Component{
//     render(){
//         return <h1>Welcome back</h1>
//     }
// }

// export default Greet

// import React from 'react'

// const Greet = () => { 
//     // return(
//     //     <>
//     //         <h1>Hello Anu...</h1> 
//     //         <h2>Hello Manu...</h2>
//     //     </>
//     // )
//     // return React.createElement('div', null, React.createElement('h1', null, "Hello Anu"))
// }

// const Greet = (props) => {
//     console.log(props)
//     return(
//         <>
//             <h1>Hello {props.name}. A {props.gender}</h1>
//             {props.children}
//         </>
//     )
// }

// export default Greet

import React, { Component } from 'react'

class Greet extends Component{

    constructor(){
        super()
        this.state = {
            message: 'Welcome visitor'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Thankyou for subscribing'
        })
    }

    render(){
        return(
            <>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </>
        ) 
    }
}

export default Greet

