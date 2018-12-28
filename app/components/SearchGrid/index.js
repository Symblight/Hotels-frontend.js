import React, { PureComponent } from 'react'
import PropsTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from 'semantic-ui-react'

import { Input } from 'components'
import { withSearching } from 'props-proxy/withSearching'


const Wrapper = styled.div`
    padding: 12px;
    justify-content: center;
    border-bottom: 1px solid #e1e4e8;
    width: 100%;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1124px;
  padding: 24px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-between;
`

@withSearching
class InputButtonSearch extends PureComponent {
    static propsTypes = {
      onClick: PropsTypes.func,
      onChange: PropsTypes.func,
      searchList: PropsTypes.arrayOf(Object),
      search: PropsTypes.string,
    }

    handleChange = (text) => {
      const { onChange } = this.props

      if (onChange) {
        onChange(text)
      }
    }

    render() {
      const { onClick, searchList, search } = this.props

      return (
        <Wrapper>
          <Container>
            <Input onChange={this.handleChange} value={search} options={searchList} />
            <Button color="blue" onClick={onClick}>Поиск</Button>
          </Container>
        </Wrapper>
      )
    }
}

export { InputButtonSearch }
