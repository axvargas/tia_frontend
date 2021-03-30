import React from 'react';
import MUIDataTable from "mui-datatables";

const DataTable = ({ title, filtered, columns, options }) => {

    return (
        <>
            <MUIDataTable
                title={title}
                data={filtered}
                columns={columns}
                options={options}
            />
        </>
    );
}

export default DataTable;
