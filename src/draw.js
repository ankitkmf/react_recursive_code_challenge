
const draw = (width, height, padding) => {

    // create default shape
    let shape = Array(height).fill(0).map(a => Array(width).fill(0));
    
    const fill = (x_axis, y_axis, width, height) => {

        let i = 0;
        let j = 0;
        //return final shape
        if (width < 1 || height < 1) {
            return shape
        }

        //Create x axis
        for (j = y_axis; j < y_axis + width; ++j) {
            shape[x_axis][j] = 1;
            shape[x_axis + height - 1][j] = 1;
        }

        //Create y axis
        for (i = x_axis; i < x_axis + height; ++i) {
            shape[i][y_axis] = 2;
            shape[i][y_axis + width - 1] = 2;
        }

        // calling recursive shape 'fill' method 
        return fill((x_axis + padding / 2 + 1), (y_axis + padding / 2 + 1), width - padding - 2, height - padding - 2)
    }
    return fill(0, 0, width, height);
}
module.exports = draw;
