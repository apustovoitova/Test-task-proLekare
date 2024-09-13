import "./app-header.css";

const AppHeader = () => {
  return (
    <div className="app-header">
      <header className="header">
        <a href="#" className="logo"></a>
        <div className="header__menu-buttons">
          <button className="header__item-btn header__item-btn-none">
            <span className="material-icons">person</span>
            <a href="#" className="header__text">
              Přihlásit
            </a>
          </button>
          <button className="header__item-btn">
            <span className="material-icons">mail</span>
            <a href="#" className="header__text">
              Newsletter
            </a>
          </button>
        </div>
      </header>
      <hr class="divider-top" />
    </div>
  );
};
export default AppHeader;
