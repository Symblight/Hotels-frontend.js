import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Rating } from 'semantic-ui-react'

import { FilterComponent } from 'components/Filter'
import { withRating } from 'components/props-proxy/withRating'


@withRating
class FilterRating extends PureComponent {
    static propTypes = {
      data: PropTypes.number,
      onChange: PropTypes.func,
      onClick: PropTypes.func,
    }

    onChange = (event) => {
      const { onChange } = this.props

      if (onChange) {
        onChange(parseInt(event.target.value))
      }
    }

    render() {
      const { data, ...props } = this.props

      return (
        <FilterComponent title="Рейтинг" {...props}>
          <div>
            {'Рейтинг: '}
            {data}
          </div>
          <input type='range' min={0} max={5} value={data} onChange={this.onChange} />
          <br />
          <Rating rating={data} maxRating={5} />
        </FilterComponent>
      )
    }
}

export { FilterRating }
