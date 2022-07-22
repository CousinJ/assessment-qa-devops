const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('be an array datatype',  async () => {
        let data = [4,5,6,67,8]
        expect(Array.isArray(shuffleArray(data))).toBeTruthy()
    })
    test ('test if the argument is equal length to the result', async () => {

        let data = [4,5,6,67,8]
        expect(shuffleArray(data).length).toEqual(data.length)
    })

   
})