import React,{useState,useRef} from "react";
import data from './data.json'
import QuestionPaper from "./QuestionPaper";
const Content = () => {
  // console.log(data)
  let [id,setId]=useState(1)
  let [countAns,setCountAns]=useState(0)
 
 
  
  // let [elemArray , setElemArray]=useState(0)
  const arr=[];
  var count=0;
//  console.log(arr)
  
  const [drive, setDrive] =useState(""); // the lifted state
  
  const selectedOption = (index) => { 
    setDrive(index);
    console.log(drive)
  };
  
  let[clicked,setClicked]=useState(0)

  const getId=(index)=>{
    setClicked(index)
  }


  function handelIncr(){

    for(var i=0;i<10;i++)
    {
      if(arr[i]!=0)
      {
        count++;
      }
    }
    setCountAns(count)


    if(drive){
      
        arr[clicked-1]=drive;
        console.log(":fksjdh")
        console.log(arr[clicked-1])
        console.log(arr)


    }

    if(id<10)
    {
      id++;
      setId(id)
    }
    
  }
  // console.log("selectedOption"+selectedOption)
  function handelDecr(){
    if(id>1)
    {
      id--;
      setId(id)
    }
    else{
      setId(1)
    }
  }


   

  return (
    <div className="row me-0 mt-3">
      <div className="col-9 contFirst">
        <div>
          <button className="contButton ms-3">All Section</button>
          <button className="contButton ms-3">PHYSICS</button>
          <button className="contButton ms-3">CHEMISTRY</button>
          <button className="contButton ms-3">MATH</button>
        </div>
        <hr className="ms-3 " />
        {/* kdsjjsdljfljskdveh gkjgf evhgkdfhkghrvdh */}
        {
            data.map((e)=>{
              // console.log("e.id"+e.id)  
                {
                  
                  if(e.id==id)
                  {
                    // setElemArray(e.id)
                    return(
                      <>
                      
                      <QuestionPaper e={e} selectedOption={selectedOption}  getId={getId}  />
                      </>
                    )
                  }
                
                
                }
            })
          
        }
        <div className="lastButtons mt-3 ms-3">
          <button className="contButton specialButton ms-3">
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
             

             
              return (

                <button className="queNumberId" 
                 onClick={()=>{
                  setId(e.id)
                }}>{e.id}</button>
              )
            })
          }
          
        </div>


        {/* legend click to View */}
        <div className="quePallete legendReview mt-1">
          <div className="queSubPallete">
                <h5 className="quesNo ms-2 pt-1">Legend (Click To View )</h5>
          </div>
          <button className="legendData">{countAns} Answer</button>
          <button className="legendData">2 No Answer</button>
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
