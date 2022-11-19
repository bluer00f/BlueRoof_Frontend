import React , {useState}from 'react'
import { BootstrapTable, TableHeaderColumn,InsertButton} from 'react-bootstrap-table'
const Table = () => {


  const [isHouse, setIsHouse] = useState('예');
  const [memberBirthday, setMemberBirthday] = useState('');
  const [memberIncome, setMemberIncome] = useState(0);
  const [memberName, setMemberName] = useState('');
  const [isOwner, setIsOwner] = useState('예');
  const [relation, setRelation] = useState('');
  const [winDate, setWinDate] = useState('');
  const [isWin, setIsWin] = useState('예');

console.log(memberName);
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
            setMemberName(row[0]);
            setMemberBirthday(row[1]);
            setRelation(row[2]);
            setIsOwner(row[3]);
            setMemberIncome(row[4]);
            setIsHouse(row[5]);
            if (row[6]){
              setIsWin('Y');
              setWinDate(row[6])
            }else{
              setIsWin('N');
              setWinDate('');
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