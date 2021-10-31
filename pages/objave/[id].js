import fetchedData from '../../public/cont/kolumna.json';
import Footer from '../../components/Footer';
import Head from 'next/head';
import Link from 'next/link';

function PostDetails(props){

  console.log(props.post);

  return(
    <>
    <Head>
      <title>{props.post.naslov}</title>
      <meta 
        property="og:title"
        content={props.post.naslov}
      />
      <meta 
          property="og:description"
          content={props.post.stivo}
      />
      <meta property="og:image" content={props.post.thum} />
    </Head>
    <div className="usluge">          
      <div className="usluge-head"></div>
      <section className="usluge-section">
        <div className="usluge-section-first">         
                <div key={props.post.naslov}>
                    <div className="about-section-first-head">
                    <div className="about-section-first-head-main">{props.post.naslov}</div>            
                  </div>                 
                    <div className="usluge-section-first-content">                
                    <div className="usluge-section-first-content-bottom">
                      <div className="usluge-section-first-content-bottom-content">
                        {props.post.stivo}                             
                        <p><strong>Autorica:</strong> {props.post.autor}</p>
                        <div className="usluge-section-first-content-bottom-content-more">
                          <Link  href="https://www.razgovaraj.ba/"><a className="usluge-section-first-content-bottom-content-more-content" target="_blank" rel="noreferrer">                        
                            <div className="usluge-section-first-content-bottom-content-more-content-text">Saznaj Više</div>
                          </a></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
        <Footer />
      </section>
    </div>
    </>
    
  )
}


export async function getServerSideProps(context) {
  // Fetch data from external API
  /* const res = await fetch(`http://localhost:3000/cont/cont.json`)
  const data = await res.json() */
  const {id} = context.query;
  
  // Pass data to the page via props
  return { props: { post: fetchedData[id][0] } }
}

export default PostDetails;