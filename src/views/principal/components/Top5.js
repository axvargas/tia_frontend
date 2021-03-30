import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from './Datatable';
import { TextField, Grid } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

const Top5 = () => {
    const [data, setData] = useState([])
    const [departments, setDepartments] = useState([])
    const [value, setValue] = useState({ id: 1, department: 'frozen' });
    useEffect(() => {
        const getDepartments = async () => {
            const URL = `http://127.0.0.1:8000/api/v1/departments`
            const response = await axios.get(URL)
            setDepartments(response.data)
        }
        getDepartments();
    }, [])

    useEffect(() => {
        if (value) {
            getData(value.department);
        }
    }, [value])

    const getData = async (department = "frozen") => {
        const URL = `http://127.0.0.1:8000/api/v1/departments/get_top5?department=${department}`
        console.log(URL)
        const response = await axios.get(URL)

        setData(response.data.data)
    }

    const columns = [
        {
            name: "product",
            label: "Product",
            options: {
                filter: false,
                sort: false,
            }
        },
        {
            name: "quantity",
            label: "Quantity",
            options: {
                filter: false,
                sort: true,
            }
        },
    ];

    const options = {
        'selectableRowsHideCheckboxes': true,
        'filter': false,
        'search': false
    }
    return (
        <>
            <Grid
                container
                spacing={3}
                direction="row"
            >
                <Grid
                    item
                    lg={6}
                    md={6}
                    sm={6}
                    xs={12}
                >
                    <Autocomplete
                        options={departments}
                        getOptionLabel={(option) => option.department.charAt(0).toUpperCase() + option.department.slice(1)}
                        fullWidth
                        disableClearable
                        id="autocomplete-deps"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        getOptionSelected={(option, value) => option.id === value.id }
                        renderInput={(params) => <TextField {...params} label="Department" margin="normal" />}
                    />
                </Grid>
            </Grid>

            <DataTable title={`Top 5 of ${value.department.charAt(0).toUpperCase() + value.department.slice(1)}`} filtered={data} columns={columns} options={options} />
        </>
    );
}

export default Top5;
