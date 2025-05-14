import { useState } from 'react';
import {data} from  './data'
import { Box } from '@mui/material';
const Slider = () => {
  const [index, setIndex] = useState(0);
  const dataPoster = data[index];
  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };
console.log("hello",index)
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };


  return (
    <main>
      <article className='review'>
        <Box sx={{width:"50%" ,height:"500px"}} className='img-container'>
          <img src={dataPoster} alt="moivew" className='person-img' />
        </Box>
        <Box className='btn-container'>
          <button className='prev-btn' onClick={prevPerson}>
           {">"}
          </button>
          <button className='next-btn' onClick={nextPerson}>
          { "<"}
          </button>
        </Box>
      </article>
    </main>
  );
};

export default Slider;
