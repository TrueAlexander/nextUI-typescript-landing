import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container, Navbar, Text, Button, Grid, Col } from '@nextui-org/react'
import InfoCard from '../components/InfoCard'



const Home: NextPage =  () => {
  return (
    <Container>
      {/* Navbar */}
      <Navbar isCompact variant={"static"}>
        <Navbar.Brand>
          <Text b color="inherit">
            LearnToCode
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="md">
          <Navbar.Link href="#">Learning Platform</Navbar.Link>
          <Navbar.Link href="#">Community</Navbar.Link>
          <Navbar.Link href="#">Contact Us</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link href="#">Login</Navbar.Link>
          <Navbar.Item>
            <Button auto flat href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>

      {/* Jumbotron */}
      <Grid.Container 
        justify="center"
        css={{"height": "500px", "backgroundImage": "url(https://littlevisuals.co/images/747.jpg)"}}
      >
        <Grid xs={12} sm={6} alignItems="center">
          <Col css={{"width": "100%"}}>
            <Text weight={"bold"} size={70} css={{"textAlign": "center"}}>
              The education platform
            </Text>
            <Text weight={"bold"} size={70} css={{"textAlign": "center"}}>
              of the future
            </Text>
            <Button size="lg" shadow color="gradient" css={{"width": "70%", "margin": "10px auto 0"}}>Join for Free</Button>
          </Col>
        </Grid>
      </Grid.Container>

      {/* 3 displaying Product cards */}
      <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
          <InfoCard
            label="Course"
            title="Learn Next.js with us"
            imageURL="https://littlevisuals.co/images/red_dawn.jpg"
            studentCount="3500" 
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <InfoCard
            label="Course"
            title="Learn React.js with us"
            imageURL="https://littlevisuals.co/images/sunset.jpg"
            studentCount="6500" 
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <InfoCard
            label="Course"
            title="Learn Node.js with us"
            imageURL="https://littlevisuals.co/images/tail.jpg"
            studentCount="2500" 
          />
        </Grid>
      </Grid.Container>

    </Container>
  )
}

export default Home
