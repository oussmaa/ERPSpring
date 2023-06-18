import React from 'react'
import PanelContainer from './PanelContainer'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import flagTN from "../images/flagTN.webp"
import PanelHeader from './PanelHeader';
import Badge from './Badge';

const ListPanel = () => {
  return (
    <PanelContainer wth="30%">
    <PanelHeader title={"Sales by Location"} 
                  secondTitle={"Sales performance by location"} />
         <List sx={{width : "100%", bgcolor: 'background.paper' }}>
          <ListItem sx={{width : "100%",
                         justifyContent:"space-between", 
                         alignItems:"center"}}>
            <div style={{ display : "flex", justifyContent: "space-between", alignItems : "center" }}>
                <ListItemAvatar>
                  <Avatar sx={{ width : "40px", height : "40px" }} alt="Remy Sharp" src={flagTN} />
                </ListItemAvatar>
                <ListItemText
                        sx={{ fontSize : "14px" }}
                        primary={"Tunisia"}
                        secondary={
                          <React.Fragment>
                            {"340 sales"}
                          </React.Fragment>
                        }

                        />
            </div>
            <div>
            <ListItemText
              sx={{ fontSize : "14px" }}
              primary={
                    <div  style={{
                                  display :"flex", 
                                  justifyContent : "start",
                                  alignItems : "center",
                                  gap : "2px"}}>
                      $17,678 <Badge content={"+12"} nullValue={0} valueBg={12} />
                    </div>
                                    }
              />
            </div>
          </ListItem>
          <Divider variant="inset" component="li" />
    </List>
    </PanelContainer>
  )
}

export default ListPanel
