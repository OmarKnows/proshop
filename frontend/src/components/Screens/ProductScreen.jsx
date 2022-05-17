import React from 'react'
import { Link } from 'react-router-dom'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from 'react-bootstrap'
import Rating from '../Rating'
import products from '../../products'

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id)
  return (
    <div>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col>
          <Image src={product.Image} alt={product.name}></Image>
        </Col>
        <Col>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h2>{product.name}</h2>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </div>
  )
}

export default ProductScreen
