import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  IconButton,
  ListItem,
  Typography,
} from "@material-ui/core";
import { PlaceOutlined } from "@material-ui/icons";
import React from "react";
import { useStyles } from "./useStyleRecentSearch";
import './index.css';
import { List } from "reactstrap";
export default function RecentSearch() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.boxRecentSearch}>
        <Typography variant="h4" className={classes.title}>
          Recent Searches
        </Typography>
        <Box >
        <List className={classes.rootList} disablePadding={false}>
                <ListItem className={classes.list}  >
                    <Button variant="outlined" color="primary" className= {`${classes.button} ${classes.btnItemFirst}`}>
                      <img className = "imgRecentSearches" src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/275067098_1407044986394206_2635471231387814510_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=bBX8_c39rQoAX_HoQr6&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT9AdEs3pX3CiAPi42AaTJsXJhZi_IRlL98C-qtgIPeokg&oe=624C472A" alt="Avatar"/>
                      <Box textAlign="left" className ="boxNameRecentSearch">
                        <span className="nameRecentSearch">Quận 1</span> <br/>
                        <Typography variant="caption" >Thành phố * thành phố hồ chính minh</Typography>
                      </Box>
                    </Button>
                    <Button variant="outlined" color="primary" className={classes.button}>
                      <img className = "imgRecentSearches" src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/275067098_1407044986394206_2635471231387814510_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=bBX8_c39rQoAX_HoQr6&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT9AdEs3pX3CiAPi42AaTJsXJhZi_IRlL98C-qtgIPeokg&oe=624C472A" alt="Avatar"/>
                      <Box textAlign="left" className ="boxNameRecentSearch">
                        <span className="nameRecentSearch">Nhật bản</span> <br/>
                        <Typography variant="caption" >Nhật bản * Quốc gia</Typography>
                      </Box>
                    </Button>
                    <Button variant="outlined" color="primary" className={classes.button}>
                      <img className = "imgRecentSearches" src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/275067098_1407044986394206_2635471231387814510_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=bBX8_c39rQoAX_HoQr6&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT9AdEs3pX3CiAPi42AaTJsXJhZi_IRlL98C-qtgIPeokg&oe=624C472A" alt="Avatar"/>
                      <Box textAlign="left" className ="boxNameRecentSearch">
                        <span className="nameRecentSearch">Đà nẵng</span> <br/>
                        <Typography variant="caption" >Vùng * VietNam</Typography>
                      </Box>
                    </Button>
                    <Button variant="outlined" color="primary" className={classes.button}>
                      <img className = "imgRecentSearches" src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/275067098_1407044986394206_2635471231387814510_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=bBX8_c39rQoAX_HoQr6&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT9AdEs3pX3CiAPi42AaTJsXJhZi_IRlL98C-qtgIPeokg&oe=624C472A" alt="Avatar"/>
                      <Box textAlign="left" className ="boxNameRecentSearch">
                        <span className="nameRecentSearch">Kiểm tra covid 19</span> <br/>
                        <Typography variant="caption" >Danh mục * VietNam</Typography>
                      </Box>
                    </Button>
   
                </ListItem>
            </List>
         
          
        
            
        </Box>
      </Box>

      <Box className={classes.boxTrendingNow}>
        <Typography className={classes.title}>Treading Now</Typography>
        <Box className={classes.boxBtn} mt={2}>
          <Button variant="outlined" size="small" className={classes.trenddingBtn}>
            Ho Chi Minh City
          </Button>
          <Button variant="outlined" size="small" className={classes.trenddingBtn}>
            Đà nẵng 
          </Button><Button variant="outlined" size="small" className={classes.trenddingBtn}>
            Nha Trang
          </Button>
          <Button variant="outlined" size="small" className={classes.trenddingBtn}>
            Điểm đến mới
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
