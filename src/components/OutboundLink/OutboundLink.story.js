import React from 'react'
import { storiesOf } from '@storybook/react'

import OutboundLink from './OutboundLink'

storiesOf('OutboundLink', module)
  .add('simple link', () => <OutboundLink href="http://some.test/link">Test link</OutboundLink>)
  .add('centered link', () => <OutboundLink center href="http://some.test/link">Centered link</OutboundLink>)
