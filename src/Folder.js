import React from 'react'
import './Folder.css'

const Headers = ({ titles, currentTab, selectTab }) => {

    const handleClick = (e) => {
        console.log('handleC')
        const idx = e.target.id
        selectTab(idx);
    }


    const tabs = titles.map((title, idx) => {
        console.log(idx, currentTab)
        return (
            <li key={idx} id={idx} onClick={handleClick} className={(idx === Number(currentTab)) ? 'active' : ''}>
                {title}
            </li>
        );
    })
    return (
        <ul className='tab-header'>
            {tabs}
        </ul>
    );
}


class Folder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTab: 0
        }
    }

    selectTab = (idx) => {
        this.setState({currentTab: idx})
    }

    render = () => {
        const folder = this.props.folders[this.state.currentTab];
        // console.log("heeeeello",this.props.folders[0], this.state)

        const titles = this.props.folders.map(folder => folder.title)

        return (
            <div id='folder-container'>
                <h1>Folder</h1>
                <div className='tabs'>
                    <Headers
                        titles={titles}
                        currentTab={this.state.currentTab}
                        selectTab={this.selectTab}
                    />
                    <div className='tab-content'>
                        {folder?.content}
                    </div>
                </div>
            </div>
        )
    }
}

export default Folder;