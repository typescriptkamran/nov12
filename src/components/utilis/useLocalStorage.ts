export const useLocalStorage = (a: string) => {
    const setItem = (value: unknown) => {
        try {
            window.localStorage.setItem(a, JSON.stringify(value))

        } catch (error) {
            console.log(error)

        }                   
        
    }

    
        const getItem = () => {
            try {
                const item = window.localStorage.getItem(a)
                return item ? JSON.parse(item) : undefined
                
    
            } catch (error) {
                console.log(error)
    
            }

                       
        }

        const removeItem = () => {
            try {
                const item = window.localStorage.removeItem(a)
                console.log(item)
    
            } catch (error) {
                console.log(error)
    
            }

                       
        }

    return [setItem, getItem, removeItem]
    
}  