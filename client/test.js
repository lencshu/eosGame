import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggle: true,
            list: ['a', 'b', 'c'],
        };
    }

    onToggleList = () => {
        this.setState(prevState => ({ toggle: !prevState.toggle }));
    };

    render() {
        return (
            <div>
                <Toggle
                    toggle={this.state.toggle}
                    onToggleList={this.onToggleList}
                />
                {this.state.toggle && <List list={this.state.list} />}
            </div>
        );
    }
}


const Toggle = ({ toggle, onToggleList }) => (
    <button type="button" onClick={onToggleList}>
        {toggle ? 'Hide' : 'Show'}
    </button>
);

const List = ({ list }) => (
    <ul>
        {list.map((item) => (
            <Item key={item} item={item} />
        ))}
    </ul>
);

const Item = ({ item }) => <li>{item}</li>;

export default App;