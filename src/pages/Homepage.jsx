import {
  Badge,
  chakra,
  Code,
  Heading,
  List,
  ListItem,
  OrderedList,
} from '@chakra-ui/react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { useAuth } from '../contexts/AuthContext'

export default function Homepage() {
  
  return (
    <Layout>
      <Heading>Home page</Heading>
      {/* <Text my={6}>{currentUser?.email}</Text> */}

      <Heading>
        Project snow-leopard - Firebase Authentication 
        (Developer)
        <chakra.span
          fontWeight='black'
          fontStyle='italic'
          fontSize='2xl'
          mx={2}
        >
        
        Verson 1 (beta)
        </chakra.span>
        <Badge
          fontWeight='black'
          fontSize='2xl'
          mx={2}
          px={2}
          colorScheme='teal'
        >
          NEW API integration - Google Firebase
        </Badge>
      </Heading>
      <OrderedList fontSize='3xl' my={4}>
        <ListItem>Email password authentication (Register/Login)</ListItem>
        <ListItem>Google Sign in</ListItem>
        <ListItem>Forgot Password</ListItem>
        <ListItem>Custom Reset password page</ListItem>
        <ListItem>Protected routes</ListItem>
        <ListItem>
          <Code fontSize='inherit'> Redirect To</Code> or Back (keeping the
          state)
        </ListItem>
        <ListItem>
          Custom Auth Hook <Code fontSize='3xl'>useAuth()</Code>
        </ListItem>
        <ListItem>Loading indicators while sign-in/up</ListItem>
        <ListItem>
          Dark/Light Mode templates enabled using
          <Badge
            fontSize='inherit'
            colorScheme='teal'
            mx={2}
            textTransform='capitalize'
            borderRadius='md'
          >
            Coustom UI (Chakra UI)
          </Badge>
        </ListItem>
        <ListItem>2 Factor Authentication (SMS) - TO BE IMPLIMENTED</ListItem>
        <ListItem>Profile Page - TO BE IMPLIMENTED</ListItem>
      </OrderedList>
      <Heading size='md' mt={8}>
        Some other links (only for reference):
      </Heading>
      <List>
        <ListItem>
          <Link to='/reset-password'>Reset Page</Link>
        </ListItem>
        <ListItem>
          <Link to='/forgot-password'>Forgot Page</Link>
        </ListItem>
        <ListItem>
          <Link to='/test'>Test Page</Link>
        </ListItem>
      </List>
    </Layout>
  )
}
