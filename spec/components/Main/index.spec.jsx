import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from '../../../src/components/Main';

configure({ adapter: new Adapter() });

describe('<Main />', () => {
  let main;

  beforeEach(() => {
    main = shallow(<Main />);
  });

  it('should exist', () => {
    expect(main).toBeTruthy();
  });
});
