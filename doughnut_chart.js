const doughnut_chart_Data = {
    labels: ['2021', '2020', '2022'],
    data: [30, 30, 30],
};

const ctx = document.querySelector('.doughnut_chart').getContext('2d');

const inner_label = {
    id: 'inner_label',
    beforeDraw(chart, args, options) {
        const { ctx, data } = chart;
        ctx.save();
        const Xcoor = chart.chartArea.left + (chart.chartArea.right - chart.chartArea.left) / 2;
        const Ycoor = chart.chartArea.top + (chart.chartArea.bottom - chart.chartArea.top) / 2;
        ctx.font = ' 21px Plus Jakarta Sans';
        ctx.fillStyle = '#2A3547';
        ctx.textAlign = 'center';
        ctx.fontWeight = '600';
        ctx.fontColor = ' var(--light-theme-gray-dark-blue-grey, #2A3547)';
        ctx.textBaseline = 'middle';
        ctx.fillText('$500,458', Xcoor, Ycoor);
        ctx.restore();
    },
};

const doughnut_Chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: doughnut_chart_Data.labels,
        datasets: [{
            data: doughnut_chart_Data.data,
            backgroundColor: ['#49BEFF', '#13DEB9', '#5D87FF'],
            borderColor: ['#FFF', '#FFF', '#FFF'],
            cutout: '85%',
        }],
    },
    options: {
        rotation: Math.PI /3,
        borderRadius: 2,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
    },
    plugins: [inner_label],
});
