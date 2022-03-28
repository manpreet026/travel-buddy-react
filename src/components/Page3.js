import React from 'react'
export default function Page3(props) {
  return (
    <div className="c justify-content-md-center" style={{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",padding:"0px"}}>
    <div className="row justify-content-md-center mx-1 my-5"style={{width:"80%",alignContent:"center",padding:"0px"}}>
      {props.title.map(place => (
        <div className="col-sm-md-auto card mx-4 my-3" style={{padding:"0px",margin:"0px"}}>
          <div className="card" style={{ width: "18rem" ,border: "0px",alignSelf:"center" }}>
            <img style={{ height: "20rem", width: "18rem", padding: "1rem" }} src={place.Image} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">{place.name}</h5>
              <p className="card-text">Rating: {place.Rating}</p>
              <a href="/" className="btn btn-primary">See Details</a>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>

  )
}