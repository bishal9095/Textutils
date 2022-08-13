import React from "react";

export default function Alert(props) {
    const capitalize=(type)=>{
        
        return type[0].toUpperCase()+type.slice(1)
    }
    
    return (
    props.alert && <div>
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong> {props.alert.message}
        {/* <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button> */}
      </div>
    </div>
  );
}
