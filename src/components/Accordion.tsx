import './Accordion.css'

interface accordionDetails {
    question: string
    answer: string
    numberAsString: string
}
function Accordion(data: accordionDetails){
  return (
   <div className="accordion-item" style={{padding: "5px"}}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#collapse" + data.numberAsString}
              aria-expanded="false"
              aria-controls={"#collapse" + data.numberAsString}
            >
              <strong>{data.question}</strong>
            </button>
          </h2>
          <div
            id={"collapse" + data.numberAsString}
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {data.answer}
            </div>
          </div>
        </div>
  )
}

export default Accordion