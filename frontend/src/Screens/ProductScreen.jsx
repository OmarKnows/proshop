import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from 'react-bootstrap'
import Rating from '../components/Rating'

const ProductScreen = () => {
  let params = useParams()
  const [product, setProduct] = useState([])
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${params.id}`)

      setProduct(data)
    }
    fetchProduct()
  }, [params])
  return (
    <div>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col>
          <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={product.rating}
                text={`${product.numReviews} Reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>Price: ${product.price}</ListGroupItem>
            <ListGroupItem>Description: {product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col>
          <Card>
            <ListGroup variant='flush'>
              <ListGroupItem>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock ? 'In Stock' : 'Out Of Stock'}
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ProductScreen
