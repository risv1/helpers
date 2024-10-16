type Task = {
    id: number;
    title: string;
    start: Date;
    end: Date;
}

export function useTasks() {
    const tasks: Ref<Task[]> = ref<Task[]>([])
    const newTask = ref({ title: '', start: '', end: '' })
    const addTask = () => {
        const task = {
            id: Date.now(),
            title: newTask.value.title,
            start: new Date(newTask.value.start),
            end: new Date(newTask.value.end)
        }
        tasks.value.push(task)
        newTask.value = { title: '', start: '', end: '' }
    }

    return {
        tasks,
        newTask,
        addTask
    }
}