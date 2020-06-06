import React, { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import axios from 'axios';
import './App.css';

function App() {
	let [countries, setCountries] = useState([]);
	// Define table columns
	const columns = [{
		dataField: 'name',
		text: 'Name',
		filter: textFilter()
	}];

	useEffect(() => {
		// call API to get countries
		axios.get("https://restcountries-v1.p.rapidapi.com/all", {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
				"x-rapidapi-key": "de53cf9d96msh3ef93c047e51cf1p1395aajsn2d3301e5ff4f"
			}
		})
		.then(response => {
			setCountries(response.data);
		})
		.catch(err => {
			console.log(err);
		});
	}, []);

	// Pagination Configuration
	const options = {
		
		sizePerPageList: [{
			text: '5', value: 5
		}, {
			text: '10', value: 10
		}, {
			text: '20', value: 20
		}],
		
	};

	return (
		<div className="container">
			<div className="row hdr">
				<div className="col-sm-12 btn btn-info">
					Assignment - Country list & search
        </div>
			</div>
			<div style={{ marginTop: 20 }}>
				<BootstrapTable
					striped
					hover
					keyField='name'
					data={countries}
					columns={columns}
					filter={filterFactory()}
					pagination={paginationFactory(options)}
				/>
			</div>
		</div>
	);
}

export default App;
