<script setup>
import { useLayoutStore } from '@/stores/layoutStore.js';
import { onBeforeUnmount, onMounted } from 'vue';
import { computed } from 'vue';


const layoutStore = useLayoutStore(); // 使用 layoutStore
let intervalId; // 用于存储定时器的ID

onMounted(() => {
  // 设置定时器，例如每1000毫秒（1秒）发送一次请求
  intervalId = setInterval(() => {
    layoutStore.fetchGoldQuote();
  }, 500);
});

onBeforeUnmount(() => {
  // 组件卸载前清除定时器
  if (intervalId) {
    clearInterval(intervalId);
  }
});

// 计算属性来格式化时间戳（如果需要）
const formattedTime = computed(() => {
  const timestamp = layoutStore.time;
  return `${timestamp}`;
});
</script>

<template>
  <div class="divider">
    <div class="quote-status">
      <span>{{ formattedTime }}</span>
      <span>|</span>
      <span>开盘</span>
    </div>

    <div class="price-table-header">
      <div class="title">商 品</div>
      <div class="title">回 购</div>
      <div class="title">销 售</div>
      <div class="title">高/低</div>
    </div>
  </div>

  <div class="quote-page">


    <div class="quote-page-content">
      <div class="quote-price-table">
        <div v-for="item in layoutStore.goldQuoteList" :key="item.id" class="price-table-row">

          <div class="price-item ">
            <span class="symbol-name">{{ item.sname }}</span>
          </div>

          <div class="price-item"><!-- 回购价格 -->
            <span class="symbole-price">{{ item.bid }}</span>
          </div>

          <div class="price-item"><!-- 销售价格 -->
            <span class="symbole-price">{{ item.ask }}</span>
          </div>

          <div class="price-item"><!-- 高/低价格 -->
            <span class="symbol-price-rise" style="display: block;">{{ item.high }}</span>
            <span class="symbol-price-fall" style="display: block;">{{ item.low }}</span>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.divider {
  background: #CCAC44;

  .quote-status {
    text-align: right;
    padding-top: 3px;
    padding-right: 10px;
    //display: inline-block;
    color: #fff;
    font-size: 15px;
  }


  span {
    font-size: 24px;
    margin-right: 4px;
  }
}

.quote-page {
  background: #1A1C22;
  min-height: 100%;
  height: 100%;
  overflow: auto;
  padding: 3px 0;
  box-sizing: border-box;
  position: relative
}


.price-table-header {
  background: #CCAC44;
  display: flex;
  justify-content: space-between;
  /* 在子元素之间创建等距空间 */
  border-right: 1px solid #1dc779;
}

.title {
  font-family: Microsoft YaHei, Arial, Helvetica, sans-serif;
  font-size: 20px;

  flex: 0 1 auto;
  /* 防止子元素拉伸或压缩 */
  /* 你可以在这里添加其他样式，比如宽度、高度、背景色等 */
  color: #ffffff;
  padding: 10px;
  text-align: center;
  /* 可选，使内容居中 */
}

.price-table-header .title {
  width: calc(25% - 20px);
}

//------------
.quote-page .quote-page-content {
  height: calc(100% - 47px);
  overflow-y: auto
}

.quote-page .quote-page-content .quote-price-table {
  color: #eee;
  font-size: 21px;
  font-family: sans-serif;
  min-height: 300px
}

.quote-page .quote-page-content .quote-price-table .price-table-row {
  display: flex;
  justify-content: space-between;
  /* 在子元素之间创建等距空间 */


  padding: 3px 0;
  line-height: 23px;

  flex-wrap: nowrap;
  /* 防止子元素换行 */
  overflow-x: auto;
  /* 如果需要，允许水平滚动 */
}


.quote-page .quote-page-content .quote-page-table .price-table-row .price-item {
  flex: 0 1 auto;
  /* 防止子元素拉伸或压缩 */
  padding: 10px;
  text-align: center;
  /* 可选，使内容居中 */
}


.quote-page .quote-page-content .quote-page-table .price-table-row .price-item span {
  flex: 0 0 calc(25% - 20px);
  /* 每个div占据大约25%的宽度，减去左右边距 */
  margin: 10px;
  padding: 20px;
  box-sizing: border-box;
}

.price-table-row div {
  flex: 0 0 calc(25% - 20px);
  /* 每个div占据大约25%的宽度，减去左右边距 */
  margin-bottom: 0px;
  padding-top: 15px;
  box-sizing: border-box;
  text-align: center;
  /* 可选，使内容居中 */

  border-right: 3px solid #1A1C22;
}

.price-table-row div:last-child {
  border-right: none;
}


.quote-page .quote-price-table .price-table-row .symbol-name {
  font-family: Microsoft YaHei, Arial, Helvetica, sans-serif;
  font-size: 20px;
  margin-left: 8px;
  color: #ffbf24
}

.quote-page .quote-price-table .price-table-row:nth-child(2n) {
  background: #000 !important
}

.quote-page .quote-price-table .price-table-row:last-child {
  border-bottom: 1px solid #444
}

.quote-page .quote-price-table .symbole-price {
  font-size: 19px;
  font-family: moonfont
}

.quote-page .quote-price-table .symbol-price-rise {
  transform: translateY(-40%);
  color: #FF0000
}

.quote-page .quote-price-table .symbol-price-fall {
  transform: translateY(-40%);
  color: #00BA00
}


.quote-page .quote-price-table .price-table-row .price-item-highAndLow {
  text-align: center;
  /* 水平居中 */
}

.quote-page .quote-price-table .symbol-name {
  font-family: Microsoft YaHei, Arial, Helvetica, sans-serif;
  font-size: 20px;
  margin-left: 8px;
  color: #ffbf24
}

//-------------
/* 媒体查询：针对手机屏幕的样式 */
@media (max-width: 768px) {
  .divider {
    width: 100%;
    margin: 0 auto;
    background: #CCAC44;

    .quote-status {
      text-align: right;
      padding-top: 3px;
      padding-right: 10px;
      //display: inline-block;
      color: #fff;
      font-size: 15px;
    }


    span {
      font-size: 24px;
      margin-right: 4px;
    }
  }

  .quote-page {
    width: 100%;
    margin: 0 auto;
    background: #1A1C22;
    min-height: 100%;
    height: 100%;
    overflow: auto;
    padding: 3px 0;
    box-sizing: border-box;
    position: relative
  }


  .price-table-header {
    background: #CCAC44;
    display: flex;
    justify-content: space-between;
    /* 在子元素之间创建等距空间 */
    border-right: 1px solid #1dc779;
  }

  .title {
    font-family: Microsoft YaHei, Arial, Helvetica, sans-serif;
    font-size: 20px;

    flex: 0 1 auto;
    /* 防止子元素拉伸或压缩 */
    /* 你可以在这里添加其他样式，比如宽度、高度、背景色等 */
    color: #ffffff;
    padding: 10px;
    text-align: center;
    /* 可选，使内容居中 */
  }

  .price-table-header .title {
    width: calc(25% - 20px);
  }

  //------------
  .quote-page .quote-page-content {
    height: calc(100% - 47px);
    overflow-y: auto
  }

  .quote-page .quote-page-content .quote-price-table {
    color: #eee;
    font-size: 21px;
    font-family: sans-serif;
    min-height: 300px
  }

  .quote-page .quote-page-content .quote-price-table .price-table-row {
    display: flex;
    justify-content: space-between;
    /* 在子元素之间创建等距空间 */


    padding: 3px 0;
    line-height: 23px;

    flex-wrap: nowrap;
    /* 防止子元素换行 */
    overflow-x: auto;
    /* 如果需要，允许水平滚动 */
  }


  .quote-page .quote-page-content .quote-page-table .price-table-row .price-item {
    flex: 0 1 auto;
    /* 防止子元素拉伸或压缩 */
    padding: 10px;
    text-align: center;
    /* 可选，使内容居中 */
  }


  .quote-page .quote-page-content .quote-page-table .price-table-row .price-item span {
    flex: 0 0 calc(25% - 20px);
    /* 每个div占据大约25%的宽度，减去左右边距 */
    margin: 10px;
    padding: 20px;
    box-sizing: border-box;
  }

  .price-table-row div {
    flex: 0 0 calc(25% - 20px);
    /* 每个div占据大约25%的宽度，减去左右边距 */
    margin-bottom: 0px;
    padding-top: 15px;
    box-sizing: border-box;
    text-align: center;
    /* 可选，使内容居中 */

    border-right: 3px solid #1A1C22;
  }

  .price-table-row div:last-child {
    border-right: none;
  }


  .quote-page .quote-price-table .price-table-row .symbol-name {
    font-family: Microsoft YaHei, Arial, Helvetica, sans-serif;
    font-size: 20px;
    margin-left: 8px;
    color: #ffbf24
  }

  .quote-page .quote-price-table .price-table-row:nth-child(2n) {
    background: #000 !important
  }

  .quote-page .quote-price-table .price-table-row:last-child {
    border-bottom: 1px solid #444
  }

  .quote-page .quote-price-table .symbole-price {
    font-size: 19px;
    font-family: moonfont
  }

  .quote-page .quote-price-table .symbol-price-rise {
    transform: translateY(-40%);
    color: #FF0000
  }

  .quote-page .quote-price-table .symbol-price-fall {
    transform: translateY(-40%);
    color: #00BA00
  }


  .quote-page .quote-price-table .price-table-row .price-item-highAndLow {
    text-align: center;
    /* 水平居中 */
  }

  .quote-page .quote-price-table .symbol-name {
    font-family: Microsoft YaHei, Arial, Helvetica, sans-serif;
    font-size: 20px;
    margin-left: 8px;
    color: #ffbf24
  }
}
</style>