import React from "react";

export default function About(props) {
  // const [text, setText] = useState("Dark");
  // const [myStyle, setMyStyle] = useState({
    // color: "black",
    // backgroundColor: "white",
  // });
  let myStyle={color:props.mode==='dark'||props.mode==='green'?'white':'black',
              backgroundColor:props.mode==='dark'||props.mode==='green'?'black':'white',
              border:'2px solid',
              borderColor:props.mode==='dark'||props.mode==='green'?'white':'#f1e7e700'
}
  
  // const toggleStyle = () => {
    // if (
    //   // myStyle.color ==="black"
    //   props.mode==='light'

    // ) {
    //   setMyStyle({
    //     color: "white",
    //     backgroundColor: "black",
    //     border:"2px solid white"
    //   });
    //   setText("Light");
  
    // } else {
    //   setMyStyle({
    //     color: "black",
    //     backgroundColor: "white",
    //   });
    //   setText("Dark");
      
    // }
  // };
  return (
    <div className="container" style={{color:props.mode==='dark'||props.mode==='green'?'white':'black'}}>
      <h2 className="my-3">About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Analyze your text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Do some basic stuff with your next like if you want to capitalize it or may be lower it or may be do some other stuff its very fun to do it.<code>.accordion-body</code>,
              though the transition does limit overflow.</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
             Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Unlike the website who charge you with a monthly subscription this is awesome and free to use.Just like that.</strong>  <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              How to use
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Just click and the buttons you'll see the magic also some additional features for the diurnal ans nocturnal living beings..</strong>  <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-2"  >
      <button type="button" className="btn btn-dark" onClick={toggleStyle} >{text}</button>
      </div> */}
    </div>
  );
}
// className="btn btn-dark"