import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';
import media from "styled-media-query";


const TransactionTable = props => {
  return (
    <StyledTransactionTable>
      {props.txTableHeaders === '' || props.txTableHeaders == null ? (
        ''
      ) : (
        <li className="transaction-table__header">
          {props.txTableHeaders.map(val => (
            <div>{val}</div>
          ))}
        </li>
      )}
      {props.children}
    </StyledTransactionTable>
  );
};

const StyledTransactionTable = styled.div`
   font-size: ${rem('14px')};
   list-style-type: none;
   margin: 0;
   padding: 0;
   
li{
  border-bottom: 1px solid ${({ theme }) => theme.__OriginateLib.colors.disabled};
   display: grid;
   font-weight: ${({ theme }) => theme.__OriginateLib.fontWeight.semiBold};
   grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
   justify-content: space-between;
   padding: ${rem('20px')} 0;
   width: 100%;

   ${media.lessThan("medium")`
   grid-template-columns: 10fr;
   margin: 0 0 ${rem('15px')};
   padding: 0 0 ${rem('15px')};
   &:last-child {
     margin: 0;
   }
  `}
   
  .tx-column{
    position:relative;

    &::before{

    }
  }
&:first-of-type{
  padding:0;
}
}
.transaction-table__header{
  border: none;
  color: ${({ theme }) => theme.__OriginateLib.colors.text2};
  font-size: ${rem('12px')};
  font-weight: ${({ theme }) => theme.__OriginateLib.fontWeight.semiBold};
  line-height: 30px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding-bottom: ${rem('30px')};
}
.transaction-date {
   color: ${({ theme }) => theme.__OriginateLib.colors.text2};
   
   }
`;
TransactionTable.propTypes = {
  txTableHeaders: PropTypes.array
};

export default TransactionTable;
