import classes from './Footer.module.css';

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={`${classes.footerColumns} ${classes.flex}`}>
        <div className={`${classes.footerColumn} ${classes.footerColumn1}`}>
          <h3 className={classes.footerTitle}>Fale Conosco</h3>
          <ul className={classes.footerList}>
            <li>
              <a href="mailto:contato@exemplo.com">contato@exemplo.com</a>
            </li>
            <li>(xx) xxxx-xxxx</li>
            <li>Minas Gerais, Brasil</li>
          </ul>
        </div>
        <div className={`${classes.footerColumn} ${classes.footerColumn2}`}>
          <h3 className={classes.footerTitle}>Políticas</h3>
          <ul className={classes.footerList}>
            <li>
              <a href="/politica-de-privacidade">Política de Privacidade</a>
            </li>
            <li>
              <a href="/politica-de-trocas-e-devolucoes">
                Política de aulas e pagamentos
              </a>
            </li>
          </ul>
        </div>
        <div className={`${classes.footerColumn} ${classes.footerColumn3}`}>
          <h3 className={classes.footerTitle3}>Sobre Nós</h3>
          <p className={classes.footerDescription}>
            TEXTO DE TESTE Somos um site destinado a conectar aluno e personal trainers. bla bla bla
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
