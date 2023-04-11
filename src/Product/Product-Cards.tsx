
// Function component
import { Col, Card, Row, Carousel } from "react-bootstrap";
import "./Product.css"
export default function ProductCards(props: any) {
    return (
        <Row xs={2} md={4} className="g-4 pt-4">

            {props.productList.map((item: any) =>
                <Col key={item.id}>
                    <Card className="main-card  bg-light">
                        <Card.Img className="slide-img " variant="top" src={item.thumbnail} />

                        {/* <Carousel  >
                            {item.images.map((itemImg: any) =>
                                <Carousel.Item className="card-img-top">
                                    <img
                                        className="slide-img"
                                        src={itemImg}
                                        alt={item.title}
                                    />
                                </Carousel.Item>
                            )}
                        </Carousel> */}

                        <Card.Body >
                            <Card.Title>{item.title.length > 20 ?
                                    `${item.title.substring(0, 20)}...` : item.title
                                }</Card.Title>
                            <Card.Text>
                                {item.description.length > 55 ?
                                    `${item.description.substring(0, 55)}...` : item.description
                                }
                                <p className="text-muted"> {item.brand}</p>
                            </Card.Text>
                            <div>
                                <span className="badge badge-success bg-success">{item.rating} <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                </span>
                                <span className="mx-2 "></span>({item.stock})</div>
                            <div>
                                <span className="text-sucess">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
                                        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                                    </svg>{item.price} </span>
                                <del>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
                                        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                                    </svg>{Math.round((item.price * (100 + item.discountPercentage)) / 100)}INR</del>
                                <span className="text-success">{item.discountPercentage}% Off</span>

                            </div>
                        </Card.Body>
                        <Card.Footer className="position-relative">
                            <button className="btn btn-info mx-2 position-absolute end-0">Add to cart</button>
                            <button className="btn btn-danger mx-2 start-0">Buy Now</button>
                        </Card.Footer>
                    </Card>
                </Col>

            )}
        </Row>
        // <tbody>
        //     {props.productList.map((item: any) =>
        // // {Array.from({ length: 34 }).map((_, idx) => (
        //         <Col>
        //             <Card>
        //                 <Card.Img variant="top" src="holder.js/100px160" />
        //                 <Card.Body>
        //                     <Card.Title>Card title</Card.Title>
        //                     <Card.Text>
        //                         This is a longer card with supporting text below as a natural
        //                         lead-in to additional content. This content is a little bit
        //                         longer.
        //                     </Card.Text>
        //                 </Card.Body>
        //                 <Card.Footer>

        //                     <small className="text-muted">Last updated 3 mins ago</small>
        //                 </Card.Footer>
        //             </Card>
        //         </Col>
        //     )}
        // </tbody>

    );
}

// Class component
// import React, {  } from "react";
// import { Card, Col, Row } from "react-bootstrap";


// class ProductCards extends React.Component<any, any> {
//     constructor(props: any) {
//         super(props);
//         this.state = {
//             products: this.props,
//         };
//     }
//     componentDidMount(): void {
//          console.log(this.state.products);
//     }


//     render() {

//         return <Row xs={2} md={4} className="g-4">
//         {Array.from({ length: 34 }).map((_, idx) => (
//         // {this.state.products.map((item: any) =>
//           <Col>
//             <Card>
//               <Card.Img variant="top" src="holder.js/100px160" />
//               <Card.Body>
//                 <Card.Title>Card title</Card.Title>
//                 <Card.Text>
//                   This is a longer card with supporting text below as a natural
//                   lead-in to additional content. This content is a little bit
//                   longer.
//                 </Card.Text>
//               </Card.Body>
//               <Card.Footer>

//               <small className="text-muted">Last updated 3 mins ago</small>
//               </Card.Footer>
//             </Card>
//           </Col>

//         ))}
//       </Row>
//     }
// }
// export default ProductCards;
