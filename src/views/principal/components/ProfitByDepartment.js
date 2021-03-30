import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from './Datatable';


const ProfitByDepartment = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async () => {
            const URL = `http://127.0.0.1:8000/api/v1/departments/get_profit_by_department/`
            const response = await axios.get(URL)
            setData(response.data.data)
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
                    return val.charAt(0).toUpperCase() + val.slice(1);
                },
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
            <div style={{height:'72px'}} />
            <DataTable title="Profit by Department" filtered={data} columns={columns} options={options} />
        </>
    );
}

export default ProfitByDepartment;
