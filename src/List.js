import React from 'react';
import './List.css';
import Card from './Card';

class List extends React.Component {
    render() {
        return (
            <section className="List">
            <header className="List-header"></header>
            <div className='List-cards'>
        {this.props.cards.map((card) =>
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            content={card.content}
            onClickDelete={this.props.onClickDelete}
          />
        )}
            <button 
            type='button'
            className='List-add-button'
            onClick={() => this.props.onClickAdd(this.props.id)}
             >
          + Add Random Card
        </button>
            </div>
            </section>
        )
    }
}

List.defaultProps = {
    onClickAdd: () => {},
  }

export default List;