import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { Button,Popup } from 'originate-react-components-library';
import { rgba, rem } from 'polished';
import styled from 'styled-components';
// import { format } from 'date-fns';

const RepaymentCard = ({
  percent,
  amountPaid,
  fullAmount,
  repaymentAmount,
  repaymentDate,
  className,
  BankDetails,
  portfolioNumber
}) => {
  const [showPopup, setShowPopup] = useState(false);

    const handleShowPopup = () => {
        setShowPopup(!showPopup);
    };

    const progressWidth = {
        width: `${Math.abs(percent).toFixed(2)}%`
    };


  return (
    <StyledRepayment className={'repayment-card'}>
      <div className="left">
        <h6>Your Current Repayment</h6>
        <h1>
          NGN {amountPaid} <span>of</span> NGN {fullAmount}
        </h1>
        <div className="repayment-progress">
          <span className="progress" style={progressWidth} />
        </div>
        <span className="text">{percent}% Complete</span>
      </div>
      <div className="right">
        <h6>Your Next Payment</h6>
        <h1>NGN {repaymentAmount}</h1>
        {/* <span className="text">{format(repaymentDate, 'MMMM D, YYYY')}</span> */}
        <Button className="secondary block" click_event={handleShowPopup}>Make a payment</Button>
                {
                    showPopup &&
                    
                        
                            <Popup title="Bank Details"  className="loan-requirements">
                                <p>You can make payment to the account below:</p>
                             
                                    <ul>
                                        <li>BANK NAME : First Bank</li>
                                        <li>ACCOUNT NUMBER : 932732732323</li>
                                        <li>ACCOUNT NAME : Kwikpay</li>
                                    </ul>
                                

                           
                                    <p>Use <span className="bold-text">{portfolioNumber}</span> as the narrative.</p>
                                
                                <div className="button-list center-text">
                                    <Button className="close-button" click_event={handleShowPopup}>Close</Button>
                                </div>
                            </Popup>
                    }
                   
                
            </div>
    </StyledRepayment>
  );
};

const StyledRepayment = styled.section`
  display: grid;
  grid-template-columns: 7fr 3fr;

  @include phone {
    grid-template-columns: 1fr;
  }

  @include tablet {
    grid-template-columns: 6fr 3fr;
  }

  @include phone {
    grid-template-columns: 1fr;
  }

  .left {
    padding: 0 ${rem('30px')} 0 0;

    @include phone {
      padding: 0 0 ${rem('20px')};
    }
  }

  .right {
    border: 0 solid ${({ theme }) => rgba(165, 173, 182, 0.3)};
    border-left-width: 2px;
    padding: 0 0 0 ${rem('30px')};

    @include phone {
      border-left-width: 0;
      border-top-width: 1px;
      padding: ${rem('30px')} 0 0;
    }
  }

  h6 {
    color: ${({ theme }) => theme.__OriginateLib.colors.primary};
    font-size: ${rem('12px')};
    margin: 0 0 ${rem('20px')};

    @include phone-tablet {
      margin: 0 0 t ${rem('15px')};
    }
  }

  h1 {
    line-height: 1em;
    margin: 0 0 ${rem('15px')};
    padding: 0;

    @include phone-tablet {
      font-size: ${rem('30px')};
      margin: 0 0 ${rem('10px')};
    }

    span {
      color: ${({ theme }) => theme.__OriginateLib.colors.text2};
      font-weight: ${({ theme }) => theme.__OriginateLib.fontWeight.regular};
      margin: 0 ${rem('10px')};

      @include phone {
        display: block;
        margin: 0;
      }
    }
  }

  button,
  .button {
    border: 1px solid ${({ theme }) => theme.__OriginateLib.colors.primary};
  }

  .repayment-progress {
    background: ${({ theme }) => rgba(theme.__OriginateLib.colors.green, 0.15)};
    border-radius: ${rem('5px')};
    height: ${rem('10px')};
    margin: 0 0 ${rem('15px')};
    width: 100%;

    .progress {
      background: ${({ theme }) => theme.__OriginateLib.colors.green};
      border-radius: ${rem('5px')};
      display: block;
      height: ${rem('10px')};
      width: 0;
    }
  }

  .text {
    color: ${({ theme }) => theme.__OriginateLib.colors.text2};
    display: block;
    font-weight: ${({ theme }) => theme.__OriginateLib.fontWeight.semiBold};
    margin: 0 0 ${rem('15px')};

    @include phone-tablet {
      margin: 0 0 ${rem('10px')};
    }
  }
`;

RepaymentCard.propTypes = {
  amountPaid: PropTypes.number,
  fullAmount: PropTypes.number,
  percent: PropTypes.number,
  repaymentAmount: PropTypes.number,
  repaymentDate: PropTypes.any
};

export default RepaymentCard;
