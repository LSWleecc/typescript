let bool: boolean = false

let num: number
num = 1

let str: string = 'aaa'
console.log(`数值是${str}`)

let arr: number[]
arr = [ 1 ]
console.log(arr)

let arr2: Array<number>
arr2 = [3]


let tuple: [string, number, boolean]
tuple = ['a', 3, true]

enum Rolus {
    ADMIN,
    SUPER_ADMIN=6,
    USER
}

console.log(Rolus.ADMIN, Rolus[6])

let value: any
value = 234
const arr5: any[] = [1, 'a']

const consoleText = (text:string): void => {
    console.log(text)
}
consoleText('abc')

const getLength = (target: string | number): number => {
    if((<string>target).length || (target as string).length === 0){
        return (<string>target).length
    }else{
        return target.toString().length
    }
}