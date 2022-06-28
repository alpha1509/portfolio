import {
  Container,
  Badge,
  List,
  ListItem,
  UnorderedList,
  Heading,
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Tutorian">
    <Container>
      <Title>
        Tutorian <Badge>2020</Badge>
      </Title>
      <P>
        A courses management web application that user can create multiple
        profiles within one account. Each of profile can independently manage
        its course. Tutorian makes it convenient to recognize and manage in
        various courses. It also provides a summary of course information for
        easy understanding.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML/CSS, JavaScript, NodeJS, Firebase</span>
        </ListItem>
        <ListItem>
          <Meta>Course</Meta>
          <span>EN813701: Web Application Development</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} mt={6}>
        Features
      </Heading>
      <UnorderedList mt={2} mb={6}>
        <ListItem>One user account can have multiple profiles</ListItem>
        <ListItem>Able to add unlimited courses to each profile</ListItem>
        <ListItem>
          There is a calendar showing the datetime of all courses
        </ListItem>
        <ListItem>
          There is a page to display a summary of all available courses
        </ListItem>
      </UnorderedList>

      <WorkImage src="/images/works/tutorian-01-1.png" alt="tutorian" />
      <WorkImage src="/images/works/tutorian-01-2.png" alt="tutorian" />
      <WorkImage src="/images/works/tutorian-02.png" alt="tutorian" />
      <WorkImage src="/images/works/tutorian-03.png" alt="tutorian" />
      <WorkImage src="/images/works/tutorian-06.png" alt="tutorian" />
      <WorkImage src="/images/works/tutorian-07.png" alt="tutorian" />
      <WorkImage src="/images/works/tutorian-04.png" alt="tutorian" />
      <WorkImage src="/images/works/tutorian-05.png" alt="tutorian" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
