import React, {useEffect, useState} from 'react';
import Chart from './stockchart.chart';
import StockParse from "./stockchart.utils"

import './stockchart.styles.scss';

const StockChart = (props) => {
	const data = props.data;
	const dataValue = Object.values(data)[1];
	const [parseData, setParseData] = useState();

	useEffect(() => {
		const parseData = StockParse(dataValue);
		setParseData(parseData)
	}, [])

	return (
		<div>
			<div className='chartColor'>
				<Chart data={parseData} />
			</div>
		</div>
	)
}

export default StockChart;
