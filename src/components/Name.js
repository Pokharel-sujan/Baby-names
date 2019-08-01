import React from 'react'

/* ############################ */
/* ##### Single baby name ##### */
/* ############################ 

I assume there are 3 variables initated and used for further means.

classname  (either male or female), and onClick method further 

following is the structure of object

{
    id: 0,
    name: 'Aria',
    sex: 'girl'
  }


*/

export default ({ 
  id, 
  info, 
  handleFavourite 
}) => (
  <li
    className={info.sex}
    onClick={() => handleFavourite(id)}>
    {info.name}
  </li>
)