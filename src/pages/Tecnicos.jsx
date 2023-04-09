import { useState } from "react";
import { BarTecn } from "../components/BarTecn/BarTecn";
import { FormAddTecnico } from "../components/FormAddTecnico/FormAddTecnico";
import { useGetTecnicosQuery } from "../redux/Api/firebase-api-main";
import TableRenderTec from "../components/ListTec/TableRenderTec";
import ModalEditTec from "../components/Modal/ModalEditTec";


const Tecnicos = () => {
    const [which, setWhich] = useState(0)
    const { data = [] } = useGetTecnicosQuery();
    const [open, setOpen] = useState({ isOpen: false, data: {} })
    return (
        <div className="py-6">
            <BarTecn setWhich={setWhich} />
            <div className="container text-left border border-cyan-500" >
                {which === 2 && <FormAddTecnico />}
                {which == 1 && <TableRenderTec data={data} setOpen={setOpen} />}
                {<ModalEditTec open={open} setOpen={setOpen} />}

            </div>
        </div>
    )
}

export default Tecnicos;