import myStyles from "./App.module.css";
import search from "./icons/magnifier.png";
import user from "./icons/user.png";
import dropdown from "./icons/down-arrow.png";
import logo from "./logo/SkyCast.png";
import menu from "./icons/app.png";
import graph from "./icons/pie-chart.png";
import location from "./icons/map.png";
import calender from "./icons/calender.png";
import settings from "./icons/setting.png";
import logout from "./icons/log-out.png";
import Switch from "./theme";
import Temperature from "./temp";
function App() {
  return (
    <>
      <div className={myStyles.App}>
        <div className={myStyles.Navbar}>
          <div className={myStyles.Logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={myStyles.Menu}>
            <img src={menu} alt="menu" />
            <img src={graph} alt="graph" />
            <img src={location} alt="location" />
            <img src={calender} alt="calender" />
            <img src={settings} alt="settings" />
          </div>
          <div className={myStyles.Logout}>
            <img src={logout} alt="logout" />
            <Switch />
          </div>
        </div>

        <div className={myStyles.Main}>
          <div className={myStyles.Header}>
            <div className={myStyles.Search}>
              <img src={search} width="20px" alt="search" />
              <input type="text" placeholder="Search Location" />
            </div>
            <div className={myStyles.User}>
              <div className={myStyles.UserData}>
                <div className={myStyles.UserDetails}>
                  <div className={myStyles.UserImage}>
                    <img src={user} width="40px" alt="user" />
                  </div>
                  <div className={myStyles.UserName}>
                    <p>John Doe</p>
                  </div>
                </div>
              </div>
              <button>
                <img src={dropdown} width="20px" alt="dropdown" />
              </button>
            </div>
          </div>
          <div className={myStyles.Content}>
            <div className={myStyles.Weather}>
              <div className={myStyles.Temperature}>
                <div className={myStyles.TempContainer}>
                  <div className={myStyles.Location}>
                    <img src={location} alt="location" />
                    <p>India</p>
                  </div>
                  <Temperature />
                </div>
                <div className={myStyles.CurrentDate}></div>
                <div className={myStyles.CurrentTemperature}></div>
              </div>
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
