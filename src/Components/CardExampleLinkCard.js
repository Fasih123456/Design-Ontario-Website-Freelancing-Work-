import React from 'react'
import { Card } from 'semantic-ui-react'

const CardExampleLinkCard = (props) => (
  <Card
    href={props.link}
    header={props.header}
    meta={props.meta}
    description={props.description}
  />
)

export default CardExampleLinkCard;