import React from "react";
import { styled } from "styled-components";
import Ticket from "./Ticket";
// import { useReactToPrint } from "react-to-print";

export default function Step4({ ticketId, setTicketId }) {
  const componentRef = React.useRef();
  //   const handlePrint = useReactToPrint({
  //     content: () => componentRef.current,
  //   });

  return (
    <Wrapper className="pt-4">
      <h2 className="tufr text-center textAccent txtClrPrimary">
        Thank Your for Registering!
      </h2>
      <p className="hyt text txtClrSecondary small fw-medium text-center mb-0">
        Here's your ticket
      </p>

      <Ticket
        ticketId={ticketId}
        setTicketId={setTicketId}
        ref={componentRef}
      />

      {/* <div className="d-flex-ec gap-2 py-3">
        <button className="btn btn-outline-dark"> Register Another </button>
        <button
          className="btn btn-warning bgClr2 text-white"
          onClick={handlePrint}
        >
          Download Ticket
        </button>
      </div> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .tufr {
    font-size: 20px;
    background: linear-gradient(
      290deg,
      rgb(247, 4, 234),
      rgb(211, 65, 151),
      rgba(248, 100, 5),
      rgba(178, 29, 247)
    );
    /* background-clip: text; */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .hyt {
    color: var(--text);
  }
`;
