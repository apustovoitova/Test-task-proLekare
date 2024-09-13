import "./app-navigation.css";

const AppNavigation = () => {
  return (
    <div className="types">
      <nav className="navigation">
        <ul className="nav">
          <li className="item">
            <a className="link" href="#">
              Články
            </a>
          </li>
          <li className="item">
            <a className="link" href="#">
              Časopisy
            </a>
          </li>
          <li className="item">
            <a className="link" href="#">
              Obory
            </a>
          </li>
          <li className="item">
            <a className="link" href="#">
              Vzdělávání
            </a>
          </li>
          <li className="item">
            <a className="link" href="#">
              Kongresy
            </a>
          </li>
          <li className="item">
            <a className="link" href="#">
              Videa
            </a>
          </li>
          <li className="item">
            <a className="link" href="#">
              Praxe
            </a>
          </li>
        </ul>
      </nav>
      <div className="relative">
        <input className="search-pannel" type="search" />
        <label className="pointer-event">Hledat...</label>
        <button className="btn">
          <span className="img-search">
            <a className="cursor-svg" href="#"></a>
          </span>
        </button>
      </div>
    </div>
  );
};

export default AppNavigation;
