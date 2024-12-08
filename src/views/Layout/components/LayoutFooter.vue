<template>
  <footer class="app_footer">
    <!-- 联系我们 -->
    <div class="contact">
      <div class="container">
        <dl>
          <dt></dt>
          <dd><i class="content"></i> 声明:以上行情仅供参考</dd>
        </dl>
        <dl>
          <dt></dt>
          <dd><i class="content"></i> 黄金定价:定金20元一克，30天内到货即可，也可以货到行情，不接受货到当天定价</dd>
        </dl>
        <dl>
          <dt></dt>
          <dd><i class="content"></i> PS:价格根据大盘时价，定价私聊确认。为避免黄金丢失，黄金单独发货，不接受与手机混包，如因跟手机混包，丢失概不负责</dd>
        </dl>
        <dl>
          <dt> </dt>
          <dd class="content">联系热线：17764039095</dd>
        </dl>
        <dl>
          <dt></dt>
          <dd><i class="content"></i> 地址:武汉市江夏区关山大道中建三局三公司住宅小区10栋107玖耀商贸</dd>
        </dl>
      </div>
    </div>
  </footer>
</template>

<style scoped lang='scss'>
.app_footer {
  overflow: hidden;
  background-color:#1A1C22;
  padding-top: 20px;
  padding-bottom: 100px;

  .contact {
    margin-top: 50px;
    background:#1A1C22;

    dl {
      height: 24px;
      text-align: left;
      padding: 0 72px;
      color:#ffffff;
    }

    dd {

      font-size: 19px;
      &:hover {
        .iconfont {
          color: #ffffff;
        }
      }
    }
  }
}

//-----------
/* 媒体查询：针对手机屏幕的样式 */
@media (max-width: 768px) {
  .app_footer {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    background-color:#1A1C22;
    padding-top: 20px;
    padding-bottom: 100px;

    .contact {
      margin-top: 30px;
      background:#1A1C22;


      dd {
        text-align: start;
        font-size: 16px;
        &:hover {
          .iconfont {
            color: #ffffff;
          }
        }
      }
    }
  }
}
</style>
<script setup>
</script>