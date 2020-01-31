
import draw from './draw'
import data from './data.json'

test('shape exists', () => {
  expect(draw).toBeDefined();
});

data.forEach(function(test){
  it(test.input + ' to give correct result',  () => {
    var input = test.input.split(',');
    const result = draw(Number(input[0]),Number(input[1]),Number(input[2]));
    expect(result).toEqual(JSON.parse(test.pixelArrayJson));
    }
  )
});
