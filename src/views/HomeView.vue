<template>
  <div class="content bg">
    <!-- 全屏容器 http://datav.jiaminghi.com/guide/ -->
    <dv-full-screen-container>
        <!-- 第一行 -->
        <TheTop/>
       
        <!-- 第二行 -->
        <TheContent/>
        
        <!-- 第三行 -->
        <TheButtom/>
      
    </dv-full-screen-container>
  </div>
</template>

<script>
import TheTop from '@/views/TheTop'
import TheContent from '@/views/TheContent'
import TheButtom from '@/views/TheButtom'
export default {
  name: 'HomeView',
  components: {
    TheTop,
    TheContent,
    TheButtom
  },
  data(){
    return{
      
      config2:{
        data: [
          {
            name: '南阳',
            value: 167
          },
          {
            name: '周口',
            value: 123
          },
          {
            name: '漯河',
            value: 98
          },
          {
            name: '郑州',
            value: 75
          },
          {
            name: '西峡',
            value: 66
          },
        ],
        colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
        unit: '单位',
        showValue: true
      },
      
      
      
    }
  }
}
</script>
