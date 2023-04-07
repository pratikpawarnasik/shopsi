
    
const AuthStore = () =>{
      fetch("https://dummyjson.com/users")
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);
            
              return result
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            console.log(error);
        return error;
          
          }
          
        )
}
const AuthStoreVal = () =>{
    return {name:''}
}

export default AuthStore;
export {AuthStoreVal};

