import { Component } from 'react';

class Cardlist extends Component {
    // constructor is rendering under the hood

    render(){
        // console.log(this.props)
        console.log('component rendered')
        const { monsters } = this.props;

        return (
            <div>
                {
                    monsters.map((monster) => {
                        return <h1 key={monster.id}>{monster.name}</h1>
                    })
                }
                Helloworld
            </div>
        )

    }

}

export default Cardlist