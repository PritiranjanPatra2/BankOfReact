import React, { useState, useEffect } from "react";
import MyChart from "./MyChart";
import LoanCalculator from "./LoanCalculator";
import './App.css';

function App() {
  const [homeValue, setHomeValue] = useState(5900);
  const [downPayment, setDownPayment] = useState(1180);
  const [loanAmount, setLoanAmount] = useState(4720);
  const [interestRate, setInterestRate] = useState(5);
  const [totalInterest, setTotalInterest] = useState(0);
  const [tenure, setTenure] = useState({ value: 5, label: '5 years' });
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    const updatedLoanAmount = homeValue - downPayment;
    setLoanAmount(updatedLoanAmount);
    
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = tenure.value * 12;
    
    const payment = updatedLoanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    setMonthlyPayment(payment.toFixed(2));

    let updatedTotalInterest = (payment * numberOfPayments) - updatedLoanAmount;
    setTotalInterest(updatedTotalInterest);
  }, [homeValue, downPayment, interestRate, tenure]);

  const tenureOptions = [
    { value: 5, label: '5 years' },
    { value: 10, label: '10 years' },
    { value: 15, label: '15 years' },
    { value: 20, label: '20 years' },
    { value: 25, label: '25 years' },
    { value: 30, label: '30 years' }
  ];

  return (
    <div className="App">
      <h1 className="bank">Bank Of React</h1>
      <h1>Monthly Payment: $ {monthlyPayment}</h1>
      <MyChart homeValue={loanAmount} totalInterest={totalInterest} />
      <LoanCalculator 
        homeValue={homeValue}
        setHomeValue={setHomeValue}
        downPayment={downPayment}
        setDownPayment={setDownPayment}
        loanAmount={loanAmount}
        setLoanAmount={setLoanAmount}
        interestRate={interestRate}
        setInterestRate={setInterestRate}
        tenure={tenure}
        setTenure={setTenure}
        tenureOptions={tenureOptions}
      />
    </div>
  );
}

export default App;
