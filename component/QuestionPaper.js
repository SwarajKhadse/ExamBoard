import React,{useState} from 'react'

const QuestionPaper = ({e ,selectedOption,getId ,finalAns}) => {
 
  const [ans, setAns] = useState();
  const [generateId,setGenerateId]=useState(0)
  
selectedOption(ans)

getId(generateId)

  return (
    <>
    <div className="mainDiv ms-3">
          <div className="questionNo d-flex ">
            <h6 className="quesNo mt-1 ms-2">Q.NO {e.id}</h6>
            <h6 className="quesNo mt-1 ms-3 text-end viewButt">View in :</h6>
          </div>
          {/* question paper  */}
          <div
            className="row "
            style={{
              height: "31vw",
            }}
          >
            <div className="col-6 quesPaper">
              <div className="queInstruHeadDiv">
                <h6 className=" ms-2 queInstruHead">QUESTION INSTRUCTION</h6>
              </div>
              <div>
                <p className="ms-2 me-0 QuesDetail">
                 {e.questionInstruction}
                </p>
              </div>
            </div>
            <div className="col-6 quesPaperRight">
              <div className="queInstruHeadDiv">
                <h6 className="ms-2 queInstruHead">QUESTION</h6>
              </div>
              <div>
                <p className="ms-2 QuesDetail">
                  {e.question}
                </p>
                <hr />

                  {/* <h1>{ans}</h1> */}
                      <div  >
                    <label htmlFor="option0">
                      <input
                        className="me-2 ms-3"
                        type="radio"
                        name="option"
                        id="option0"
                        value={e.id}
                     
                        onChange={e=>{
                          setAns("opt1"),
                          setGenerateId(e.target.value)
                        }}
                      />
                      {e.option1}
                    </label>
               
                  <hr />
                    <label htmlFor="option1">
                      <input
                        className="me-2 ms-3"
                        type="radio"
                        name="option"
                        id="option1"
                       
                        value={e.id}
                        onChange={e=>{
                          setAns("opt2"),
                          setGenerateId(e.target.value)
                        }}
                      />
                      {e.option2}
                    </label>
                  <hr />
                    <label htmlFor="option2">
                      <input
                        className="me-2 ms-3"
                        type="radio"
                        name="option"
                        id="option2"
                        
                        value={e.id}
                        onChange={e=>{
                          setAns("opt3"),
                          setGenerateId(e.target.value)
                        }}
                      />
                      {e.option3}
                    </label>
                  <hr />
                  
                    <label htmlFor="option3">
                      <input
                        className="me-2 ms-3"
                        type="radio"
                        name="option"
                        id="option3"
                        value={e.id}
                        
                        onChange={e=>{
                          setAns("opt4"),
                          setGenerateId(e.target.value)
                        }}
                      />
                      {e.option4}
                    </label>
                  <hr />
                    </div>
                






              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default QuestionPaper