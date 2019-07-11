import React from 'react';
import ReactDOM from 'react-dom';
import List from './Card';
import renderer from 'react-test-renderer';


describe('List component', () => {

    const lists = [
        {
          id: '1',
          header: 'First list',
          cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
        },
        {
          id: '2',
          header: 'Second list',
          cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
        },
        {
          id: '3',
          header: 'Third list',
          cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
        },
        {
          id: '4',
          header: 'Fourth list',
          cardIds: [ 'l', 'm' ],
        },
    ]

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<List />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
    it('render the UI as expected', () => {
        const tree = renderer
        .create(<List
            key={lists[0].id}
            header={lists[0].header}
            // cards={lists[0].cardIds.map(id => store.allCards[id])}
          />)
          .toJSON();
          expect(tree).toMatchSnapshot();
    });
});