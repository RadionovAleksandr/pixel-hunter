// import * as data from './game-data';
import gameScreens from './data-base';

const START_GAME = Object.freeze({
    points: 0,
    lives: 3
});

let game

const resetGame = (state, dataScreens) => {
    state = Object.assign({}, START_GAME, { answers: [] });
    state.screens = dataScreens;
    return state
}

let stateGame = resetGame(game, gameScreens);
export default stateGame;
