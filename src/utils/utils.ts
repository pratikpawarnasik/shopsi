

export class Utils  {
     static getAllUserURL(): any {
         throw new Error("Method not implemented.");
     }
     API_SERVER;
     loginURL;
     allUsers;
     
     constructor(){
          this.API_SERVER = 'https://dummyjson.com/';
          this.loginURL = this.API_SERVER+ 'auth/login';
          this.allUsers = this.API_SERVER+ 'users';
     }
          getAllUserURL(){
               return this.allUsers;
          }
          getLoginURL(){
               return this.loginURL;
          }
     


}

export default Utils;
