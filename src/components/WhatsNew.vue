<template>
    <div>
    <div class="menu_bar">
    <img src="../static/img/whatsnew_web1.png" width="100%" height="auto">
    </div>


    <div class="container">
    <br>
        <h3 class="news_title">이더리움과 계약을 맺다</h3>
        <h6 class="news_date">2018. 07. 02</h6>
        <hr noshade style="margin-top:0px;">
        <div class="six columns" style="height: 530px;">
            Oracle Exchange Algorithm(OEA)은 Astro universe내의 다양한 가치를 반영하고 ANET 암호화폐의 가격안정성을 유지하기 위한 Q-Learning 기반의 Algorithm입니다. OEA는 통화공급량 조절을 통해 합리적인 가격을 유지하는 것을 목표로 하여 강화학습에 의해 생성된 이상적인 가격곡선을 기반으로, 지나치게 큰 가격변동성이 발생할 경우 이를 억제합니다. OEA는 일종의 ‘Algorithm Bank’를 두어 암호화폐의 공급량을 조절하며 가격 안정성은 Algorithm Bank의 이러한 작용에 의해 유지됩니다.
            Algorithm Bank에서는 세 종류의 자산을 관리합니다.<br/><br/>

            첫 번째는 Partnership에게 판매된 ANET 암호화폐입니다. Business partner가 Private chain의 노드 유지비용 대신 구매한 ANET 암호화폐를, Algorithm bank에서 관리합니다. 두 번째는 판매되지 않은 ANET 암호화폐입니다. 세번째는 기축통화(ex. USD, KRW, BTC)입니다. Algorithm bank에서는 자산을 일정수준으로 유지하며 ANET 암호화폐의 가격안정성을 유지합니다.
            Q-Learning에 의해 그려질 이상적인 가격 그래프의 변수는 시장 형성가격, Algorithm Bank 잔고가 해당됩니다. 두 가지의 변수를 설정함으로써 이상적인 가격곡선은 Algorithm Bank에서 감당하지 못할 지나친 시장의 변동성, 지나치게 많거나 적은 B2B 수요등의 변수들에 융통성 있게 대응합니다.
            Algorithm에 의한 가격형성은 다음과 같은 과정에 의해 이뤄집니다.

        </div>
        <div class="five columns"><br><br><br>
            <img src="../static/img/news_photo1.png" class="image-part">
        </div>
    </div>
        <img src="../static/img/fill.png" height="80">
    </div>
</template>

<script>
    export default {
        name: "WhatsNew"
    }
</script>

<style scoped>

</style>