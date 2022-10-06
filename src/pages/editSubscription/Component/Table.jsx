import React from 'react'
import { BootstrapTable, TableHeaderColumn,InsertButton} from 'react-bootstrap-table'
const Table = () => {

        const products=[]
        
        const createCustomInsertButton = (onClick) => {
            return (
              <InsertButton
                btnText='추가'
                style={{backgroundColor:'white', borderColor: 'black', marginBottom:'10px'}}
                />
            );
          }

        function onAfterInsertRow(row) {
            let newRowStr = '';
          
            for (const prop in row) {
              newRowStr += prop + ': ' + row[prop] + ' \n';
            }
            alert('The new row is:\n ' + newRowStr);
          }
          
          const options = {
            afterInsertRow: onAfterInsertRow, // A hook for after insert rows
            insertBtn: createCustomInsertButton
          };
   
          
        return (
            <div>
               
            <BootstrapTable data={products} insertRow={ true }  options={options}>
                <TableHeaderColumn isKey dataField='name' width='10%'>이름</TableHeaderColumn>
                <TableHeaderColumn dataField='num' width='30%'>생년월일</TableHeaderColumn>
                <TableHeaderColumn dataField='relation' width='10%'>관계</TableHeaderColumn>
                <TableHeaderColumn  dataField='head' width='10%'>세대주 여부</TableHeaderColumn>
                <TableHeaderColumn dataField='income' widht='30%'>연간 세전 소득</TableHeaderColumn>
                <TableHeaderColumn dataField='homeless' width='10%'>무주택 여부</TableHeaderColumn>
                <TableHeaderColumn dataField='subscript' width='15%'>청약 당첨 일자</TableHeaderColumn>
          </BootstrapTable>
          <div style={{fontSize:"10px", color: "#3572EE"}}>*청약 당첨 이력이 있는 경우에만 청약당첨일자를 적어주세요(YYYYMMDD)</div>
            </div>
          )
    
  
}

export default Table