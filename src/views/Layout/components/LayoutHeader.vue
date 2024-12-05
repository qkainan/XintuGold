<script setup>

</script>

<template>
  <header class='app-header'>
    <div class="container">
      <h1 class="logo">
        武汉玖耀贵金属行情
      </h1>
    </div>
  </header>
</template>


<style lang='scss' scoped>
.app-header {
  width: 100%;
  margin: 0 auto;
  background:#1A1C22;

  .container {
    display: flex;
    align-items: center;
    text-align: center;
  }

  .logo {
    margin-left: auto;
    margin-right: auto;
    font-weight: 700;
    font-size: 488%;
    //font-size: 64px;
    color: #F2C464;
  }

}

//-----------
/* 媒体查询：针对手机屏幕的样式 */
@media (max-width: 768px) {
  .app-header {
    width: 34%;
    margin: 0 auto;
    box-sizing: border-box;
    background: #1A1C22;

    .container {
      display: flex;
      align-items: center;
      text-align: center;
    }

    .logo {
      margin-left: 15px;
      margin-right: auto;
      font-weight: 700;
      font-size: 308%;
      color: #F2C464;
    }

  }
}
</style>