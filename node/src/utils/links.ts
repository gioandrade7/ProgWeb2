export function createLink(filename: string){
    return `<a href="/${filename}">${filename}<\a><br>\n`
}

function createTupla<T>(v1: T, v2: T): [T, T] {
    return [v1, v2]
}

export const valor = 10;