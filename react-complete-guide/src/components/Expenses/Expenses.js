
import React,{useState} from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpenseFilter'
import ExpenseList from './ExpensesList'
import ExpenseChart from './ExpenseChart'



function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2020');
   const filteredExpense=props.expenses.filter((exp)=>{
       return(filteredYear == exp.date.getFullYear().toString())
   })
  

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    //   console.log(selectedYear);
    };
    return(
        
        <Card className="expenses">
     
       <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
       <ExpenseChart expenses={filteredExpense}></ExpenseChart>
       <ExpenseList expenses={filteredExpense}></ExpenseList>
        </Card>

    )

}


export default Expenses;