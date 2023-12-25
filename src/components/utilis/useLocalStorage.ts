export const UseLocalStorage = (A: string) => {
    const setItem = (value: unknown) => {
        try {
            window.localStorage.setItem(A, JSON.stringify(value))

        } catch (error) {
            console.log(error)

        }                   
        
    }

    
        const getItem = () => {
            try {
                const item = window.localStorage.getItem(A)
                return item ? JSON.parse(item) : undefined
                
    
            } catch (error) {
                console.log(error)
    
            }

                       
        }

        const removeItem = () => {
            try {
                const item = window.localStorage.removeItem(A)
                console.log(item)
    
            } catch (error) {
                console.log(error)
    
            }

                       
        }

    return [setItem, getItem, removeItem]
    
}  