import "./app-breadcrumbs.css";

const AppBreadcrumbs = () => {
  return (
    <div className="breadcrumbs">
      <ul className="list">
        <li className="item">
          <a className="info" href="#">
            prolékaře
          </a>
          <span className="material-icons arrow">double_arrow</span>
        </li>
        <li className="item">
          <a className="info" href="#">
            Kalendář
          </a>
          <span className="material-icons arrow">double_arrow</span>
        </li>
        <li className="item">
          <a className="info" href="#">
            5. Central European Endoscopic Ear Surgery Course
          </a>
        </li>
      </ul>
    </div>
  );
};
export default AppBreadcrumbs;
