import react from "react";
import Expenses from "./Expenses";
import App from "../../App";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = props =>{



    if (props.items.length ===0){
     
   return <h2 className="expenses-list__fallback"> found no expenses </h2>
    }
  return(
<li className="expenses-list">

{props.items.map((expense) => (
        <ExpenseItem
        key = {expense.id} // عشان ما يطبع ايرور بالكونسل ويعرف يبدا يلف بناء ع الاي دي
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
}
</li>

  )

}

export default ExpensesList;