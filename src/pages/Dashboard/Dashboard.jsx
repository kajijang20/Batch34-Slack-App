import React, { useState, useEffect } from "react";
import "./Dashboard.scss";

/*import { CardChip } from "../../assets/icons.jsx";

import Header from "../../components/Header/Header.jsx";
import DisplayTransactions from "../../components/DisplayTransactions/DisplayTransactions.jsx";
import DisplayTransfer from "../../components/DisplayTransfer/DisplayTransfer.jsx";
import displayCurrencyExchange from "../../components/DisplayCurrency/DisplayCurrency.jsx";

import findUser from "../../hooks/useUserFinder.jsx";
import handleNumberFormat from "../../hooks/useHandleNumberFormat.jsx";
import useBalanceSummary from "../../hooks/useBalanceSummary.jsx";
*/

//import { DataAllUsers } from "../../utils/Data";

//const data = await DataAllUsers();

const Dashboard = () => {
    useEffect(() => {
        //console.log("all users: ", data);
    }, []);
    /*
  const user = findUser("currentUser");
  const displayTransaction = (user.transactions).slice(0).reverse().slice(0, 5);
  const displayTransfer = (user.transfers).slice(0).reverse().slice(0, 1);
  const userBalance = handleNumberFormat(user.balance);
  const expenses = handleNumberFormat(useBalanceSummary(user).totalExpenses);
  const income = handleNumberFormat(useBalanceSummary(user).totalIncome);

  return (
    <div className="dashboard">
      <div className="dashboard-main">
        <Header title="Dashboard"/>
        <div className="grid-container">
          <div className="grid-column-left">
            <div className="grid-column-left-side">
              <div id="balance" className="grid-item">
                <p className="balance-title"><b> Total Balance </b></p>
                <p className="balance-num"> ₱{userBalance} </p>
                <p className="balance-summary">
                  <span className="balance-expenses"> 
                    <span className="balance-expenses-name"> ▼ Expenses </span>
                    <span> ₱{expenses} </span> 
                  </span>
                  <span className="balance-divider"> | </span>
                  <span className="balance-income"> 
                    <span className="balance-income-name"> ▲ Income </span>
                    <span> ₱{income} </span> 
                  </span>
                </p>
              </div>
              <div id="exchange" className="grid-item">
                <p className="exchange-title"><b> Currency Exchange </b></p>
                {displayCurrencyExchange()}
              </div>
            </div>
            <div id="transaction" className="grid-item">
              <p className="transaction-title"><b> Transaction </b></p>
              <DisplayTransactions user={displayTransaction} />
            </div>
            <div id="transfer" className="grid-item">
              <p className="transfer-title"><b> Most Recent Transfer </b></p>
              <DisplayTransfer user={displayTransfer} />
              </div>
          </div>
          <div className="grid-column-right">
            <div id="debit" className="grid-item"> 
              <p className="debit-title"> Debit <b>JTT Bank</b></p>
              <p className="debit-number"> {user.accountNumber} </p>
              <p className="debit-balance"> ₱{userBalance} </p>
              <p className="debit-name"> {user.fullname} < CardChip className="card-chip"/> </p>
            </div>
            <div id="card-info" className="grid-item">
              <b className="info-title"> Card Info </b>
              <p className="info-number"> <b>Card Number</b> <br/> {user.accountNumber} </p>
              <p className="info-name"> <b>Name</b> <br/> {user.fullname} </p>
              <p className="info-balance"> <b>Balance</b> <br/> ₱{userBalance} </p>
              <p className="info-type"> <b>Account Type</b> <br/> {user.accountType} </p>
              <p className="info-bank"> <b>Bank</b> <br/> JTT Bank </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); */
  return(
    <div>
        Dashboard
    </div>
  );
}
  
export default Dashboard;
