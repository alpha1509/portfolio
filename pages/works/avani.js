import {
  Container,
  Badge,
  List,
  ListItem,
  UnorderedList,
  Heading,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="AVANI Hotel">
    <Container>
      <Title>
        AVANI Hotel Dashboard <Badge>Aug 2021 - Sep 2021</Badge>
      </Title>
      <P>
        A web application that displays the physical environment values measured
        by the sensors installed on each floor of the hotel in real time
        dashboard.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Firebase, Azure Web Service</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} mt={6}>
        Features
      </Heading>
      <UnorderedList mt={2} mb={6}>
        <ListItem>
          Display real time data from sensors sending via Node-RED to firebase
        </ListItem>
        <ListItem>Dashboard data visualizations</ListItem>
        <ListItem>Export data to XLSX</ListItem>
      </UnorderedList>

      <WorkImage src="/images/works/avani-01.png" alt="avani" />
      <WorkImage src="/images/works/avani-02.png" alt="avani" />
      <WorkImage src="/images/works/avani-03.png" alt="avani" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
