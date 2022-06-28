import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="IoT Digital Farming">
    <Container>
      <Title>
        IoT Digital Farming <Badge>May 2021 - Jul 2021</Badge>
      </Title>
      <P>
        A web application that displays the physical environment values measured
        by the sensors installed on each area of the farm in real time
        dashboard.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML/CSS, JavaScript, Firebase, Node-RED</span>
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
        <ListItem>Export data to XLSX or PDF</ListItem>
      </UnorderedList>

      <WorkImage
        src="/images/works/digital-farming-01.png"
        alt="digital-farming"
      />
      <WorkImage
        src="/images/works/digital-farming-02.png"
        alt="digital-farming"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
