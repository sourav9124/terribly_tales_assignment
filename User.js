import React,{useState} from 'react';


const User=()=>{

    const [value1,setvalue]=useState(10);
    let stored=0;

    const valueBox=(event)=>{
        event.preventDefault();

        setvalue(event.target.value);
        stored=event.target.value;
        console.log(stored);
    }



      return (
        <>
        
        <h1 >Provide User Input</h1>
        <div className="container">
 <form class="form-inline">
  
  <div class="form-group mx-sm-3 mb-2">
    
    <input type="text" class="form-control" name={value1} style={{color:"black"}} id="number" placeholder="Enter a number"

      value={stored}
    />
  </div>

  <button type="submit" onClick={valueBox} class="btn btn-primary mb-2">Click to Submit</button>
</form>
</div>

        </>

          
      );
}
export default User;
