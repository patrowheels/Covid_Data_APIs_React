import React, { useState, useEffect } from "react";
import covid from "../APIs/covid";
import '../App.css';

function MainFunctional() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data4, setData4] = useState([]);
   

  useEffect(() => {
    covid.getCurrentCovidStats().then((response) => {
      // console.log("response", response);
      setData(response);
    });

    covid.getUsaPopulation().then((response) => {
      // console.log("response", response);
      setData2(response);
    });

    covid.getUsaStateAbrs().then((response) => {
      // console.log("response", response);
      setData4(response);
    });

     // 👇 add class to body element
     document.body.classList.add('nice_color');

     // 👇️ set style on body element
     document.body.style.backgroundColor = "#DCDCF5";
 
     return () => {
       // 👇️ optionally remove styles when component unmounts
       document.body.style.backgroundColor = null;
 
       document.body.classList.remove("#DCDCF5");
     };

    
  }, []);

  // data.map((item) => {
  //   var datee = item.date
  //   // console.log(typeof(datee))
  //   // var date = datee.toString()
  //   // console.log(date)
  //   // console.log(date.slice(0,4))
  // })

data2.sort()

  data2.map((item) => {
    var state = item[0]
    var population = item[1]
    // item.push(1)
    console.log(state + " " + population)
    // console.log(item)
  })



                              // var pos = data4[Object.keys(data4)[0]]
                              // console.log(pos)
                              // for (const property in data4) {
                              //   console.log(`${property}: ${data4[property]}`);
                              // }

                              
// this sorts the data3 object by its values in abc order
// this makes an object with property every state abbreviation and value every state name
// const sortable = Object.fromEntries(
//   Object.entries(data4).sort(([,a],[,b]) => a-b)
// );
// console.log(sortable);

  return (
    <div className="App">
      <div style={{fontSize: "75px", backgroundColor: "#DCDCF5",textShadow: "2px 2px 2px grey",color: "white",fontWeight: "bolder",marginTop: "10px"}}>USA Covid Rates</div>
      <div style={{fontSize: "55px", backgroundColor: "#DCDCF5",textShadow: "2px 2px 2px grey",color: "white",fontWeight: "bolder"}}>March 7th 2021</div>
      {data.map((item, index) => {
        if (item.state != "AS"){

        return (
          
          <div id="box">
          <div key={index}>
            
            <div style={{fontSize: "50px", backgroundColor:"white"}}>State: {item.state}</div>
            <div style={{fontSize: "50px",backgroundColor:"beige"}}>Positives: {item.positive}</div>
            <div style={{fontSize: "50px",backgroundColor:"beige"}}>Population: {}</div>
            <div style={{fontSize: "50px", backgroundColor:"white"}}>Hospitalized: {item.hospitalized}</div>
            <div style={{fontSize: "50px", backgroundColor:"beige"}}>Deaths: {item.death}</div>

          </div>
          </div>
          
        );
        }
      })}
    </div>
  );
}

export default MainFunctional;
