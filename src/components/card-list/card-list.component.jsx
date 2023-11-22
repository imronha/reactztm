import { Component } from 'react';
import './card-list.styles.css';
import Card from '../card/card.component';



class CardList extends Component {
    // constructor is rendering under the hood

    render(){
        // console.log(this.props)
        console.log('component rendered')
        const { monsters } = this.props;

        return (
            <div className='card-list'>
                {monsters.map((monster) => {
                    
                    return (
                        <Card monster={monster}></Card>
                    )
                })}
                
            </div>
        )

    }

}

export default CardList;