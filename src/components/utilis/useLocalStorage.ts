export const useLocalStorage = (key: string) => {
    const setItem = (value: unknown) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value))

        } catch (error) {
            console.log(error)

        }                   
        
    }

    
        const getItem = (value: unknown) => {
            try {
                const item = window.localStorage.getItem(key)
                return item ? JSON.parse(item) : undefined
    
            } catch (error) {
                console.log(error)
    
            }                   
            
        }

    return [setItem, getItem]
    
}  