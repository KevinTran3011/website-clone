const ctx4 = document.querySelector('.line-chart-2').getContext('2d');

const line_chart_2_data = {
    labels: ['2019', '2020', '2021', '2022', '2023', '2024', '2025'],
    data: [200, 500, 300, 1000, 990, 1500, 200 ],

}

const line_chart_2 = new Chart(ctx4,{
    type: 'line',
    data:{
        labels: line_chart_2_data.labels,
        datasets:[{
            data: line_chart_2_data.data,
            backgroundColor: '#5D87FF',
            borderColor: '#5D87FF',
            tension: 0.4,
            pointRadius: 0,
            fill: true,


        }]
    },
    options:{
        maintainAspectRatio: false,
        plugins:{
            legend:{
                display: false,
            }
        },
        scales:{
            x:{
                grid:{
                    display: false,
                },
                ticks:{
                    color: '#7C8FAC',
                    font: 'Plus Jakarta Sans',
                    callback: function (value, index, values) {
                        if (index === 0) {
                            return '2019';
                        } else if (index === 2) {
                            return '2020';
                        } else if (index === 4) {
                            return '2021';
                        } else if (index === 6) {
                            return '2022';
                        } 
                    },

                }
                    
                },
                y:{
                    ticks:{
                        color: '#7C8FAC',
                        font: 'Plus Jakarta Sans',
                        callback: function(value, index){
                            if(this.getLabelForValue(index) == 0){
                                return '12k';
                            }
                            else if(this.getLabelForValue(index) == 2){
                                return '14k';
                            }
                            else if(this.getLabelForValue(index) == 4){
                                return '16k';
                            }
                            else if(this.getLabelForValue(index) == 6){
                                return '18k';
                            }
                            else if(this.getLabelForValue(index) == 8){
                                return '20k';
                            }
                        }
                    }

                }
            }
        }

    }
)