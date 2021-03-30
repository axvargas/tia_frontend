import React from 'react';
import MUIDataTable from "mui-datatables";

const DataTable = ({ filtered, columns }) => {

    return (
        <>
            <MUIDataTable
                title={"Dummy Data"}
                data={filtered}
                columns={columns}
            />
        </>
    );
}

export default DataTable;
