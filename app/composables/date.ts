import { format, startOfWeek, endOfWeek, eachDayOfInterval, addDays, isSameDay } from "date-fns"

type Task = {
    id: number;
    title: string;
    start: Date;
    end: Date;
}

export function useDate() {
    const currentDate = ref(new Date())

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const currentWeek = computed(() => {
        const start = startOfWeek(currentDate.value)
        const end = endOfWeek(currentDate.value)
        return eachDayOfInterval({ start, end })
    })

    const currentMonthYear = computed(() => format(currentDate.value, 'MMMM yyyy'))

    const previousWeek = () => {
        currentDate.value = addDays(currentDate.value, -7)
    }

    const nextWeek = () => {
        currentDate.value = addDays(currentDate.value, 7)
    }

    const formatDate = (date: Date) => format(date, 'd')

    const isCurrentDay = (date: Date) => isSameDay(date, new Date())

    const getTasksForDay = (day: Date, tasks: Task[]) => {
        return tasks.filter((task: any) =>
            isSameDay(day, task.start) ||
            (day >= task.start && day <= task.end)
        )
    }

    const getTaskDuration = (task: Task) => {
        const start = startOfWeek(task.start)
        const end = endOfWeek(task.end)
        return eachDayOfInterval({ start: task.start, end: task.end }).length
    }

    return {
        currentDate,
        daysOfWeek,
        currentWeek,
        currentMonthYear,
        previousWeek,
        nextWeek,
        formatDate,
        isCurrentDay,
        getTasksForDay,
        getTaskDuration
    }
}