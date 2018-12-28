import React, { PureComponent } from 'react'

import { PageWrapper } from 'components'


export class NotFoundPage extends PureComponent {
  render() {
    const { location } = this.props

    return (
      <PageWrapper>
        {' Not found: '}
        {location.pathname}
      </PageWrapper>
    )
  }
}
