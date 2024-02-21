
import { Avatar, List } from 'antd';



const FinaceList = ({list=[]}) => {


  return (
     <List style={{"margin":"20px","marginRight":"100px"}}>
      {list && list.map((e,i) => (
        <List.Item   key={i}>
            <List.Item.Meta
              avatar={<Avatar src={"tem.picture.large"} />}
              title={e?.category}
            />
          <div style={{ marginRight: "50%" }}>{ e?.Notes}</div>
            <div style={{width:"100px"}}> {e?.amount} $</div>
        </List.Item>
          ))
          }
         
    </List>
  );
};
export default FinaceList;