import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import styles from './InputTask.module.css';

interface InputTaskPros {
    onCreateNewTask: (taskTitle: string) => void,
}

export function InputTask({onCreateNewTask}: InputTaskPros) {
    const [newTaskTitle, setNewTaskTitle] = useState('');

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();

        onCreateNewTask(newTaskTitle);

        setNewTaskTitle('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');

        setNewTaskTitle(event.target.value);
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    return (
        <form className={styles.taskForm} onSubmit={handleCreateNewTask}>
            <input 
                type="text" 
                placeholder='Adicione uma nova tarefa' 
                required
                onChange={handleNewTaskChange}
                onInvalid={handleNewTaskInvalid}
                value={newTaskTitle}
            />
            <button type="submit">
                Criar
                <PlusCircle size={16} />
            </button>
        </form>
    );
};