import { useState } from "react"
import styles from "../GetList/GetList.module.css"

const GetList = () => {

    const [inputValue, setInputValue] = useState('')

    const [listItems, setListItems] = useState([])

    const [completedTasks, setCompletedTasks] = useState([]);

    const handleSubmit = (e) => {

        e.preventDefault()
        setListItems([...listItems, inputValue])
        setInputValue('')

    }
    const handleDelete = (index) => {
        const updatedList = listItems.filter((item, i) => i !== index);
        setListItems(updatedList);
    };

    const handleCheck = (index) => {
        const updatedCompletedTasks = [...completedTasks];
        updatedCompletedTasks[index] = !updatedCompletedTasks[index];
        setCompletedTasks(updatedCompletedTasks);


    }

    return (
        <>
            <div >
                <form className={styles.tabBar} onSubmit={handleSubmit} action="#">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />

                    <button type="submit">Add</button>
                </form>
            </div>
            <div>
                <ol className={styles.list}>
                    {listItems.map((item, idx) => (
                        <li key={idx} className={completedTasks[idx] ? styles.completed : ""} id={styles.outputList}>
                            {item}
                            <input type="checkbox" onChange={() => handleCheck(idx)} />
                            <button onClick={() => handleDelete(idx)}>Delete.</button>
                        </li>
                    ))}
                </ol>

            </div>
        </>
    )
}
export default GetList