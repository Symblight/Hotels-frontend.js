import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from 'semantic-ui-react'

import { FilterComponent } from 'components'
import { withCities } from 'props-proxy/withCity'


@withCities
class FilterCity extends PureComponent {
    static propTypes = {
      data: PropTypes.arrayOf(Object),
      onChange: PropTypes.func,
      onClick: PropTypes.func,
      country: PropTypes.string,
      onSelect: PropTypes.func,
    }

    onClick = () => {
      const { onClick } = this.props

      const data = {
        name: 'cities',
      }

      if (onClick) {
        onClick(data)
      }
    }

    getIdItem(data, value) {
      return data.filter((item) => item.value === value)
    }

    handleChange = (event, data) => {
      const { onChange } = this.props

      const item = this.getIdItem(data.options, data.value)[0]

      const newData = {
        id: item.id,
        name: 'cities',
        value: item.value,
      }

      if (onChange) {
        onChange(newData)
      }
    }

    render() {
      const { onSelect, data, ...props } = this.props

      return (
        <FilterComponent title="Город" onClick={this.onClick} {...props}>
          <Dropdown placeholder='Выбрать город' options={data} onChange={this.handleChange} onClick={onSelect} />
        </FilterComponent>
      )
    }
}

export { FilterCity }
