import "./app-about.css";

const AppAbout = () => {
  return (
    <div className="app-about-flex">
      <div className="app-about">
        <h1 className="title">
          5. Central European Endoscopic Ear Surgery Course
        </h1>
        <button className="button-circle">
          <span className="circle-icon">
            <span className="material-icons circle-svg">
              fiber_manual_record
            </span>
          </span>
          <span className="text-kongres">KONGRES</span>
        </button>
        <div className="event-details">
          <table className="event-table">
            <tr className="tr">
              <th className="th">
                <div className="figure-items">
                  <span className="material-icons">domain</span>
                  <p> Pоřadatel:</p>
                </div>
              </th>
              <td className="value">
                <span className="bold">
                  ÚVN Praha, VLF UO, Společnost vojenské medicíny ČLS JEP
                </span>
              </td>
            </tr>
            <tr className="tr-row">
              <th className="th">
                <div className="figure-items">
                  <span className="material-icons">account_balance_wallet</span>
                  <p> Datum konání:</p>
                </div>
              </th>
              <td className="value">
                <span className="bold">7.-9. října 2024</span>
              </td>
            </tr>
            <tr className="tr-row">
              <th className="th">
                <div className="figure-items">
                  <span className="material-icons">location_on</span>
                  <p> Místo konání:</p>
                </div>
              </th>
              <td className="value">
                <span className="bold">Ústřední vojenská nemocnice</span>
                <br />
                <span className="address">
                  U Vojenské nemocnice 1200, Praha 6, 169 02
                </span>
              </td>
            </tr>
            <tr className="tr-row">
              <th className="th">
                <div className="figure-items">
                  <span className="material-icons">language</span>
                  <p> Jazyk:</p>
                </div>
              </th>
              <td className="value">
                <span className="bold">Čeština</span>
              </td>
            </tr>
            <tr className="tr-row">
              <th className="th">
                <div className="figure-items">
                  <span className="material-icons">web</span>
                  <p>Web</p>
                </div>
              </th>
              <td className="value">
                <a
                  href="https://www.congressprague.cz/kongresy/vojaci68.html"
                  className="website"
                >
                  https://www.congressprague.cz/kongresy/vojaci68.html
                </a>
              </td>
            </tr>
          </table>
        </div>
        <div className="btn-divider">
          <hr class="divider" />
          <div className="calendar-buttons">
            <div className="buttons-flex">
              <button className="btn-calendar">
                <a href="#" className="icon-look"></a>
                <p className="text">Do Outlook kalendáře</p>
              </button>
              <button className="btn-calendar">
                <a href="#" className="icon-calendar"></a>
                <p className="text">Do Google kalendáře</p>
              </button>
            </div>
            <div className="calendar-share">
              <button className="button-share">
                <span className="material-icons __material-icons icon-share">
                  share
                </span>
              </button>
              <button className="button-bookmark">
                <span className="material-icons icon-share">bookmark_add</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <title className="advertisment">Reklama</title>
        <div className="banner-img"></div>
      </div>
    </div>
  );
};

export default AppAbout;
