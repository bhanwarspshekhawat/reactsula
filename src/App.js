import aero from './image/aero.png';
import sula from './image/sula.png';
import rajes from './image/rajes.png';
import bottle from './image/bottle.jpeg';
import logo from  './image/logo.png';
import bottle1 from './image/bottle1.png';
import bottle2 from './image/bottle2.png';
import bottle3 from './image/bottle3.png';
import bottle4 from './image/bottle4.png';
import bottle5 from './image/bottle5.png';
import bottle6 from './image/bottle6.png';
import wine1 from './image/wine1.png';
import wine2 from './image/wine2.png';
import wine3 from './image/wine3.png';
import wine4 from './image/wine4.png';
import wine5 from './image/wine5.png';
import wine6 from './image/wine6.png';
import factry from './image/factry.png';
import aword from './image/aword.png';
import aword1 from './image/aword1.png';
import aword2 from './image/aword2.png';
import aword3 from './image/aword3.png';
import house from './image/house.png';
import house2 from './image/house2.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="back">
      
      <a href="#" class="fa fa-facebook"></a>
<a href="#" class="fa fa-twitter"></a>
<a href="#" class="fa fa-google"></a>
<a href="#" class="fa fa-linkedin"></a>
<a href="#" class="fa fa-youtube"></a>
<a href="https://www.instagram.com/sula_vineyards/?hl=en" class="fa fa-instagram"></a>
<a href="#" class="fa fa-pinterest"></a>
<a href="#" class="fa fa-snapchat-ghost"></a>
<a href="#" class="fa fa-skype"></a>
<a href="#" class="fa fa-android"></a>
<img src={logo} className="logo"/>
<img src={sula} className='sula'/>
</div>
<div className="col">
  <img src={rajes}/>
  <br/>
  <br/>
  <div className="mar">
    <br/>
  <h1><span>OUR STORY </span></h1>
  <hr className="line1"></hr>
  <br/>
  <h2>- RAJEEV SAMANT -</h2>
  <h4>Our Founder & CEO</h4>
  <hr className="line1"></hr>
  <br/>
  <p>Rajeev Samant established Sula Vineyards in 1999, Nashik’s first<br/>
   winery, and paved the way for the emergence of India’s Wine<br/>
    Capital. Today, Sula is India’s leading wine company, spearheading <br/>
    the charge of Indian wine across the world. He is a committed <br/>
    environmentalist, and everything at Sula is guided by sustainability<br/>
     and protecting the environment.
</p>
<br/>
<hr className="line1"></hr>
<br/>
<a href="https://sulavineyards.com/our-story.php"><span>CLICK TO KNOW MORE</span></a>
</div>
</div>
<div className="col">
  <div className="b2">
    <h1><span>OUR WINES </span></h1>
  <br/>
  <hr className="line1"></hr>
  <br/>
  <p>Everything we do at Sula is guided by core values that aim at <br/>
  preserving and enhancing the art of winemaking. We love to make<br/>
   wine, and we are happy to have talented winemakers. All you have <br/>
  to do is to discover them all!</p>
  <br/>
  <a href="https://sulavineyards.com/images/images/home-page/The%20Wines%20of%20Sula%20Vineyards.pdf">
    <span>DISCOVER</span></a>
    </div>
    <img src={bottle} className="bottle"/>
</div>
<br/>
<div className="video">
<h1><span>DOMAINE SULA</span></h1>
<br/>
</div>
<div className="col1">
<a href="#"><img src={bottle1} style={{ width:"250px",height:"450px"}}/> </a> 
<a href="#"><img src={bottle2} style={{ width:"250px",height:"450px"}}/></a>
<a href="#"><img src={bottle3} style={{ width:"250px",height:"450px"}}/></a>
<a href="#"><img src={bottle4} style={{ width:"250px",height:"450px"}}/></a>
<a href="#"><img src={bottle5} style={{ width:"250px",height:"450px"}}/></a>
<a href="#"><img src={bottle6} style={{ width:"250px",height:"450px"}}/></a>
</div>
<br/>
<div className="video">
<h1><span>OUR WINES</span></h1>
<br/>
</div>
<div className="col1">
<a href="#"><img src={wine1} style={{ width:"350px",height:"450px"}}/></a>
<a href="#"><img src={wine2} style={{ width:"350px",height:"450px"}}/></a>
<a href="#"><img src={wine3} style={{ width:"350px",height:"450px"}}/></a>
<a href="#"><img src={wine4} style={{ width:"350px",height:"450px"}}/></a>
<a href="#"><img src={wine5} style={{ width:"350px",height:"450px"}}/></a>
<a href="#"><img src={wine6} style={{ width:"350px",height:"450px"}}/></a>
</div>
<div className="col">
<div className="mar">
<h1><span>VISIT US</span></h1>
<br/>
<hr className="line1"></hr>
<h3><span>SPEND A DAY AT OUR<br/> VINEYARDS AND</span></h3>
<br/>
<h2>Explore</h2>
<br/>
<hr className="line1"></hr>
<br/>
<p>If a day (or two!) of wine, food, tastings and scenic views sounds like<br/>
 a perfect plan for you, you should definitely come visit us and have a<br/>
  good time in our beautiful vineyards. With your loved one, your best<br/>
   friends or your family, you will for sure have a memorable time.
</p>
<br/>
<a href="https://sulavineyards.com/our-story.php"><span>CLICK TO KNOW MORE</span></a>
</div>
<img src={factry}/>
</div>
<div className="center">
  <h1>WINE MAKING PROCESS</h1>
</div>

<div className="video">
<iframe width="760" height="315" src="https://www.youtube.com/embed/y0AFwcYUFwY" title="YouTube video player" frameborder="0"
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div className="video">
<h1><span>OUR AWARDS</span></h1>
<br/>
<h3><p><span>AND RECOGNITIONS</span></p></h3>
<br/>
</div>
<div className="video1">
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    
    <div class="carousel-item active">
      <img src={aword} class="d-block w-10" />
    </div>
    <div class="carousel-item">
      <img src={aword1} class="d-block w-10" />
    </div>
    <div class="carousel-item">
      <img src={aword2} class="d-block w-10" />
    </div>
    <div class="carousel-item">
      <img src={aword3} class="d-block w-10" />
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" />
    </div>
  </div>
  
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
<div className="col5">
  <img src={house} style={{width:"500px"}}/>
  <h1><span>GET IN TOUCH</span></h1>
<br/>
<hr className="line1"></hr>
<br/>
<h3><span>Addres</span></h3>
<br/>
<p>Gat 36/2, Govardhan Village, Gangapur<br/>
-Savargaon Rd Nashik,<br/>
 Maharashtra 422222</p>
 <hr className="line1"></hr>
<br/>
<h1><span>Phone</span></h1>
<br/>
<p>+91 9970090010</p>
<hr className="line1"></hr>
<br/>
<h1><span>Email</span></h1>
<br/>
<p>info@sulawines.com</p>
</div>
<hr className="line1"></hr>
<br/>
      </header>
       </div>
  );
}

export default App;
