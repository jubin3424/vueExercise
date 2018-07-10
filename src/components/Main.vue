<template>
    <div>
    <div id="header" class="section image-bg">
        <div class="container">
            <div style="padding: 15% 0 7%;">
                <h1><strong style="font-size: 7.5rem;">PRESTO</strong></h1>
                <h5>
                    Welcome to the new wave of token sale platform, PRESTO. <br/>
                    PRESTO provides the auto-generated smart contract derived from DAICO. <br/>
                    The tokens fundraised can be listed on the PRESTO decentralized exchange. <br/>
                    We will guide you to successful token sale.
                </h5>
                <div style=" z-index: 2; position: relative; width: 180px; margin:0 auto;">
                    <!--
                    <button onclick="document.getElementById('dropDown').classList.toggle('on');"
                            class="button button-primary shadow-3"
                            style="font-size: 1.7rem;width: 180px;margin:0;">
                        WHITE PAPER
                    </button>
                    <div id="dropDown">
                        <a class="button" href="presto_whitepaper_kr.pdf" target="_blank" style="font-size: 1.3rem;padding:10px 26px; border:1px solid #33C3F0;color:#1aa2cc; width: 180px;border-radius: 0;">KOREAN</a>
                        <a class="button" href="presto_whitepaper_en.pdf" target="_blank" style="font-size: 1.3rem;padding:10px 26px; border:1px solid #33C3F0;color:#1aa2cc;width: 180px;border-radius: 0 0 4px 4px;">ENGLISH</a>
                    </div>-->
                </div>
            </div>
        </div>
        <!--<div onclick="document.getElementById('dropDown').classList.remove('on'); console.log(1)" style="position: absolute; left:0; top:0; right:0; bottom:0; z-index: 1 "></div>-->
    </div>


    <!-- swiper -->
    <div class="second section" style="background: #fff; text-align: center; position: relative; ">
        <div class="container">
            <div style="padding: 8% 0 2.5%;">
                <h2 ><strong>Join DAICO</strong></h2>
            </div>
        </div>
    <el-row :gutter="25" style="width:93%; margin: auto;">
        <swiper :options="swiperOption">
            <swiper-slide>
                <div class="card-wrap">
                    <a href="http://www.naver.com" class="card twelve columns shadow-3">
                        <div class="image-container">
                            <img src="../static/img/chain/PUNDIX.jpg" style="width: 100%; height:auto;">
                        </div>
                        <div class="card-body">
                            <h6>PUNDIX</h6>
                            <p style="margin-bottom: 5px;">Project Process</p>
                            <div style="width:20%; border: 1px solid #5ba9fd"></div>
                            <ul>
                                <li><p>Credibility</p><p>A</p></li>
                                <li style="margin-left: 5px; border-left:.5px solid #aaaaaa; border-right:.5px solid #aaaaaa"><p>PREIOD</p><p>2 YEARS</p></li>
                                <li><p>DAICO</p><p>20%</p></li>
                            </ul>
                        </div>
                    </a>
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="card-wrap">
                    <a href="http://www.naver.com" class="card twelve columns shadow-3">
                        <div class="image-container">
                            <img src="../static/img/chain/airbloc.png" style="width: 100%; height:auto;">
                        </div>
                        <div class="card-body">
                            <h6>AIRBLOC</h6>
                            <p style="margin-bottom: 5px;">Project Process</p>
                            <div style="width:40%; border: 1px solid #5ba9fd"></div>
                            <ul>
                                <li><p>Credibility</p><p>BBB</p></li>
                                <li style="margin-left: 5px; border-left:.5px solid #aaaaaa; border-right:.5px solid #aaaaaa"><p>PREIOD</p><p>3 YEARS</p></li>
                                <li><p>DAICO</p><p>25%</p></li>
                            </ul>
                        </div>
                    </a>
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="card-wrap">
                    <a href="http://www.naver.com" class="card twelve columns shadow-3">
                        <div class="image-container">
                            <img src="../static/img/chain/cnn.jpg" style="width: 100%; height:auto;">
                        </div>
                        <div class="card-body">
                            <h6>CNN</h6>
                            <p style="margin-bottom: 5px;">Project Process</p>
                            <div style="width:10%; border: 1px solid #5ba9fd"></div>
                            <ul style="">
                                <li><p>Credibility</p><p>BB</p></li>
                                <li style="margin-left: 5px; border-left:.5px solid #aaaaaa; border-right:.5px solid #aaaaaa"><p>PREIOD</p><p>1.5 YEARS</p></li>
                                <li><p>DAICO</p><p>20%</p></li>
                            </ul>
                        </div>
                    </a>
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="card-wrap">
                    <a href="http://www.naver.com" class="card twelve columns shadow-3">
                        <div class="image-container">
                            <img src="../static/img/chain/aelf.jpg">
                        </div>
                        <div class="card-body">
                            <h6>AELF</h6>
                            <p style="margin-bottom: 5px;">Project Process</p>
                            <div style="width:50%; border: 1px solid #5ba9fd"></div>
                            <ul>
                                <li><p>Credibility</p><p>BBB</p></li>
                                <li style="margin-left: 5px; border-left:.5px solid #aaaaaa; border-right:.5px solid #aaaaaa"><p>PREIOD</p><p>2 YEARS</p></li>
                                <li><p>DAICO</p><p>20%</p></li>
                            </ul>
                        </div>
                    </a>
                </div>
            </swiper-slide>
            <swiper-slide>Slide 5</swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    </el-row>
    </div>

    <!--Swiper-->

    <div class="second section" style="background: #fff; text-align: center; position: relative;">
        <div class="container">
            <div style="padding: 10% 0 2.5%;">
                <h2 ><strong>What's PRESTO?</strong></h2>
                <h6 >
                    PRESTO provides total solution to development teams from website building to token issuing. <br/>
                    Investors can invest their assets in reliable projects and keep track to their fund in a secure way.
                </h6>
            </div>
        </div>

        <div class="process-box">
            <h5 style="text-align: center; margin-bottom:8%; ">HOW PRESTO WORKS</h5>
            <div class="process red w1">
                <span>1</span> Build Team
            </div><br/>
            <div class="process red w2">
                <span>2</span> Write Whitepaper
            </div><br/>

            <div class="process-box-deep">

                <h5><strong style="color:#fff;">PRESTO provides total solution for issuing and distributing token.</strong></h5>

                <div class="process up blue w3">
                    <span>3</span> Make Website
                </div><br/>
                <div class="process up blue w4">
                    <span>4</span> Deploy ERC20 Token Contract
                </div><br/>
                <div class="process up blue w5">
                    <span>5</span> KYC, AML Process
                </div><br/>
                <div class="process up blue w6">
                    <span>6</span> Token Sale in PRESTO Platform
                </div><br/>

            </div>

            <div class="process purple w7">
                <span>7</span> Team Enhancement
            </div><br/>
            <div class="process purple w8">
                <span>8</span> Project Development
            </div>
        </div>
        <!--<div onclick="document.getElementById('dropDown').classList.remove('on'); console.log(1)" style="position: absolute; left:0; top:0; right:0; bottom:0; z-index: 1 "></div>-->
    </div>


        <!-- features
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
        <div class="section" style="text-align: center; color: #fff; background: #30486d;">
            <div class="container">
                <div style="padding: 10% 0; ">
                    <div data-aos="fade-up">
                        <h2><strong>Features</strong></h2>
                        <h6>
                            PRESTO is a token sale platform with smart contract generator that follows DAICO model to protect investors, and to reduce the cost of the token sale process. The ultimate goal of PRESTO is to be an incubator or an accelerator for sound and vigorous token sale ecosystem. By providing automated generation of standard smart contract like ERC20, investors will be able to invest in various projects safely. Feel free to search sound projects in PRESTO
                        </h6><br/>
                        <p style=" opacity: 0.5;margin:-1rem 0 2.5rem; font-size:1.5rem;">──────────────────</p>
                    </div>

                    <div class="row">
                        <div data-aos="zoom-in" class="four columns">
                            <img src="../static/img/feature1.png" class="feature">
                            <br/><strong>Easy, Convenient, and Reliable</strong><br/>
                            <p class='desc'>
                                You can issue your own tokens and raise fund with PRESTO easily. You don't need to know the Solidity language for smart contract, website development and design for token sale. Every steps are easy and simple. You just enter some predefined forms.
                            </p>
                        </div>
                        <div data-aos="zoom-in" class="four columns">
                            <img src="../static/img/feature2.png" class="feature">
                            <br/><strong>Applied DAICO Model</strong><br/>
                            <p class='desc'>
                                Token investors always have a risk of scam. By adopting DAICO model introduced by Vitalik Buterin, investors are protected from the possibillity of a scam by providing step-by-step withdraw and conditional refunds.
                            </p>
                        </div>
                        <div data-aos="zoom-in" class="four columns">
                            <img src="../static/img/feature3.png" class="feature">
                            <br/><strong>Legally Safe</strong><br/>
                            <p class='desc'>
                                Creating token in a blockchain business is sensitive when it comes to legal matters. Developers will be able to solve this problem through a formal process for token sales.
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div data-aos="zoom-in" class="four columns">
                            <img src="../static/img/feature4.png" class="feature">
                            <br/><strong>Usage of Presto Token In the System</strong><br/>
                            <p class='desc'>
                                Tokens will be easy to acquire and users will be able to use all the features of the platform by using it. Developers will also gain their funds in token which will be used to develop their items.
                            </p>
                        </div>
                        <div data-aos="zoom-in" class="four columns">
                            <img src="../static/img/feature5.png" class="feature">
                            <br/><strong>Additional Services and DEX</strong><br/>
                            <p class='desc'>
                                The integrated platform includes token market with a bug- bounty and other outsourcing tasks. It will also provide decentralized exchange which will create more comfortable environment for future development.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- roadmap
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
        <div class="section gradient-bg" style="text-align: center; color: #fff;">
            <div class="container" style="max-width: 640px;">
                <div style="padding: 10% 0; ">
                    <h2 data-aos="fade-up"><strong>Roadmap</strong></h2>
                    <div data-aos="fade-up" class="row">

                        <div class="timeline on">
                            <span>2017.10</span>
                            <div class="thum"><img src="../static/img/roadmap1.png"></div>
                            <p>Project Initiation</p>
                        </div>
                        <div class="link"></div>
                        <div class="link"></div>

                        <div class="timeline on">
                            <span>2018.02</span>
                            <div class="thum"><img src="../static/img/roadmap1.png"></div>
                            <p>Construct Website, Publish Light Paper</p>
                        </div>
                        <div class="link"></div>
                        <div class="link"></div>

                        <div class="timeline on">
                            <span>2018.03</span>
                            <div class="thum"><img src="../static/img/roadmap3.png"></div>
                            <p>Publish White Paper</p>
                        </div>
                        <div class="link"></div>
                        <div class="link"></div>

                        <div class="timeline">
                            <span>2018.Q3</span>
                            <div class="thum"><img src="../static/img/roadmap4.png"></div>
                            <p>Develop Smart Contract Autogenerator Prototype</p>
                        </div>
                        <div class="link"></div>
                        <div class="link"></div>

                        <div class="timeline">
                            <span>2018.Q4</span>
                            <div class="thum"><img src="../static/img/roadmap5.png"></div>
                            <p>Release Beta Service of Platform</p>
                        </div>
                        <div class="link"></div>
                        <div class="link"></div>

                        <div class="timeline">
                            <span>2019.Q1</span>
                            <div class="thum"><img src="../static/img/roadmap6.png"></div>
                            <p>Main Launch of the PRESTO Platform</p>
                        </div>
                        <div class="link"></div>
                        <div class="link"></div>

                        <div class="timeline">
                            <span>2019.Q2</span>
                            <div class="thum"><img src="../static/img/roadmap7.png"></div>
                            <p>Commerce Token Market</p>
                        </div>
                        <div class="link"></div>
                        <div class="link"></div>

                        <div class="timeline">
                            <span>2019.Q3</span>
                            <div class="thum"><img src="../static/img/roadmap8.png"></div>
                            <p>Open DEX</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <!-- token dist.
          –––––––––––––––––––––––––––––––––––––––––––––––––– -->
        <div class="section" style=" text-align: center; ">
            <div class="container">
                <div style="padding: 10% 0; max-width: 760px; margin:0 auto; ">
                    <h2 data-aos="fade-up"><strong>Token Distribution</strong></h2>
                    <h6 data-aos="fade-up">
                        One billion tokens will be distributed by below standard.
                    </h6>
                    <div class="row">
                        <div class="eight columns">

                            <!--<canvas data-aos="zoom-in" id="tokenChart" width="450" height="550" style="max-width:450px; margin: 0 auto;"></canvas>-->
                            <!--<canvas data-aos="zoom-in" id="tokenChart" width="450" height="550" style="max-width:450px; margin: 0 auto;">-->
                            <div class="char-part" style="max-width:450px; margin: 0 auto;">
                            <line-chart :width="450" :height="550"  data-aos="zoom-in"></line-chart></div>
                            <!--</canvas>-->

                        </div>
                        <div class="four columns" style="text-align: left; font-weight: bold;">
                            <img src="../static/img/legend.png" class="legend">
                            <!--<div class="legend" style="color:rgba(230, 104, 66, 0.9);">● Token Sale 60%</div>
                            <div class="legend" style="color:rgba(220, 68, 91, 0.9);">● Developing Team 18%</div>
                            <div class="legend" style="color:rgba(219, 51, 140, 0.9);">● Business Development 10%</div>
                            <div class="legend" style="color:rgba(87, 56, 206, 0.9);">● Research 8%</div>
                            <div class="legend" style="color:rgba(31, 75, 214, 0.9);">● Advisors 4%</div>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- members
          –––––––––––––––––––––––––––––––––––––––––––––––––– -->
        <a id="teams"></a>
        <div class="section" style="text-align: center; color: #fff; background: #2a2a4e;">
            <div class="container">
                <div style="padding: 10% 0; ">
                    <h3 style="margin-bottom: 1.5rem;"><strong>Developing Team</strong></h3>
                    <div class="title-underline"></div>
                    <br/><br/>

                    <div class="row">
                        <div class="three columns">
                            <div class="photo shadow-3">
                                <img src="../static/photo/Kang,Kyungwon.png" >
                            </div>
                            <h6><strong>Kyung Won Kang</strong></h6>
                            <p style="opacity: 1; margin: -1rem 0 1rem;">CEO AND FOUNDER</p>
                            <p class='desc'>
                                Formerly Ponple CTO and Co-Founder<br/>
                                Formerly Neople Client Developer & Sect. Manager<br/>
                                Released Indie Game “Cross Set” “Cross Set Infinity” on Steam™<br/>
                                Seoul National University (Dept. of Mathematical Sciences)
                            </p>
                        </div>
                        <div class="three columns">
                            <div class="photo shadow-3">
                                <img src="../static/photo/Bae,Kyle.jpg" >
                            </div>
                            <h6><strong>Kyle Bae</strong></h6>
                            <p style="opacity: 1; margin: -1rem 0 1rem;">GLOBAL STRATEGY MANAGER</p>
                            <p class='desc'>
                                Formerly Doil Trading Corp., Director of Overseas Manager<br/>
                                Formerly Investment Visa Consultant<br/>
                                Formerly Huatai Property Company<br/>
                                Seoul National University (M.S in International Sports Management)<br/>
                                University of Minnesota Twin Cities
                            </p>
                        </div>
                        <div class="three columns">
                            <div class="photo shadow-3">
                                <img src="../static/photo/Kim,Wonse.jpg" >
                            </div>
                            <h6><strong>Wonse Kim</strong></h6>
                            <p style="opacity: 1; margin: -1rem 0 1rem;">DEVELOPER</p>
                            <p class='desc'>
                                Python, C++ Developer<br/>
                                Mathematics Technology Laboratory Researcher in Seoul National University<br/>
                                Specialized in Data Analysis Using R, MATLAB and Published 3 SSCI Papers<br/>
                                Seoul National University (Ph.D in Mathematical Sciences)
                            </p>
                        </div>
                        <div class="three columns">
                            <div class="photo shadow-3">
                                <img src="../static/photo/Darren,Bahk.jpg" >
                            </div>
                            <h6><strong>Darren Bahk</strong></h6>
                            <p style="opacity: 1; margin: -1rem 0 1rem;">DEVELOPER</p>
                            <p class='desc'>
                                Python, Java Developer<br/>
                                Skilled in Matlab, Tensorflow<br/>
                                Seoul National University (Double-Majored in Mathematical Sciences and Mechanical Engineering)
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="three columns">
                            <div class="photo shadow-3">
                                <img src="../static/photo/Choi,ChangWoo.jpg" >
                            </div>
                            <h6><strong>Chang Woo Choi</strong></h6>
                            <p style="opacity: 1; margin: -1rem 0 1rem;">BUSINESS STRATEGY MANAGER</p>
                            <p class='desc'>
                                Qualified as Patent Attorney in South Korea<br/>
                                Seoul National University (Dept. of Mechanical Engineering)
                            </p>
                        </div>
                        <div class="three columns">
                            <div class="photo shadow-3">
                                <img src="../static/photo/Rei,Kim.jpg" >
                            </div>
                            <h6><strong>Rei Kim</strong></h6>
                            <p style="opacity: 1; margin: -1rem 0 1rem;">RESEARCHER AND BUSINESS DEVELOPER</p>
                            <p class='desc'>
                                Formerly CJ R&D Center Researcher<br/>
                                University of Illinois Chicago (Postdoctoal research associate)<br/>
                                Seoul National University (Ph.D in Marine Natural Product Chemistry)
                            </p>
                        </div>
                    </div>

                    <br/><br/>
                    <h3 style="margin-bottom: 1.5rem;"><strong>Advisors</strong></h3>
                    <div class="title-underline"></div>

                    <br/><br/>
                    <div class="row">
                        <div class="three columns">
                            <div class="photo shadow-3">
                                <img src="../static/photo/Taejin.jpg" >
                            </div>
                            <h6><strong>Taejin</strong></h6>
                            <p style="opacity: 1; margin: -1rem 0 1rem;">MARKETING SPECIALIST</p>
                            <p class='desc'>
                                Overseas ICO marketing Expert<br/>
                                VIP Advertiser of Facebook
                            </p>
                        </div>
                    </div>
                    <br><br><br>
                    <h3 style="margin-bottom: 1.5rem;"><strong style="color: #ffffff;">Partners</strong>
                    </h3>
                    <div class="title-underline"></div>
                    <br/>
                    <div class="row">
                        <ul class="partner">
                            <!-- <li>
                                <a href="https://syncochain.io" class="partner_box">
                                    <img src="img/partner/syncologo.svg" class="partnerlogo">
                                </a>
                            </li> -->
                            <li style="width:100%;">
                                <a href="http://prismnetwork.kr" class="partner_box" onclick="window.open(this.href, '_blank'); return false;">
                                    <img src="../static/img/partner/prism.png" class="partnerlogo" id="prism">
                                </a>
                            </li>
                            <!--                 <li>
                                                <a href="https://mouda.kr" class="partner_box" onclick="window.open(this.href, '_blank'); return false;">
                                                    <img src="img/partner/moudalogo.svg" class="partnerlogo">
                                                </a>
                                            </li> -->


                            <br/><br/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="section" style="text-align: center;">
            <div class="container">
                <div style="padding: 2.6% 0 0.2%; max-width:544px; margin: 0 auto; ">
                    <h5 style="margin-bottom:-10px; font-size: 1.2rem; color:#426197;"><strong>Member of</strong></h5>
                    <div>
                        <a target="_blank" href="https://www.britishblockchainassociation.com/"> <img src="../static/img/bba_logo.png"  style="width: 100%; max-width:230px; "> </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import AOS from 'aos'
    import Doughnut from './Distribution'
    AOS.init({
        easing: 'ease-out',
        duration: 700
    });

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("nav-desktop").style.top = "0";
        } else {
            document.getElementById("nav-desktop").style.top = "-60px";
        }
        prevScrollpos = currentScrollPos;
    };


    export default {
        data() {
            return {
                swiperOption: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    }
                },
            }
        },
        components: {
            'line-chart': Doughnut,
        },
        mounted() {
            import('aos').then(AOS => AOS.init());
        }
    }


</script>

<style scoped>
    .section.image-bg{
        background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('../static/img/office_back.jpg') 42% 58%;
        background-size:cover;
    }

    .small {
        max-width: 600px;
        margin:  150px auto;
    }
</style>