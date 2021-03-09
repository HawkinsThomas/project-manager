import { APP_NAME } from '../constants';

const Footer = () => {
  return ( 
    <footer className="">
      <span>Copyright { new Date().getFullYear() } {APP_NAME}</span>
    </footer>
   );
}
 
export default Footer;