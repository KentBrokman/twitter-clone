import React, { SetStateAction, Dispatch } from 'react';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { deleteTweet, setTweetDeletedLoading } from '../../store/ducks/tweets/actionCreators';


const useStyles = makeStyles({
  paper: {
    boxShadow: '0px 0px 6px 2px rgba(224, 224, 224, 0.57)',
  },
  list: {

  },
  listRed: {
    color: 'red',
  }
});

const ITEM_HEIGHT = 48;

interface ThreeDotsMenuProps {
  id: string;
  setDeleting: Dispatch<SetStateAction<boolean>>
}

export const ThreeDotsMenu: React.FC<ThreeDotsMenuProps> = ({id, setDeleting}) => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    console.log('handleClose')
    setAnchorEl(null);
  };
  const handleDelete = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setDeleting(true)

    dispatch(setTweetDeletedLoading())
    dispatch(deleteTweet(id))
    
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        classes={{
          paper: classes.paper,
        }}
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        <MenuItem onClick={handleDelete} classes={{ root: classes.listRed }}>
          Удалить
        </MenuItem>
        {/* <MenuItem onClick={handleClose}>
          Редактировать
        </MenuItem> */}
      </Menu>
    </div>
  );
}