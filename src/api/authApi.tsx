import { Component } from "react";


class Config extends Component  {
  constructor(props: any){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

   async APICall(){
     const res = await fetch('https://dummyjson.com/products');
        const json = await res.json();
        console.log('json---', json);
  }
  render(){
//   getAllUsers() {
    
    fetch("https://dummyjson.com/users")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.users
          });
          console.log(result.users);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
        
      )
    //   return this.state;
//   }
  return <>{this.state}</>
}

  
}

export default Config;


