import React,{useState} from 'react'
import { StAll } from './style'
import { Button, Divider, Dropdown, Input, MenuProps, Modal, Row } from 'antd'
// import { ListOfMenu } from '../components/navbar/style'
import Link from 'next/link'
// import LoginModal from '../components/loginModal'
import { useRouter } from 'next/navigation'
import { ListOfMenu } from '../../navbar/style'
import LoginModal from '../../loginModal'

const HomeNavbar = () => {
    
  const [isModalOpen, setIsModalOpen] = useState(false);

  const items: any = [ {
    key: '1',
    type: 'group',
    label: 'Group title',
    children: [
      {
        key: '1-1',
        label: '1st menu item',
      },
      {
        key: '1-2',
        label: '2nd menu item',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },
    ],
  },{
    key: '1',
    type: 'group',
    label: 'Group title',
    children: [
      {
        key: '1-1',
        label: '1st menu item',
      },
      {
        key: '1-2',
        label: '2nd menu item',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },
    ],
  },{
    key: '1',
    type: 'group',
    label: 'Group title',
    children: [
      {
        key: '1-1',
        label: '1st menu item',
      },
      {
        key: '1-2',
        label: '2nd menu item',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },
    ],
  },{
    key: '1',
    type: 'group',
    label: 'Group title',
    children: [
      {
        key: '1-1',
        label: '1st menu item',
      },
      {
        key: '1-2',
        label: '2nd menu item',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },
    ],
  },{
    key: '1',
    type: 'group',
    label: 'Group title',
    children: [
      {
        key: '1-1',
        label: '1st menu item',
      },
      {
        key: '1-2',
        label: '2nd menu item',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },{
        label: 'example', value: '',
      },
    ],
  },]
  const router=useRouter()
  const onClick: MenuProps['onClick'] = ({ key }) => {
    router.push(key)
    
  };
  return (
    <StAll>
      
      <ListOfMenu>
        <Dropdown menu={{ items,onClick:onClick }} trigger={['click']}>
          <li>Mobile and digital goods</li>
        </Dropdown>

        <Dropdown menu={{ items }} trigger={['click']}>
          <li>Laptop, computer, office</li></Dropdown>

        <Dropdown menu={{ items }} trigger={['click']}>
          <li>Hypermarket</li></Dropdown>

        <Dropdown menu={{ items }} trigger={['click']}>
          <li>Home Appliances</li></Dropdown>
        <Dropdown menu={{ items }} trigger={['click']}>
          <li>Fashion and clothing</li></Dropdown>
        <Dropdown menu={{ items }} trigger={['click']}>
          <li>Beauty and health</li></Dropdown>
        <Dropdown menu={{ items }} trigger={['click']}>
          <li>Video and Audio</li></Dropdown>
        <Dropdown menu={{ items }} trigger={['click']}>
          <li>Cars and other vehicles</li></Dropdown>
        <Dropdown menu={{ items }} trigger={['click']}>
          <li>sport and entertainment</li></Dropdown>
        <Dropdown menu={{ items }} trigger={['click']}>
          <li>Health and medicine</li></Dropdown>
        <Dropdown menu={{ items }} trigger={['click']}>
          <li>Artistic culture</li></Dropdown>
        <Dropdown menu={{ items }} trigger={['click']}>
          <li>child and baby</li></Dropdown>
        <Dropdown menu={{ items }} trigger={['click']}>
          <li>Other categories</li></Dropdown>
      </ListOfMenu>
        <div>
            
      <Button onClick={()=>setIsModalOpen(true)}>
        login/sign-up
      </Button>
        </div>
          <LoginModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </StAll>
  )
}

export default HomeNavbar
