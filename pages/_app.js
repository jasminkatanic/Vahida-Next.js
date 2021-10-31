import '../styles/globals.scss'
import '../styles/App.scss';
import NavBar from '../components/NavBar';
import MobNavBg from '../components/NavBg';
import MobNav from '../components/mobNav';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Dr.sc.Vahida Djedović, Psihoterapeut, Tuzla (Depresija, Anksioznost, Stres, LJubav), Psihoterapija Tuzla"
        />
        <meta name="google-site-verification" content="j0Vz3g5X9xMhZmUqD3jzRNdYXjAsZQQIQvYwKF6f3Ng" />
        <meta name="robots" content="Dr.sc.Vahida Djedović, Psihoterapeut, Tuzla" />
        <meta name="googlebot" content="Dr.sc.Vahida Djedović, Psihoterapeut, Tuzla" />
        <meta name="keywords" content="psihoterapija,tuzla,psihoterapeut,tuzla,mentalno zdravlje,tuzla,"/>
        <meta 
          property="og:type"
          content="website"
        />
        <meta 
          property="og:site_name"
          content="Vahida Djedović"
        />
        <meta 
          property="og:title"
          content="Vahida Djedović"
        />   
        <meta 
          property="og:description"
          content="Dr.sc.Vahida Djedović, Psihoterapeut, Tuzla (Depresija, Anksioznost, Stres, LJubav), Psihoterapija Tuzla"
        />

        <meta property="og:image" content="https://res.cloudinary.com/dznfwmloz/image/upload/v1617874947/img/cont/vd-thum_ieayuq.jpg" />    
        <link rel="manifest" href="/manifest.json" />     
        <title>Vahida Djedovic</title>
      </Head>
      <NavBar /> 
      <MobNavBg />          
      <MobNav />
      <Component {...pageProps} />
    </>
  )
  
}

export default MyApp
