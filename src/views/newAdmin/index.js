import React from 'react';

import ResponsiveDrawer from '../../components/layout';
import AdminStepper from '../../components/stepper';

const NewAdmin = () => {

    return (

        <ResponsiveDrawer>
            <h1>Administradores</h1>
            <AdminStepper />
        </ResponsiveDrawer>

    );
}

export default NewAdmin;
