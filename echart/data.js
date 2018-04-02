var dataAll = {
    x:['1','2','3','4','5','6','7','1','2','3','4','5','6','7'],
    y1: [820, 932, 901, 934,'' , 1330, 1320,820, 932, 901, 934,'' , 1330, 1320],
    y2:[840, 322, 901, 434, 1090, 1034, 1920,840, 322, 901, 434, 1090, 1034, 1920],
    y3:[940, 222, 701, 334, 990, 934, 1820,940, 222, 701, 334, 990, 934, 1820]
}

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('param'));

// 指定图表的配置项和数据
var option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 0,
        top: 50,
        bottom: 20,
        padding:5,
        data:[{name:'one', icon:'circle'},{name:'two',icon:'circle'},{name:'three',icon:'circle'}],
        textStyle:{color:'#368198'}
    },
    textStyle:{
        color:'#368198'
    },
    dataZoom: [
        {
            type:'inside',
            realtime: true,
            start: 0,
            end: 20
        }
    ],
    grid:{
        show:true,
        width:'400px',
        // backgroundColor:'#c3c3c3',
        borderColor:'#17182A'
    },
    toolbox: {
        feature: {
            saveAsImage: {},
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
        }
    },
    xAxis: {
        name:'x轴',
        data:dataAll.x,
        gridIndex: 0,
        axisLine: {onZero: false},
    } ,
    yAxis: {
        name:'y轴',
        type: 'value'
    },
    series: [{
        name:'one',
        data: dataAll.y1,
        connectNulls:true,
        type: 'line'
    },{
        name:'two',
        data: dataAll.y2,
        type: 'line'
    }, {
        name:'three',
        data: dataAll.y3,
        type: 'line'
    }],
    color:['#53EAB2','#98DEEA',
        '#E49970', '#CD5A59']
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

$.ajax({
    url:'api/user/admin',
    type:'get',
    contentType:'application/json',
    success:function (data) {
        console.log(data)
    }
})


