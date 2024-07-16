<template>
  <div class="module-box">
    <!-- 左 -->
    <div style="flex:0 1 25%">
      <dv-border-box-13 style="width: 100%; height: 300px;">
        <TheCapsuleChart/>
      </dv-border-box-13>
      <dv-border-box-10 style="width: 100%; height: 300px;">
        <TheWaterLevelPond/>
      </dv-border-box-10>
      <dv-border-box-10 style="width: 100%; height: 300px;">
        <TheConicalColumnChart/>
      </dv-border-box-10>
    </div>
    <!-- 中 -->
    <div style="flex:0 1 50%">
      <dv-border-box-10 style="width: 100%; height: 900px;">
       <TheFlylineChart/>
      </dv-border-box-10>
    </div>
    <!-- 右 -->
    <div style="flex:0 1 25%">
      <dv-border-box-13 style="width: 100%; height: 450px;">
        <TheCapsuleChart/>
      </dv-border-box-13>
      <dv-border-box-10 style="width: 100%; height: 450px;">
        <TheConicalColumnChart/>
      </dv-border-box-10>
    </div>
  </div>
</template>
<script>
import TheCapsuleChart from '@/views/TheCapsuleChart'
import TheWaterLevelPond from '@/views/TheWaterLevelPond'
import TheConicalColumnChart from '@/views/TheConicalColumnChart'
import TheFlylineChart from '@/views/TheFlylineChart'

export default{
  components:{
    TheCapsuleChart,
    TheWaterLevelPond,
    TheConicalColumnChart,
    TheFlylineChart
}
}

</script>