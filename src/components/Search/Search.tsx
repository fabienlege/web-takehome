import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux';
import { setSearchQuery } from 'redux/services/chats/ChatsSlice';
import SearchIcon from '../../icons/search-icon.svg'

const Search: React.FC = () => {
  // retrieve search query from state
  const { searchQuery } = useSelector((state: RootState) => state.chats);

  // initialize dispatch
  const dispatch = useDispatch();

  // Customizable className
  const classes = `flex items-center mx-4 highlighted rounded-full px-2`;
  const inputClasses = `grow ml-3 bg-transparent border-0 p-0 outline-none`;

  /**
   * Handle change of search query
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Update search query in redux store
    dispatch(setSearchQuery(event.target.value));
  }

  return (<div className={classes}>
    <SearchIcon />
    <input type="text" placeholder="Search a person" className={inputClasses} value={searchQuery} onChange={handleChange} />
  </div>);
}
export default Search;