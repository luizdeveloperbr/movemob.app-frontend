import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import style from '../styles/Equipamentos.module.css'
export default function EquipamentoPage() {
    const list = [{name: 'luiz', position: 'developer', skill: 'javascript'},{name: 'eduardo', position: 'developer', skill: 'javascript'},{name: 'souza', position: 'developer', skill: 'typescript'}]
    return (
        <main className={style.main}>
            <h1 className="p-2 title text-primary"><label htmlFor="side-menu" className="">EquipamentoPage</label></h1>
            <div className={`${style.grid} ag-theme-alpine`}>
                <AgGridReact 
                    rowData={list}
                    columnDefs={[{field: 'name'},{field: 'position'},{field: 'skill'}]}
                >

                </AgGridReact>
            </div>
        </main>
    )
}