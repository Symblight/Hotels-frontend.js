import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Input, Label } from 'semantic-ui-react'

import { FilterComponent } from 'components/Filter'
import { withCost } from 'components/props-proxy/withCost'


@withCost
class FilterCost extends PureComponent {
    static propTypes = {
      onClick: PropTypes.func,
      onChange: PropTypes.func,
      from: PropTypes.number,
      before: PropTypes.number,
    }

    onChangeFrom = (event) => {
      const { onChange, data } = this.props

      const value = event.target.value !== '' ? parseInt(event.target.value) : 0

      const newData = {
        from: value,
        before: data.before,
      }

      if (onChange) {
        onChange(event, newData)
      }
    }

    onChangeBefore = (event) => {
      const { onChange, data } = this.props

      const value = event.target.value !== '' ? parseInt(event.target.value) : 0

      const newData = {
        from: data.from,
        before: value,
      }

      if (onChange) {
        onChange(event, newData)
      }
    }


    render() {
      const { data, ...props } = this.props

      return (
        <FilterComponent title="Цена за ночь" {...props}>
          <Label>От</Label>
          <Input name="from" value={data.from} onChange={this.onChangeFrom} />
          <Label>До</Label>
          <Input name="before" value={data.before} onChange={this.onChangeBefore} />
        </FilterComponent>
      )
    }
}

export { FilterCost }
