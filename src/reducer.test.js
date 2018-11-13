import reducer as 'hotColdReducer' from './reducer';
import {generateAuralUpdate, restartGame, makeGuess} from './actions';

describe('hotColdReducer', () => {
	//const guess = 77;
	//const correctAnswer = 80;
	//const difference =  Math.abs(guess - correctAnswer);

	it('Should set the initial state when nothing is passed in', () => {
		const state = hotColdReducer(undefined, {type: 'UNKNOWN__'});
		expect(state).toEqual ({
			guesses: [],
    		feedback: 'Make your guess!',
    		auralStatus: '',
    		correctAnswer: Math.round(Math.random() * 100) + 1
		});
	});

	it('Should return the current state on an unknown action', () => {
		let currentState = {
			guesses: [],
    		feedback: 'Make your guess!',
    		auralStatus: '',
    		correctAnswer: Math.round(Math.random() * 100) + 1
		};
		const state = hotColdReducer(currentState, {type: 'UNKOWN__'});
		expect(state).toBe(currentState);
	});

	describe('generateAuralUpdate', () => {
		it('Should generate an aural status containing the feedback', () => {
			let state = {
				guesses: [1, 2, 3],
    			feedback: 'Super Duper Wooper (TEST)!'
			};
			state = hotColdReducer(state, generateAuralUpdate());
			expect(state.auralStatus).containing(state.feedback);
			expect(state.auralStatus).containing(state.guesses.length);
		});
	});

	describe('restartGame', () => {
		it('Should reset state to equal initial state, but with new correctAnswer', () => {
			let state = {
				guesses: [1,2,3],
    			feedback: 'Doing great!',
    			auralStatus: 'Doing great!',
    			correctAnswer: 90
			};
			state = hotColdReducer(state, restartGame());
			expect(state).containing({
				guesses: [],
    			feedback: 'Make your guess!',
    			auralStatus: ''
			});
		});
	});

	describe('makeGuess', () => {
		it('Should add new guess to guessList and generate feedback based on correctAnswer', () => {
			let state = {
				guesses: [1,2,3],
    			feedback: 'Doing great!',
    			auralStatus: 'Doing great!',
    			correctAnswer: 90;
    		};
			state = hotColdReducer(state, makeGuess(64));
			expect(state).toEqual({
				guesses: [1,2,3,64],
    			feedback: "You're Warm.",
    			auralStatus: 'Doing great!',
    			correctAnswer: 90
			});

		});
	});

});