import Cookies from 'js-cookie';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';

function AlignmentExample() {
  
  return (
    <>
      
      <Nav className="justify-content-end" activeKey="/">
        <Nav.Item>
          <Nav.Link href="/">Users</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/products">Products</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
export const getSession = () => {
 
  const jwt = Cookies.get('token')
  let session
  try {
    if (jwt) {
      const base64Url = jwt.split('.')[1]
      const base64 = base64Url.replace('-', '+').replace('_', '/')
      // what is window.atob ?
      // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob
      session = JSON.parse(window.atob(base64))
    }
  } catch (error) {
    
   
    console.log(error)
  }
  return session
}


export default AlignmentExample;