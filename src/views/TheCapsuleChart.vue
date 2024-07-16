<template>
    <!-- 胶囊图 -->
    <dv-capsule-chart :config="config" style="width:100%;height:100%" />
</template>
<script>
export default{
    props:{
        // 数据
        dataChart:{
            type: Array,
            default:()=>[
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
        // 演示
        colorsChart:{
            type: Array,
            default:()=>[
                
            ]
        }
    },
    data(){
        return{
            config:{
            data: this.dataChart,
            colors: this.colorsChart,
            unit: '单位',
            showValue: true
        },
        }
    }
}
</script>