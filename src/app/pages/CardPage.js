"use client"
import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../styles/section.css";
const includedFeatures = ["Private forum access"];
import "../styles/destination.css";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  bgcolor: 'background.paper',
  border: '1px solid #000 ',
  boxShadow: 24,
  p: 1,
  borderRadius:2
};

const CardPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className="parent_content">
        <div className="title_centent">
        <h2>
          Listed Barber <br /> Shops nearby
        </h2>
        <h3>
        <FontAwesomeIcon className="icon_maps" icon={faMapLocationDot} />
        <Button onClick={handleOpen}>
           <span >Show On Map</span>
           </Button>
        </h3>
        </div>
      <div class="paent_card">
        <div class="card">
          <span class="icon">
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <div class="content_card">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.jOzrlxoucDIIGrONc3MwdwHaFX&pid=Api&P=0&h=180"
              alt=""
            />
            <b>Essaouira crooming </b>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div class="card">
          <span class="icon">
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <div class="content_card">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.jOzrlxoucDIIGrONc3MwdwHaFX&pid=Api&P=0&h=180"
              alt=""
            />
            <b>Essaouira crooming </b>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div class="card">
          <span class="icon">
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <div class="content_card">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.jOzrlxoucDIIGrONc3MwdwHaFX&pid=Api&P=0&h=180"
              alt=""
            />
            <b>Essaouira crooming </b>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div class="card">
          <span class="icon">
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <div class="content_card">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.jOzrlxoucDIIGrONc3MwdwHaFX&pid=Api&P=0&h=180"
              alt=""
            />
            <b>Essaouira crooming </b>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26381.766432542834!2d-6.6060288!3d34.2556672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sma!4v1685578677370!5m2!1sen!2sma" style={{"border":"0" , 'width':'100%' , 'height':'600px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Box>
        </Fade>
      </Modal>

    </section>
  );
};

export default CardPage;
