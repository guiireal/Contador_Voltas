import React from 'react';

const ShowRounds = ({ rounds }) => {
  let roundsStr = 'Voltas';
  if (rounds === 0) roundsStr = 'Nenhuma volta';
  else if (rounds === 1) roundsStr = 'Volta';

  return (
    <p className='rounds'>
      <span>{rounds}</span>
      <br/>
      {roundsStr}
    </p>
  );
};


export default ShowRounds;