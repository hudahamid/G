import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './assets/logo.png';
import sm1 from './assets/capture.png';
import sm2 from './assets/capture2.png';
import sm3 from './assets/capture3.png';
import img1 from './assets/Clip.png';
import img2 from './assets/Group.png';
import img3 from './assets/Vector.png';
import img4 from './assets/Rectangle110.png';
import img5 from './assets/Rectangle112.png';
import house from './assets/house.png'
import filter from './assets/filter.png'
import last from './assets/last.png'

function App() {
  return (
    <div  style={{background: '#F2F2F2'}}>

    {/* =======================Section 1 ==============================================================================================*/}
      <div className="background-image-color d-flex flex-column align-items-center py-5 " >
                
                <div >
                <h3 className="header-txt-color my-5 py-sm-5 px-2 h3-responsive">
                   INNOVATION AND <span className="and-technology "> TECHNOLOGY</span>
                 </h3>
                </div>
                <div className="col-10 col-lg-8 pb-3">
                <p  >
                    At Global Property, we are committed to staying at the forefront of innovation in the
                    luxury real estate market. We leverage advanced technologies, including artificial
                    intelligence (AI) and data analytics, to enhance our services and provide our clients
                    with a superior real estate experience. Explore how we use these technologies to
                    revolutionize the way we operate and deliver value to our clients:
                </p>
                </div>
                
            <img src={logo} alt="Customer Service Management" className=" responsive-logo my-5" />
      </div>



    {/*===============================================================Section 2==================================================================================== */}
      <div className="section2  py-4 ">
      <h1 className="h3-responsive text-center px-lg-2 my-2" style={{color: '#8FB1BF'}}>  ARTIFICIAL INTELLIGENCE (AI)</h1>
       <div className="container my-4 mr-md-5  ">
          <p className="sec2-p bg-white container py-2 mr-md-5 px-4  shadow"  >
            AI is a key component of our operations, enabling us to automate processes,
            streamline workflows, and deliver personalized services to our clients. Here's
            how we harness the power of AI:
           </p>  


            {/* tableeeeeeeee  */}
          <div className="sec2 d-flex flex-column mx-lg-3 my-md-5 mt-sm-0  mb-sm-3 py-5">
              <div className="mb-4 d-flex flex-row">
                <div className="d-flex flex-column flex-sm-column flex-md-row">
                  <img src={img1} alt="img" className="img-fluid large-screen ml-1 mr-lg-5 mt-md-3 img-responsive" />
                  <img src={sm1} alt="img" className="img-fluid small-screen  mb-2  img-responsive" />
                  <h2 className=" mt-sm-4 mb-sm-4 ml-lg-5 text-responsive">Automated Property Management</h2>
                </div>
                <p className="custom-paragraph mt-sm-5 mt-lg-0 ">
                  AI-powered systems help us efficiently manage and maintain our clients'
                  properties by automating tasks such as rent collection, maintenance scheduling,
                  and tenant communication.
                </p>
              </div>
              <hr />
              <div className="my-5 d-flex flex-row">
                <div className="d-flex flex-column flex-sm-column flex-md-row">
                  <img src={img2} alt="img" className="img-fluid large-screen mx-4 my-5 img-responsive" />
                  <img src={sm2} alt="img" className="img-fluid small-screen  img-responsive" />
                  <h4 className=" mx-lg-5 my-lg-5 text-responsive">Market Analysis</h4>
                </div>
                <p className="custom-paragraph2 mt-sm-3 mt-lg-0">
                  AI algorithms analyze vast amounts of real estate data to provide us with
                  valuable insights into market trends, property values, and investment
                  opportunities, allowing us to make informed decisions and recommendations to
                  our clients.
                </p>
              </div>
              <hr />
              <div className="my-5 d-flex flex-row">
                <div className="d-flex flex-column flex-sm-column flex-md-row">
                  <img src={img3} alt="Customer Service Management" className="img-fluid large-screen mx-3 my-5 img-responsive" />
                  <img src={sm3} alt="img" className="img-fluid small-screen  img-responsive" />
                  <h4 className=" mx-lg-5 my-lg-5 text-responsive">Customer Service Management</h4>
                </div>
                <p className="custom-paragraph mt-sm-5 mt-lg-0 mb-5">
                  AI algorithms analyze vast amounts of real estate data to provide us with
                  valuable insights into market trends, property values, and investment
                  opportunities, allowing us to make informed decisions and recommendations to
                  our clients.
                </p>
              </div>
             </div>


        </div>
{/* ==========================================Section 3 ==============================================================================================================*/}
<div className='mt-5 relative-div clearfix' style={{ clear: 'both' }}>

      {/* Existing Divs on Top of the Image */}
      <div className="absolute-div-top">
        <div className="container form-container  form-control form-control-lg d-flex flex-row align-items-center mb-3 shadow ">
          <img src={img4} alt="Data Analytics" className="img-fluid ms-3 me-1 form-img" />
          <h4 className="m-0 form-heading">
            <span>DATA</span>
            <span style={{ marginLeft: '17px' }}>ANALYTICS</span>
          </h4>
        </div>


        <div className="analytics-div">
          <p className="mb-0 analytics-p">
            Data analytics plays a crucial role in our decision-making process,
            allowing us to derive actionable insights from large volumes of data.
            Here's how we use data analytics to drive value for our clients:
          </p>
        </div>
        
      </div>

















      

      {/* New Div Positioned Next to the Image */}
      <div className="pb-5  card1 new-div">
        <div className=' new-div-heading d-flex flex-row mb-3 mx-4 my-2 px-2 py-1'>
          <img src={img5} alt="Predictive Modeling" className="img-fluid new-div-img ml-4 pl-3" />
          <h4 className='m-0 div-h mr-5'>PREDICTIVE MODELING</h4>
        </div>
        <p className="mb-2 new-div-p">
          By analyzing historical data and market trends, we can develop predictive models to forecast property prices, rental yields,
          and investment returns, helping our clients make informed decisions about their real estate investments.
        </p>
      </div>

      {/* 2nd New Div Positioned Next to the Image */}
      <div className="pb-5 new-div2 ">
        <div className='new-div-heading d-flex flex-row mb-3 '>
          <img src={img5} alt="Predictive Modeling" className="img-fluid new-div-img ml-4 pl-3" />
          <h4 className='div-h m-0'>PREDICTIVE MODELING</h4>
        </div>
        <p className="mb-0 new-div-p">
          By analyzing historical data and market trends, we can develop predictive models to forecast property prices, rental yields,
          and investment returns, helping our clients make informed decisions about their real estate investments.
        </p>
      </div>

      {/* 3rd New Div Positioned Next to the Image */}
      <div className="pb-5 mb-1 new-div3">
        <div className='new-div-heading d-flex flex-row mb-3 '>
          <img src={img5} alt="Predictive Modeling" className="img-fluid new-div-img ml-4 pl-3" />
          <h4 className='div-h m-0'>PREDICTIVE MODELING</h4>
        </div>
        <p className="mb-2 new-div-p">
          By analyzing historical data and market trends, we can develop predictive models to forecast property prices, rental yields,
          and investment returns, helping our clients make informed decisions about their real estate investments.
        </p>
      </div>

      {/* Image Positioned Right */}
      <img src={house} alt="img" className="img-positioned-right" />
    </div>
    {/* ========================================== Last Div Positioned above  the Image ====================================================================================*/}
   

 {/*  New Div Positioned above  the Image */}
 {/* New Div Positioned above the Image */}

  <div>
  <img src={last} alt="Customer Service Management" className="bfImg  mt-5" />
  </div>

  </div>
 {/* Section  ...................................................*/}
 <div >
    {/* Heading Section */}
    {/* <div className="VR container bg-light pb-5 mb-1 mt-5 shadow" >
        <h2 style={{ color: '#8FB1BF' }}>VIRTUAL REALITY AND AUGMENTED REALITY</h2>
    </div> */}
</div>
     







        
      
   
      
    </div>
  );
}

export default App;


