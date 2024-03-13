import React from 'react'
import Icon from '../../global/icon'
import {search} from '../../../tools/media'
export default function SearchBar() {
    return (
        <div className="search-wrapper">
          <form action="/search" method="get">
            <input type="text" className="search-input" placeholder="Search Twitter" />
            <button type="submit" className="search-icon">
              <Icon src={search} />
            </button>
          </form>
        </div>
      );
}
