const todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("A todo suit", () => {
    let date = new Date().toLocaleDateString("en-CA");
    beforeAll(() => {
        add({
            title: "first",
            completed: false,
            dueDate: new Date().toLocaleDateString("en-CA"),
        });
    });

    test("Add new task", () => {
        const count = all.length;
        add({
            title: "second",
            completed: false,
            dueDate: new Date().toLocaleDateString("en-CA"),
        });
        expect(all.length).toBe(count + 1);
    });

    test("Checks a task as completed", () => {
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    });

    test("retrieve overdue items", () => {
        expect(overdue().every((item) => {
            return item.dueDate < date;
        })
        ).toBe(true);
    });

    test("retrieve due today items", () => {
        expect(
            dueToday().every((item) => {
                return item.dueDate == date;
            })
        ).toBe(true);
    });

    test("retrieve due later items", () => {
        expect(
            dueLater().every((item) => {
                return item.dueDate > date;
            })
        ).toBe(true);
    });
});