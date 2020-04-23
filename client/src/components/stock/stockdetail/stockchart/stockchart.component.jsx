import React from 'react';
import Chart from './stockchart.chart';
import StockParse from "./stockchart.utils"

const StockChart = (props) => {
	const { history } = props;
	const parsedData = StockParse(history);

	return (
		<div>
			<Chart data={parsedData} />
		</div>
	)
}

export default StockChart;
