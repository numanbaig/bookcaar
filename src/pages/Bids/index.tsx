import { Box } from '@mui/material'
import Bid from './Bid'
import Container from '@mui/material/Container';
const BidsList = () => {
  return (
    <Container maxWidth="md">
      <Box>{[{
        name: 'NOMAN',
        pickupLocation: 'Gilgit',
        time: new Date().toDateString(),
        image: 'https://pluspng.com/img-png/user-png-icon-male-user-icon-512.png"',
        status: 'Active',
        tripType: 'short-rental'
      },
      {
        name: 'NOMAN',
        pickupLocation: 'Gilgit',
        time: new Date().toDateString(),
        image: 'https://pluspng.com/img-png/user-png-icon-male-user-icon-512.png"',
        status: 'Active',
        tripType: 'short-rental'

      },
      {
        name: 'NOMAN',
        pickupLocation: 'Gilgit',
        time: new Date().toDateString(),
        image: 'https://pluspng.com/img-png/user-png-icon-male-user-icon-512.png"',
        status: 'Active',
        tripType: 'short-rental'

      }
      ].map((item) => (
        <Bid
          name={item.name}
          pickupLocation={item.pickupLocation}
          time={item.time}
          status={item.status}
          image={item.image}
        />
      ))}
      </Box>

    </Container>
  )
}

export default BidsList
