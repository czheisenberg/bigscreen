<template>
  <div class="content bg">
    <!-- 全屏容器 http://datav.jiaminghi.com/guide/ -->
    <dv-full-screen-container>
        <!-- 第一行 -->
        <div class="module-box">
          <div style="flex:0 1 30%">
            <dv-decoration-10 style="height:5px;" />
          </div>
          <div style="flex:0 1 40%">
            <!-- 三等分 -->
             <div class="d-flex">
              <!-- 左 -->
              <dv-decoration-8 style="width:300px;height:50px; flex:1" />
              <!-- 中 -->
              <div style="flex:1"><dv-decoration-11 style="height:60px;">智慧数据中心</dv-decoration-11></div>
              <!-- 右 -->
              <dv-decoration-8 :reverse="true" style="width:300px;height:50px; flex:1" />
             </div>
            
          </div>
          <div style="flex:0 1 30%">
            <dv-decoration-10 style="height:5px; transform:rotateY(180deg)" />
          </div>
        </div>
       
        <!-- 第二行 -->
        <div class="module-box">
          <!-- 左 -->
          <div style="flex:0 1 25%">
            <dv-border-box-13 style="width: 100%; height: 200px;">
              <!-- 胶囊图 -->
              <dv-capsule-chart :config="config" style="width:100%;height:100%" />
            </dv-border-box-13>
            <dv-border-box-10 style="width: 100%; height: 200px;">
              <!-- 水位图 -->
              <dv-water-level-pond :config="config3" style="width:100%;height:100%" />
            </dv-border-box-10>
            <dv-border-box-10 style="width: 100%; height: 200px;">
              <!-- 锥形图 -->
              <dv-conical-column-chart :config="config5" style="width:100%;height:100%;" />
            </dv-border-box-10>
          </div>
          <!-- 中 -->
          <div style="flex:0 1 50%">
            <dv-border-box-10 style="width: 100%; height: 600px;">
              <!-- 飞线图 -->
              <dv-flyline-chart :config="config4" style="width:100%;height:100%;" />
            </dv-border-box-10>
          </div>
          <!-- 右 -->
          <div style="flex:0 1 25%">
            <dv-border-box-13 style="width: 100%; height: 300px;">
              <dv-capsule-chart :config="config2" style="width:100%;height:100%" />
            </dv-border-box-13>
            <dv-border-box-10 style="width: 100%; height: 300px;">
              <!-- 锥形图 -->
              <dv-conical-column-chart :config="config5" style="width:100%;height:100%;" />
            </dv-border-box-10>
          </div>
        </div>
        
        <!-- 第三行 -->
        <div class="module-box">
          <div style="flex:0 1 50%">
            <dv-border-box-10 style="width: 100%; height: 200px;">
              <!-- 胶囊图 -->
              <dv-capsule-chart :config="config" style="width:100%;height:100%" />
            </dv-border-box-10>
          </div>
          <div style="flex:0 1 25%">
            <dv-border-box-10 style="width: 100%; height: 200px;">
              <!-- 胶囊图 -->
              <dv-capsule-chart :config="config" style="width:100%;height:100%" />
            </dv-border-box-10>
          </div>
          <div style="flex:0 1 25%">
            <dv-border-box-10 style="width: 100%; height: 200px;">
              <!-- 胶囊图 -->
              <dv-capsule-chart :config="config" style="width:100%;height:100%" />
            </dv-border-box-10>
          </div>
          
        </div>
      
    </dv-full-screen-container>
  </div>
</template>

<script>


export default {
  name: 'HomeView',
  components: {

  },
  data(){
    return{
      config:{
        data:[
          {
            name: '南阳',
            value: 167
          },
          {
            name: '周口',
            value: 67
          },
          {
            name: '漯河',
            value: 123
          },
          {
            name: '郑州',
            value: 55
          },
          {
            name: '西峡',
            value: 98
          }
        ]
      },
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
      config3:{
         data: [66, 45],
         shape: 'roundRect'
      },
      config4:{
        centerPoint: [0.5, 0.5],
        points: [
          [0.52, 0.23],
          [0.43, 0.29],
          [0.59, 0.35],
          [0.53, 0.47],
          [0.45, 0.54],
          [0.36, 0.38],
          [0.62, 0.55],
          [0.56, 0.56],
          [0.37, 0.66],
          [0.55, 0.81],
          [0.55, 0.67],
          [0.37, 0.29],
          [0.20, 0.36],
          [0.76, 0.41],
          [0.59, 0.18],
          [0.68, 0.17],
          [0.59, 0.10]
        ],
        bgImgUrl: require('../assets/img/map.jpg')
      },
      config5:{
                data: [
            {
              name: '周口',
              value: 55
            },
            {
              name: '南阳',
              value: 120
            },
            {
              name: '西峡',
              value: 71
            },
            {
              name: '驻马店',
              value: 66
            },
            {
              name: '新乡',
              value: 80
            },
            {
              name: '信阳',
              value: 35
            },
            {
              name: '漯河',
              value: 15
            }
          ],
          img: [
              require('../assets/img/1st.png'),
              require('../assets/img/2st.png'),
              require('../assets/img/3st.png'),
              require('../assets/img/4st.png'),
              require('../assets/img/5st.png'),
              require('../assets/img/6st.png'),
              require('../assets/img/7st.png')
          ]
      }
    }
  }
}
</script>
