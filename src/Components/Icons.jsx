import React from 'react';

const Icons = ({
  firstheadline,
  firsttext,
  secondheadline,
  secondtext,
  thirdheadline,
  thirdtext,
  fourthheadline,
  fourthtext
}) => {
  return (
    <div className="whitespace">
      <div>
        <img src="./images/icon1.png" className="Icons" alt="icon" />
        <h3 className="icontext">{firstheadline}</h3>
        <p className="icontext"> {firsttext} </p>
      </div>
      <div>
        <img src="./images/icon2.png" className="Icons" alt="icon" />
        <h3 className="icontext">{secondheadline}</h3>
        <p className="icontext"> {secondtext}</p>
      </div>
      <div>
        <img src="./images/icon3.png" className="Icons" alt="icon" />
        <h3 className="icontext">{thirdheadline}</h3>
        <p className="icontext"> {thirdtext} </p>
      </div>
      <div>
        <img src="./images/icon4.png" className="Icons" alt="icon" />
        <h3 className="icontext">{fourthheadline}</h3>
        <p className="icontext">{fourthtext} </p>
      </div>
    </div>
  );
};

export default Icons;
