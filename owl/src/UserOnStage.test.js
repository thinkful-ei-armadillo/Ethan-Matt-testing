import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import UserOnStage from './UserOnStage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserOnStage
    key={42}
    name={'alice'}
    avatar={'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'}
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('Snapshot tests', () => {

  it('renders the UI as expected', () => {
    const tree = renderer
    .create(<UserOnStage
      key={42}
      name={'alice'}
      avatar={'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'}
    />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the UI as expected', () => {
    const tree = renderer
    .create(<UserOnStage
      key={42}
      name={'alice'}
      avatar={'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'}
    />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

});
