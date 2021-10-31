import Link from 'next/link';

const Footer = () => {
  
  return (  

    <div className="footer">
      <div className="footer-left">
        <div className="footer-left-content">
         <p>&#169; Vahida Djedovic 2021</p>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-right-content">
          <p>Site by <Link href="https://jasminkatanic.dev/" target="_blank" rel="noreferrer"><a>Jasmin Katanic</a></Link></p>
        </div>
      </div>
    </div>

  );

}
 
export default Footer;