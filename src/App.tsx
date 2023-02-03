import { Header } from "./components/Header"
import { TaskArea } from "./components/TaskArea";

import styles from './App.module.css';

import "./global.css";

function App() {
    return (
        <div className="App">
            <Header />

            <div className={styles.wrapper}>
                <section className={styles.taskArea}>
                    <TaskArea />
                </section>
            </div>
        </div>
    )
}

export default App
