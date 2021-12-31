import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Card, Row, Col } from "react-bootstrap";
import { getAllPostAction,getSinglePostById } from "../redux/action";
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.allPost.data);
  
  useEffect(() => {
    dispatch(getAllPostAction());
    
  }, [dispatch]);

 const navigate=useNavigate()
 
 console.log(posts);
  return (
    <Container>
     <Row className='my-5'>
     {posts.map((post,id) => {
        return (
          <Col sm={12} md={6} lg={4} xl={3} key={id}>
          <Card style={{ width: "15rem" }}>
            <Card.Body>
              <Card.Title style={{cursor:'pointer'}} onClick={()=>{
                dispatch(getSinglePostById(post.id))
                navigate('/singlepost')
              }}>{post.title}</Card.Title>
              <Card.Title>{post.id}</Card.Title>
              <Card.Text>
                {post.body.slice(0,60)}...
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        );
      })}
     </Row>
    </Container>
  );
};

export default Home;
