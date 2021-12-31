import React, { useEffect } from 'react'
import { Card, Col, Container,Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export const SinglePost = () => {
    const post = useSelector((state) => state.allPost.singlePost);
    return (
        <>
    <Container>
     <Row className='my-5'>
          <Col sm={12} md={6} lg={4} xl={3}>
            {Object.keys(post).length!==0?<>
             <Card.Body>
              <Card.Title style={{cursor:'pointer'}}>{post.title}</Card.Title>
              <Card.Title>{post.id}</Card.Title>
              <Card.Text>
                {post.body}
              </Card.Text>
            </Card.Body>
            </>:<h4 className='text-center'>Loading...</h4>}
          </Col>
     </Row>
    </Container> 
        </>
    )
}
