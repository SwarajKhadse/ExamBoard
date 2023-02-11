import React,{useState,useRef,useEffect} from "react";
import data from './data.json'
import QuestionPaper from "./QuestionPaper";

const getLocalItmes = (low,high) => {
  let list=[] ;
  var temp
  for(var i=low-1;i<high;i++)
  {
     temp = (localStorage.getItem(i));
    if(temp)
    {

      list[i-1]=temp
    }
    else{
      list[i-1]=0;
    }
  }
//  console.log(list)
  if (list) {
    var total=[]
    console.log("asjdal")
    for(var i=low-1;i<high;i++)
    {
      var zp= JSON.parse(localStorage.getItem(i+1));
      if(zp)
      {
        total[i]=zp
        console.log(zp)
      }
      else{
        zp=0
        total[i]=zp
        console.log(zp)
      }
    }
    
      return total
    } else {
      return [];
  }
}

const Content = () => {


  const [low , setLow]=useState(1)
  const [high , setHigh]=useState(30)

   

    function physics()
    {
      setLow(1)
      setHigh(10)
    }
    function all()
    {
      setLow(1)
      setHigh(30)
    }
   
    function chemistry()
    {
      setLow(11)
      setHigh(20)
    }
    
    function math()
    {
      setLow(21)
      setHigh(30)
    }
    

  // console.log(data)
  let [id,setId]=useState(1)
  let [countAns,setCountAns]=useState(1)
 
 
  // const arr=new Map()
   var count=0;

   var [finalAns,setFinalAns]=useState([])
   
  
  const [drive, setDrive] =useState(); // the lifted state
  
  const selectedOption = (index) => { 

    setDrive(index);

  };

  let[clicked,setClicked]=useState()

  const getId=(sam)=>{
    
    setClicked(sam)
    
  }

  useEffect(()=>{
    localStorage.setItem(clicked, JSON.stringify(drive))
  },[drive])


  function handelIncr(){

    for(var i=low-1;i<high;i++)
    {
      if(finalAns[i]!="0")
      {
        count++;
      }
    }
    setCountAns(count+1)
    console.log("dhsak")
    console.log(countAns)

    var disco = getLocalItmes(low,high)
    for(var i=low-1;i<high;i++)
    {
        finalAns[i]=disco[i];
    }
    console.log("dfsl")
    console.log(finalAns)
    console.log("dfsl")
   

    if(id<high&&id>=low)
    {
      id++;
      setId(id)
    }
    else
    {
      id=low;
    }
    
  }
  // console.log("selectedOption"+selectedOption)
  function handelDecr(){
    for(var i=low-1;i<high;i++)
    {
      if(finalAns[i]!=0)
      {
        count++;
      }
    }
    setCountAns(count+1)
    console.log("dhsak")
    console.log(countAns)

    var disco = getLocalItmes(low,high)
    for(var i=low-1;i<high;i++)
    {
        finalAns[i]=disco[i];
    }
    if(id>low&&id<=high)
    {
      id--;
      setId(id)
    }
    else{
      setId(low)
    }
  }


  function clearResponse(){
    
    // console.log(finalAns[clicked])
     localStorage.removeItem(id)
     
     
  }

  return (
    <div className="row me-0 mt-3">
      <div className="col-9 contFirst">
        <div>
          <button className="contButton ms-3" onClick={all}>All Section</button>
          <button className="contButton ms-3" onClick={physics}>PHYSICS</button>
          <button className="contButton ms-3" onClick={chemistry}>CHEMISTRY</button>
          <button className="contButton ms-3" onClick={math}>MATH</button>
        </div>
        <hr className="ms-3 " />
        {/* kdsjjsdljfljskdveh gkjgf evhgkdfhkghrvdh */}
        {
            data.map((e)=>{
              // console.log("e.id"+e.id)  
                {
                  
                  if(e.id==id)
                  {
                    if(e.id>=low&&e.id<=high)
                    return(
                      <>
                      <QuestionPaper e={e} selectedOption={selectedOption}  getId={getId}  finalAns={finalAns[e.id]} />
                      </>
                    )
                  }
                }
            })
          
        }
        <div className="lastButtons mt-3 ms-3">
          <button className="contButton specialButton ms-3" onClick={clearResponse}>
            CLEAR RESPONSE
          </button>
          <button className="contButton ms-3">REVIEW</button>
          <button className="contButton ms-3">DUMP</button>
          <button className="contButton ms-3" onClick={handelDecr}>PREVIOUS</button>
          <button className="contButton ms-3" onClick={handelIncr}>NEXT</button>
        </div>
      </div>
      <div className="col-3">
        <div className="d-flex profile">
          <img
            className="profileImage ms-3"
            src="https://t4.ftcdn.net/jpg/01/67/07/95/360_F_167079543_Rk1lsNYGxsfbJHXqM4y7voo3cmm1DcpV.jpg"
            alt=""
          />
          <div className="profileDetails">
            <div className="d-flex">

            <p className="ms-3 pText">Time Left : </p>
            <p className="ms-1 pText"> 01:01:01</p>
            </div>
            <div>
              <p className="ms-3 name pText pTextName">XYZ ABC</p>
            </div>
          </div>
        </div>



        {/* question pallete */}
        <div className="quePallete mt-1">
          <div className="queSubPallete">
                <h5 className="quesNo ms-2 pt-1">Question Pallete</h5>
          </div>

          {
            data.map((e)=>{
             
              if(e.id>=low&&e.id<=high)
              return (
                // queNumberId
                <button className={e.id==id?"currButton":finalAns[e.id-1] && countAns>=0 ? "saveButton" :finalAns[id-1]==0?"queNumberId": "queNumberId"} 
                 onClick={()=>{
                  setId(e.id)
                }}  >{e.id}</button>
              )
            })
          }
          
        </div>


        {/* legend click to View */}
        <div className="quePallete legendReview mt-1">
          <div className="queSubPallete">
                <h5 className="quesNo ms-2 pt-1">Legend (Click To View )</h5>
          </div>
          <button className="legendData">{countAns-1} Answer</button>
          <button className="legendData">{high-(countAns-1)} No Answer</button>
          <button className="legendData">1 Review + Ans</button>
          <button className="legendData">1 Review + Ans</button>
          <button className="legendData">1 Dump</button>
          <button className="legendData"> No Visit</button>
            <button className="allQue">10 All Question</button>
          </div>
      </div>
    </div>
  );
};

export default Content;
