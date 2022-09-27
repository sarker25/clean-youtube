import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const Item = ({ item, currentItem, itemClickHandler }) => {
  return (
    <ListItem
      alignItems="center"
      sx={
        currentItem.id === item.id
          ? {
              background: "#2196f3",
              marginBottom: "5px",
              color: "#fff",
              cursor: "pointer",
            }
          : { background: "#efefef", marginBottom: "5px", cursor: "pointer" }
      }
    >
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={item.thumbnail} />
      </ListItemAvatar>
      <ListItemText
        onClick={() => itemClickHandler(item)}
        primary={
          item.title.length > 50 ? item.title.substr(0, 50) + "..." : item.title
        }
        secondary={
          <>
            <Typography
              sx={
                currentItem.id === item.id
                  ? { color: "#fff" }
                  : { display: "inline" }
              }
              component="span"
              variant="body2"
              color="#1769aa"
            >
              {item.itemChannelTitle}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
};

export default Item;
