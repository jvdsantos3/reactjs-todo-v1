import styles from './Accountants.module.css';

interface AccountantsProps {
    text: string,
    countTasks: number,
    countCompleteTasks?: number,
    color: 'blue' | 'purple',
}

export function Accountants({text, countTasks, color, countCompleteTasks}: AccountantsProps) {
    const accountantsColor = color == 'blue' ? styles.accountantsBlue : styles.accountantsPurple;

    if(color == 'purple') {
        return (
            <div className={styles.accountants}>
                <p className={ accountantsColor }>{ text }</p>
                <span>{ countCompleteTasks } de {countTasks}</span>
            </div>
        );
    }

    return (
        <div className={styles.accountants}>
            <p className={ accountantsColor }>{ text }</p>
            <span>{ countTasks }</span>
        </div>
    );
};