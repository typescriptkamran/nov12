export function storage() {
    if (typeof window !== 'undefined') {
        return localStorage
    } else {
        return undefined
   }
}