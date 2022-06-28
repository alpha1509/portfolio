import {
  Container,
  Badge,
  List,
  ListItem,
  UnorderedList,
  Heading,
  SimpleGrid
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="EN KKU OKR">
    <Container>
      <Title>
        EN KKU OKR <Badge>2021</Badge>
      </Title>
      <P>
        A web application for OKR management within the Faculty of Engineering,
        Khon Kaen University
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PHP, Laravel, SQLite, Google Login</span>
        </ListItem>
        <ListItem>
          <Meta>Course</Meta>
          <span>EN813306: Software Engineer</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/en-okr-01.png" alt="EN KKU OKR" />
      <WorkImage src="/images/works/en-okr-02.png" alt="EN KKU OKR" />
      <WorkImage src="/images/works/en-okr-03.png" alt="EN KKU OKR" />
      <WorkImage src="/images/works/en-okr-04.png" alt="EN KKU OKR" />
      <WorkImage src="/images/works/en-okr-05.png" alt="EN KKU OKR" />
      <WorkImage src="/images/works/en-okr-06.png" alt="EN KKU OKR" />
      <WorkImage src="/images/works/en-okr-07.png" alt="EN KKU OKR" />
      <WorkImage src="/images/works/en-okr-08.png" alt="EN KKU OKR" />
      <WorkImage src="/images/works/en-okr-09.png" alt="EN KKU OKR" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
