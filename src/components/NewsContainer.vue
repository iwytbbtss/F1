<template>
    <div id="news">
        <div>
            <img :src="article.img" alt="2022 F1">
            <h3>{{ article.headline }}</h3>
            <p>{{ article.main }}</p>
        </div>
        <a :href="article.src" target="_blank">자세히 보기</a>
    </div>
</template>

<script>
export default {
    name: 'NewsContainer',
    data: function() {
        return {
            article: {img: require('../assets/AustGP.jpg'), headline: "[주간F1] 빗길에 강한 레드불, 6년만에 원투피니시…페르스타펜 '그랜드슬램'",
            main: "25일(현지시간) 열린 포뮬러원(F1) 월드챔피언십 에밀리아로마냐 그랑프리에서 레드불 레이싱 소속 맥스 페르스타펜이 1위를 차지했다.페르스타펜은 이탈리아 이몰라에서 진행된 결선 레이스에서 4.909km 서킷 63바퀴(총 309.049km)를 1시간32분7초986의 기록으로 통과했다. 그는 시즌 두번째 우승을 거두며 챔피언십 선두 샤를 르클레르(스쿠데리아 페라리)와 나란히 2승을 기록하고 있다. 페르스타펜은 예선과 스프린트(미니 레이스), 결선 모두 1위를 차지하고, 패스티스트 랩과 모든 랩을 리드하는 '그랜드슬램'을 달성했다. 이날 온라인 인기 투표인 '드라이버 오브 더 데이'까지 선정되는 등 이번 주말의 주인공이 됐다. 팀 메이트 세르히오 페레스는 경기 내내 르클레르를 성공적으로 저지하며 2위를 차지했다. 올 시즌 엔진열 관리에 어려움을 겪던 레드불 경주차였지만, 경기 시작 전 내린 비로 인해 차량 컨디션도 최상을 유지할 수 있었다. 이로써 레드불은 2016년 말레이시아 이후 약 6년만에 원투 피니시를 달성했다.",
            src: "https://www.motorgraph.com/news/articleView.html?idxno=29829"}
        }
    }
}
</script>

<style>
#news {
    width: 62%;
    background-color: beige;
    padding: 20px;
}

#news>div {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 9;
    -webkit-box-orient: vertical;
}

#news>div img {
    width: 240px;
    height: 160px;
    float: left;
}

#news>div p {
    font-size: 14px;
}

#news a {
    float: right;
    font-size: 15px;
    text-decoration: none;
    color: white;
    background-color: mediumseagreen;
    border-radius: 12px;
    padding: 2px 6px;
}

#news a:hover {
    background-color: cornflowerblue;
}
</style>