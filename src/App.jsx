import myStyles from "./App.module.css";

function App() {
  return (
    <>
      <div className={myStyles.App}>
        <div className={myStyles.Navbar}>
          <div className={myStyles.Logo}></div>
          <div className={myStyles.Menu}></div>
          <div className={myStyles.Logout}></div>
        </div>

        <div className={myStyles.Main}>
          <div className={myStyles.Header}>
            <div className={myStyles.Search}></div>
            <div className={myStyles.User}></div>
          </div>
          <div className={myStyles.Content}>
            <div className={myStyles.Weather}>
              <div className={myStyles.Temperature}></div>
              <div className={myStyles.Forecast}></div>
            </div>
            <div className={myStyles.Highlight}>
              <div className={myStyles.TodaysHighlight}></div>
              <div className={myStyles.OtherCities}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
