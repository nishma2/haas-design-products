import './Switch.css';
import { useState, useEffect } from 'react';

function DarkMode() {

  const [checked, setChecked] = useState(false); 

  const handleChange = (e) => {
    setChecked(e.target.checked);
    if (checked){
      document.body.style.backgroundColor = '#000';
    }
    else{
      document.body.style.backgroundColor = '#e4e4e4';
    }
    
  }


    return(
<div className='parent'>    
<label className="switch">
  <input type="checkbox"  
    onClick = {handleChange}/>
  <span className="slider round"></span>
  {checked ? (
            <div> Checkbox is checked. </div>
         ) : (
            <div> Checkbox is not checked. </div>
         )}
</label>



</div>
    )
}
export default DarkMode