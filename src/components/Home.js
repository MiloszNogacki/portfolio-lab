import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";

const Home = () => {
    return (

        <div className="container">

            <div className="box">
                <div className="box-row">
                    <div className="box-cell box1">
                        {/*<img src="/src/assets/Home-Hero-Image.jpg"/>*/}
                    </div>
                    <div className="box-cell box2">

                  <ul className="ul_navigation">
                      <li>

                       <ul className="ul-properties">
                        <li>
                            <button className="create_account">Załóż konto</button>
                        </li>
                        <li>
                            <button className="log_in">Zaloguj</button>
                        </li>
                       </ul>
                      </li>
                      <li>

                          <ul className="ul-properties">
                              <li>
                                  <button className="ul_nav_2">Start</button>
                              </li>
                              <li>
                                  <button className="ul_nav_2">O co chodzi</button>
                              </li>
                              <li>
                                  <button className="ul_nav_2">O nas</button>
                              </li>
                              <li>
                                  <button className="ul_nav_2">Fundacja i organizacje</button>
                              </li>
                              <li>
                                  <button className="ul_nav_2">Fundacja i organizacje</button>
                              </li>
                          </ul>
                      </li>
                  </ul>
            <div className="started-text-div">
                <p className="started-text">Zacznij pomagać!</p>
                <p className="started-text">Oddaj zapomniane rzeczy w niechciane rece</p>
            </div>
                        <div className="decoration">
                            <h4>tutaj powinnien byc ten szlak z dekoracja</h4>

                        </div>
                        <div className="big-buttons-div">
                            <button className="big-button left">ODDAJ RZECZY</button>
                            <button className="big-button right">ZOORGANIZUJ ZBIÓRKĘ</button>
                        </div>


                    </div>
                </div>
            </div>
        </div>



            )

};

export default Home;