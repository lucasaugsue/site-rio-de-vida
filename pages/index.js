import Head from 'next/head';
import ImageBanner from '../src/components/ImageBanner';
import Header from '../src/components/Header';
// import "./index.scss";

export default function Home() {
  return (
    <div>
      {/* <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <img
        src={'/moon.jpg'}
        style={{
          width: '100%',
          borderBottomLeftRadius: 350,
          borderBottomRightRadius: 350,
        }}
      />
      <Header/>
      {/* <ImageBanner/> */}
    </div>
  )
}
