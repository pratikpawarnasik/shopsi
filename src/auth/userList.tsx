import React, { ReactNode } from "react";
import { Container, Table } from "react-bootstrap";
import AuthStore from "../store/authStore";
import UserListTable from "./userListTable";
import Utils from "../utils/utils";
type AppProps = any
interface Text {
    users: any,
    error: any,
    isLoaded: boolean,
}
class UserList extends React.Component<{}, Text> {
    mainURL: any;
    constructor(props: AppProps) {
        super(props);
        this.state = {
            users: [],
            error: '',
            isLoaded: false,
        };
        this.mainURL = new Utils();
    }
    componentDidMount(): void {

        fetch(this.mainURL.getAllUserURL())
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("inside fetch method---", result);

                    this.setState({
                        isLoaded: true,
                        users: result.users
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        users: [],
                        error: error,
                    });
                }

            )
    }


    render() {
       
        return <Container className="p-5">

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th></th>
                    </tr>
                </thead>
                <UserListTable list={this.state.users} />
            </Table>
        </Container>;
    }
}

export default UserList;
