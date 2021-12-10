import React, { Suspense } from 'react';
import Footer from '../../components/Footer';
// import SlidesShow from '../../components/SlidesShow';
import carouselData from '../../utils/carousel-data';
import style from './style.module.scss';
// images
import backstage from '../../assets/images/backstage.jpg';
import foroImage from '../../assets/images/foro.jpg';
import knowUsImage from '../../assets/images/know-us.jpg';
import newsImage from '../../assets/images/news.jpg';
import Header from '../../components/Header';

const Home = () => {
  const SlidesShow = React.lazy(() => import('../../components/SlidesShow'));
  return (
    <main className={style.container}>
      <Header />
      <Suspense
        fallback={(
          <div style={{ height: '98vh', backgroundColor: '#0102310' }}>
            Loading component...
          </div>
        )}
      >
        <SlidesShow data={carouselData} />
      </Suspense>
      <div className={style.image_container}>
        <img
          src={knowUsImage}
          alt="Conocenos"
        />
        <img
          src={backstage}
          alt="Tras bambalinas"
        />
        <img
          src={foroImage}
          alt="Foro"
        />
        <img
          src={newsImage}
          alt="Noticias"
        />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
