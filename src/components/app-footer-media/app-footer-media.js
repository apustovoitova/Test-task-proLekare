import "./app-footer-media.css";

const AppFooterMedia = () => {
  return (
    <div className="footer-media">
      <footer className="media">
        <p className="copyright-text">©2008-2024 MeDitorial | ISSN 1803-6597</p>
        <div className="wrapper-flex">
          <div className="wrapper">
            <p className="text-footer-media">
              Stránky prolékaře.cz jsou určeny výhradně odborníkům ve
              zdravotnictví.
              <a href="#" className="link-footer-media">
                Čtěte prohlášení
              </a>
              a
              <a href="#" className="link-footer-media">
                Zásady zpracování osobních údajů
              </a>
            </p>
          </div>
          <div className="social-icons">
            <a href="#" className="f-icon media-icons"></a>
            <a href="#" className="in-icon media-icons"></a>
            <a href="#" className="x-icon media-icons"></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppFooterMedia;
