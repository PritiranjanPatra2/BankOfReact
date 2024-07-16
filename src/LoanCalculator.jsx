import React from 'react';
import Select from 'react-select';
import './LoanCalculator.css';

const LoanCalculator = ({
  homeValue,
  setHomeValue,
  downPayment,
  setDownPayment,
  loanAmount,
  setLoanAmount,
  interestRate,
  setInterestRate,
  tenure,
  setTenure,
  tenureOptions
}) => {

  return (
    <div className="loan-calculator">
      <div className="slider-container">
        <label>Home Value</label>
        <div className="slider-value">${homeValue}</div>
        <input
          type="range"
          min={1000}
          max={10000}
          value={homeValue}
          onChange={e => setHomeValue(parseInt(e.target.value))}
        />
      </div>

      <div className="slider-container">
        <label>Down Payment</label>
        <div className="slider-value">${downPayment}</div>
        <input
          type="range"
          min={0}
          max={homeValue}
          value={downPayment}
          onChange={e => setDownPayment(parseInt(e.target.value))}
        />
      </div>

      <div className="slider-container">
        <label>Loan Amount</label>
        <div className="slider-value">${loanAmount}</div>
        <input
          type="range"
          min={0}
          max={homeValue}
          value={loanAmount}
          readOnly
        />
      </div>

      <div className="slider-container">
        <label>Interest Rate</label>
        <div className="slider-value">{interestRate}%</div>
        <input
          type="range"
          min={2}
          max={18}
          value={interestRate}
          onChange={e => setInterestRate(parseInt(e.target.value))}
        />
      </div>

      <div className="dropdown-container">
        <label>Tenure</label>
        <Select
          value={tenure}
          onChange={selectedOption => setTenure(selectedOption)}
          options={tenureOptions}
        />
      </div>
    </div>
  );
};

export default LoanCalculator;
