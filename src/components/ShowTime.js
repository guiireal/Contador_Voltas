import React from 'react';

const ShowTime = props => {
  const time = props.time;
  const minutes = Math.round(time / 60);
  const seconds = time % 60;
  const zeroLeft = number => number < 10 ? `0${number}` : number;

  return (
    <p className='time'>
      <span>{`${zeroLeft(minutes)}:${zeroLeft(seconds)}`}</span><br/>
      Tempo médio por volta
    </p>
  );
};

export default ShowTime;