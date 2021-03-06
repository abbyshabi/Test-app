import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, MyLoansIcon, SettingsIcon, NewLoanIcon } from 'originate-react-components-library';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { rem } from 'polished';
import {Button} from '../index'
import media from "styled-media-query";


const Menu = ({ className }) => {
  return (
    <Router>
    <StyledMenu className={className}>
      
       <div className="container">
          <StyledLeft>
            <ul>
              <li>
                <NavLink to="/dashboard">
                  <HomeIcon />
                  <span className={'nav-text'}>Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/loans">
                  <MyLoansIcon />
                  <span className={'nav-text'}>My Loans</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/settings">
                  <SettingsIcon />
                  <span className={'nav-text'}>Settings</span>
                </NavLink>
              </li>
            </ul>
          </StyledLeft>
          <StyledRight>
                <LoanButton >
                <NavLink to="/loans/new" className="button icon-left secondary">
                        <span className="icon"><NewLoanIcon /></span>
                        <span className={''}>New Loan</span>
                    </NavLink>
                </LoanButton>
             
           </StyledRight>
           </div>
     
    </StyledMenu>
    </Router>
  );
};
const StyledMenu = styled.nav`
  background: ${({ theme }) => theme.__OriginateLib.colors.primary};
  color: ${({ theme }) => theme.__OriginateLib.colors.white};
  margin: 0 auto ${rem('40px')};
  padding: ${rem('15px')} 0 0;
  `;

 
const StyledLeft= styled.div`

 float:left;
    ul {
      display: inline-block;
      list-style: none;
      margin: 0;
      overflow: auto;
      padding: 0;

      li {
        display: inline-block;
        float: left;
        margin: 0 ${rem('50px')} 0 0;

        a {
          border-bottom: ${rem('5px')} solid transparent;
          float: left;
          padding: 15px 0;
          font-weight: ${({ theme }) => theme.__OriginateLib.fontWeight.semiBold};

          &.active {
            border-bottom-color: ${({ theme }) => theme.__OriginateLib.colors.white};
          }

          svg {
            float: left;
            height: 20px;
            margin-right: ${rem('15px')};
            
          }
          .nav-text {
            display: inline-block;
            float: left;
            font-size: ${rem('15px')};
            line-height: ${rem('20px')};
            color: ${({ theme }) => theme.__OriginateLib.colors.white};
          }
        }
      }
    }
  `;
  const StyledRight= styled.div`
   float:right;
  
  `;




const LoanButton = styled.button`
border: none;
background-color:${({ theme }) => theme.__OriginateLib.colors.white};
border-radius:${rem('4px')};
box-shadow: none;
color: ${({ theme }) => theme.__OriginateLib.colors.primary};
cursor: pointer;
display: inline-block;
font-size: ${rem('16px')};
font-weight:${({ theme }) => theme.__OriginateLib.fontWeight.semiBold};
line-height: ${rem('20px')};
outline: none;
overflow: hidden;
padding: ${rem('10px')} ${rem('32px')};
position: relative;
text-align: center;
transition: 0.3s;

/* margin-left: ${rem('5px')} ; */
a{
  color: ${({ theme }) => theme.__OriginateLib.colors.primary};
  border:none;
  text-decoration: none;
}
&.active{
        border-bottom-color: ${({ theme }) => theme.__OriginateLib.colors.white};
        color: ${({ theme }) => theme.__OriginateLib.colors.primary};
        }

icon{
  color:${({ theme }) => theme.__OriginateLib.colors.primary};

        ${media.lessThan("medium")`
         display: block;
          width: 100%;
          color:${({ theme }) => theme.__OriginateLib.colors.primary};
        `}
}
svg{
    float: left;
    height: 20px;
    fill:${({ theme }) => theme.__OriginateLib.colors.primary};
    margin-right: ${rem('15px')} ;
  
    ${media.lessThan("medium")`
          fill:${({ theme }) => theme.__OriginateLib.colors.secondary};
          float: none;
          width: 100%;
        `}
  } 
`;

export default Menu;
