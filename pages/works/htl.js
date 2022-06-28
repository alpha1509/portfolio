import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
  UnorderedList,
  Heading
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="KKU Healthy Life">
    <Container>
      <Title>
        KKU Healthy Life <Badge>Feb 2022 - May 2022</Badge>
      </Title>
      <P>
        A web app only for Khon Kaen University personel. 1,000+ real users can
        recording their BMI and exercise result. The exercise results will be
        checked by admins then converted into points. The points can be redeemed
        for rewards within the web app.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Material UI, NodeJS, ExpressJS, MySQL</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} mt={6}>
        Features
      </Heading>
      <UnorderedList mt={2} mb={6}>
        <ListItem>Login via KKU Single Sign-On API</ListItem>
        <ListItem>There are interfaces for both users and admins side</ListItem>
        <ListItem>
          Able to record BMI (height and weight) and exercise results
        </ListItem>
        <ListItem>Points can be redeemed for rewards</ListItem>
        <ListItem>Admin can manage all user and system data</ListItem>
        <ListItem>Admin dashboard</ListItem>
        <ListItem>Notifications system</ListItem>
        <ListItem>Able to change color of background and text</ListItem>
      </UnorderedList>

      <WorkImage src="/images/works/htl-01.png" alt="HTL" />
      <WorkImage src="/images/works/htl-02.png" alt="HTL" />
      <WorkImage src="/images/works/htl-03.png" alt="HTL" />
      <WorkImage src="/images/works/htl-04.png" alt="HTL" />
      <WorkImage src="/images/works/htl-05.png" alt="HTL" />
      <WorkImage src="/images/works/htl-06.png" alt="HTL" />
      <WorkImage src="/images/works/htl-07.png" alt="HTL" />
      <WorkImage src="/images/works/htl-08.png" alt="HTL" />
      <WorkImage src="/images/works/htl-09.jpg" alt="HTL" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
