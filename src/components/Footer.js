import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram, faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import mail from "../images/mail.svg"
import { Alert, Snackbar, Stack } from "@mui/material";
import MuiAlert from '@mui/material/Alert';



function Footer() {

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;

  });

  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setOpen(true);
    setInputValue("");
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };


  return (
    <>
      <div className="hidden sm:block">
        <div className="grid grid-cols-3 gap-1 bg-slate-900 text-white mt-8 p-6">
          <div className="col-span-2 flex">
            <div className="grid grid-cols-2 gap-1 ">
              <div className="col-span-1">
                <p className="text-2xl mb-3">İletişim</p>
                <p>Salacak, 34668</p>
                <p className="mb-2">Üsküdar/İstanbul</p>
                <a className="mb-2" href="tel:+90 555 55 55">+90 555 55 55</a>
                <div>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3120.840550678843!2d29.005293493391264!3d41.02125527680939!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1680804774377!5m2!1str!2str"></iframe>
                </div>

              </div>
            </div>
            <div className="col-span-1 flex justify-self-start">
              <div className="mb-4 mr-20">
                <p className="text-2xl mb-3">Hakkımızda</p>
                <Link className="block mb-2">Kurumsal</Link>
                <Link className="block mb-2">Sıkça Sorulan Sorular</Link>
                <Link className="block mb-2">İnsan Kaynakları</Link>
                <div className="flex mt-12">
                  <a className="fa mr-4" target="blank" href="https://www.linkedin.com/in/senoltanriver/"><FontAwesomeIcon icon={faLinkedin} /></a>
                  <a className="fa mr-4" target="blank" href="https://github.com/SenolTanriver"><FontAwesomeIcon icon={faGithub} /></a>
                  <a className="fa mr-4" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                  <a className="fa mr-4" href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                  <a className="fa mr-4" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                  <a className="fa" href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                </div>
              </div>
              <div className="mr-40">
                <div className="flex">
                  <img className="w-12 mb-5 mr-5" src="https://cdn.dsmcdn.com/web/production/footer-master-card.png" alt="MasterCard" />
                  <img className="w-12 mb-5" src="https://cdn.dsmcdn.com/frontend/web/assets/images/troy-logo-transparent.png" alt="MasterCard" />
                </div>
                <div className="flex">
                  <img className="w-12 mb-5 mr-5" src="https://cdn.dsmcdn.com/web/production/footer-visa-black.png" alt="MasterCard" />
                  <img className="w-12 h-10" src="https://cdn.dsmcdn.com/web/production/footer-amex.png" alt="MasterCard" />
                </div>
                <img className="w-56 mb-5 mr-5 mt-5 cursor-pointer" src="https://cdn.dsmcdn.com/web/production/iosV2.svg" />
                <img className="w-56 mb-5 mr-5 cursor-pointer" src="https://cdn.dsmcdn.com/web/production/googleV2.svg" />
              </div>
            </div>

          </div>
          <div className="col-span-1">
            <p>Kampanyalar ve indirimlerden herkesten önce siz haberdar olun</p>
            <div className="flex items-center">
              <p className="mt-5">Haftalık bültenimize abone olun</p>
              <img className="w-16" src={mail} alt="mail icon" />
            </div>
            <form className="mt-8 flex" onSubmit={handleClick}>
              <input
                className="w-80 h-10 border border-zinc-400 rounded-md pl-2 text-black"
                placeholder="deneme@deneme.com"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Stack spacing={2} sx={{ width: "100%" }}>
                <div>
                  <button className="p-2 ml-3 bg-white text-black rounded-md hover:bg-orange-600">
                    Kaydet
                  </button>
                </div>
                <Snackbar
                  open={open}
                  autoHideDuration={3000}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                >
                  <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                    Kaydedildi!
                  </Alert>
                </Snackbar>
              </Stack>
            </form>


          </div>
        </div>

        <div className="bg-slate-950 text-white flex justify-between h-10">
          <div className="ml-12 text-xs flex items-center ">
            © Copyright {new Date().getFullYear()}  Powered By Şenol Tanrıver
          </div>

          <div className="flex items-center" >
            <Link className="footer-alt-link text-xs mr-8">Çerez Tercihleri</Link>
            <Link className="footer-alt-link text-xs mr-8">KVKK ve Gizlilik Politikası</Link>
            <Link className="footer-alt-link text-xs mr-8">Kullanım ve Satış Koşulları</Link>
            <Link className="footer-alt-link text-xs mr-8">Gizlilik Bildirimi</Link>
          </div>
        </div>
      </div>

      <div className="block md:hidden">

        <div className="bg-slate-900 text-white p-6">
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-2 gap-1 ">
              <div className="col-span-1">
                <p className="text-2xl mb-3">İletişim</p>
                <p>Salacak, 34668</p>
                <p className="mb-2">Üsküdar/İstanbul</p>
                <a className="mb-2" href="tel:+90 555 55 55">+90 555 55 55</a>
                <div>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3120.840550678843!2d29.005293493391264!3d41.02125527680939!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1680804774377!5m2!1str!2str"></iframe>
                </div>

              </div>
            </div>
            <div className="col-span-1 flex justify-self-start">
              <div className="mb-4 mr-10">
                <p className="text-2xl mb-3">Hakkımızda</p>
                <Link className="block mb-2">Kurumsal</Link>
                <Link className="block mb-2">Sıkça Sorulan Sorular</Link>
                <Link className="block mb-2">İnsan Kaynakları</Link>
                <div className="flex mt-12">
                  <a className="fa mr-4" target="blank" href="https://www.linkedin.com/in/senoltanriver/"><FontAwesomeIcon icon={faLinkedin} /></a>
                  <a className="fa mr-4" target="blank" href="https://github.com/SenolTanriver"><FontAwesomeIcon icon={faGithub} /></a>
                  <a className="fa mr-4" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                  <a className="fa mr-4" href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                  <a className="fa mr-4" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                  <a className="fa" href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                </div>
              </div>
              <div className="mr-8">
                <div className="flex">
                  <img className="w-12 mb-5 mr-2" src="https://cdn.dsmcdn.com/web/production/footer-master-card.png" alt="MasterCard" />
                  <img className="w-10 mb-5" src="https://cdn.dsmcdn.com/frontend/web/assets/images/troy-logo-transparent.png" alt="MasterCard" />
                </div>
                <div className="flex">
                  <img className="w-12 mb-5 mr-2" src="https://cdn.dsmcdn.com/web/production/footer-visa-black.png" alt="MasterCard" />
                  <img className="w-12 h-10" src="https://cdn.dsmcdn.com/web/production/footer-amex.png" alt="MasterCard" />
                </div>
                <img className="w-56 mb-5 mr-5 mt-5 cursor-pointer" src="https://cdn.dsmcdn.com/web/production/iosV2.svg" />
                <img className="w-56 mb-5 mr-5 cursor-pointer" src="https://cdn.dsmcdn.com/web/production/googleV2.svg" />
              </div>
            </div>

          </div>
          <div className="col-span-1">
            <p>Kampanyalar ve indirimlerden herkesten önce siz haberdar olun</p>
            <div className="flex items-center">
              <p className="mt-5">Haftalık bültenimize abone olun</p>
              <img className="w-16" src={mail} alt="mail icon" />
            </div>
            <form className="mt-2">
              <input className="w-56 h-10 border border-zinc-400 rounded-md pl-2 text-black"
                placeholder="deneme@deneme.com"
              />
              <button className="p-2 ml-3 bg-white text-black rounded-md hover:bg-cyan-600" >Kaydet</button>
            </form>
          </div>
        </div>

        <div className="bg-slate-950 text-white flex flex-wrap justify-between h-12">

          <div className="flex items-center" >
            <Link className="text-xs ml-3 mr-1">Çerez Tercihleri</Link>
            <Link className="text-xs mr-1">KVKK Politikası</Link>
            <Link className="text-xs mr-1">Kullanım ve Satış Koşulları</Link>
            <Link className="text-xs">Gizlilik Bildirimi</Link>
          </div>
          <div className="ml-12 text-xs flex items-center ">
            © Copyright {new Date().getFullYear()}  Powered By Şenol Tanrıver
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
