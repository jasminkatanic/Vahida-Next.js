import Link from 'next/link';

const NavBar = () => {
  
  return (  
    <div className="navbar">
      <div className="navbar-elements">
        <Link href="/"><a className="navbar-elements-item">Početna</a></Link>
        <Link href="/ja"><a className="navbar-elements-item">Ko Sam Ja</a></Link>
        <Link href="/knjige"><a className="navbar-elements-item">Knjige</a></Link>
        <Link href="/gostovanja"><a className="navbar-elements-item">Gostovanja</a></Link>
        <Link href="/radionice"><a className="navbar-elements-item">Radionice</a></Link>
        <Link href="/dogadjaji"><a className="navbar-elements-item">Događaji</a></Link>
        <Link href="/objave"><a className="navbar-elements-item">Blog</a></Link>
        <Link href="/kontakt"><a className="navbar-elements-item">Kontakt</a></Link>
      </div>
    </div>
  );

}
 
export default NavBar;