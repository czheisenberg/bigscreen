<template>
  <div class="module-box">
    <div style="flex:0 1 50%">
      <dv-border-box-10 style="width: 100%; height: 340px;">
        <TheCapsuleChart/>
      </dv-border-box-10>
    </div>
    <div style="flex:0 1 25%">
      <dv-border-box-10 style="width: 100%; height: 340px;">
        <TheCapsuleChart/>
      </dv-border-box-10>
    </div>
    <div style="flex:0 1 25%">
      <dv-border-box-10 style="width: 100%; height: 340px;">
        <TheCapsuleChart/>
      </dv-border-box-10>
    </div>
    
  </div>
</template>
<script>
import TheCapsuleChart from '@/views/TheCapsuleChart'

export default{
  components:{
    TheCapsuleChart,
  }
}
</script>