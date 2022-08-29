import tinder from "./../assets/img/tinder.jpg";
import amazon from "./../assets/img/amazon.png";
import todo from "./../assets/img/todo.png";
import eschool from "./../assets/img/eschool.png";
import craigslist from "./../assets/img/craigslist.png";
import "./../css/projectlist.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


export const projectList = [
          <div className="container" id="tinder">
            <img src={tinder} alt="Tinder" className="image"/>
              <div class="overlay">
                <div class="text">
                  <p>Tinder-clone</p>
                  <span>Skills: MERN Stack</span>
                  <p><a href="https://github.com/gbiplesh/tinder-clone-frontend" target="_blank">
                      <GitHubIcon sx={{ fontSize: 40 }} /> 
                    </a>
                  </p>
                </div>
              </div>
          </div>,
          <div className="container" id="craigslist">
            <img src={craigslist} alt="craigslist" className="image"/>
              <div class="overlay">
                <div class="text">
                  <p>Craigslist-clone</p>
                  <span>Skills: Django and Material-UI</span>
                  <p><a href="https://github.com/gbiplesh/codedaddies_list/tree/master" target="_blank">
                      <GitHubIcon sx={{ fontSize: 40 }} /> 
                    </a>
                    <span> &nbsp; </span>
                    <a href="https://sleepy-journey-01879.herokuapp.com/" target="_blank">
                      <OpenInNewIcon sx={{ fontSize: 40 }} /> 
                    </a>
                  </p>
                </div>
              </div>
          </div>,
          <div className="container" id="amazon">
            <img src={amazon} alt="Amazon" className="image"/>
              <div class="overlay">
                <div class="text">
                  <p>Amazon-clone</p>
                  <span>Skills: React.js, React Context API, JavaScript, Firebase, Stripe</span>
                  <p><a href="https://github.com/gbiplesh/amazon-clone" target="_blank">
                      <GitHubIcon sx={{ fontSize: 40 }} /> 
                    </a>
                  </p>
                </div>
              </div>
          </div>,
          <div className="container" id="todo">
            <img src={todo} alt="Todo" className="image"/>
              <div class="overlay">
                <div class="text">
                  <p>To-do-list</p>
                  <span>Skills: Django and Bootstrap</span>
                  <p><a href="https://github.com/gbiplesh/To-Do-App" target="_blank">
                      <GitHubIcon sx={{ fontSize: 40 }} /> 
                    </a>
                  </p>
                </div>
              </div>
          </div>,
          <div className="container" id="eschool">
            <img src={eschool} alt="eschool" className="image"/>
              <div class="overlay">
                <div class="text">
                  <p>e-school</p>
                  <span>Skills: HTML & CSS, Bootstrap, W3.CSS, JavaScript, PHP, SQL</span>
                  <p><a href="https://github.com/gbiplesh/e-schools" target="_blank">
                      <GitHubIcon sx={{ fontSize: 40 }} /> 
                    </a>
                  </p>
                </div>
              </div>
          </div>,
           ];
