import React, { Fragment, ReactNode, useState } from 'react'
import { Button, Collapse } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Utils from '../utils/utils';
import Cookies from 'js-cookie'

// Props are passed down like normal function args
// Destructure `names` from the props object
export function test() {
    return <h2>Hello Pratik </h2>
}
function MapUsers(item: { image: any; macAddress?: null | undefined; lastName: any; username: any; email: any; phone: any; password?: React.ReactNode; firstName: any; id: any; }) {
    const [open, setOpen] = useState(false);
    const API_SERVER = new Utils();
    let navigate = useNavigate();
    

    function login(){

            fetch(API_SERVER.loginURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: item.username,
                password: item.password,
                // expiresInMins: 60, // optional
            })
            })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("Successfully logged in :)---", result);
                    Cookies.remove('token')
                    Cookies.set('token', result.token, { expires: 1 })
                    // Cookies.get('name') // => 'value'
                navigate("/products"); 
                

                },
                (error) => {
                    
                }
            )
        }
  
    return (
      <>
         <tr>
            <td>{item.id}</td>
            <td><img src={item.image} alt="User Profile" width="50px" /></td>
            <td>{item.firstName + ' ' + item.lastName
            }</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td> <Button
          onClick={() => setOpen(!open)}
          aria-controls={`example-collapse-text${item.id}`}
          aria-expanded={open}
        >
          click
        </Button></td>
        
        </tr>
        
        <Collapse in={open}>
          <tr id={`example-collapse-text/${item.id}`}><td colSpan = {7}>
          <Button
          onClick={login}
         
        >
          {`Login with ${item.firstName}`} 
        </Button>
            </td>
        </tr>
        </Collapse>
        
      </>
    );
  }
export default function UserListTable(props: any) {


    const listItems = props.list.map((item: {
        image: string | undefined;
        macAddress: null | undefined;
        lastName: string;
        username: ReactNode;
        email: ReactNode;
        phone: ReactNode;
        password: ReactNode;
        firstName: string;
        id: any;
    }) =>
    <Fragment  key={item.macAddress}>
        {MapUsers(item)}
        </Fragment>
    );
    return (

        <tbody>
            {listItems}
        </tbody>

    );
}

//export default UserListTable;






// import React, { Fragment, ReactNode, useState } from 'react'
// import { Button, Collapse } from 'react-bootstrap';

// // Props are passed down like normal function args
// // Destructure `names` from the props object
// export function test() {
//     return <h2>Hello Pratik </h2>
// }
// function Example() {
//     const [open, setOpen] = useState(false);
  
//     return (
//       <>
//         <Button
//           onClick={() => setOpen(!open)}
//           aria-controls="example-collapse-text"
//           aria-expanded={open}
//         >
//           click
//         </Button>
//         <Collapse in={open}>
//           <div id="example-collapse-text">
//             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
//             terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
//             labore wes anderson cred nesciunt sapiente ea proident.
//           </div>
//         </Collapse>
//       </>
//     );
//   }
// export default function UserListTable(props: any) {


//     const listItems = props.list.map((item: {
//         image: string | undefined;
//         macAddress: null | undefined;
//         lastName: string;
//         username: ReactNode;
//         email: ReactNode;
//         phone: ReactNode;
//         password: ReactNode;
//         firstName: string;
//         id: any;
//     }) =>
//     <Fragment  key={item.macAddress}>
//         <tr>
//             <td>{item.id}</td>
//             <td><img src={item.image} alt="User Profile" width="50px" /></td>
//             <td>{item.firstName + ' ' + item.lastName
//             }</td>
//             <td>{item.username}</td>
//             <td>{item.email}</td>
//             <td>{item.phone}</td>
//             <td><Example /></td>

//         </tr>
//         </Fragment>
//     );

//     return (

//         <tbody>
//             {listItems}
//         </tbody>

//     );
// }

// //export default UserListTable;

