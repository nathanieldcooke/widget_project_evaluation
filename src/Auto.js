import React from 'react'

import './Auto.css'

class Autocomplete extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputVal: ''
            
        }
    }

    handleChange(e) {
        const val = e.target.value
        this.setState({ inputVal: val } )
    }

    handleClick(e) {
        this.setState({inputVal: e.target.innerHTML})
    }

    regexMatchName(name) {
        const regex = new RegExp(this.state.inputVal, 'gi')

        const matches = name.match(regex)

        return matches
    }

    render = () => {

        const liArr = this.props.names.map((name, idx) => (
            this.regexMatchName(name) ?
                <li key={idx} onClick={this.handleClick.bind(this)}>{name}</li> :
                null
        ))

        const areMatches = !!(liArr.filter(name => name).length)

        // console.log(this.props)
        return (
            <div id='search-container'>
                <div id='search'>
                    <input 
                        type='text'   
                        name='name' 
                        value={this.state.inputVal} 
                        onChange={this.handleChange.bind(this)}
                    />
                    <ul>
                        {areMatches ? 
                        liArr :
                        <li>no matches</li> 
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Autocomplete