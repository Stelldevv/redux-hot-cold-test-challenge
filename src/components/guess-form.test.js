import React from 'react';
import {connect} from 'react-redux';

import {GuessForm} from './guess-form';
import {makeGuess} from '../actions';

describe('<GuessForm/>', () => {

	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		shallow(<GuessForm dispatch={dispatch} />);
	});

	it('Dispatches makeGuess from makeGuess', () => {
		const guess = Math.round(Math.random() * 100) + 1;
		const dispatch = jest.fn();
		const wrapper = shallow(<GuessForm dispatch={dispatch} />);
		dispatch.mockClear();
		const instance = wrapper.instance();
		instance.makeGuess(guess);
		expect(dispatch).toHaveBeenCalledWith(makeGuess(guess));
	});
});