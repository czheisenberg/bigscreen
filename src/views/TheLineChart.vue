<template>
    <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
    <div ref="chart" style="width: 100%;height:340px;"></div>
</template>

<script>
//  导入 echarts 5
import * as echarts from 'echarts/core';

export default{
    data(){
        return{

        }
    },
    mounted(){
        this.initEchart();      // 调用 initEchart() 初始化时
        console.log("初始化完成！")
    },

    methods:{
        initEchart(){
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(this.$refs.chart);

            // 指定图表的配置项和数据
            var option = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                    data: [150, 230, 224, 218, 135, 147, 260],
                    type: 'line'
                    }
                ]
                };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }
    }
}
</script>