import { Container, Badge, List, ListItem, Heading, Center } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Cafe Manager">
    <Container>
      <Title>
        Cafe Manager <Badge>May 2021 - Jul 2021</Badge>
      </Title>
      <P>
        Python cafe manager program. Customers can order products through the
        program, then the program will print the receipt out. At the same time,
        managers can view the list of incoming orders, adding a new menu or view
        sales statistics of products.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python</span>
        </ListItem>
        <ListItem>
          <Meta>Course</Meta>
          <span>EN811300: Fundamentals of Computer Programming</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={3}>
        <Center>Customer Side</Center>
      </Heading>
      <WorkImage src="/images/works/cafe-manager-01.png" alt="cafe-manager" />
      <Heading as="h4" fontSize={16} my={3}>
        <Center>Manager Side</Center>
      </Heading>
      <WorkImage src="/images/works/cafe-manager-02.png" alt="cafe-manager" />
      <WorkImage src="/images/works/cafe-manager-03.png" alt="cafe-manager" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
