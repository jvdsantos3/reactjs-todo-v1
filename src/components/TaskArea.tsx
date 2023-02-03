import { ClipboardText } from 'phosphor-react';
import { useState } from 'react';
import { Accountants } from './Accountants';
import { Task } from './Task';
import { InputTask } from "./InputTask";
import { v4 as uuidv4 } from 'uuid';

import styles from './TaskArea.module.css';

interface Task {
    id: string,
    title: string,
    isComplete: boolean
}

export function TaskArea() {
    const [tasks, setTasks] = useState<Array<Task>>([])

    const [completeTasksCount, setCompleteTasksCount] = useState(0);

    const isTaskEmpty = tasks.length == 0;

    function createNewTask(taskTitle: string) {
        const newTask: Task = {
            id: uuidv4(),
            title: taskTitle,
            isComplete: false,
        }

        setTasks([...tasks, newTask]);
    }

    function completeTask(taskId: string) {
        const updatedTasks = tasks.map(task => {
            if(task.id == taskId) {
                task.isComplete = !task.isComplete;
            }

            return task;
        });

        setTasks(updatedTasks);

        getCompleteTasks(updatedTasks);
    }

    function deleteTask(taskId: string) {
        const taskWithoutDeletedOne = tasks.filter(task => {
            return task.id != taskId;
        });

        setTasks(taskWithoutDeletedOne);

        getCompleteTasks(taskWithoutDeletedOne);
    }

    function getCompleteTasks(tasks: Array<Task>) {
        const completeTasks = tasks.filter(task => task.isComplete != false);

        setCompleteTasksCount(completeTasks.length);
    }

    const tasksEmptyContent = (
        <main className={styles.tasksEmpty}>
            <ClipboardText size={56} />

            <div className={styles.tasksAreaText}>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </main>
    );

    const tasksNotEmptyContent = (
        <main>
            {
                tasks.map(task => {
                    return <Task
                        title={task.title}
                        isComplete={task.isComplete}
                        id={task.id}
                        onDeleteTask={deleteTask}
                        onCompleteTask={completeTask}
                        key={task.id}
                    />
                })
            }
        </main>
    );

    const taskContent = isTaskEmpty ? tasksEmptyContent : tasksNotEmptyContent;

    return (
        <section>
            <InputTask onCreateNewTask={createNewTask} />

            <div className={styles.tasksContainer}>
                <header className={styles.tasksAccountants}>
                    <Accountants color={'blue'} text={'Tarefas criadas'} countTasks={tasks.length} />
                    <Accountants color={'purple'} text={'Concluídas'} countTasks={tasks.length} countCompleteTasks={completeTasksCount} />
                </header>

                {taskContent}
            </div>
        </section>
    );
};