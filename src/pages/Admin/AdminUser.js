import React, { Component } from 'react'
import Header from '../../components/Admin/HeaderAdmin';
import Nav from '../../components/Admin/NavAdmin';
import Button from '../../components/Admin/ButtonAddProps';
import RoleFilter from '../../components/Admin/RoleFilter';
import SearchForm from '../../components/Admin/SearchAdmin';
import TitleTable from '../../components/Admin/TitleTable';
export default class AdminUser extends Component {
  render() {
    return (
        <div className='container'>
            <Header />

            <Nav />

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <SearchForm onSearch={(query) => console.log(`Search query: ${query}`)} />
            <RoleFilter onFilterChange={(role) => console.log(`Selected role: ${role}`)} />
          </div>

        
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <TitleTable title="User List" />
              <Button
                icon={<i className="fas fa-plus"></i>}
                text="Add User"
                onClick={() => alert('Add User Clicked')} 
              />  
            </div>       
            

        </div>
      )
    }
}
