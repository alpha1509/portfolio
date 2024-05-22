import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Panupong Chimmai. Based on{' '}
      <Link href="https://www.craftz.dog/" target="_blank">
        Takuya Matsuyama
      </Link>
      's website.
    </Box>
  )
}

export default Footer
