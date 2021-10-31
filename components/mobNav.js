import Link from "next/link";

const mobNav = () => {  

  
  function checkState(){
    let mobNav = document.getElementById("navi-togle");
      if(mobNav.checked){        
        slideMobMenuLeft();        
      }else{
        closeMobMenu();   
      }
  };

  function slideMobMenuLeft(){
      document.getElementById("mobNavBg").style.animation ="loadMobNavBg 1s";
      document.getElementById("mobNavBg").style.animationFillMode = "both";
      document.getElementById("nav-btn").style.zIndex = "100000";
      document.getElementById("mobNavList").style.opacity = "1";
      document.getElementById("mobNavBg").style.zIndex = "10000";
      document.getElementById("mobNavBg").style.height = "500vh";
  };

  function closeMobMenu(){
    document.getElementById("mobNavList").style.opacity = "0";
    document.getElementById("mobNavBg").style.animation ="loadMobNavBgBack 1s";  
    document.getElementById("mobNavBg").style.animationFillMode = "both";    
  };

  function cancelCheckBox(){    
    document.getElementById("navi-togle").checked = false;
    document.getElementById("__next").scrollTop = 0;
    checkState();    
  };
  
  return (  
    <div className="navigation" id="main-nav">
      <input type="checkbox" className="navigation__checkbox" id="navi-togle" onClick={checkState}/>
        <label htmlFor="navi-togle" className="navigation__button" id="nav-btn">
            <span className="navigation__icon">&nbsp;</span>
        </label>        
      <nav className="navigation__nav">
        <ul className="navigation__list" id="mobNavList">
          <li className="navigation__item"><Link href="/"><a className="navigation__link" onClick={cancelCheckBox}>Početna</a></Link></li>
          <li className="navigation__item"><Link href="/ja"><a className="navigation__link" onClick={cancelCheckBox}>Ko Sam Ja</a></Link></li>
          <li className="navigation__item"><Link href="/knjige"><a className="navigation__link" onClick={cancelCheckBox}>Knjige</a></Link></li>
          <li className="navigation__item"><Link href="/gostovanja"><a className="navigation__link" onClick={cancelCheckBox}>Gostovanja</a></Link></li>
          <li className="navigation__item"><Link href="/radionice"><a className="navigation__link" onClick={cancelCheckBox}>Radionice</a></Link></li>
          <li className="navigation__item"><Link href="/dogadjaji"><a className="navigation__link" onClick={cancelCheckBox}>Događaji</a></Link></li>
          <li className="navigation__item"><Link href="/objave"><a className="navigation__link" onClick={cancelCheckBox}>Blog</a></Link></li>
          <li className="navigation__item"><Link href="/kontakt"><a className="navigation__link"  onClick={cancelCheckBox}>Kontakt</a></Link></li>
        </ul>
      </nav>              
     </div>  

  );
}
 
export default mobNav;