
import React, { ReactNode } from "react";
import Utils from "../utils/utils";
import ProductCards from "./Product-Cards";


type AppProps = any
interface Text {
    productArray: any,
    error: any,
    isLoaded: boolean,
    limit: any;
    skip: any;
}
class AllProduct extends React.Component<{}, Text> {
    mainURL: any;
    constructor(props: AppProps) {
        super(props);
        this.state = {
            productArray: [],
            error: '',
            isLoaded: false,
            limit: 4,
            skip: 0
        };
        this.mainURL = new Utils();
        this.loadMore = this.loadMore.bind(this);
    }
    componentDidMount(): void {
        const URL = this.mainURL.getAllProductURL();

        fetch(URL + 'limit=' + this.state.limit + '&skip=' + this.state.skip)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("Products from API---", result);
                    console.log('array 1', this.state.productArray);

                    this.setState({
                        isLoaded: true,
                        skip: this.state.limit + this.state.skip,
                        productArray: this.state.productArray.concat(result.products),
                    });
                    
                    console.log('array 2', this.state.productArray);

                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        productArray: [],
                        error: error,
                    });
                }

            )
    }
    loadMore = () => {

        this.componentDidMount();
    }


    render() {
        console.log('array 3', this.state.productArray);
        return <>
            <ProductCards  productList={this.state.productArray} />
            <div>
                <button className="mt-5 mb-5 load-more btn btn-info" onClick={this.loadMore} >
                    Load More +
                </button>
            </div>
        </>
    }
}

export default AllProduct;
