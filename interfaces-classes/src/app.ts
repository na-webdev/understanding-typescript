interface AddFn {
    (a: number, b: number): string
}

let addNumbers: AddFn

addNumbers = (n1: number, n2:number): string => {
    console.log(n1, n2)
    return n1 + n2 + ''
}
