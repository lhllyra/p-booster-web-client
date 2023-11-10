"use client";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TonalityIcon from "@mui/icons-material/Tonality";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import MoreIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import { Github } from "@/icons/github-logo";
import { CardsView } from "@/icons/cards-view";
import {
  FormControl,
  InputLabel,
  Select,
  ListSubheader,
  TextField,
  Divider,
  Button,
  Stack,
} from "@mui/material";
import PopoverComponent from "./components/popover-component";
import { useState } from "react";
import axios from "axios";

const Search = styled("div")(({ theme }) => ({
  color: "#6B6C7E",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha("#6B6C7E", 0.15),
  "&:hover": {
    backgroundColor: alpha("#6B6C7E", 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "100%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const [repositories, setRepositories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleSearch = () => {
    const token = localStorage.getItem("token");

    axios
      .get(`http://localhost:3001/api/repositories?query=${searchQuery}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setRepositories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleOpenAddRepo = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseAddRepo = () => {
    setAnchorEl(null);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <MailIcon />
        </IconButton>
        <p>Starred Repos</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <NotificationsIcon />
        </IconButton>
        <p>Switch Theme</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <NotificationsIcon />
        </IconButton>
        <p>Cards View</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <NotificationsIcon />
        </IconButton>
        <p>Add New Repo</p>
      </MenuItem>
    </Menu>
  );

  const addRepoContent = (
    <Box sx={{ width: "450px" }}>
      <Typography sx={{ paddingLeft: 3 }} variant="h6" gutterBottom>
        New Repository
      </Typography>
      <Typography
        sx={{ paddingLeft: 3, paddingTop: 1 }}
        variant="subtitle2"
        gutterBottom
      >
        Repository
      </Typography>
      <TextField
        sx={{ paddingBottom: "20px", px: 3, width: "90%" }}
        size="small"
        variant="outlined"
        type="text"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      ></TextField>
      <Divider />
      <Box
        sx={{
          height: "60px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Stack spacing={2} direction="row" sx={{ paddingRight: 3 }}>
          <Button variant="outlined" onClick={handleCloseAddRepo}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSearch}>
            Add
          </Button>
        </Stack>
      </Box>
    </Box>
  );

  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <html>
        <body style={{ margin: "0px", backgroundColor: "#F1F2F5" }}>
          <Box>
            <AppBar
              position="static"
              sx={{
                backgroundColor: "#FFFFFF",
                boxShadow: "none",
              }}
            >
              <Toolbar
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  padding: "0",
                  "&.MuiToolbar-root": {
                    padding: "0",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "50%",
                    pr: "30px",
                    pl: "50px",
                  }}
                >
                  <IconButton
                    disableRipple
                    size="large"
                    edge="start"
                    aria-label="github"
                    sx={{ mr: 2 }}
                  >
                    <Github sx={{ color: "#6B6C7E" }} />
                  </IconButton>
                  <Typography
                    noWrap
                    sx={{
                      display: {
                        xs: "none",
                        sm: "block",
                        color: "var(--secondary-secondary, #6B6C7E)",
                        fontFamily: "Roboto",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight: "150%",
                      },
                      px: 2,
                    }}
                  >
                    Github Compare
                  </Typography>
                  <FormControl sx={{ minWidth: 120, width: 200 }} size="small">
                    <InputLabel htmlFor="grouped-select">
                      Filter and order
                    </InputLabel>
                    <Select
                      defaultValue=""
                      inputProps={{ "aria-label": "Without label" }}
                      label="Filter and order"
                      displayEmpty
                      // TODO popular funcao onchange
                      onChange={() => {}}
                    >
                      <ListSubheader>Order By</ListSubheader>
                      <MenuItem value={0}>Stars</MenuItem>
                      <MenuItem value={1}>Forks</MenuItem>
                      <MenuItem value={2}>Open Issues</MenuItem>
                      <MenuItem value={3}>Age</MenuItem>
                      <MenuItem value={4}>Last commit</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ "aria-label": "search" }}
                    />
                  </Search>
                </Box>

                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: "50px",
                  }}
                >
                  <IconButton
                    disableRipple
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                  >
                    <StarBorderIcon sx={{ color: "#6B6C7E" }} />
                  </IconButton>
                  <IconButton
                    disableRipple
                    size="large"
                    aria-label="Theme"
                    color="inherit"
                  >
                    <TonalityIcon sx={{ color: "#6B6C7E" }} />
                  </IconButton>
                  <IconButton
                    disableRipple
                    size="large"
                    aria-label="cards view"
                    color="inherit"
                  >
                    <CardsView sx={{ color: "#6B6C7E" }} />
                  </IconButton>
                  <IconButton
                    size="large"
                    aria-label="add"
                    sx={{
                      mt: 2,
                      mr: 2,
                      mb: 2,
                      ml: 3,
                      width: "32px",
                      height: "32px",
                      borderRadius: "4px",
                      backgroundColor: "var(--primary-primary, #0B5FFF)",
                      "&:hover": {
                        backgroundColor: "#709dfd",
                      },
                    }}
                    onClick={handleOpenAddRepo}
                  >
                    <AddIcon sx={{ color: "#FFFFFF" }} />
                  </IconButton>
                </Box>
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    sx={{ color: "#6B6C7E" }}
                  >
                    <MoreIcon />
                  </IconButton>
                </Box>
              </Toolbar>
            </AppBar>
            {renderMobileMenu}
          </Box>
          <Box>{children}</Box>
        </body>
      </html>
      <PopoverComponent
        anchorEl={anchorEl}
        onClose={handleCloseAddRepo}
        content={addRepoContent}
      />
    </>
  );
}
