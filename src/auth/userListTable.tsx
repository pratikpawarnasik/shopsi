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
function MapUsers(item: any) {
    const navigate = useNavigate();
    let [open, setOpen] = useState(false);
    let API_SERVER = new Utils();
    // const navigate = useNavigate();

    function Login(e: { preventDefault: () => void; }) {

        fetch(API_SERVER.loginURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: item.username,
                password: item.password,
                expiresInMins: 60, // optional
            })
        })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("Successfully logged in :)---", result);
                    // Cookies.remove('token')
                    Cookies.set('token', result.token, { expires: 1 })
                    // Cookies.get('name') // => 'value'
                    e.preventDefault();
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
                <td>
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls={`example-collapse-text${item.id}`}
                        aria-expanded={open}
                    >
                        click
                    </Button>
                </td>

            </tr>

            <Collapse in={open}>
                <tr id={`example-collapse-text/${item.id}`}><td colSpan={7}>
                    <Button
                        onClick={Login}

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



    return (

        <tbody>
            {props.list.map((item: any) =>
                <Fragment key={item.macAddress}>
                    {MapUsers(item)}
                </Fragment>
            )}
        </tbody>

    );
}
