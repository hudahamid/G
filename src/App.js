import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import './inovation.css';



const Service = () => {
  return (
    <>
      <div style={{ minHeight: '100vh' }}>
         {/* =======================Section 1 ==============================================================================================*/}
         <div className="background-image-color d-flex flex-column align-items-center py-5 " >
                
                <div >
                <h3 className="h3-responsive my-5 py-sm-5 px-2 ">
                   INNOVATION AND <span className="and-technology "> TECHNOLOGY</span>
                 </h3>
                </div>
                <div className="col-10 col-lg-8 pb-3">
                <p className='sec1-p' >
                    At Global Property, we are committed to staying at the forefront of innovation in the
                    luxury real estate market. We leverage advanced technologies, including artificial
                    intelligence (AI) and data analytics, to enhance our services and provide our clients
                    with a superior real estate experience. Explore how we use these technologies to
                    revolutionize the way we operate and deliver value to our clients:
                </p>
                
                </div>  
                <img src='./inovation/logo-sm.png' className='responsive-logo' alt='Global Property Logo' />
          </div>
         
      </div>
 

       
    {/*===============================================================Section 2==================================================================================== */}
    <div className="section2  pb-4 ">
      <h1 className="sec2-h text-center px-lg-2 mb-2 mt-0" style={{color: '#8FB1BF'}}>  ARTIFICIAL INTELLIGENCE (AI)</h1>

       <div className=" sec2-p container bg-white   shadow   ">
                <p  >
                  AI is a key component of our operations, enabling us to automate processes,
                  streamline workflows, and deliver personalized services to our clients. Here's
                  how we harness the power of AI:
                </p>  
           </div>
      </div>

      {/* ............................................ table ........................................................... */}
      <div className="sec2table d-flex flex-column  ">
              <div className="mb-4 d-flex flex-row">
                <div className="imgH d-flex flex-column flex-sm-column flex-md-row">
                  <img src='./inovation/Clip.png' alt="img" className="img-fluid large-screen  img-responsive" />
                  <img src='./inovation/Capture.png' alt="img" className="img-fluid small-screen  mb-2  img-responsive" />
                  <h2 className="table-h  ">Automated Property Management</h2>
                </div>
                <p className="table-paragraph  ">
                  AI-powered systems help us efficiently manage and maintain our clients'
                  properties by automating tasks such as rent collection, maintenance scheduling,
                  and tenant communication.
                </p>
              </div>


              <hr />
              <div className="my-5 d-flex flex-row">
                <div className=" imgH d-flex flex-column flex-sm-column flex-md-row">
                  <img src='./inovation/Group.png' alt="img" className="img-fluid large-screen  img-responsive" />
                  <img src='./inovation/Capture2.png' alt="img" className="img-fluid small-screen  img-responsive" />
                  <h4 className="table-h mr-lg-7">Market Analysis</h4>
                </div>
                <p className="table-paragraph xyz ml-lg-5">
                  AI algorithms analyze vast amounts of real estate data to provide us with
                  valuable insights into market trends, property values, and investment
                  opportunities, allowing us to make informed decisions and recommendations to
                  our clients.
                </p>
              </div>
              <hr />
              <div className="my-5 d-flex flex-row">
                <div className="imgH  d-flex flex-column flex-sm-column flex-md-row">
                  <img src='./inovation/Vector.png' alt="Customer Service Management" className="img-fluid large-screen  img-responsive" />
                  <img src='./inovation/Capture3.png' alt="img" className="img-fluid small-screen  img-responsive" />
                  <h4 className="table-h  ">Customer Service Management</h4>
                </div>
                <p className="table-paragraph ">
                  AI algorithms analyze vast amounts of real estate data to provide us with
                  valuable insights into market trends, property values, and investment
                  opportunities, allowing us to make informed decisions and recommendations to
                  our clients.
                </p>
              </div>
             </div>
{/* *****************************************************     section 3         ************************************************************** */}
<div className='mt-5 relative-div clearfix' style={{ clear: 'both' }}>

      {/* Existing Divs on Top of the Image */}
      <div className="absolute-div-top">

            <div className="form-container container   form-control form-control-lg d-flex flex-row align-items-center mb-3 shadow ">
              <img src='./inovation/Rectangle110.png' alt="Data Analytics" className="img-fluid ms-3 me-1 form-img" />
              <h4 className=" form-heading m-0">
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
          <img src='./inovation/Rectangle112.png' alt="Predictive Modeling" className="img-fluid new-div-img ml-4 pl-3" />
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
          <img src='./inovation/Rectangle112.png' alt="Predictive Modeling" className="img-fluid new-div-img ml-4 pl-3" />
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
          <img src='./inovation/Rectangle112.png' alt="Predictive Modeling" className="img-fluid new-div-img ml-4 pl-3" />
          <h4 className='div-h m-0'>PREDICTIVE MODELING</h4>
        </div>
        <p className="mb-2 new-div-p">
          By analyzing historical data and market trends, we can develop predictive models to forecast property prices, rental yields,
          and investment returns, helping our clients make informed decisions about their real estate investments.
        </p>
      </div>

      {/* Image Positioned Right */}
      <img src='./inovation/bg2.png' alt="img" className="img-positioned-right" />
      </div>

      <div>
  
  </div>


  {/* sm and md image  */}
  <div className='mb-5 pb-5'>
      <img src='./inovation/hs-sm.png' alt="Customer Service Management" className="bfImg  my-5 clearfix" style={{ clear: 'both' }}/>

  </div>
     
     
     
  {/* ///////////////////////////   section    last part  ////////////////////////////////////////////////////////*/}
  <div className="VR  " style={{ clear: 'both' }} >
       <div className='vrcont container  '>
              <h2 className='vrcont-h' >VIRTUAL REALITY AND AUGMENTED REALITY</h2>
       </div>

{/*  New Div Positioned above  the Image */}
<div className='last-bg'>
  
<div className="last-bg-container1 pb-5 mt-5" >
         <p className='p-sm'>We leverage VR and AR technologies to provide immersive and interactive experiences for our clients,
           allowing them to virtually tour properties, visualize design concepts, and make informed decisions from 
           anywhere in the world. These technologies enhance the buying and selling process by providing a more engaging
            and realistic representation of properties and designs.
         </p>
        {/* <p className='p-lg'>
            By analyzing historical data and market trends, we can develop predictive models to forecast property prices, rental yields, 
            and investment returns, helping our clients make informed decisions about their real estate investments.
        </p> */}
    </div>
    
       <div className='block-cont container  '>
              <h2 className='block-cont-h' >BLOCKCHAIN TECHNOLOGY</h2>
       </div>
    
    <div className="last-bg-container1 pb-5 mt-5" >
         <p className='p-sm'>We leverage VR and AR technologies to provide immersive and interactive experiences for our clients,
           allowing them to virtually tour properties, visualize design concepts, and make informed decisions from 
           anywhere in the world. These technologies enhance the buying and selling process by providing a more engaging
            and realistic representation of properties and designs.
         </p>
        
    </div>
</div>

    </div>
  

    





    </>
  );
};

export default Service;
