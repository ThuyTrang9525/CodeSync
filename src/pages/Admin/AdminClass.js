import React, { Component } from 'react'
import Header from '../../components/Admin/HeaderAdmin';
import Nav from '../../components/Admin/NavAdmin';
import Button from '../../components/Admin/ButtonAddProps';
import RoleFilter from '../../components/Admin/RoleFilter';
import SearchForm from '../../components/Admin/SearchAdmin';
import TitleTable from '../../components/Admin/TitleTable';
import TableDataClass from '../../components/Admin/TableDataClass';
import Pagination from '../../components/Admin/Pagination';
export default class AdminClass extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Nav />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <SearchForm onSearch={(query) => console.log(`Search query: ${query}`)} />
        <RoleFilter onFilterChange={(role) => console.log(`Selected role: ${role}`)} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <TitleTable title="Class List" />
            <Button
            icon={<i className="fas fa-plus"></i>}
            text="Add Class"
            />  
        </div> 
        <TableDataClass />
        <Pagination />
      </div>
    )
  }
}
