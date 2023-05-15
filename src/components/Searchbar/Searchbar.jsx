import { Component } from 'react';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';


export default class Searchbar extends Component {

    static propTypes = { onSubmit: PropTypes.func.isRequired };

    state = {
        searchItem: '',
    }

    handleSearchChange = event => {
        this.setState({ searchItem: event.currentTarget.value.toLowerCase() });
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.searchItem.trim() === '') {
            toast.error('Enter something!');
            this.setState({ searchItem: '' });
            return;
        }
        this.props.onSubmit(this.state.searchItem);
        this.setState({ searchItem: '' });
    }


    render() {
    return (
        <div >
            <form onSubmit={this.handleSubmit}>
                <button type="submit">
                    <FcSearch size={18}/> 
                </button>

                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={this.state.searchItem}
                    onChange={this.handleSearchChange}
                />
            </form>
        </div>
    );
}
};