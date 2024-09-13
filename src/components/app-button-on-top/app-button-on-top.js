import "./app-button-on-top.css";

const AppButtonTop = () => {
  return (
    <div className="button-top">
      <button className="on-top">
        <span className="material-icons on-top-icon">arrow_drop_up</span>
        <span id="button-top" className="text-on-top">
          Zpátky nahoru
        </span>
      </button>
      <hr class="divider-bottom" />
    </div>
  );
};
export default AppButtonTop;
