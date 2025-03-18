 // $(function () {
 //
 //     //左上图表
 //     ceshis5()
 // chart_1
 //     //左下图表
 //     ceshis2();
 //chart3
 //     //中上图表
 //     ceshis();
 //chart1
 //     //中下图表
 //      ceshis3();
 //chart4
 //     //右中图表
 //     ceshis1();
 //chart2

 //     //右下图表
 //     ceshis4();
 //chart5







        //左上图表
        function ceshis5(left_top_data_accumulate,left_top_data_indicator) {
          var myChart = echarts.init(document.getElementById('chart_1'));


            var years = ['2013', '2014', '2015','2016','2017','2018','2019','2020','2021','2022'];


            option = {

                baseOption: {
                    //backgroundColor: '#2c343c', //背景颜色
                    timeline: {
                        data: years,
                        // axisLabel: {
                        //     rotate: 45, // 设置旋转角度，单位为度，默认为0，表示不旋转
                        // },
                        axisType: 'category',
                        autoPlay: true,
                        playInterval: 1500, //播放速度

                        left: '5%',
                        right: '5%',
                        bottom: '0%',
                        width: '90%',
                        //  height: null,
                        label: {

                            normal: {
                                textStyle: {
                                    fontSize:'10',
                                    color: 'red',

                                }
                            },
                            emphasis: {
                                textStyle: {
                                    color: 'red',

                                }
                            }
                        },
                        symbolSize: 10,
                        lineStyle: {
                            color: '#red'
                        },
                        checkpointStyle: {
                            borderColor: '#red',
                            borderWidth: 2
                        },
                        controlStyle: {
                            showNextBtn: true,
                            showPrevBtn: true,
                            normal: {
                                color: '#ff8800',
                                borderColor: '#ff8800'
                            },
                            emphasis: {
                                color: 'red',
                                borderColor: 'red'
                            }
                        },

                    },
                    title: {
                        text: '',
                        right: '2%',
                        bottom: '18%',
                        textStyle: {
                            fontSize: 50,
                            color: 'black' //标题字体颜色
                        }
                    },
                    tooltip: {
                        'trigger': 'axis'
                    },
                    calculable: true,
                    grid: {

                        left: '8%',
                        right: '2%',
                        bottom: '13%',
                        top: '0%',
                        containLabel: true
                    },
                    label: {
                        normal: {
                            textStyle: {
                                color: 'red'
                            }
                        }
                    },
                    yAxis: [{
                        name:'种类',
                        nameGap: 50,
                        offset: '37',
                        'type': 'category',
                        interval: 50,
                        //inverse: ture,//图表倒叙或者正序排版
                        data: '',
                        nameTextStyle: {
                            color: 'red'
                        },


                        axisLabel: {
                            //rotate:45,
                            show: false,
                            textStyle: {
                                fontSize: 32,

                                color: function(params, Index) { // 标签国家字体颜色

                                    //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);//随机生成颜色

                                    var colorList = ['#358fd9', '#5281b2', '#fedd8b', '#ffa597', '#84e4dd', '#749f83',
                                        '#ca8622', '#d98570', '#177dbb', '#aa96da', '#fcbad3', '#ffffd2',
                                        '#f38181', '#fce38a', '#444b3c', '#54a2da', '#e3fdfd', '#749f83', '#ca8622'
                                    ];

                                    //console.log("111", Index, colorarrays[Index],params); //打印序列

                                    return colorarrays[left_top_data_indicator[0].indexOf(params)];
                                },


                            }, //rotate:45,
                            interval: 50
                        },
                        axisLine: {

                            lineStyle: {
                                color: 'balck' //Y轴颜色
                            },
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                color: 'balck'
                            }
                        },

                    }],
                    xAxis: [{
                        'type': 'value',
                        'name': '万',

                        splitNumber: 8, //轴线个数
                        nameTextStyle: {
                            color: 'balck'
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#ffa597' //X轴颜色
                            }
                        },
                        // axisLabel: {
                        //     formatter: '{value} '
                        //
                        // },
                        axisLabel: {
                            rotate:'30',
                            formatter: function (value) {
                                if (Math.abs(value) >= 1e4 ) {
                                    return value.toExponential(2);
                                } else {
                                    return value;
                                }
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#fedd8b'
                            }
                        },
                    }],
                    series: [{
                        'name': '',
                        'type': 'bar',
                        markLine: {
                            label: {
                                normal: {
                                    show: false
                                }
                            },
                            lineStyle: {
                                normal: {
                                    color: 'red',
                                    width: 3
                                }
                            },
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'right', //数值显示在右侧
                                formatter: '{c}'
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: function(params) {
                                    // build a color map as your need.
                                    //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);//随机生成颜色

                                    // var colorList = ['#6bc0fb', '#7fec9d', '#fedd8b', '#ffa597', '#84e4dd', '#749f83',
                                    //     '#ca8622', '#bda29a', '#a8d8ea', '#aa96da', '#fcbad3', '#ffffd2',
                                    //     '#f38181', '#fce38a', '#eaffd0', '#95e1d3', '#e3fdfd', '#749f83', '#ca8622'
                                    // ];
                                    var colorList = ['#2594e7', '#5281b2', '#fedd8b', '#ffa597'
                                        , '#85b9b6', '#749f83', '#ca8622', '#d98570',
                                        '#177dbb', '#aa96da', '#fcbad3', '#ffffd2',
                                        '#f38181', '#fce38a', '#aebd9c', '#0387f6',
                                        '#048f8f', '#749f83', '#ca8622'
                                    ];
                                    // return colorList[params.dataIndex]

                                    console.log("111", params.name); //打印序列
                                    return colorList[left_top_data_indicator[0].indexOf(params.name)];
                                },

                            }
                        },
                    },

                        {
                            'name': '',
                            'type': 'bar',
                            markLine: {


                                label: {
                                    normal: {
                                        show: false
                                    }
                                },
                                lineStyle: {

                                    normal: {
                                        color: 'red',
                                        width: 3
                                    }
                                },
                            },
                            barWidth: '50%',
                            barGap: '-100%',
                            label: {
                                normal: {
                                    show: true,
                                    fontSize: 16,  //标签国家字体大小
                                    position: 'left', //数值显示在右侧
                                    formatter: function(p) {
                                        return p.name;
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {


                                    color: function(params) {
                                        // build a color map as your need.
                                        //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);//随机生成颜色
                                        var colorList = ['#2594e7', '#5281b2', '#fedd8b', '#ffa597'
                                            , '#85b9b6', '#749f83', '#ca8622', '#d98570',
                                            '#177dbb', '#aa96da', '#fcbad3', '#ffffd2',
                                            '#f38181', '#fce38a', '#aebd9c', '#0387f6',
                                            '#048f8f', '#749f83', '#ca8622'
                                        ];
                                        // return colorList[params.dataIndex]

                                        // console.log("111", params.name); //打印序列
                                        return colorList[left_top_data_indicator[0].indexOf(params.name)];
                                    },

                                }
                            },
                        }
                    ],

                    animationEasingUpdate: 'quinticInOut',
                    animationDurationUpdate: 1500, //动画效果
                },

                options: []
            };
            for (var n = 0; n < years.length; n++) {

                var res = [];
                //console.log(data)
                //alert(jdData.length);
                // console.log(data[1].length)
                 //console.log(data[1]);
                for (var j = 1; j < left_top_data_accumulate[n].length; j++) {
                    res.push({
                        name: left_top_data_indicator[n][j],
                        value: left_top_data_accumulate[n][j]
                    });

                }

                res.sort(function(a, b) {
                    return b.value - a.value;
                }).slice(0, 6);

                res.sort(function(a, b) {
                    return a.value - b.value;
                });


                var res1 = [];
                var res2 = [];
                //console.log(res);
                for (t = 0; t < res.length; t++) {
                    res1[t] = res[t].name;
                    res2[t] = res[t].value;
                }
                option.options.push({
                    title: {
                        text: years[n] + '年'
                    },
                    yAxis: {
                        data: res1,
                    },
                    series: [{
                        data: res2
                    }, {
                        data: res2
                    }]
                });
            }
         
          
    
          // 使用刚指定的配置项和数据显示图表。
          myChart.setOption(option);
          window.addEventListener("resize",function(){
              myChart.resize();
          });
      }

    //左下图表

    function ceshis2(left_bon_data_agrowth,left_bon_data_accumulate,left_bon_data_year) {
     var myChart = echarts.init(document.getElementById('chart3'));

     setTimeout(function () {


         option = {
             legend: {},
             tooltip: {
                 trigger: 'axis',
                 showContent: false
             },
             dataset: [
                 {
                     source: [
                         ['product'].concat(left_bon_data_year[0]),
                         ['函件'].concat(left_bon_data_agrowth[0]),  // 使用data3
                         ['包裹'].concat(left_bon_data_agrowth[1]),   // 使用data4
                         ['快递'].concat(left_bon_data_agrowth[2]),
                         ['汇兑'].concat(left_bon_data_agrowth[3])
                     ]
                 },
                 {
                     source: [
                         ['product'].concat(left_bon_data_year[0]),
                         ['函件'].concat(left_bon_data_accumulate[0]),  // 使用data3
                         ['包裹'].concat(left_bon_data_accumulate[1]),   // 使用data4
                         ['快递'].concat(left_bon_data_accumulate[2]),
                         ['汇兑'].concat(left_bon_data_accumulate[3])
                     ]
                 }
             ],
             xAxis: {
                 type: 'category' ,
                 axisLabel: {
                 interval: 0 ,
                     rotate:0 ,

                 },
                 axisTick: {
                     show: true, // 取消横轴上的刻度线
                 },
             },
             yAxis: {
                 name:'增长率%',
                 gridIndex: 0 },
             grid: {  top: '45%', bottom: '5%'  },
             series: [
                 {
                     type: 'line',
                     smooth: true,
                     seriesLayoutBy: 'row',
                     emphasis: { focus: 'series' }
                 },
                 {
                     type: 'line',
                     smooth: true,
                     seriesLayoutBy: 'row',
                     emphasis: { focus: 'series' }
                 },
                 {
                     type: 'line',
                     smooth: true,
                     seriesLayoutBy: 'row',
                     emphasis: { focus: 'series' }
                 },
                 {
                     type: 'line',
                     smooth: true,
                     seriesLayoutBy: 'row',
                     emphasis: { focus: 'series' }
                 },
                 {
                     type: 'pie',
                     id: 'pie',
                     radius: '20%',
                     center: ['50%', '25%'],
                     emphasis: {
                         focus: 'self'
                     },
                     label: {
                         formatter: '{b}: {@[0]} ({d}%)'
                     },
                     encode: {
                         itemName: 'product',
                         value: 0,
                         tooltip: 0
                     },
                     datasetIndex: 1 // 饼图使用第2个数据集
                 }
             ]
         };

         myChart.on('updateAxisPointer', function (event) {
             var xAxisInfo = event.axesInfo[0];
             if (xAxisInfo) {
                 var dimension = xAxisInfo.value + 1;
                 myChart.setOption({
                     series: {
                         id: 'pie',
                         label: {
                             formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                         },
                         encode: {
                             value: dimension,
                             tooltip: dimension
                         }
                     }
                 });
             }
         });

         myChart.setOption(option);

         // 更新数据
         myChart.on('click', function (params) {
             if (params.componentType === 'series') {
                 if (params.seriesId === 'pie') {
                     // 点击饼图，更新折线图数据
                     myChart.setOption({
                         dataset: {
                             source: [
                                 ['product'].concat(left_bon_data_year[0]),
                                 ['函件'].concat(left_bon_data_agrowth[0]),  // 使用data3
                                 ['包裹'].concat(left_bon_data_agrowth[1]),   // 使用data4
                                 ['快递'].concat(left_bon_data_agrowth[2]),
                                 ['汇兑'].concat(left_bon_data_agrowth[3])
                             ]
                         }
                     });
                 } else {
                     // 点击折线图，更新饼图数据
                     myChart.setOption({
                         dataset: {
                             source: [
                                 ['product'].concat(left_bon_data_year[0]),
                                 ['函件'].concat(left_bon_data_accumulate[0]),  // 使用data3
                                 ['包裹'].concat(left_bon_data_accumulate[1]),   // 使用data4
                                 ['快递'].concat(left_bon_data_accumulate[2]),
                                 ['汇兑'].concat(left_bon_data_accumulate[3])
                             ]
                         }
                     });
                 }
             }
         });
         myChart.setOption(option);
     });

     //myChart.setOption(option);


     // 使用刚指定的配置项和数据显示图表。
     //myChart.setOption(option);
     window.addEventListener("resize",function(){
         myChart.resize();
     });
 }

    //中上图表
    function ceshis(cen_top_data_unit,cen_top_data1, cen_top_data2, cen_top_data3, cen_top_data4) {
        var myChart = echarts.init(document.getElementById('chart1'));

        var dataMap = {};

// prettier-ignore
        dataMap.dataGDP = cen_top_data3;//vgrowth
// prettier-ignore
        dataMap.dataPI = cen_top_data1;//volume
// prettier-ignore
        dataMap.dataSI = cen_top_data2;//revenue
// prettier-ignore

// prettier-ignore

// prettier-ignore
        dataMap.dataFinancial = cen_top_data4;//rgrowth
        console.log(cen_top_data3)
        option = {
            baseOption: {
                timeline: {
                    axisType: 'category',
                    // realtime: false,
                    // loop: false,
                    autoPlay: true,
                    // currentIndex: 2,
                    playInterval: 1000,
                    width:'80%',
                    left: '7%',
                    // controlStyle: {
                    //     position: 'left'
                    // },
                    data: [
                        '2013',
                        '2014',
                        '2015',
                        '2016',
                        '2017',
                        '2018',
                        '2019',
                        '2020',
                        '2021',
                        '2022',
                    ],
                    label: {
                        formatter: function (s) {
                            return new Date(s).getFullYear();
                        }
                    }
                },
                // title: {
                //     subtext: '数据来自国家统计局'
                // },
                tooltip: {},
                legend: {
                    left: 'right',
                    top: 25,   // 将图例放在上边
                    data: ['快递业务量', '快递业务收入',  '业务量同比增长', '收入同比增长'],
                    selected: {
                        业务量同比增长: false,
                        收入同比增长: false,

                    }
                },
                calculable: true,
                grid: {
                    top: 80,
                    bottom: 100,
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow',
                            label: {
                                show: true,
                                formatter: function (params) {
                                    return params.value.replace('\n', '');
                                }
                            }
                        }
                    }
                },
                xAxis: [
                    {
                        type: 'category',
                        axisLabel: { interval: 0 , rotate:45 ,},
                        data: cen_top_data_unit[0],

                        splitLine: { show: false }

                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '万(件/元)',
                        axisLabel: {
                            formatter: function (value) {
                                if (Math.abs(value) >= 1e6 ) {
                                    return value.toExponential(2);
                                } else {
                                    return value;
                                }
                            }
                        }
                    }

                ],
                series: [
                    { name: '业务量同比增长', type: 'line' },
                    { name: '收入同比增长', type: 'line' },

                    { name: '快递业务量', type: 'bar' },
                    { name: '快递业务收入', type: 'bar' },


                ]
            },
            options: [
                {
                    title: { text: '2013全国邮政宏观指标' },
                    series: [
                        { data: dataMap.dataGDP['2013'] },
                        { data: dataMap.dataFinancial['2013'] },

                        { data: dataMap.dataPI['2013'] },
                        { data: dataMap.dataSI['2013'] },


                    ]
                },
                {
                    title: { text: '2014全国邮政宏观指标' },
                    series: [
                        { data: dataMap.dataGDP['2014'] },
                        { data: dataMap.dataFinancial['2014'] },

                        { data: dataMap.dataPI['2014'] },
                        { data: dataMap.dataSI['2014'] },


                    ]
                },
                {
                    title: { text: '2015全国邮政宏观指标' },
                    series: [
                        { data: dataMap.dataGDP['2015'] },
                        { data: dataMap.dataFinancial['2015'] },

                        { data: dataMap.dataPI['2015'] },
                        { data: dataMap.dataSI['2015'] },


                    ]
                },
                {
                    title: { text: '2016全国邮政宏观指标' },
                    series: [
                        { data: dataMap.dataGDP['2016'] },
                        { data: dataMap.dataFinancial['2016'] },

                        { data: dataMap.dataPI['2016'] },
                        { data: dataMap.dataSI['2016'] },


                    ]
                },
                {
                    title: { text: '2017全国邮政宏观指标' },
                    series: [
                        { data: dataMap.dataGDP['2017'] },
                        { data: dataMap.dataFinancial['2017'] },

                        { data: dataMap.dataPI['2017'] },
                        { data: dataMap.dataSI['2017'] },


                    ]
                },
                {
                    title: { text: '2018全国邮政宏观指标' },
                    series: [
                        { data: dataMap.dataGDP['2018'] },
                        { data: dataMap.dataFinancial['2018'] },

                        { data: dataMap.dataPI['2018'] },
                        { data: dataMap.dataSI['2018'] },


                    ]
                },
                {
                    title: { text: '2019全国邮政宏观指标' },
                    series: [
                        { data: dataMap.dataGDP['2019'] },
                        { data: dataMap.dataFinancial['2019'] },

                        { data: dataMap.dataPI['2019'] },
                        { data: dataMap.dataSI['2019'] },


                    ]
                },
                {
                    title: { text: '2020全国邮政宏观指标' },
                    series: [
                        { data: dataMap.dataGDP['2020'] },
                        { data: dataMap.dataFinancial['2020'] },

                        { data: dataMap.dataPI['2020'] },
                        { data: dataMap.dataSI['2020'] },


                    ]
                },
                {
                    title: { text: '2021全国邮政宏观指标' },
                    series: [
                        { data: dataMap.dataGDP['2021'] },
                        { data: dataMap.dataFinancial['2021'] },

                        { data: dataMap.dataPI['2021'] },
                        { data: dataMap.dataSI['2021'] },


                    ]
                },
                {
                    title: { text: '2022全国邮政宏观指标' },
                    series: [
                        { data: dataMap.dataGDP['2022'] },
                        { data: dataMap.dataFinancial['2022'] },

                        { data: dataMap.dataPI['2022'] },
                        { data: dataMap.dataSI['2022'] },


                    ]
                }
            ]
        };
        

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    //中下图表
    function ceshis3(cen_bon_data_y) {
     var myChart = echarts.init(document.getElementById('chart4'));

        option = {
            grid: {
                top: '30%' // 将统计图位置向上移动，增加和图例之间的间距
            },
            legend: {
                //left: 'right',
                y: 'top',
                top: 0,   // 将图例放在上边
                data: ['邮政行业业务收入(万)', '快递业务收入(万)', '邮政行业业务收入增长率', '快递业务收入增长率']
            },
            tooltip: {

                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            xAxis: {
                type: 'category',
                data: ['2019', '2020', '2021', '2022', '2023']
            },
            yAxis: [
                {
                    name:'万元',
                    type: 'value',
                    position: 'left'

                },
                {
                    name:'增长率%',
                    type: 'value',
                    position: 'right'
                }
            ],
            series: [
                {
                    name:'邮政行业业务收入(万)',
                    data: cen_bon_data_y[0],
                    type: 'bar',
                    yAxisIndex: 0,

                },

                {
                    name:'快递业务收入(万)',
                    data: cen_bon_data_y[1],
                    type: 'bar',
                    yAxisIndex: 0,

                },
                {
                    name:'邮政行业业务收入增长率',
                    data: cen_bon_data_y[2],
                    type: 'line',
                    yAxisIndex: 1,

                },
                {
                    name:'快递业务收入增长率',
                    data: cen_bon_data_y[3],
                    type: 'line',
                    yAxisIndex: 1,

                },
                {
                    type: 'pie',
                    radius: '20%',
                    center: ['50%', '28%'],
                    data: [
                        { value: 20017.9, name: '函件(万)' },
                        { value: 310.0, name: '包裹(万)' },
                        { value: 1566895.5, name: '订销报纸累计数(万)' },
                        { value: 56527.4, name: '订销杂志累计数(万)' },
                        { value: 11962008.9, name: '快递业务(万)' }
                    ],
                    tooltip: {

                        trigger: 'item',
                        formatter: '{b}: {c} ({d}%)'
                    }
                }
            ]
        };

     // 使用刚指定的配置项和数据显示图表。
     myChart.setOption(option);
     window.addEventListener("resize",function(){
         myChart.resize();
     });
 }

    //右中图表
    function ceshis1(right_cen_data_y,right_cen_data_year,right_cen_data_cavgrevenue) {
        var myChart = echarts.init(document.getElementById('chart2'));

        option = {
            // title: {
            //   text: 'Stacked Line'
            // },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
                left: 'right',
                top: 12,   // 将图例放在上边
                data: ['上海市', '广州市', '昆明市', '大连市', '平均值']

            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '8%',
              containLabel: true
            },
            toolbox: {
              feature: {
                //saveAsImage: {}
              }
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: right_cen_data_year[0]
            },
            yAxis: {
              type: 'value',
              name:'快递收入累计(万)',
            },
            series: [
              {
                name: '上海市',
                type: 'line',
                //stack: 'Total',
                data: right_cen_data_y[0]
              },
              {
                name: '广州市',
                type: 'line',
                //stack: 'Total',
                data: right_cen_data_y[1]
              },
              {
                name: '昆明市',
                type: 'line',
                //stack: 'Total',
                data: right_cen_data_y[2]
              },
              {
                name: '大连市',
                type: 'line',
                //stack: 'Total',
                data: right_cen_data_y[3]
              },
              {
                name: '平均值',
                type: 'line',
                //stack: 'Total',
                data: right_cen_data_cavgrevenue[0]
              }
            ]
          };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }


    //右下图表
    function ceshis4(right_bon_data_y,right_bon_data_year,right_bon_data_cavgvolume) {
        var myChart = echarts.init(document.getElementById('chart5'));

        const colors = ['#5470C6', '#91CC75', '#EE6666'];
        option = {
            color: colors,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            grid: {
                right: '20%'
            },
            toolbox: {
                feature: {
                  //  dataView: { show: true, readOnly: false },
                   // restore: { show: true },
                    //saveAsImage: { show: true }
                }
            },
            legend: {
                data: ['上海市', '沈阳市', '城市平均']
            },
            xAxis: [
                {
                    type: 'category',
                    axisTick: {
                        alignWithLabel: false//true
                    },
                    axisLabel: {
                        interval: 0,
                        rotate: 25
                    },
                    // prettier-ignore
                    data: right_bon_data_year[0]
                }
            ],
            yAxis: [
                {

                    type: 'value',
                    name: '快递业务量累计(万)',
                    position: 'left',
                    alignTicks: true,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: colors[0]
                        }
                    },
                    // axisLabel: {
                    //     formatter: '{value} '
                    // }

                    axisLabel: {
                        formatter: function (value) {
                            if (Math.abs(value) >= 1e6 ) { // 修改为大于等于 1000000
                                return value.toExponential(2);
                            } else {
                                return value;
                            }
                        },
                        rotate: 45
                    }


                },
                // {
                //     type: 'value',
                //     name: 'Precipitation',
                //     position: 'right',
                //     alignTicks: true,
                //     offset: 80,
                //     axisLine: {
                //         show: true,
                //         lineStyle: {
                //             color: colors[1]
                //         }
                //     },
                //     axisLabel: {
                //         formatter: '{value} ml'
                //     }
                // },
                // {
                //     type: 'value',
                //     name: '温度',
                //     position: 'left',
                //     alignTicks: true,
                //     axisLine: {
                //         show: true,
                //         lineStyle: {
                //             color: colors[2]
                //         }
                //     },
                //     axisLabel: {
                //         formatter: '{value} °C'
                //     }
                // }
            ],
            series: [
                {
                    name: '上海市',
                    type: 'bar',
                    data: right_bon_data_y[0]
                },
                {
                    name: '沈阳市',
                    type: 'bar',
                    //yAxisIndex: 1,
                    data: right_bon_data_y[1]
                },
                {
                    name: '城市平均',
                    type: 'line',
                    //yAxisIndex: 2,
                    data: right_bon_data_cavgvolume[0]
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    };
 // });
 $(function () {
     initEchartsData();



     function initEchartsData() {

         //左上
         var year = 2013;
         getTenYearsData(year);
         async function getTenYearsData(startYear) {

             var left_top_data_accumulate = [];
             var left_top_data_indicator = [];
             for (let i = 0; i < 10; i++) {
                 const resp = await $.ajax({
                     type: 'get',
                     url: 'http://localhost:8080/pic1part1?year=' + (startYear + i),
                     success: (resp) => {
                         return resp.accumulate;
                         return resp.indicator;
                     }
                 });
                 left_top_data_accumulate.push(resp.accumulate);
                 left_top_data_indicator.push(resp.indicator);
             }
             ceshis5(left_top_data_accumulate,left_top_data_indicator);
             console.log(left_top_data_accumulate,left_top_data_indicator);
         }

         //左下
         getTenYearsData5(year);
         async function getTenYearsData5(startyear) {

             var left_bon_data_agrowth = [];
             var left_bon_data_accumulate = [];
             var left_bon_data_year = [];

             for (let i = 0; i < 4; i++) {
                 var adressdata=['函件','包裹','快递业务','汇兑']
                 const resp = await $.ajax({
                     type: 'get',
                     url: 'http://localhost:8080/pic3?indicator=' + adressdata[i],
                     success: (resp) => {
                         return resp.agrowth;
                         return resp.accumulate;
                         return resp.year;
                     }
                 });
                 left_bon_data_agrowth.push(resp.agrowth);
                 left_bon_data_accumulate.push(resp.accumulate);
                 left_bon_data_year.push(resp.year);

             }
             ceshis2(left_bon_data_agrowth,left_bon_data_accumulate,left_bon_data_year);
             console.log(left_bon_data_agrowth,left_bon_data_accumulate,left_bon_data_year);
         }


         //中上
         getTenYearsData2(year);
         async function getTenYearsData2(startYear) {
             var cen_top_data_unit =[];
             var cen_top_data_y = {
                 cen_top_data1: {},
                 cen_top_data2: {},
                 cen_top_data3: {},
                 cen_top_data4: {}
             };
             for (let i = 0; i < 10; i++) {
                 const resp = await $.ajax({
                     type: 'get',
                     url: 'http://localhost:8080/pic2?year=' + (startYear + i),
                     success: (resp) => {
                         return resp;
                     }
                 });
                 cen_top_data_unit.push(resp.unit);
                 cen_top_data_y.cen_top_data1[startYear + i] = resp.volume;
                 cen_top_data_y.cen_top_data2[startYear + i] = resp.revenue;
                 cen_top_data_y.cen_top_data3[startYear + i] = resp.vgrowth;
                 cen_top_data_y.cen_top_data4[startYear + i] = resp.rgrowth;


             }
             console.log(cen_top_data_y.cen_top_data1);
             ceshis(
                 cen_top_data_unit,
                 Object(cen_top_data_y.cen_top_data1),
                 Object(cen_top_data_y.cen_top_data2),
                 Object(cen_top_data_y.cen_top_data3),
                 Object(cen_top_data_y.cen_top_data4)
             );
             console.log(cen_top_data_unit,cen_top_data_y);
         }

         //中下
         getTenYearsData8(year);
         async function getTenYearsData8() {

             var cen_bon_data_y = [
                 [9642.5,11037.8,12642.3,13509.6,14779.4],
                 [7497.8,8795.4,10332.3,10566.7,11905.7],
                 [22.0,14.47,14.54,6.86,9.40],
                 [24.17,17.31,17.47,2.27,12.67]
             ];


             ceshis3(cen_bon_data_y);
             console.log(cen_bon_data_y);
         }




         //右中
         getTenYearsData3(year);
         async function getTenYearsData3() {

             var right_cen_data_y = [];
             var right_cen_data_year = [];
             var right_cen_data_cavgrevenue = [];

             for (let i = 0; i < 4; i++) {
                 var adressdata=['上海市','广州市','昆明市','大连市']
                 const resp = await $.ajax({
                     type: 'get',
                     url: 'http://localhost:8080/pic4?rcity=' + adressdata[i],
                     success: (resp) => {
                         return resp.revenue;
                         return resp.year;
                         return resp.cavgrevenue;

                     }
                 });
                  right_cen_data_y.push(resp.revenue);
                  right_cen_data_year.push(resp.year);
                  right_cen_data_cavgrevenue.push(resp.cavgrevenue);
             }
             ceshis1(right_cen_data_y,right_cen_data_year,right_cen_data_cavgrevenue);
             console.log(right_cen_data_y,right_cen_data_year,right_cen_data_cavgrevenue);
         }







         //右下
         getTenYearsData7(year);
         async function getTenYearsData7() {

             var right_bon_data_y = [];
             var right_bon_data_year = [];
             var right_bon_data_cavgvolume = [];


             for (let i = 0; i < 3; i++) {
                 var adressdata=['上海市','沈阳市']
                 const resp = await $.ajax({
                     type: 'get',
                     url: 'http://localhost:8080/pic5?vcity=' + adressdata[i],
                     success: (resp) => {
                         return resp.volume;
                         return resp.year;
                         return resp.cavgvolume;
                     }
                 });
                 right_bon_data_y.push(resp.volume);
                 right_bon_data_year.push(resp.year);
                 right_bon_data_cavgvolume.push(resp.cavgvolume);
             }
             ceshis4(right_bon_data_y,right_bon_data_year,right_bon_data_cavgvolume);
             console.log(right_bon_data_y,right_bon_data_year,right_bon_data_cavgvolume);
         }


          }
          })
