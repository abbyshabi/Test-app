import React,{Fragment} from 'react';

import './App.css';
// import Transaction from './containers/Transaction'
// import BaseRouter from './routes';
import {Alert} from 'originate-react-components-library'
import {Menu,DataCard,Tag,Footer,RadioGroup,Radio,Card,Input,DebitCard,Ellipse,MasterCard,Header} from "originate-react-components-library"
// import {RepaymentCard,TransactionTable} from '../src/Components'
// import {BrowserRouter as Router} from 'react-router-dom';
// import M from 'materialize-css/dist/css/materialize.min.css';
import {Button} from 'react-sample-components-library'

function App() {

  return (
<div>
    <Header/>
    <Menu className="test"/>
   
    <div className="container">
<Alert className="warning" dismissible> You cannot move beyond this point</Alert>
        <Button text="Hello"></Button>
      {/* <Card
                    title={'Employment Status'}
                    subtitle={'Do you currently have a job'}
                >
                    <RadioGroup className="two-grid-column">
                        <Radio label="Employed Full Time" name="employmentStatus" />
                        <Radio label="Employed Part Time" name="employmentStatus"/>
                        <Radio label="Self Employed" name="employmentStatus"  />
                        <Radio label="Unemployed" name="employmentStatus"         />
                    </RadioGroup>
                </Card>

                <Card
                    title={'Company Name'}
                    subtitle={'Where do you work?'}
                >
                    <div>
                        <Input
                            label="Company Name"
                            className="border-bottom"
                            placeholder="Employer Name"
                            name="companyName"
                            
                        />
                    </div>
                </Card> */}
    
    

{/* <DataCard>
        <RepaymentCard
            amountPaid= "12000"        
            fullAmount="12000" 
            percent="50"
            repaymentAmount="12000" 
            repaymentDate="12/10/19" 
            portfolioNumber="12000" 
        /> 
</DataCard>
<DataCard>
<TransactionTable txTableHeaders={['Date', 'Status', 'Loan Amount', 'Repayment Amount', 'Tenor']}>

<li >
    <div className="tx-column transaction-date" data-header="Date">
        <span>22/05/2013</span>
    </div>
    <div className="tx-column" data-header="Status">
    <Tag status="pending"/>
    </div>
    <div className="tx-column full" data-header="Loan Amount">
        <span>NGN 100,000</span>
    </div>
    <div className="tx-column" data-header="Repayment Amount">
        <span>NGN 1,000,000</span>
    </div>
    <div className="tx-column" data-header="Tenor">
        <span>90 days</span>
    </div>
</li>

</TransactionTable>
</DataCard>     */}
<DebitCard  key="1">
    <div>
        <div className="">
      <span>
          <Ellipse/>
      </span>
            <span>
          <Ellipse/>
      </span>
            <span>
          <Ellipse/>
      </span>
            <span className={'card-number'}>
         0004
      </span>
        </div>
        <div className={'debit-card__bottom'}>
            <div className={'card-expiry'}>
                <span className={'expires'}>Expires:</span> <span className={'expiry-date'}>12/2020</span>
            </div>
            <div className={'card-type'}>
                <MasterCard/>
            </div>
        </div>
    </div>
</DebitCard>

<Footer> Indicina </Footer>
</div>
</div>
  );
}

export default App;
