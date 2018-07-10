<template>
  <div id="app">
    <!-- Nav
  ––––––––––––––––––––––––––– -->
    <nav id="nav-desktop" style="height: 40px">
      <div class='nav-wrap'>
        <h3 class="nav-logo">
          <router-link to="/">
            <img src='./static/img/prestologo.png'>
          </router-link>
        </h3>
        <ul class="menu-group">
          <li><a href="#about-presto" class="scroll-to">Join in DAICO</a></li>
          <li><a href="#roadmap" class="scroll-to">Register DAICO</a></li>
          <li><router-link to="/whats-new">What's New</router-link></li>
          <li><a href="#teams" class="scroll-to">DEX</a></li>
          <li><a href="#contact-us" class="scroll-to">Account</a></li>
        </ul>
      </div>
    </nav>

    <nav class="nav-mobile">
      <div class="mobile-menu width-50"></div>
      <h3 class="nav-logo"><a href="#"><img src='./static/img/prestologo.png'></a></h3>
      <div class="width-50"></div>
    </nav>

    <router-view/>

    <!-- footer
 –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <a id="contact-us"></a>
    <div class="section" style="text-align: center; color: #fff; background:#334;">
      <div class="container">
        <div style="padding: 10% 0 8%; max-width:544px; margin: 0 auto; ">
          <h1><strong>Contact Us</strong></h1>
          <h5>
            We are prepared for you.
          </h5><br/>
          <p>
            <a href="mailto:presto@presto-platform.io" style="color:#fff;">presto@presto-platform.io</a>
          </p>
          <div>
            <a href="https://twitter.com/PrestoPlatform" target="_blank" class="sns twitter">
              <img src="./static/img/ic_twitter.png" class="twitter_img">
            </a>
            <a href="javascript:void(0);" class="sns disable">
              <img src="./static/img/ic_medium.png">
            </a>
            <a href="https://open.kakao.com/o/gEDqhpQ" onclick="window.open(this.href, 'newwindow', 'width=500, height=600'); return false;" class="sns kakao">
              <img src="./static/img/ic_kakao.png" class="kakao_img">
            </a>
            <a href="https://t.me/joinchat/AAAAAE3EbREJQoW2ZWh3bg" target="_blank" class="sns telegram">
              <img src="./static/img/ic_telegram.png" class="telegram_img">
            </a>
            <a href="https://github.com/PrestoPlatform/PrestoToken" target="_blank" class="sns github">
              <img src="./static/img/ic_github.png" class="github_img">
            </a>
          </div><br>
          <p>
            All information and dossier, including but not limited to business or technical information, in this website is for informational purposes only and is not intended to provide any investment advices, and is subject to change without notice.
          </p>
          <p>ⓒ Copyright 2017-2018 by PRESTO Team.</p>
        </div>
      </div>
    </div>

    </div>
</template>

<script>
  import './static/dist/js/swiper.min'
  import './static/js/vue'
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-121801460-1');


export default {
        name: 'App',
        mounted() {
            import('aos').then(AOS => AOS.init());
        }
}
</script>

<style>
  @import '~aos/dist/aos.css';
  @import './static/dist/css/swiper.min.css';
  @import './static/css/normalize.css';
  @import './static/css/skeleton.css';
  @import './static/css/presto.css';
  @import './static/css/display.css'

  #app {
  font-family: 'Raleway', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
  /* latin */
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 300;
    src: local('Raleway Light'), local('Raleway-Light'), url('./static/css/1Ptrg8zYS_SKggPNwIYqWqZPAA.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* latin */
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    src: local('Raleway'), local('Raleway-Regular'), url('./static/css/1Ptug8zYS_SKggPNyC0ITw.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* latin */
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    src: local('Raleway SemiBold'), local('Raleway-SemiBold'), url('./static/css/1Ptrg8zYS_SKggPNwPIsWqZPAA.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

</style>
