import React from 'react';

import ResponsiveDrawer from '../../components/layout';
import DataTable from '../../components/datatable';

const Admins = () => {

    const columns = ["Name", "Company", "City", "State"];
    const filteredAdmins = [
        ["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
    ];
    return (

        <ResponsiveDrawer>
            <h1>Alternatives</h1>
            <DataTable filtered={filteredAdmins} columns={columns} />
        </ResponsiveDrawer>

    );
}

export default Admins;
