// let sales: number = 123_456_789;
// let course: string = 'Typescript';
// let is_published: boolean = true;

// let numbers: number[] = [1, 2, 3]

// let user: [number, string] = [1, "John"]

// const small = 1
// const medium = 2
// const large = 3

// const enum Size { Small = 1, Medium, Large }
// let mySize: Size = Size.Medium
// console.log(mySize)

// function calculateTax(income: number, taxYear = 2022): number {
//     if (taxYear < 2022)
//         return income * 1.2
//     return income * 1.3
// }

// calculateTax(10_000)

let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: "John",
    retire: (date: Date) => {
        console.log(date)
    }
}

