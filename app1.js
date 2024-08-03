import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './assets/logo.png'
import img1 from './assets/Clip.png';
import img2 from './assets/Group.png';
import img3 from './assets/Vector.png';
import img4 from './assets/Rectangle110.png';
import img5 from './assets/Rectangle112.png';
import house from './assets/house.png'
import filter from './assets/filter.png'

function App() {
  return (
    <div  style={{background: '#F2F2F2'}}>
      {/* Section 1 */}
      <div className="background-div d-flex flex-column align-items-center" style={{ backgroundColor: '#8FB1BF33', padding: '20px' }}>
                <h3 className="lg-text-center lg-mt-2 mb-5 "  style={{color:'#A66844'}}>
                    INNOVATION AND TECHNOLOGY
                </h3>
                <p className="lg-mx-3 lg-my-5 sm-mx-1 " >
                    At Global Property, we are committed to staying at the forefront of innovation in the
                    luxury real estate market. We leverage advanced technologies, including artificial
                    intelligence (AI) and data analytics, to enhance our services and provide our clients
                    with a superior real estate experience. Explore how we use these technologies to
                    revolutionize the way we operate and deliver value to our clients:
                </p>
            <img src={logo} alt="Customer Service Management" className="img-fluid sm-mt-5" style={{ 
                
            }} />
      </div>



      {/* Section 2............................................................................. */}
      <div className="  py-4 ">
      <h1 className="text-center my-5" style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '64px',
          fontWeight: 500,
          lineHeight: '55.9px',
          letterSpacing: '0.06em',
          textAlign: 'left',
          color: '#8FB1BF',
          marginBottom:'5%',
          padding: '10px' /* Optional: Adds padding for better readability */
}}>
    ARTIFICIAL INTELLIGENCE (AI)
</h1>
        <div className="container mb-4 my-5 ">
          <p className="custom-p bg-light container pb-5 px-4 mb-1 mt-5 shadow" style={{ marginLeft: '1%', width: '97%', borderRadius: '27px', padding: '20px' }} >
            AI is a key component of our operations, enabling us to automate processes,
            streamline workflows, and deliver personalized services to our clients. Here's
            how we harness the power of AI:
          </p>
          <div className="d-flex flex-column mx-3 my-5 py-5">
            <div className="mb-4 d-flex flex-row">
            <img src={img1} alt="img" className="img-fluid ml-1 mr-5 mt-3" style={{ width: '70px', height: '70px',  marginRight: '5%' }} /> 
              <h2 className='custom-heading mt-2 ml-5 'style={{ color: '#74471F',width:'500px'  }}>Automated Property Management</h2>
              
               <p className='custom-paragraph 'style={{width:'50%'}}> AI-powered systems help us efficiently manage and maintain our clients'
                properties by automating tasks such as rent collection, maintenance scheduling,
                and tenant communication.
              </p>
            </div>
            <hr/>
            <div className="my-5 d-flex flex-row" >
            <img src={img2} alt="img" className="img-fluid mx-4 my-5" style={{ width: '70px', height: '70px', marginLeft: '15px', marginRight: '35px' }} />
              <h4 className='custom-heading mx-5 my-5' style={{ color: '#74471F',width:'400px' ,marginRight:'8%'}}>Market Analysis</h4>
              <p className='custom-paragraph ' style={{width:'50%'}}>
                AI algorithms analyze vast amounts of real estate data to provide us with
                valuable insights into market trends, property values, and investment
                opportunities, allowing us to make informed decisions and recommendations to
                our clients.
              </p>
            </div>
            <hr/>
            <div className="my-5 d-flex flex-row">
            <img src={img3} alt="Customer Service Management" className="img-fluid mx-3 my-5" style={{ width: '70px', height: '70px', marginLeft: '15px', marginRight: '35px' }} />

           
              <h4 className='custom-heading mx-5 my-5 ' style={{ color: '#74471F',width:'400px',marginRight:'8%'  }}>Customer Service Management</h4>
              <p className='custom-paragraph ' style={{width:'50%'}}>
                AI algorithms analyze vast amounts of real estate data to provide us with
                valuable insights into market trends, property values, and investment
                opportunities, allowing us to make informed decisions and recommendations to
                our clients.
              </p>
            </div>
          </div>
        </div>
         {/* Section 3 ...................................................*/}
         <div className='' style={{ position: 'relative', width: '80%', marginLeft: '3%' }}>
    {/* Existing Divs on Top of the Image */}
    <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', zIndex: 10 }}>
        <div className="container form-control form-control-lg d-flex flex-row align-items-center mb-3 shadow" style={{ borderRadius: '33px', padding: '1% 5% 5% 5%', backgroundColor: '#F2F2F2', margin: '0' }}>
            <img src={img4} alt="Data Analytics" className="img-fluid ms-3 me-1" style={{ width: '30px', height: '30px' }} />
            <h4 className="m-0" style={{ color: '#8FB1BF', fontFamily: 'Montserrat, sans-serif', fontSize: '60px', fontWeight: 500, lineHeight: '55.9px', letterSpacing: '0.06em', textAlign: 'center' }}>
                <span>DATA</span>
                <span style={{ marginLeft: '17px' }}>ANALYTICS</span>
            </h4>
        </div>
        <div style={{ position: 'absolute', top: '70%', left: '0', transform: 'translateY(-50%, -25%)', width: '84%', backgroundColor: '#fff', borderRadius: '40px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <p className="mb-0"style={{ borderRadius: '60px 0 0 0', position: 'relative', boxSizing: 'border-box', textAlign: 'justify'}}>
                Data analytics plays a crucial role in our decision-making process,
                allowing us to derive actionable insights from large volumes of data. 
                Here's how we use data analytics to drive value for our clients:
            </p>
        </div>
    </div>

    {/* Image Positioned on the Right */}
    <img src={house} alt="img" className="img-fluid" style={{ position: 'relative', display: 'block', width: '63%', marginLeft: '55%', marginTop: '20px' }} />

    {/* New Div Positioned Next to the Image */}
    <div className="pb-5 mb-1" style={{ marginLeft: '0', position: 'absolute', top: '37%', left: '1%', transform: 'translateY(-50%)', width: '70%', backgroundColor: '#fff', borderRadius: '27px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>     
    <div className='d-flex flex-row mb-3' style={{ backgroundColor: '#8FB1BF', borderRadius: '27px', padding: '5px' }}>
            <img src={img5} alt="Predictive Modeling" className="img-fluid " style={{ width: '30px', height: '30px', marginRight: '7%' }} />
            <h4 className='m-0' style={{ color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif' }}>PREDICTIVE MODELING</h4>
        </div>
        <p className="mb-2" style={{  fontSize: '22px', fontWeight: 300, lineHeight: '40px', textAlign: 'justify' }}>
            By analyzing historical data and market trends, we can develop predictive models to forecast property prices, rental yields, 
            and investment returns, helping our clients make informed decisions about their real estate investments.
        </p>
    </div>

    {/* 2nd New Div Positioned Next to the Image */}
    <div className="pb-5 " style={{ marginLeft: '0', position: 'absolute', top: '57%', left: '1%', transform: 'translate(30%,-40%)', width: '70%', backgroundColor: '#F2F2F2', borderRadius: '27px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>     
    <div className='d-flex flex-row mb-3' style={{ backgroundColor: '#8FB1BF', borderRadius: '27px', padding: '5px' }}>
            <img src={img5} alt="Predictive Modeling" className="img-fluid " style={{ width: '30px', height: '30px', marginRight: '7%' }} />
            <h4 className='m-0' style={{ color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif' }}>PREDICTIVE MODELING</h4>
        </div>
        <p className="mb-0" style={{  fontSize: '22px', fontWeight: 300, lineHeight: '40px', textAlign: 'justify' }}>
            By analyzing historical data and market trends, we can develop predictive models to forecast property prices, rental yields, 
            and investment returns, helping our clients make informed decisions about their real estate investments.
        </p>
    </div>

    {/* 3rd New Div Positioned Next to the Image */}
    <div className="pb-5 mb-1" style={{ marginLeft: '0', position: 'absolute', top: '62%', left: '1%', transform: 'translate(60%,40%)', width: '70%', backgroundColor: '#fff', borderRadius: '27px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>     
    <div className='d-flex flex-row mb-3' style={{ backgroundColor: '#8FB1BF', borderRadius: '27px', padding: '5px' }}>
            <img src={img5} alt="Predictive Modeling" className="img-fluid " style={{ width: '30px', height: '30px', marginRight: '7%' }} />
            <h4 className='m-0' style={{ color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif' }}>PREDICTIVE MODELING</h4>
        </div>
        <p className="mb-2" style={{  fontSize: '22px', fontWeight: 300, lineHeight: '40px', textAlign: 'justify' }}>
            By analyzing historical data and market trends, we can develop predictive models to forecast property prices, rental yields, 
            and investment returns, helping our clients make informed decisions about their real estate investments.
        </p>
    </div>
</div>

    {/*  New Div Positioned above  the Image */}
    <div className='' style={{ position: 'relative',marginTop:'10%' }}>
    {/* Heading Section */}
    <div className="container bg-light pb-5 mb-1 mt-5 shadow" style={{ marginLeft: '10%', width: '50%', borderRadius: '27px', padding: '20px' }}>
        <h2 style={{ color: '#8FB1BF' }}>VIRTUAL REALITY AND AUGMENTED REALITY</h2>
    </div>

    {/* Text Section */}

    <div className="container pb-5 mt-5" style={{ marginLeft: '10%', width: '43%', backgroundColor: '#F2F2F2', borderRadius: '27px', padding: '20px', position: 'relative', zIndex: 2 }}>
        <p className="py-3" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '22px', fontWeight: 300, lineHeight: '40px', textAlign: 'justify' }}>
            By analyzing historical data and market trends, we can develop predictive models to forecast property prices, rental yields, 
            and investment returns, helping our clients make informed decisions about their real estate investments.
        </p>
    </div>

    {/* Image Section */}
    <div className="container mt-5 " style={{ position: 'absolute', top: '77%',width: '100%',zIndex: 1, transform: 'translateY(-70%)' }}>
        <img src={filter} alt="Predictive Modeling"  style={{
            width: '100%',
            height: 'auto',
            opacity: '40%',
            mixBlendMode: 'burn'
        }} />
    </div>

     {/* Heading Section */}
     <div className="container px-5  mt-5 shadow" style={{backgroundColor:'#FFFFFF',marginLeft: '30%', width: '49%', borderRadius: '40px', padding: '4px',position: 'relative', zIndex: 2  }}>
        <h3 className='' style={{  fontFamily: 'Montserrat, sans-serif',fontSize:'60px',color: '#8FB1BF' }}>BLOCKCHAIN TECHNOLOGY</h3>
    </div>


{/* Text Section */}
<div className="container custom-border pb-5 mt-5" style={{ marginLeft: '32%', width: '47%', borderRadius: '27px', padding: '20px', position: 'relative', zIndex: 2 }}>
        <p className="mb-0" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '22px', fontWeight: 300, lineHeight: '40px', textAlign: 'justify' }}>
            By analyzing historical data and market trends, we can develop predictive models to forecast property prices, rental yields, 
            and investment returns, helping our clients make informed decisions about their real estate investments.
        </p>
    </div>


</div>
        

  </div>
 {/* Section  ...................................................*/}
     




        
      
   
      
    </div>
  );
}

export default App;


