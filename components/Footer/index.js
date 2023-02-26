import style from './Footer.module.css'
export default function FooterComponent() {
  return (
    <footer className={style.footer}>
      <small>Desenvolvido por <a href="https://github.com/luizdeveloperbr" rel='noreferrer' target="_blank" >@luizdeveloperbr</a> </small>
    </footer>
  );
}
