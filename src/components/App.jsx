import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { pixabaySerch } from './PixabaySerch/PixabaySerch';
import Loader from './Loader/Loader';
import { ButtonLoadMore } from './Button/Button';

export class App extends Component {
  state = {
    searchItem: '',
    page: 1,
    total: 1,
    items: [],
    isLoading: false,
    isError: false,
  };

  async componentDidUpdate(_, prevState) {
    const { searchItem, page } = this.state;
    if (prevState.searchItem !== searchItem || prevState.page !== page) {
      this.setState({
        isLoading: true,
      });
      try {
        const result = await pixabaySerch(searchItem, page);
        const { totalHits, hits } = result;
        const onlyNeedValues = hits.map(
          ({ id, tags, webformatURL, largeImageURL }) => ({
            id,
            tags,
            webformatURL,
            largeImageURL,
          })
        );
        if (totalHits === 0) {
          toast.warn(
            'Sorry, nothing was found for your request, try something else'
          );
          return this.setState({
            isLoading: false,
            isError: true,
          });
        }
        if (page === 1 && hits.length > 1) {
          toast.success('Hooray! We found what you were looking for');
        }
        this.setState(prevState => ({
          items: [...prevState.items, ...onlyNeedValues],
          isLoading: false,
          isError: false,
          total: hits.length,
        }));
      } catch (error) {
        toast.error('Oops, something went wrong, please try again');
      }
    }
  }

  handleFormSubmit = searchItem => {
    if (this.state.searchItem === searchItem.trim()) {
      return toast.info(
        'It looks like there are already pictures found for your request, please check if this wil be a new search'
      );
    }
    this.setState({ searchItem, items: [], page: 1, isLoading: false });
  };

  ClickLoadMoreBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { items, isLoading, total } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {isLoading ? <Loader /> : <ImageGallery allItems={items} />}
        {total >= 12 && <ButtonLoadMore onClick={this.ClickLoadMoreBtn} />}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
