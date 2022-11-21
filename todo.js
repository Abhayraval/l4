const todoList = () => {
    all = []
    const add = (todoItem) => {
        all.push(todoItem)
    }
    const markAsComplete = (index) => {
        all[index].completed = true
    }
    let date = new Date().toISOString().split("T")[0]

    const overdue = () => {
        return all.filter((todo) => {
            return todo.dueDate < date;
        });
    }

    const dueToday = () => {
        return all.filter((todo) => {
            return todo.dueDate == date;
        });
    }

    const dueLater = () => {
        return all.filter((todo) => {
            return todo.dueDate > date;
        });
    }

    const toDisplayableList = (list) => {
        return list.map((todo) => {
            staus = todo.completed ? '[x]' : '[ ]'
            rad = todo.dueDate == today ? '' : todo.dueDate;
            return `${staus} ${todo.title} ${rad}`
        }).join('\n')
    }

    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
}

module.exports = todoList;  