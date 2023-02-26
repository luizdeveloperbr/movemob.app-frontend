import Image from 'next/image'
import style from './Header.module.css'
export default function HeaderComponent() {
    return (
        <header>
            <div className={style.avatar_conteiner}>
                <Image 
                alt="Profile Pic"
                className={style.avatar_image}
                src="https://via.placeholder.com/48/?text=LE"
                height={48}
                width={48}/>
            </div>
        </header>
    )
}