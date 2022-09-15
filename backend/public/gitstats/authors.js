// Setup the chart
const contribution = {}
nv.addGraph(function() {
	var chart = nv.models.pieChart()
		.x(function(d) { return d.key })
		.y(function(d) { return d.y })
		.options({
                    "padAngle": 0.01,
                    "cornerRadius": 5
                });
	chart.pie.donutLabelsOutside(true).donut(true);

	d3.select('#chart_contribution svg').datum(contribution.data).call(chart);
	return chart;
});

const lines_stats = {"data": [{"key": "Jo\u00e3o Bispo", "values": [{"x": 1648339200000, "y": 308}, {"x": 1648944000000, "y": 308}, {"x": 1649548800000, "y": 20189}, {"x": 1650153600000, "y": 20331}, {"x": 1650758400000, "y": 20698}, {"x": 1651363200000, "y": 20698}, {"x": 1651968000000, "y": 74795}, {"x": 1652572800000, "y": 87027}, {"x": 1653177600000, "y": 92602}, {"x": 1653782400000, "y": 93398}, {"x": 1654387200000, "y": 94547}, {"x": 1654992000000, "y": 94547}, {"x": 1655596800000, "y": 98078}, {"x": 1656201600000, "y": 98078}, {"x": 1656806400000, "y": 98078}, {"x": 1657411200000, "y": 98078}, {"x": 1658016000000, "y": 98078}, {"x": 1658620800000, "y": 98078}, {"x": 1659225600000, "y": 98085}, {"x": 1659830400000, "y": 98085}, {"x": 1660435200000, "y": 98085}, {"x": 1661040000000, "y": 98085}, {"x": 1661644800000, "y": 128207}, {"x": 1662249600000, "y": 129561}, {"x": 1662854400000, "y": 139274}, {"x": 1663459200000, "y": 139274}]}, {"key": "Grazielli Lima Berti", "values": [{"x": 1648339200000, "y": 28}, {"x": 1648944000000, "y": 28}, {"x": 1649548800000, "y": 28}, {"x": 1650153600000, "y": 95}, {"x": 1650758400000, "y": 95}, {"x": 1651363200000, "y": 95}, {"x": 1651968000000, "y": 95}, {"x": 1652572800000, "y": 95}, {"x": 1653177600000, "y": 553}, {"x": 1653782400000, "y": 553}, {"x": 1654387200000, "y": 553}, {"x": 1654992000000, "y": 553}, {"x": 1655596800000, "y": 553}, {"x": 1656201600000, "y": 553}, {"x": 1656806400000, "y": 553}, {"x": 1657411200000, "y": 553}, {"x": 1658016000000, "y": 553}, {"x": 1658620800000, "y": 553}, {"x": 1659225600000, "y": 553}, {"x": 1659830400000, "y": 553}, {"x": 1660435200000, "y": 553}, {"x": 1661040000000, "y": 553}, {"x": 1661644800000, "y": 720}, {"x": 1662249600000, "y": 878}, {"x": 1662854400000, "y": 1437}, {"x": 1663459200000, "y": 1437}]}, {"key": "Viviane-Queiroz", "values": [{"x": 1648339200000, "y": 31}, {"x": 1648944000000, "y": 31}, {"x": 1649548800000, "y": 31}, {"x": 1650153600000, "y": 31}, {"x": 1650758400000, "y": 72}, {"x": 1651363200000, "y": 92}, {"x": 1651968000000, "y": 92}, {"x": 1652572800000, "y": 225}, {"x": 1653177600000, "y": 13030}, {"x": 1653782400000, "y": 13135}, {"x": 1654387200000, "y": 13609}, {"x": 1654992000000, "y": 13609}, {"x": 1655596800000, "y": 13609}, {"x": 1656201600000, "y": 13609}, {"x": 1656806400000, "y": 13609}, {"x": 1657411200000, "y": 13609}, {"x": 1658016000000, "y": 13609}, {"x": 1658620800000, "y": 13609}, {"x": 1659225600000, "y": 13609}, {"x": 1659830400000, "y": 13609}, {"x": 1660435200000, "y": 13609}, {"x": 1661040000000, "y": 13609}, {"x": 1661644800000, "y": 13609}, {"x": 1662249600000, "y": 13609}, {"x": 1662854400000, "y": 13609}, {"x": 1663459200000, "y": 13609}]}, {"key": "Gabriel Ruiz", "values": [{"x": 1648339200000, "y": 26}, {"x": 1648944000000, "y": 26}, {"x": 1649548800000, "y": 26}, {"x": 1650153600000, "y": 26}, {"x": 1650758400000, "y": 26}, {"x": 1651363200000, "y": 26}, {"x": 1651968000000, "y": 26}, {"x": 1652572800000, "y": 26}, {"x": 1653177600000, "y": 186}, {"x": 1653782400000, "y": 186}, {"x": 1654387200000, "y": 186}, {"x": 1654992000000, "y": 186}, {"x": 1655596800000, "y": 186}, {"x": 1656201600000, "y": 186}, {"x": 1656806400000, "y": 186}, {"x": 1657411200000, "y": 186}, {"x": 1658016000000, "y": 186}, {"x": 1658620800000, "y": 186}, {"x": 1659225600000, "y": 186}, {"x": 1659830400000, "y": 186}, {"x": 1660435200000, "y": 186}, {"x": 1661040000000, "y": 186}, {"x": 1661644800000, "y": 187}, {"x": 1662249600000, "y": 423}, {"x": 1662854400000, "y": 423}, {"x": 1663459200000, "y": 423}]}, {"key": "vini-alm", "values": [{"x": 1648339200000, "y": 0}, {"x": 1648944000000, "y": 3100}, {"x": 1649548800000, "y": 3100}, {"x": 1650153600000, "y": 3100}, {"x": 1650758400000, "y": 15972}, {"x": 1651363200000, "y": 15972}, {"x": 1651968000000, "y": 15972}, {"x": 1652572800000, "y": 25414}, {"x": 1653177600000, "y": 32131}, {"x": 1653782400000, "y": 32144}, {"x": 1654387200000, "y": 32144}, {"x": 1654992000000, "y": 32144}, {"x": 1655596800000, "y": 32144}, {"x": 1656201600000, "y": 32144}, {"x": 1656806400000, "y": 32144}, {"x": 1657411200000, "y": 32144}, {"x": 1658016000000, "y": 32144}, {"x": 1658620800000, "y": 32144}, {"x": 1659225600000, "y": 32144}, {"x": 1659830400000, "y": 32144}, {"x": 1660435200000, "y": 32144}, {"x": 1661040000000, "y": 32144}, {"x": 1661644800000, "y": 32144}, {"x": 1662249600000, "y": 32144}, {"x": 1662854400000, "y": 32144}, {"x": 1663459200000, "y": 32144}]}, {"key": "Gustavo Freitas", "values": [{"x": 1648339200000, "y": 27}, {"x": 1648944000000, "y": 46}, {"x": 1649548800000, "y": 46}, {"x": 1650153600000, "y": 46}, {"x": 1650758400000, "y": 46}, {"x": 1651363200000, "y": 89}, {"x": 1651968000000, "y": 89}, {"x": 1652572800000, "y": 89}, {"x": 1653177600000, "y": 89}, {"x": 1653782400000, "y": 89}, {"x": 1654387200000, "y": 89}, {"x": 1654992000000, "y": 89}, {"x": 1655596800000, "y": 10527}, {"x": 1656201600000, "y": 10527}, {"x": 1656806400000, "y": 10527}, {"x": 1657411200000, "y": 10527}, {"x": 1658016000000, "y": 10527}, {"x": 1658620800000, "y": 10527}, {"x": 1659225600000, "y": 10527}, {"x": 1659830400000, "y": 10527}, {"x": 1660435200000, "y": 10527}, {"x": 1661040000000, "y": 10527}, {"x": 1661644800000, "y": 10527}, {"x": 1662249600000, "y": 10527}, {"x": 1662854400000, "y": 10527}, {"x": 1663459200000, "y": 10527}]}, {"key": "Viviane Queiroz", "values": [{"x": 1648339200000, "y": 0}, {"x": 1648944000000, "y": 0}, {"x": 1649548800000, "y": 0}, {"x": 1650153600000, "y": 0}, {"x": 1650758400000, "y": 0}, {"x": 1651363200000, "y": 0}, {"x": 1651968000000, "y": 0}, {"x": 1652572800000, "y": 0}, {"x": 1653177600000, "y": 0}, {"x": 1653782400000, "y": 0}, {"x": 1654387200000, "y": 0}, {"x": 1654992000000, "y": 0}, {"x": 1655596800000, "y": 0}, {"x": 1656201600000, "y": 0}, {"x": 1656806400000, "y": 0}, {"x": 1657411200000, "y": 0}, {"x": 1658016000000, "y": 0}, {"x": 1658620800000, "y": 0}, {"x": 1659225600000, "y": 0}, {"x": 1659830400000, "y": 0}, {"x": 1660435200000, "y": 0}, {"x": 1661040000000, "y": 0}, {"x": 1661644800000, "y": 0}, {"x": 1662249600000, "y": 0}, {"x": 1662854400000, "y": 0}, {"x": 1663459200000, "y": 0}]}, {"key": "joaobispo2077", "values": [{"x": 1648339200000, "y": 0}, {"x": 1648944000000, "y": 0}, {"x": 1649548800000, "y": 0}, {"x": 1650153600000, "y": 0}, {"x": 1650758400000, "y": 0}, {"x": 1651363200000, "y": 0}, {"x": 1651968000000, "y": 0}, {"x": 1652572800000, "y": 0}, {"x": 1653177600000, "y": 0}, {"x": 1653782400000, "y": 0}, {"x": 1654387200000, "y": 0}, {"x": 1654992000000, "y": 0}, {"x": 1655596800000, "y": 0}, {"x": 1656201600000, "y": 0}, {"x": 1656806400000, "y": 0}, {"x": 1657411200000, "y": 0}, {"x": 1658016000000, "y": 0}, {"x": 1658620800000, "y": 0}, {"x": 1659225600000, "y": 0}, {"x": 1659830400000, "y": 0}, {"x": 1660435200000, "y": 0}, {"x": 1661040000000, "y": 0}, {"x": 1661644800000, "y": 0}, {"x": 1662249600000, "y": 1013}, {"x": 1662854400000, "y": 1781}, {"x": 1663459200000, "y": 1781}]}, {"key": "tayfrs", "values": [{"x": 1648339200000, "y": 0}, {"x": 1648944000000, "y": 0}, {"x": 1649548800000, "y": 0}, {"x": 1650153600000, "y": 0}, {"x": 1650758400000, "y": 0}, {"x": 1651363200000, "y": 0}, {"x": 1651968000000, "y": 141}, {"x": 1652572800000, "y": 141}, {"x": 1653177600000, "y": 141}, {"x": 1653782400000, "y": 141}, {"x": 1654387200000, "y": 141}, {"x": 1654992000000, "y": 141}, {"x": 1655596800000, "y": 141}, {"x": 1656201600000, "y": 141}, {"x": 1656806400000, "y": 141}, {"x": 1657411200000, "y": 141}, {"x": 1658016000000, "y": 141}, {"x": 1658620800000, "y": 141}, {"x": 1659225600000, "y": 141}, {"x": 1659830400000, "y": 141}, {"x": 1660435200000, "y": 141}, {"x": 1661040000000, "y": 141}, {"x": 1661644800000, "y": 141}, {"x": 1662249600000, "y": 141}, {"x": 1662854400000, "y": 141}, {"x": 1663459200000, "y": 141}]}, {"key": "vivianequeiroz", "values": [{"x": 1648339200000, "y": 0}, {"x": 1648944000000, "y": 0}, {"x": 1649548800000, "y": 0}, {"x": 1650153600000, "y": 0}, {"x": 1650758400000, "y": 0}, {"x": 1651363200000, "y": 0}, {"x": 1651968000000, "y": 0}, {"x": 1652572800000, "y": 0}, {"x": 1653177600000, "y": 0}, {"x": 1653782400000, "y": 0}, {"x": 1654387200000, "y": 0}, {"x": 1654992000000, "y": 0}, {"x": 1655596800000, "y": 0}, {"x": 1656201600000, "y": 0}, {"x": 1656806400000, "y": 0}, {"x": 1657411200000, "y": 0}, {"x": 1658016000000, "y": 0}, {"x": 1658620800000, "y": 0}, {"x": 1659225600000, "y": 0}, {"x": 1659830400000, "y": 0}, {"x": 1660435200000, "y": 0}, {"x": 1661040000000, "y": 0}, {"x": 1661644800000, "y": 0}, {"x": 1662249600000, "y": 151}, {"x": 1662854400000, "y": 151}, {"x": 1663459200000, "y": 151}]}, {"key": "Others", "values": [{"x": 1648339200000, "y": 0}, {"x": 1648944000000, "y": 0}, {"x": 1649548800000, "y": 0}, {"x": 1650153600000, "y": 0}, {"x": 1650758400000, "y": 0}, {"x": 1651363200000, "y": 0}, {"x": 1651968000000, "y": 0}, {"x": 1652572800000, "y": 0}, {"x": 1653177600000, "y": 0}, {"x": 1653782400000, "y": 0}, {"x": 1654387200000, "y": 0}, {"x": 1654992000000, "y": 0}, {"x": 1655596800000, "y": 0}, {"x": 1656201600000, "y": 0}, {"x": 1656806400000, "y": 0}, {"x": 1657411200000, "y": 0}, {"x": 1658016000000, "y": 0}, {"x": 1658620800000, "y": 0}, {"x": 1659225600000, "y": 0}, {"x": 1659830400000, "y": 0}, {"x": 1660435200000, "y": 0}, {"x": 1661040000000, "y": 0}, {"x": 1661644800000, "y": 0}, {"x": 1662249600000, "y": 159}, {"x": 1662854400000, "y": 159}, {"x": 1663459200000, "y": 159}]}]}
// Setup the lines by author chart
nv.addGraph(function() {
	var chart = nv.models.lineChart()
		.useInteractiveGuideline(true);
	chart.yAxis.options({ "axisLabel": "Lines" });
	chart.xAxis
		.tickFormat(function(d) { return d3.time.format('%Y-%m')(new Date(d)); })
		.options({ "rotateLabels": -45 })

	d3.select('#chart_loc svg').datum(lines_stats.data).call(chart);
	return chart;
});

const commit_stats = {"data": [{"key": "Jo\u00e3o Bispo", "values": [[1648339200000, 2, 0], [1648944000000, 2, 0], [1649548800000, 9, 7], [1650153600000, 15, 6], [1650758400000, 39, 24], [1651363200000, 39, 0], [1651968000000, 48, 9], [1652572800000, 100, 52], [1653177600000, 151, 51], [1653782400000, 187, 36], [1654387200000, 219, 32], [1654992000000, 219, 0], [1655596800000, 249, 30], [1656201600000, 249, 0], [1656806400000, 249, 0], [1657411200000, 249, 0], [1658016000000, 249, 0], [1658620800000, 249, 0], [1659225600000, 252, 3], [1659830400000, 252, 0], [1660435200000, 252, 0], [1661040000000, 252, 0], [1661644800000, 266, 14], [1662249600000, 333, 67], [1662854400000, 348, 15], [1663459200000, 349, 1]]}, {"key": "Grazielli Lima Berti", "values": [[1648339200000, 2, 0], [1648944000000, 2, 0], [1649548800000, 2, 0], [1650153600000, 3, 1], [1650758400000, 3, 0], [1651363200000, 3, 0], [1651968000000, 3, 0], [1652572800000, 3, 0], [1653177600000, 28, 25], [1653782400000, 28, 0], [1654387200000, 28, 0], [1654992000000, 28, 0], [1655596800000, 28, 0], [1656201600000, 28, 0], [1656806400000, 28, 0], [1657411200000, 28, 0], [1658016000000, 28, 0], [1658620800000, 28, 0], [1659225600000, 28, 0], [1659830400000, 28, 0], [1660435200000, 28, 0], [1661040000000, 28, 0], [1661644800000, 32, 4], [1662249600000, 35, 3], [1662854400000, 49, 14], [1663459200000, 49, 0]]}, {"key": "Viviane-Queiroz", "values": [[1648339200000, 4, 0], [1648944000000, 4, 0], [1649548800000, 4, 0], [1650153600000, 4, 0], [1650758400000, 5, 1], [1651363200000, 7, 2], [1651968000000, 7, 0], [1652572800000, 11, 4], [1653177600000, 33, 22], [1653782400000, 36, 3], [1654387200000, 49, 13], [1654992000000, 49, 0], [1655596800000, 49, 0], [1656201600000, 49, 0], [1656806400000, 49, 0], [1657411200000, 49, 0], [1658016000000, 49, 0], [1658620800000, 49, 0], [1659225600000, 49, 0], [1659830400000, 49, 0], [1660435200000, 49, 0], [1661040000000, 49, 0], [1661644800000, 49, 0], [1662249600000, 49, 0], [1662854400000, 49, 0], [1663459200000, 49, 0]]}, {"key": "Gabriel Ruiz", "values": [[1648339200000, 1, 0], [1648944000000, 1, 0], [1649548800000, 1, 0], [1650153600000, 1, 0], [1650758400000, 2, 1], [1651363200000, 2, 0], [1651968000000, 2, 0], [1652572800000, 2, 0], [1653177600000, 4, 2], [1653782400000, 4, 0], [1654387200000, 4, 0], [1654992000000, 4, 0], [1655596800000, 4, 0], [1656201600000, 4, 0], [1656806400000, 4, 0], [1657411200000, 4, 0], [1658016000000, 4, 0], [1658620800000, 4, 0], [1659225600000, 4, 0], [1659830400000, 4, 0], [1660435200000, 4, 0], [1661040000000, 4, 0], [1661644800000, 5, 1], [1662249600000, 13, 8], [1662854400000, 13, 0], [1663459200000, 13, 0]]}, {"key": "vini-alm", "values": [[1648339200000, 0, 0], [1648944000000, 1, 1], [1649548800000, 1, 0], [1650153600000, 1, 0], [1650758400000, 2, 1], [1651363200000, 2, 0], [1651968000000, 2, 0], [1652572800000, 5, 3], [1653177600000, 11, 6], [1653782400000, 12, 1], [1654387200000, 12, 0], [1654992000000, 12, 0], [1655596800000, 12, 0], [1656201600000, 12, 0], [1656806400000, 12, 0], [1657411200000, 12, 0], [1658016000000, 12, 0], [1658620800000, 12, 0], [1659225600000, 12, 0], [1659830400000, 12, 0], [1660435200000, 12, 0], [1661040000000, 12, 0], [1661644800000, 12, 0], [1662249600000, 12, 0], [1662854400000, 12, 0], [1663459200000, 12, 0]]}, {"key": "Gustavo Freitas", "values": [[1648339200000, 1, 0], [1648944000000, 3, 2], [1649548800000, 3, 0], [1650153600000, 3, 0], [1650758400000, 3, 0], [1651363200000, 5, 2], [1651968000000, 5, 0], [1652572800000, 5, 0], [1653177600000, 5, 0], [1653782400000, 5, 0], [1654387200000, 5, 0], [1654992000000, 5, 0], [1655596800000, 6, 1], [1656201600000, 6, 0], [1656806400000, 6, 0], [1657411200000, 6, 0], [1658016000000, 6, 0], [1658620800000, 6, 0], [1659225600000, 6, 0], [1659830400000, 6, 0], [1660435200000, 6, 0], [1661040000000, 6, 0], [1661644800000, 6, 0], [1662249600000, 6, 0], [1662854400000, 6, 0], [1663459200000, 6, 0]]}, {"key": "Viviane Queiroz", "values": [[1648339200000, 0, 0], [1648944000000, 0, 0], [1649548800000, 0, 0], [1650153600000, 0, 0], [1650758400000, 0, 0], [1651363200000, 0, 0], [1651968000000, 0, 0], [1652572800000, 1, 1], [1653177600000, 4, 3], [1653782400000, 4, 0], [1654387200000, 5, 1], [1654992000000, 5, 0], [1655596800000, 5, 0], [1656201600000, 5, 0], [1656806400000, 5, 0], [1657411200000, 5, 0], [1658016000000, 5, 0], [1658620800000, 5, 0], [1659225600000, 5, 0], [1659830400000, 5, 0], [1660435200000, 5, 0], [1661040000000, 5, 0], [1661644800000, 5, 0], [1662249600000, 6, 1], [1662854400000, 6, 0], [1663459200000, 6, 0]]}, {"key": "joaobispo2077", "values": [[1648339200000, 0, 0], [1648944000000, 0, 0], [1649548800000, 0, 0], [1650153600000, 0, 0], [1650758400000, 0, 0], [1651363200000, 0, 0], [1651968000000, 0, 0], [1652572800000, 0, 0], [1653177600000, 0, 0], [1653782400000, 0, 0], [1654387200000, 0, 0], [1654992000000, 0, 0], [1655596800000, 0, 0], [1656201600000, 0, 0], [1656806400000, 0, 0], [1657411200000, 0, 0], [1658016000000, 0, 0], [1658620800000, 0, 0], [1659225600000, 0, 0], [1659830400000, 0, 0], [1660435200000, 0, 0], [1661040000000, 0, 0], [1661644800000, 0, 0], [1662249600000, 1, 1], [1662854400000, 5, 4], [1663459200000, 5, 0]]}, {"key": "tayfrs", "values": [[1648339200000, 0, 0], [1648944000000, 0, 0], [1649548800000, 0, 0], [1650153600000, 0, 0], [1650758400000, 0, 0], [1651363200000, 0, 0], [1651968000000, 1, 1], [1652572800000, 1, 0], [1653177600000, 1, 0], [1653782400000, 1, 0], [1654387200000, 1, 0], [1654992000000, 1, 0], [1655596800000, 3, 2], [1656201600000, 3, 0], [1656806400000, 3, 0], [1657411200000, 3, 0], [1658016000000, 3, 0], [1658620800000, 3, 0], [1659225600000, 3, 0], [1659830400000, 3, 0], [1660435200000, 3, 0], [1661040000000, 3, 0], [1661644800000, 3, 0], [1662249600000, 3, 0], [1662854400000, 3, 0], [1663459200000, 3, 0]]}, {"key": "vivianequeiroz", "values": [[1648339200000, 0, 0], [1648944000000, 0, 0], [1649548800000, 0, 0], [1650153600000, 0, 0], [1650758400000, 0, 0], [1651363200000, 0, 0], [1651968000000, 0, 0], [1652572800000, 0, 0], [1653177600000, 0, 0], [1653782400000, 0, 0], [1654387200000, 0, 0], [1654992000000, 0, 0], [1655596800000, 0, 0], [1656201600000, 0, 0], [1656806400000, 0, 0], [1657411200000, 0, 0], [1658016000000, 0, 0], [1658620800000, 0, 0], [1659225600000, 0, 0], [1659830400000, 0, 0], [1660435200000, 0, 0], [1661040000000, 0, 0], [1661644800000, 0, 0], [1662249600000, 3, 3], [1662854400000, 3, 0], [1663459200000, 3, 0]]}, {"key": "Others", "values": [[1648339200000, 0, 0], [1648944000000, 0, 0], [1649548800000, 0, 0], [1650153600000, 0, 0], [1650758400000, 0, 0], [1651363200000, 0, 0], [1651968000000, 0, 0], [1652572800000, 1, 1], [1653177600000, 2, 1], [1653782400000, 2, 0], [1654387200000, 2, 0], [1654992000000, 2, 0], [1655596800000, 4, 2], [1656201600000, 4, 0], [1656806400000, 4, 0], [1657411200000, 4, 0], [1658016000000, 4, 0], [1658620800000, 4, 0], [1659225600000, 4, 0], [1659830400000, 4, 0], [1660435200000, 4, 0], [1661040000000, 4, 0], [1661644800000, 4, 0], [1662249600000, 6, 2], [1662854400000, 6, 0], [1663459200000, 6, 0]]}]}
// Setup the commits-by-author chart
nv.addGraph(function() {
	var chart = nv.models.lineChart()
		.x(function(d) { return d[0] })
		.y(function(d) { return d[1] })
		.useInteractiveGuideline(true);
	chart.yAxis.options({ "axisLabel": "Commits" });
	chart.xAxis
		.tickFormat(function(d) { return d3.time.format('%Y-%m')(new Date(d)); })
		.options({ "rotateLabels": -45 })

	d3.select('#chart_commits svg').datum(commit_stats.data).call(chart);
	return chart;
});

// Setup the streamgraph
nv.addGraph(function() {
	var chart = nv.models.stackedAreaChart()
		.x(function(d) { return d[0] })
		.y(function(d) { return d[2] })
		.options({
		        "useInteractiveGuideline": true,
		        "style": "stream-center",
                "showControls": false,
                "showLegend": false,
                });
	chart.yAxis.options({ "axisLabel": "Commits" });
	chart.xAxis
		.tickFormat(function(d) { return d3.time.format('%Y-%m')(new Date(d)); })
		.options({ "rotateLabels": -45 })

	d3.select('#chart_steam svg').datum(commit_stats.data).call(chart);
	return chart;
});

const domains = {"data": [{"key": "gmail.com", "y": 467}, {"key": "users.noreply.github.com", "y": 22}, {"key": "ibm.com", "y": 11}, {"key": "hotmail.com", "y": 1}]}
// Setup the chart
nv.addGraph(function() {
	var chart = nv.models.pieChart()
		.x(function(d) { return d.key })
		.y(function(d) { return d.y })
		.options({
                "padAngle": 0.01,
                "cornerRadius": 5
            });
	chart.pie.donutLabelsOutside(true).donut(true);

	d3.select('#chart_domains svg').datum(domains.data).call(chart);
	return chart;
});