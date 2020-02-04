import React, { Component } from 'react';

import TableComponent from '../../components/TableComponent';
import KokoitaComponent from '../../components/KokoitaComponent';
import Todos from '../../components/Todos';

class index extends Component {
    render() {
        return (
            <div>

            <TableComponent/>
            <KokoitaComponent/>
               <Todos /> 
            </div>
        );
    }
}

export default index;