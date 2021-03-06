import React from 'react';
import { connect } from 'react-redux';

import { setBooks } from '../actions/MyBooksActions';

import Navbar from './Navbar';
import BookContainer from './BookContainer'

import books from '../server/data';

class App extends React.Component{

	componentWillMount(){
		this.props.dispatchSetBooks(books);
	}

	render() {
		return(
			<div>
				<Navbar  />
				<BookContainer books={this.props.books} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	books: state.myBooks.books,
});

const mapDispatchToProps = (dispatch) => ({
	dispatchSetBooks: (booksData) => {
		dispatch(setBooks(booksData));
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(App);


// Replace <BookContainer line with this to test componentWillUnmount>
// {this.state.searchString === 'testunmount' ? <div></div> : <BookContainer searchString={this.state.searchString} />}
