const SortBy = props => {
  const { setSort_by, setOrder } = props;

  const sortList = {
    'Title': 'title',
    'Date Posted': 'created_at',
    'Author': 'author',
    'Topic': 'topic',
    'Votes': 'votes',
    'Comment Count': 'comment_count'
  }
  const orderList = { 
    Ascending: 'ASC',
    Descending: 'DESC'
  }

  const sortChange = e => {
    setSort_by(sortList[e.target.value])
  }

  const orderChange = e => {
    setOrder(orderList[e.target.value])
  }

  return (
    <form action="">
      <select onChange={sortChange} name='sort by' className="sort-by" >
        {Object.keys(sortList).map(sort => {
          return <option value={sort}>{sort}</option>
        })}
      </select>
      <select onChange={orderChange} name="order by" className="sort-by">
        {Object.keys(orderList).map(order => {
          return <option value={order}>{order}</option>
        })}
      </select>
    </form>
  )
}

export default SortBy;