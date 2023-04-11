

export class Utils  {
     allProducts: string;
     API_SERVER;
     loginURL;
     allUsers;
     
     constructor(){
          this.API_SERVER = 'https://dummyjson.com';
          this.loginURL = this.API_SERVER+ '/auth/login';
          this.allUsers = this.API_SERVER+ '/users';
          this.allProducts = this.API_SERVER+ '/products?';

          

     }
          getAllUserURL(){
               return this.allUsers;
          }
          getLoginURL(){
               return this.loginURL;
          }
          getAllProductURL(){
               return this.allProducts;
          }
     


}

export default Utils;
