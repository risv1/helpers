export function useTheme() {
    const darkMode = useState('darkMode', () => true)

    const toggleTheme = () => {
        console.log('toggle')
        darkMode.value = !darkMode.value
    }

    return {
        darkMode,
        toggleTheme
    }
}