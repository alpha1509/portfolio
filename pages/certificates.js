import { Container, Heading, SimpleGrid, Badge } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbJavascriptCert from '../public/images/contents/javascript-cert.png'
import thumbNodeCert from '../public/images/contents/node-cert.png'
import thumbPythonCert from '../public/images/contents/python-cert.png'
import thumbReactCert from '../public/images/contents/react-cert.png'
import thumbSqlCert from '../public/images/contents/sql-cert.png'
import thumbLinkCert from '../public/images/contents/link-cabling.jpg'

const Posts = () => (
  <Layout title="Certificates">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Certificates
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <GridItem
            id="javascript-cert"
            title="JavaScript (Intermediate)"
            thumbnail={thumbJavascriptCert}
            href="https://www.hackerrank.com/certificates/91319c5b498d"
          >
            <p>
              <Badge>Jun 2022</Badge>
            </p>
            HackerRank
          </GridItem>
          <GridItem
            id="node-cert"
            title="Node (Basic)"
            thumbnail={thumbNodeCert}
            href="https://www.hackerrank.com/certificates/cc281dbe0d90"
          >
            <p>
              <Badge>Jun 2022</Badge>
            </p>
            HackerRank
          </GridItem>
          <GridItem
            id="python-cert"
            title="Python (Basic)"
            thumbnail={thumbPythonCert}
            href="https://www.hackerrank.com/certificates/a9f029efc4dd"
          >
            <p>
              <Badge>Jun 2022</Badge>
            </p>
            HackerRank
          </GridItem>
          <GridItem
            id="react-cert"
            title="React (Basic)"
            thumbnail={thumbReactCert}
            href="https://www.hackerrank.com/certificates/8f61e24e0568"
          >
            <p>
              <Badge>Jun 2022</Badge>
            </p>
            HackerRank
          </GridItem>
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            id="sql-cert"
            title="SQL (Basic)"
            thumbnail={thumbSqlCert}
            href="https://www.hackerrank.com/certificates/669eef8c98a6"
          >
            <p>
              <Badge>Jun 2022</Badge>
            </p>
            HackerRank
          </GridItem>
          <GridItem
            id="sql-cert"
            title="LINK CAMPUS CABLING"
            thumbnail={thumbLinkCert}
            href="/images/contents/link-cabling.jpg"
          >
            <p>
              <Badge>Nov 2020</Badge>
            </p>
            Link American Standard
          </GridItem>
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}></SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
