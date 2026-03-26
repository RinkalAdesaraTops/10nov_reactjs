import { Fragment } from "react/jsx-runtime"

const Firstcomponent = ({myname,myage})=>{
    return (
        <>
        <div>
            <h3>Component created by me..</h3>
            {/* <h4>My Name is - {props.myname} </h4>
            <h4>My Age is - {props.myage} </h4> */}
            <h4>My Name is - {myname} </h4>
            <h4>My Age is - {myage} </h4>
        </div>
        <div>

        </div>
        </>
        // </Fragment>
        // react fragment <React.Fragment> </React.Fragment>
        // <Fragment>
        // <React.Fragment> 
        // <Fragment>
        
        
    )
}
export default Firstcomponent
// function Firstcomponent(){
//     return (
//         <div>

//         </div>
//     )
// }