type HelloFun = (values: string[]) => Promise<void>

const helloTs: HelloFun = async (all: string[]) => console.log(`Hello ${['World', ...all]}!`)

helloTs(['Venus', 'Mars'])