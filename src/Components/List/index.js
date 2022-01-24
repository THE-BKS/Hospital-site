import './styles.css';
// import { Container, Button, FormControl, InputGroup } from 'react-bootstrap';
import { useState } from 'react';
import RenderTask from './RenderTask';
// import RenderCompletedTask from './RenderCompletedTask';

function List() {
  const [arr, setArr] = useState(["akfh kafhkhdfkhfksdh khksfd kjh ksdhfk khdsfk khsdfkhkjsdfhkdfh kh hsdkfh dfjkshkhsdkf hksh", "akfh kafhkhdfkhfksdh khksfd kjh ksdhfk khdsfk khsdfkhkjsdfhkdfh kh hsdkfh dfjkshkhsdkf hkshsfhkshfksdhfksdbfksdbks", "sfhkshfksdhfkakfh kafhkhdfkhfksdh khksfd kjh ksdhfk khdsfk khsdfkhkjsdfhkdfh kh hsdkfh dfjkshkhsdkf hkshsdbfksdbks", "sfhkshfksdkjh ksdhfk khdsfk hfksdbfksdbks", 
  "sfhkshfksdhfksdbfksdbks", "sfhkshfksdhfksdbfksdbks", "sfhkjh ksdhfk khdsfk kshfksdhfksdbfksdbks", "sfhkshfksdkjh ksdhfk khdsfk kjh ksdhfk khdsfk hfksdbfksdbks", "sfhkshfksdhfksdbfksdbks", 
  "sfhkshfksdhfksdbfksdbks", "sfhkshfksdhfksdbfksdbks", "sfhkshfksdhfksdbkjh ksdhfk khdsfk fksdbks", "sfhkshfksdhfksdbfksdbks", 
  "sfhkshfksdhfksdbfksdbks", "sfhkshfksdhfksdbfkjh ksdhfk khdsfk ksdbks", "sfhkshfksdhfksdbfksdbks", "sfhkshfksdhfksdbfksdbks", 
  "sfhkshfksdhfksdbfksdbks", "sfhkshfksdhfksdbfksdbks", "sfhkkjh ksdhfk khdsfk shfksdhfksdbfksdbks", "sfhkshfksdhfksdbfksdbks"]);

  const handleBookNow = (index)=>{
    // let copyArr = [...arr];
    // copyArr.splice(index, 1);
    // setArr(copyArr);
    alert(`Your appointment for "${arr[index]}" has been booked successfully`)    
  }
  
  return (
    <section className="list" id="list">
      <div className="container">
        <h1 className="heading">Test/Package List</h1>
        <div className="box-container">
          <RenderTask arr={arr} handleBookNow={handleBookNow}/>
        </div>
      </div>
    </section>
  );
}

export default List;