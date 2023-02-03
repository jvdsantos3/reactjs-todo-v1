import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface TaskProps {
    id: string,
    title: string,
    isComplete: boolean,
    onDeleteTask: (id: string) => void,
    onCompleteTask: (id: string) => void,
}

export function Task({title, isComplete, id, onDeleteTask, onCompleteTask }: TaskProps) {
    function completeTask() {
        onCompleteTask(id);
    }
    
    function handleDeleteTask() {
        onDeleteTask(id);
    }

    return (
        <div className={styles.task}>
            <label className={styles.taskCheckbox}>
                <input type="checkbox" name={title} id={title} defaultChecked={isComplete} onClick={completeTask}/>
                <strong><span>{title}</span></strong>
            </label>

            <button title='Deletar tarefa' onClick={handleDeleteTask}>
                <Trash size={24} />
            </button>
        </div>
    )
} 