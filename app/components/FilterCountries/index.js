import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from 'semantic-ui-react'

import { FilterComponent } from 'components/Filter'

import { withCountries } from 'components/props-proxy/withCountries'


@withCountries
class FilterCountries extends PureComponent {
  static propTypes = {
    data: PropTypes.arrayOf(Object),
    onChange: PropTypes.func,
    onClick: PropTypes.func,
  }

  onClick = () => {
    const { onClick } = this.props

    const data = {
      name: 'countries',
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
      name: 'countries',
      value: item.value,
    }

    if (onChange) {
      onChange(newData)
    }
  }

  render() {
    const { data, ...props } = this.props

    return (
      <FilterComponent title="Страна" onClick={this.onClick} {...props}>
        <Dropdown placeholder='Выбрать страну' options={data} onChange={this.handleChange} />
      </FilterComponent>
    )
  }
}

export { FilterCountries }
