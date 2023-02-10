import React,{useState} from 'react'

const QuestionPaper = ({e ,selectedOption,indexFinal}) => {
  
  const [ans, setAns] = useState();
  const [index, setIndex] = useState();
  
selectedOption(ans)

setIndex(e.id)
indexFinal(index)
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
                        value="opt1"
                        onChange={e=>{
                          setAns(e.target.value)
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
                        value="opt2"
                        onChange={e=>{
                          setAns(e.target.value)
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
                        value="opt3"
                        onChange={e=>{
                          setAns(e.target.value)
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
                        value="opt4"
                        onChange={e=>{
                          setAns(e.target.value)
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