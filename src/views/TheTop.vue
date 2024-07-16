<template>
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
</template>
