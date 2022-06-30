<template>
    <div class="banner">
        <h2>폴포징(porposing) :</h2>
        <h3>폴포징이란?</h3>
        <p>F1 차량들은 바닥 아래로 유입된 공기가 벤츄리 터널을 통과하며 압력이 낮아지게 되고 결과적으로 머신이 지면에 달라붙게 되면서 다운포스를 얻게 된다. 이것이 그라운드 이펙트이다. 그런데 고속 주행구간에서 그라운드 이펙트를 통해 다운포스가 높아진 차체가 일정 수준 이상으로 지면에 가까워지면 차체 밑을 지나는 공기의 흐름이 차단되고 이에 따라 그라운드 이펙트가 발생하지 않아 다운포스를 잃게 된다. 그 결과 차체 높이가 높아지게 되는데, 그 직후 다시 바닥 밑으로 공기가 유입되며 다운포스가 발생하여 차체가 낮아진다. 이 과정이 반복되며 차체가 위 아래로 움직이는 바운싱이 생겨나게 되는데 이것이 폴포징 현상이다.</p>
    </div>
</template>

<script>
export default {
    name: "BannerComponent"
}
</script>

<style scoped>
    .banner {
        width: 100%;
        height: auto;
        background-color: #dbdbdb;
        margin: 30px 0;
    }

    .banner h2 {
        margin: 20px;
    }

    .banner p {
        margin: 20px;
        margin-top: 15px;
        word-wrap: break-word;
    }
</style>