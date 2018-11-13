import React from 'react';
import {connect} from 'react-redux';

import {Feedback} from './feedback';

describe('<Feedback/>', () => {
	let seedFeedback = 'Way to test, Champ!';
	let seedGuessCount = 5;

	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		shallow(<Feedback dispatch={dispatch} />);
	});

	it('Renders the feedBack', () => {
		const dispatch = jest.fn();
		const wrapper = shallow(
			<Feedback feedback={seedFeedback} />
		);
		const feedbackProp = wrapper.contains("Way to test, Champ!");
		expect(feedbackProp).toEqual(true);
	});

	it('Renders the guessCount', () => {
		const dispatch = jest.fn();
		const wrapper = shallow(
			<Feedback guessCount={seedGuessCount} />
		);
		expect(wrapper.containsClass('visuallyhidden')).toEqual(true);
	});

});