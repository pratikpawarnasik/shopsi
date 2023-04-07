
import React, { ReactNode } from "react";
import { Container, Table } from "react-bootstrap";
type AppProps = any
interface Text {
    users: any,
    error: any,
    isLoaded: boolean,
}
class AllProduct extends React.Component<{}, Text> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            users: [],
            error: '',
            isLoaded: false,
        };
    }
    componentDidMount(): void {

    }


    render() {
       
        return <h2>This is all product component!</h2>
    }
}

export default AllProduct;
