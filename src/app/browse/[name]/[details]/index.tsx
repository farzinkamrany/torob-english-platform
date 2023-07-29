
import { Drawer } from 'antd'
import React,{FC} from 'react'
import { StRow } from '../../style'
import MenuList from '../../../../components/menuList'


interface PropTypes{
    setopenDetails?:any
    openDetails?:boolean
  }
  

const DetailsDrawer:FC<PropTypes> = ({
    setopenDetails,openDetails
}) => {
    
  return (
    <Drawer open={openDetails} onClose={()=>setopenDetails(false)}>
        
        <MenuList/>
        <MenuList/>
        <MenuList/>
        <MenuList/>
        <MenuList/>
        <MenuList/>
      {/* <Navbar/>
      <StRow>
        <Menu/>
<SearchResult/>
</StRow> */}
  </Drawer>
  )
}

export default DetailsDrawer