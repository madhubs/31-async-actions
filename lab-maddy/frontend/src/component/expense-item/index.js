import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';
import {expenseUpdate, expenseDelete} from '../../action/expense-actions';
//need to import any scss

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editExpense: false,
    };
    this.toggleExpense = this.toggleExpense.bind(this);
  }

  toggleExpense() {
    this.setState({editExpense: !this.state.editExpense});
  }

  render(){
    return (
      <section className="expense-item" id={this.props.expense.id}>
        <div className="expense-price">
          <h2>{this.props.expense.title}</h2><br/>
          <p>{this.props.expense.price}</p><br/>
          <button className="remove" onClick={() => this.props.expenseDelete(this.props.expense)}>x</button>
          <button onClick={this.toggleExpense}>edit expense</button>
        </div>

        {this.state.editExpense ?
          <CardForm
            buttonText="update"
            toggle={this.toggleExpense}
            onComplete={this.props.expenseUpdate}
            id={this.props.expense.id}
            categoryId={this.props.expense.categoryId}
            expense={this.props.expense}/>
          :
          undefined
        }
      </section>
    );
  }
}

let mapStateToProps = () => ({});
let mapDispatchToProps = (dispatch, getState) => {
  return {
    expenseUpdate: expense => dispatch(expenseUpdate(expense)),
    expenseDelete: expense => dispatch(expenseDelete(expense)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);
