import React, {useState} from 'react';

function Test(props) {
  const [tgl, setTgl] = useState("2022-10-12"); //a new feature called hooks allowing to use state inside function
  // state = {
  //   tgl: '123' //earlier ver of React allowed to use state only with class component
  // }

  return(
    <div>
      <h2>Hallo</h2>
      <p>Namaku {props.name}</p>
      <p>Hari ini tanggal {tgl}</p>
    </div>
  )
}

export default Test;