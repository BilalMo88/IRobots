import React from 'react';
const Card =({name, email,id}) => {

return(
<div className='tc bg-dark-green dib br3 pa3 ma3 grow bw3 shadow-5'> 
<img alt='' src={`https://robohash.org/${id}?size=250x200`}/>
   <h2 className='f5 f4-ns fw6 mid-black '>{name}</h2>
   <p>{email}</p>
</div>


	);


}


export default Card; 