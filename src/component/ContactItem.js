import React from 'react'
import { Col, Row } from 'react-bootstrap'

export const ContactItem = ({item}) => {
  return (
    <Row>
        <Col lg={1}>
            <img width={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg" alt="unknown person" />
        </Col>
        <Col lg={11}>
            <div>{item.name}</div>
            <div>{item.phoneNumber}</div>
        </Col>
    </Row>
  )
}
