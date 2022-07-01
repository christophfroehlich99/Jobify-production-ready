import {FormRow, FormRowSelect} from "."
import { useAppContext } from "../context/appContext"
import Wrapper from '../assets/wrappers/SearchContainer'

const SearchContainer = () => {
  const {
    isLoading,
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    handleChange,
    clearFilters,
    statusOptions,
    jobTypeOptions
  } = useAppContext()
  const handleSearch = (e) => {
    if(isLoading) return
    handleChange({name:e.target.name, value:e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault ()
    clearFilters()
  }
  return (
    <Wrapper>
        <form className="form">
          <h4>search form</h4>
          <div className="form-center">
            <FormRow 
              type="text" 
              name="search" 
              value={search}
              handleChange={handleSearch}
            />
            <FormRowSelect 
              labelText="status"
              type="text"
              name="searchStatus"
              value={searchStatus}
              handleChange={handleSearch}
              list={['all',...statusOptions]}
            />
            <FormRowSelect 
              labelText="type"
              type="text"
              name="searchType"
              value={searchType}
              handleChange={handleSearch}
              list={['all',...jobTypeOptions]}
            />
            <FormRowSelect 
              type="text"
              name="sort"
              value={sort}
              handleChange={handleSearch}
              list={sortOptions}
            />
            <button 
              className="btn btn-block btn-danger" 
              disabled={isLoading} 
              onClick={handleSubmit}
            > 
              Clear Filters
            </button>
          </div>
        </form>
    </Wrapper>
  )
}
export default SearchContainer