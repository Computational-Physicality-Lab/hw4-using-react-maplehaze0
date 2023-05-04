import React from 'react';
import { Container } from 'reactstrap';
// import Vader from '../../assets/imgs/darth-banner.jpg';
import Banner from '../../assets/imgs/imgs2/banner.png';
// import YouTube from 'react-youtube';
import './HomePage.css';

const homePage = () => {
  // const _onReady = (event) => {
  //   // access to player in all event handlers via event.target
  //   event.target.pauseVideo();
  // };

  return (
    <div className='Home'>

      {/* <div className='Banner'>
        <img src={Vader} alt='Vader' />
        <div className='BannerTextContainer'>
          <div className='BannerText'>Welcome</div>
        </div>
      </div> */}

      <br />

      <Container display='flex'>

        <img src={Banner} alt='Banner' />

        <div class="container">

          <div className="box left-box">

            <div class="content">
              <h2>We don't ship!!</h2>
              <p className='IntroText'>
                The franchise began with the eponymous 1977 film and quickly became a
                worldwide pop-culture phenomenon. The original film, later subtitled
              </p>
            </div>

          </div>


          <div className="box right-box">

            <div class="content">
              <h2>We are not real!</h2>
              <p className='IntroText'>
                The film series was expanded into other media, including television
                series, video games, novels, comic books, theme park attractions and
              </p>
            </div>

          </div>

        </div>

        {/* <div className='VideoPlayer'>
          <YouTube
            videoId='iXDnFYu91vY'
            opts={{
              playerVars: {
                autoplay: 0,
              },
            }}
            onReady={_onReady}
          />
        </div> */}

        </Container>
    </div>
  );
};

export default homePage;
