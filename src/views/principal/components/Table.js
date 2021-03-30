import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from './Datatable';


const Table = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async () => {
            const URL = `http://127.0.0.1:8000/api/v1/department_product_profit`
            const response = await axios.get(URL)
            setData(response.data)
        }
        getData();
    }, [])

    const columns = [
        {
            name: "department",
            label: "Department",
            options: {
                filter: true,
                sort: true,
                customBodyRenderLite: (dataIndex) => {
                    let val = data[dataIndex].department
                    return val.charAt(0).toUpperCase() + val.slice(1);;
                },
            }
        },
        {
            name: "product",
            label: "Product",
            options: {
                filter: false,
                sort: false,
            }
        },
        {
            name: "profit",
            label: "Profit",
            options: {
                filter: false,
                sort: true,
                customBodyRenderLite: (dataIndex) => {
                    let val = Number(data[dataIndex].profit).toFixed(2)
                    return val;
                },
            }
        },
    ];

    const options = {
        'selectableRowsHideCheckboxes': true,
    }
    return (
        <>
            <DataTable title="Profit by Product" filtered={data} columns={columns} options={options} />
        </>
    );
}

export default Table;
