import React from 'react';
import {connect} from 'react-redux';

import {GuessCount} from './guess-count';

describe('<GuessCount/>', () => {
	let seedGuessList = [];
	for (let i=0; i < 12; i++) {
		seedGuessList.push({
			Math.round(Math.random() * 100) + 1
		})
	}

	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		shallow(<GuessCount dispatch={dispatch} />);
	});

	it('Renders the guessCount', () => {
		const dispatch = jest.fn();
		const wrapper = shallow(
			<GuessCount guessCount={seedGuessList} />
		);
		const guessLength = wrapper.findByID("count");
		expect(guessLength.text).toEqual(seedGuessList.length);
	});

});