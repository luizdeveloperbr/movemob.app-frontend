import PostAddIcon from '@mui/icons-material/PostAdd'
import style from '../../styles/Equipamento.module.css'
export default function EquipamentoPagePorId() {
    return (
        <section className="drawer-content">
            <div className={style.main}>
                <nav className="flex justify-center gap-2 py-3">
                    <button className="btn btn-sm bg-primary border-white">
                        <PostAddIcon />
                    </button>
                    <button className="btn btn-sm">Add</button>
                    <button className="btn btn-sm">Add</button>
                </nav>
                ID
            </div>
        </section>
    )
}