import React from 'react';
import Card from './card';

const CardList = ({robots}) => { 
  const cardArray = robots.map((user, id) =>{
	return( 
		<Card 
			key={id} 
			name={robots[id].name} 
			email={robots[id].email} 
			id={robots[id].id}/>
		);
});

return(
<div>
    {cardArray}
</div>    
	);

}

export default CardList;