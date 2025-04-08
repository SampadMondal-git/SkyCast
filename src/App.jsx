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
import cloud from "./icons/cloud.png";
import clouds from "./icons/clouds.svg";
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
                <div className={myStyles.WeatherLocation}>
                  <div className={myStyles.Location}>
                    <img src={location} width="20px" alt="location" />
                    <p>Kolkata</p>
                  </div>
                  <div className={myStyles.Time}>
                    <h2>Monday</h2>
                    <p>1 Jan, 2025</p>
                  </div>
                  <div className={myStyles.WeatherTemperature}>
                    <h1>27&deg;C</h1>
                    <p>High: 28&deg;C | Low: 25&deg;C</p>
                  </div>
                  <span className={myStyles.FloatingCloud}>
                    <img src={cloud} alt="cloud" />
                  </span>
                  <span className={myStyles.Cloud}>
                    <img src={cloud} alt="cloud" />
                  </span>
                </div>
                <div className={myStyles.WeatherData}>
                  <Temperature />
                  <img src={clouds} width="150px" alt="clouds" />
                  <div className={myStyles.SkyData}>
                    <h1>Cloudy</h1>
                    <p>Feel like 26</p>
                  </div>
                </div>
              </div>
              <div className={myStyles.Forecast}>
                <div className={myStyles.ForecastData}>
                  <div className={myStyles.btn}>
                    <p>Week</p>
                    <button>See All</button>
                  </div>
                  <div className={myStyles.TodayData}>
                    <div className={myStyles.Data}>
                      <p>Sun</p>
                      <img src={clouds} width={35} alt="clouds" />
                      <p>20&deg;C</p>
                    </div>
                    <div className={myStyles.Data}>
                      <p>Mon</p>
                      <img src={clouds} width={35} alt="clouds" />
                      <p>20&deg;C</p>
                    </div>{" "}
                    <div className={myStyles.Data}>
                      <p>Tue</p>
                      <img src={clouds} width={35} alt="clouds" />
                      <p>20&deg;C</p>
                    </div>{" "}
                    <div className={myStyles.Data}>
                      <p>Wed</p>
                      <img src={clouds} width={35} alt="clouds" />
                      <p>20&deg;C</p>
                    </div>
                    <div className={myStyles.Data}>
                      <p>Thurs</p>
                      <img src={clouds} width={35} alt="clouds" />
                      <p>20&deg;C</p>
                    </div>{" "}
                    <div className={myStyles.Data}>
                      <p>Fri</p>
                      <img src={clouds} width={35} alt="clouds" />
                      <p>20&deg;C</p>
                    </div>{" "}
                    <div className={myStyles.Data}>
                      <p>Sat</p>
                      <img src={clouds} width={35} alt="clouds" />
                      <p>20&deg;C</p>
                    </div>{" "}
                  </div>
                  <div className={myStyles.TomorrowData}>
                    <div className={myStyles.TomorrowForecastData}>
                      <div className={myStyles.TomorrowForecast}>
                        <h1>Tomorrow</h1>
                        <p>Thunder storm</p>
                      </div>
                      <div className={myStyles.TomorrowTemperature}>
                        <p>24&deg;C</p>
                      </div>
                    </div>
                    <span>
                      <img src={cloud} width={60} alt="cloud" />
                    </span>
                  </div>
                </div>
                <div className={myStyles.ForecastTime}>
                  <p>Sunrise</p>
                  <h1>6:45 AM</h1>
                  <p>Sunset</p>
                  <h1>5:30 PM</h1>
                  <p>Length of day</p>
                  <h1>10h 23m</h1>
                </div>
              </div>
            </div>
            <div className={myStyles.Highlight}>
              <div className={myStyles.TodaysHighlight}>
                <p>Todays Highlight</p>
                <div className={myStyles.HighlightForecast}>
                  <div className={myStyles.HighlightForecast}>
                    Chances of Rain
                    <span>35%</span>
                  </div>
                  <div className={myStyles.HighlightForecast}>
                    UV Index
                    <span>1 Low</span>
                  </div>
                  <div className={myStyles.HighlightForecast}>
                    Wind Status
                    <span>SW 13km/h</span>
                  </div>
                  <div className={myStyles.HighlightForecast}>
                    Humidity
                    <span>88%</span>
                  </div>
                </div>
              </div>
              <div className={myStyles.OtherCities}>
                <div className={myStyles.Cities}>
                  <div>
                    <p>Other Cities</p>
                    <button>Show All</button>
                  </div>
                  <div className={myStyles.OtherCitiesForecast}>
                    <div>
                      <div className={myStyles.CitiesName}>
                        <h1>24&deg;C</h1>
                        <p>Mumbai</p>
                      </div>
                      <div className={myStyles.CitiesForecast}>
                        <p>High: 28 | Low: 20</p>
                        <img src={clouds} width={50} alt="clouds" />
                      </div>
                    </div>
                    <div>
                      <div className={myStyles.CitiesName}>
                        <h1>24&deg;C</h1>
                        <p>Delhi</p>
                      </div>
                      <div className={myStyles.CitiesForecast}>
                        <p>High: 28 | Low: 20</p>
                        <img src={clouds} width={50} alt="clouds" />
                      </div>
                    </div>
                    <div>
                      <div className={myStyles.CitiesName}>
                        <h1>24&deg;C</h1>
                        <p>Chennai</p>
                      </div>
                      <div className={myStyles.CitiesForecast}>
                        <p>High: 28 | Low: 20</p>
                        <img src={clouds} width={50} alt="clouds" />
                      </div>
                    </div>
                    <div>
                      <div className={myStyles.CitiesName}>
                        <h1>24&deg;C</h1>
                        <p>Bangalore</p>
                      </div>
                      <div className={myStyles.CitiesForecast}>
                        <p>High: 28 | Low: 20</p>
                        <img src={clouds} width={50} alt="clouds" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
