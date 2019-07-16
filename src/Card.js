import React from 'react';
import './Card.css';

class Card extends React.Component {
    render() {
        console.log(this.props);
        return ( 
            <div className = "Card" >
            <button 
            type ='button'  
            onClick={() => this.props.onClickDelete(this.props.id)}> 
            Delete
            </button> 
            <h3> {this.props.title} </h3> 
            <p> {this.props.content} </p> 
            </div>
        )
    }
}

Card.propTypes = {
    onClickDelete: () => {}
  }

export default Card;