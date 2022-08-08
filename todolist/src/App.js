import "./styles.css";
import { useState } from "react";
export default function App() {
const [todos, setTodos] = useState([]);
const [value, setValues] = useState("");
function addItem(e) {
e.preventDefault();
if (!value) return;
const newtodos = [...todos, { value }];
setTodos(newtodos);
setValues("");}
function removeItem(e) {
var index = Number(e.target.id);
let temp = [...todos];
temp.splice(index, 1);
setTodos(temp);
}
return (
<>
<h1 className="h1">Hello</h1>
<h1 className="h2">TodoList</h1>
<input
type="text"
className="input"
placeholder="Add item"
value={value}
onChange={(e) => setValues(e.target.value)}
/>
<input className="butt" type="submit" onClick={addItem} />
<br />
<br />
<br />
{todos.map((item, i) => (
<div className="todo" key={i} id={i}>
<br />
{item.value}&nbsp;&nbsp;
<button className="butt" onClick={removeItem}>X</button>
</div>
))}
</>);
}