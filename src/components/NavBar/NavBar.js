import {
    Box,
    Container,
    Button,
    Stack,
    Typography,
    useMediaQuery,
    IconButton,
  } from "@mui/material";
  import { Link, useLocation } from "react-router-dom";
  import logo from "../../assets/logo.png";
  import styles from "./NavBar.module.css";
  import { useState } from "react";
  import CloseIcon from "@mui/icons-material/Close";
  import MenuIcon from "@mui/icons-material/Menu";
  
  export default function NavBar() {
    const isMobile = useMediaQuery("(max-width:900px)");
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
  
    const handleMenuClose = () => {
      setMenuOpen(false);
    };
  
    const handleMenuOpen = () => {
      setMenuOpen(true);
    };
  
    const preventNavigation = (e) => {
      e.preventDefault();
    };
  
    return (
      <header>
        <Box p={1} bgcolor="primary.main">
          <Typography fontSize={14} textAlign="center" color="#fff">
            The health and well-being of our patients and their health care team
            will always be our priority, so we follow the best practices for
            cleanliness.
          </Typography>
        </Box>
  
        <Container maxWidth="xl">
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
            py={2}
          >
            <Link to="/">
              <img src={logo} alt="Logo" height={27} />
            </Link>
  
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={4}
              alignItems={{ xs: "flex-start", md: "center" }}
              className={`${styles.navlinks} ${menuOpen ? styles.active : ""}`}
              pt={{ xs: 12, md: 1 }}
              pb={{ xs: 4, md: 1 }}
              px={{ xs: 4, md: 0 }}
            >
              <Link
                to="/"
                className={`${styles.navlink} ${
                  location.pathname === "/" ? styles.activeLink : ""
                }`}
              >
                Find Doctors
              </Link>
              <Link
                to="/search"
                className={`${styles.navlink} ${
                  location.pathname === "/search" ? styles.activeLink : ""
                }`}
              >
                Hospitals
              </Link>
              <a
                href="#"
                onClick={preventNavigation}
                className={`${styles.navlink}`}
              >
                Medicines
              </a>
              <a
                href="#"
                onClick={preventNavigation}
                className={`${styles.navlink}`}
              >
                Surgeries
              </a>
              <a
                href="#"
                onClick={preventNavigation}
                className={`${styles.navlink}`}
              >
                Software for Provider
              </a>
              <a
                href="#"
                onClick={preventNavigation}
                className={`${styles.navlink}`}
              >
                Facilities
              </a>
              <Link
                to="/my-bookings"
                className={`${styles.navlink} ${
                  location.pathname === "/my-bookings" ? styles.activeLink : ""
                }`}
              >
                <Button variant="contained" disableElevation>
                  My Bookings
                </Button>
              </Link>
  
              {isMobile && (
                <IconButton
                  onClick={handleMenuClose}
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 32,
                    color: "#fff",
                  }}
                >
                  <CloseIcon />
                </IconButton>
              )}
            </Stack>
  
            {isMobile && (
              <IconButton onClick={handleMenuOpen}>
                <MenuIcon />
              </IconButton>
            )}
          </Stack>
        </Container>
      </header>
    );
  }
  