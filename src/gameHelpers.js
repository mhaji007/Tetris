// A multi dimensional array that
// represents the grid

export const Stage_WIDTH = 12;
export const Stage_HEIGHT = 20;


// 0 means nothing on the grid (clean cell = nothing in that cell)
// each tetromino will have a letter
// so we know that the grid will have that
// particular tetromino in that particular cell.
// Clear means that there are no tetromino
// that has collided in this cell and that
// we should clear it out in the next render. 
// Clear is going to be set to merge when we 
// have a tetromino merge into the stage and
// not be cleared in the next render

export const createStage = () => 
    Array.from(new Array(Stage_HEIGHT), () =>
        new Array(Stage_WIDTH).fill([0,'clear'])
    )
