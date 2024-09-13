import "./app.css";
import AppHeader from "../app-header/app-header";
import AppNavigation from "../app-navigation/app-navigation";
import AppAbout from "../app-about/app-about";
import AppBreadcrumbs from "../app-breadcrumbs/app-breadcrumbs";
import AppButtonTop from "../app-button-on-top/app-button-on-top";
import AppFooter from "../app-footer/app-footer";
import AppFooterMedia from "../app-footer-media/app-footer-media";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <AppNavigation />
      <hr class=" divider-top" />
      <AppBreadcrumbs />
      <AppAbout />
      <hr class="hr-red" styles="max-width: 50%" />
      <AppButtonTop />
      <AppFooter />
      <AppFooterMedia />
    </div>
  );
}

export default App;
