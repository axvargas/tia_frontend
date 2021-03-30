import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Grid, Box
} from '@material-ui/core';
import ResponsiveDrawer from '../../components/layout';
import AverageTicket from './components/AverageTickect';
import MyResponsiveBar from './components/Chart';
import AverageMargin from './components/AverageMargin';

import AverageProductQuantity from './components/AverageProductQuantity';
import TotalProfit from './components/TotalProfit';
import Top5 from './components/Top5';
import Table from './components/Table';
import ProfitByDepartment from './components/ProfitByDepartment';
const Principal = () => {

    const [indicators, setIndicators] = useState({});
    const [data, setData] = useState([]);

    useEffect(() => {
        const getIndicators = async () => {
            const URL = `http://127.0.0.1:8000/api/v1/indicators`
            const response = await axios.get(URL)
            setIndicators(response.data[0])
        }
        getIndicators();
    }, [])

    useEffect(() => {
        const treatData = (data) => {
            data.forEach((elem) => {
                elem.income = Number(elem.income).toFixed(2)
                elem.profit = Number(elem.profit).toFixed(2)
            })
            return data
        }
        const getData = async () => {
            const URL = `http://127.0.0.1:8000/api/v1/profit_by_hour`
            const response = await axios.get(URL)
            setData(treatData(response.data))
        }
        getData();

    }, [])


    return (

        <ResponsiveDrawer>
            <h1>Dashboard</h1>
            <div className="root">
                <Grid
                    container
                    spacing={3}
                    direction="row"
                    justify="center"
                    alignItems="flex-start"
                >
                    <Box fontWeight="fontWeightRegular" width="100%" fontSize="h5.fontSize" ml={2} mb={-1}>Indicators</Box>
                    <Grid
                        item
                        lg={3}
                        md={6}
                        sm={6}
                        xl={3}
                        xs={12}
                    >
                        <AverageTicket avg_tickets={indicators.avg_tickets} />
                    </Grid>
                    <Grid
                        item
                        lg={3}
                        md={6}
                        sm={6}
                        xl={3}
                        xs={12}
                    >
                        <AverageMargin avg_margin={indicators.avg_margin} />
                    </Grid>
                    <Grid
                        item
                        lg={3}
                        md={6}
                        sm={6}
                        xl={3}
                        xs={12}
                    >
                        <AverageProductQuantity avg_products_qty={indicators.avg_products_qty} />
                    </Grid>
                    <Grid
                        item
                        lg={3}
                        md={6}
                        sm={6}
                        xl={3}
                        xs={12}
                    >
                        <TotalProfit />
                    </Grid>
                    <Box fontWeight="fontWeightRegular" width="100%" fontSize="h5.fontSize" mt={4} ml={2} mb={-2}>Hour of day vs. Income/Profit</Box>
                    <Grid
                        item
                        xs={12}
                        style={{ height: '500px', width: '99%' }}
                    >
                        <div style={{ width: '99%', height: '500px' }}>
                            <MyResponsiveBar data={data} />
                        </div>
                    </Grid>
                    <Box fontWeight="fontWeightRegular" width="100%" fontSize="h5.fontSize" mt={4} ml={2} mb={-2}>Tables</Box>

                    <Grid
                        item
                        lg={6}
                        md={12}
                        xs={12}
                    >
                        <Top5 />
                    </Grid>
                    <Grid
                        item
                        lg={6}
                        md={12}
                        xs={12}
                    >
                        <ProfitByDepartment />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                    >
                        <Table />
                    </Grid>
                </Grid>
            </div>
        </ResponsiveDrawer>

    );
}

export default Principal;
