import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Wrapper = styled.div`
    position: relative;
    width: 100%;
    margin-right: 12px;
`

const InputWrap = styled.input`
    border: 1px solid rgba(34,36,38,.15);
    font-size: 1em;
    padding: .67857143em 1em;
    margin: 0;
    max-width: 100%;
    width: 100%;
`

const ListWrap = styled.div`
    width: 100%;
    position: absolute;
    top: 35px;
    left: 0;
    right: 0;
    border-bottom: 1px solid #e1e4e8;
    border-left: 1px solid #e1e4e8;
    border-right: 1px solid #e1e4e8;
    background-color: white;
    z-index:999;
`

const ItemWrap = styled.div`
    cursor: pointer;

    font-size: 18px;
    line-height: 60px;
    padding-left: 12px;
    display: flex;
    align-items: center;

    &:hover {
        background-color: #f5f5f5
    }
`

const ImageItem = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 12px;
`

export class Input extends PureComponent {
    static propTypes = {
      options: PropTypes.arrayOf(Object),
      value: PropTypes.string,
      onChange: PropTypes.func,
    }

    onChange = (event) => {
      const { onChange } = this.props

      if (onChange) {
        onChange(event.target.value)
      }
    }

    renderItem(data) {
      return (
        <Link to={`/hotel/${data.id}`} key={data.id}>
          <ItemWrap>
            <ImageItem src={data.url_image} />
            <span>{data.title}</span>
          </ItemWrap>
        </Link>
      )
    }

    renderList() {
      const { options, value } = this.props

      return (
        <ListWrap>
          {
                options && value
                  ? options.map((item) => (
                    this.renderItem(item)
                  ))
                  : null
          }
        </ListWrap>
      )
    }

    render() {
      const { value, ...props } = this.props

      return (
        <Wrapper>
          <InputWrap value={value} onChange={this.onChange} />
          {this.renderList()}
        </Wrapper>
      )
    }
}
