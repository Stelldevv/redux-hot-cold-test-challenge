import React from 'react';
import {connect} from 'react-redux';

import {AuralStatus} from './aural-status';

describe('<AuralStatus/>', () => {
	let seedAuralStatus = 'Way to test, Champ!';

	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		shallow(<AuralStatus dispatch={dispatch} />);
	});

	it('Renders the aural status', () => {
		const dispatch = jest.fn();
		const wrapper = shallow(
			<AuralStatus feedback={seedAuralStatus} />
		);
		const statusProp = wrapper.contains("Way to test, Champ!");
		expect(statusProp).toEqual(true);
	});

});