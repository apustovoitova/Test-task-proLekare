import "./app-footer.css";

const AppFooter = () => {
  return (
    <div className="appfooter">
      <footer className="footer">
        <a href="#" className="logo-footer"></a>
        <ul className="list-footer">
          <li className="item-footer">
            <a className="link-footer" href="#">
              Kontakt
            </a>
          </li>
          <li className="item-footer">
            <a className="link-footer" href="#">
              Inzerce
            </a>
          </li>
          <li className="item-footer">
            <a className="link-footer" href="#">
              O projektu
            </a>
          </li>
          <li className="item-footer">
            <a className="link-footer" href="#">
              Prohlašení o cookies
            </a>
          </li>
          <li className="item-footer">
            <a className="link-footer" href="#">
              Nastavení cookies
            </a>
          </li>
        </ul>
      </footer>
      <hr class="divider-bottom" />
    </div>
  );
};

export default AppFooter;
