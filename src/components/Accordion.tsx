import './Accordion.css'
import {AccordionBody, AccordionItem, AccordionHeader, AccordionCollapse } from 'react-bootstrap'

interface accordionDetails {
    question: string
    answer: string
    numberAsString: string
}
function accordion(data: accordionDetails){
  return (
   <AccordionItem eventKey={data.numberAsString} style={{padding: "5px"}}>
          <AccordionHeader>
              <strong>{data.question}</strong>
          </AccordionHeader>
          <AccordionCollapse
          eventKey={data.numberAsString}
          >
            <AccordionBody>
              {data.answer}
            </AccordionBody>
          </AccordionCollapse>
        </AccordionItem>
  )
}

export default accordion