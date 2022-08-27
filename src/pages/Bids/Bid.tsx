import { Box, Typography, Card, Avatar, RadioGroup, FormControlLabel, Radio, useTheme } from '@mui/material'
import Button from '../../components/Button'
import CarImage from '../../assets/car.jpeg'
import Divider from '@mui/material/Divider';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AirlineSeatLegroomReducedIcon from '@mui/icons-material/AirlineSeatLegroomReduced';
import { themeShadows } from '../../theme/shadows'
export interface BidProps {
    name: string,
    pickupLocation: string,
    time: string,
    image: string,
    status: string,
    tripType: 'short-rental' | 'per-day',
}
const Bid = ({ name, pickupLocation, time, image, status, tripType }: BidProps) => {
    const theme = useTheme()
    const shadows = themeShadows()

    return (
        <Box sx={{ padding: '1rem', }}>
            <Card sx={{
                // padding: 2,
                alignItems: 'flex-start', maxHeight: "8rem",
                borderRadius: ".5rem",
            }}
                variant="elevation" >
                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr ', }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img style={{ width: '100%', maxHeight: '8rem' }} src={CarImage} />
                    </Box>
                    <Box sx={{ marginLeft: "2rem" }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="h6" sx={{
                                marginLeft: 1,
                                fontSize: '1.5rem',
                                fontWeight: 800
                            }}>
                                Toyota Land Cruiser
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: 'grid',
                            gridTemplateColumns: '4fr 2fr',

                        }}>
                            <Box>
                                <Box sx={{ display: 'flex', marginTop: '.5rem' }}>
                                    <Box display="flex">
                                        <AcUnitIcon color="primary" />
                                        <Typography color="primary" sx={{ marginLeft: '.2rem' }}>AC</Typography>
                                    </Box>
                                    <Box display="flex" ml="1rem">
                                        <AirlineSeatLegroomReducedIcon color="primary" />
                                        <Typography color="primary" sx={{ marginLeft: '.2rem' }}>4</Typography>
                                    </Box>
                                </Box>
                                <Box display="flex" mt={'.5rem'}>
                                    {['full-day', 'short-day'].map((type) => (
                                        <FormControlLabel value={type} control={<Radio />} label={type} />
                                    ))}
                                </Box>
                            </Box>
                            <Box display="flex" alignItems="center" sx={{ textAlign: 'center', width: '100%' }} >
                                <Divider orientation="vertical" />
                                <Box sx={{ marginLeft: '1rem', width: '100%' }}>
                                    <Typography sx={{ textAlign: 'center' }}>Rs 900 <span>Per Day</span></Typography>
                                    <Button
                                        bgColor='primary'
                                        size='full'
                                        variant='contained'
                                        sx={{ width: '100%', marginTop: '1rem', }}
                                        onClick={
                                            () => {

                                            }
                                        }>
                                        <Typography>Contact</Typography>
                                    </Button>
                                    <Button
                                        bgColor='primary'
                                        size='full'
                                        variant='contained'
                                        sx={{ width: '100%', marginTop: '1rem', }}
                                        onClick={
                                            () => {

                                            }
                                        }>
                                        <Typography>Confirm</Typography>
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Card>
        </Box>
    )
}

export default Bid;