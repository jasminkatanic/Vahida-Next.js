import Footer from '../../components/Footer';
import fetchedData from '../../public/cont/cont.json';
import Link from 'next/link';

const Objave = (props) => { 
  
  return ( 
    <div className="usluge">      
      <div className="usluge-head"></div>
      <section className="usluge-section">
        <div className="usluge-section-first">
          <div className="about-section-first-head">
            <div className="about-section-first-head-main">Objave</div>            
          </div>
          {props.posts.map((item, index) =>
              <div className="usluge-section-first-content" key={item.id}>
              <div className="usluge-section-first-content-top">
                <div className="usluge-section-first-content-top-text">
                  <h3>{item.naslov}</h3>
                </div>
              </div>
              <div className="usluge-section-first-content-bottom">
                <div className="usluge-section-first-content-bottom-content">
                  <p>{item.sadrzaj}</p>
                  <div className="usluge-section-first-content-bottom-content-button">
                    <Link href={`/objave/${item.id}`}>
                      <div className="usluge-section-first-content-bottom-content-button-content">
                        <div className="usluge-section-first-content-bottom-content-button-content-text">Pročitaj</div>
                      </div>
                    </Link>                    
                  </div>         
                  <p><strong>Autorica:</strong> {item.autor}</p>
                </div>
              </div>
            </div>            
          )}
                                 

        </div>
        <Footer />
      </section>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  /* const res = await fetch(`http://localhost:3000/cont/cont.json`)
  const data = await res.json() */


  // Pass data to the page via props
  return { props: { posts: fetchedData.zenski } }
}
 
export default Objave;