import {AppBar,Box,Button} from '@mui/material'
import './styles/headerstyles.css'
import { Link ,useLocation } from 'react-router-dom'
const Header = () => {
    const location = useLocation()

  return (
    <AppBar position='static' className='appBar'>
        
        <Box style={{flexGrow:1,display:'flex'}}>
        
        <Button style={{color:'white'}}>
            {
             location.pathname =='/' ? (<>
         <Link to='/allmessages' style={{color:'white',textDecoration:'none'}}>
            AllMessages
            </Link>
             </>):(<>
            <Link to='/' style={{color:'white',textDecoration:'none'}}>
            AddMsg
            </Link>
             </>)   
            }
            
            
        </Button>
        

        </Box>
    </AppBar>
  )
}

export default Header
