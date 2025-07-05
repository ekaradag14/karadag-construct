import React from 'react';
import { Box, Typography, IconButton, Divider, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const socialLinks = [
  { icon: <FacebookIcon />, label: 'Facebook', href: '#' },
  { icon: <TwitterIcon />, label: 'Twitter', href: '#' },
  { icon: <InstagramIcon />, label: 'Instagram', href: '#' },
  { icon: <LinkedInIcon />, label: 'LinkedIn', href: '#' },
];

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#181818', color: '#f5f5f5', pt: 8, pb: 2, px: { xs: 2, md: 8 }, }}>
      {/* Main Footer Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 4, md: 2 },
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          mx: 'auto',
        }}
      >
        {/* Left Column: Description & Socials */}
        <Box sx={{ flex: 1, minWidth: 220, mb: { xs: 4, md: 0 } }}>
          <Typography variant="body2" sx={{ color: '#e0e0e0', mb: 3, maxWidth: 260 }}>
            We design and build modern turnkey modular houses according to your needs for living and recreation. Modular construction is our new philosophy.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
            {socialLinks.map((item) => (
              <IconButton key={item.label} aria-label={item.label} href={item.href} sx={{ color: '#f5f5f5', bgcolor: '#232323', '&:hover': { bgcolor: '#333' } }}>
                {item.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
        {/* Services */}
        <Box sx={{ flex: 1, minWidth: 160, mb: { xs: 4, md: 0 } }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#fff' }}>Services</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant="body2">Design & Planning</Typography>
            <Typography variant="body2">Modular Construction</Typography>
            <Typography variant="body2">Turnkey Solutions</Typography>
            <Typography variant="body2">Consultation</Typography>
            <Typography variant="body2">Maintenance</Typography>
          </Box>
        </Box>
        {/* Projects */}
        <Box sx={{ flex: 1, minWidth: 160, mb: { xs: 4, md: 0 } }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#fff' }}>Projects</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant="body2">Residential Homes</Typography>
            <Typography variant="body2">Commercial Buildings</Typography>
            <Typography variant="body2">Recreation Centers</Typography>
            <Typography variant="body2">Portfolio</Typography>
            <Typography variant="body2">Gallery</Typography>
          </Box>
        </Box>
        {/* Company */}
        <Box sx={{ flex: 1, minWidth: 160, mb: { xs: 4, md: 0 } }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#fff' }}>Company</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant="body2">About Us</Typography>
            <Typography variant="body2">Our Team</Typography>
            <Typography variant="body2">Careers</Typography>
            <Typography variant="body2">News & Updates</Typography>
            <Typography variant="body2">Sustainability</Typography>
          </Box>
        </Box>
        {/* Contact */}
        <Box sx={{ flex: 1, minWidth: 200 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#fff' }}>Contact</Typography>
          <Typography variant="body2" sx={{ fontWeight: 600, mt: 1 }}>Address</Typography>
          <Typography variant="body2">123 Modular Avenue<br />Construction District<br />New York, NY 10001</Typography>
          <Typography variant="body2" sx={{ fontWeight: 600, mt: 2 }}>Phone</Typography>
          <Typography variant="body2">+1 (555) 123-4567</Typography>
          <Typography variant="body2" sx={{ fontWeight: 600, mt: 2 }}>Email</Typography>
          <Typography variant="body2">info@mod7construction.com</Typography>
        </Box>
      </Box>
      {/* Divider */}
      <Divider sx={{ bgcolor: '#333', my: 4 }} />
      {/* Bottom Row */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' }, justifyContent: 'space-between', gap: 2, width: '100%', maxWidth: 1600, mx: 'auto' }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { sm: 'center' }, gap: 2, flexWrap: 'wrap' }}>
          <Typography variant="body2" sx={{ color: '#b2b8a3' }}>
            © 2024 MOD-7 Construction. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, ml: { sm: 2 } }}>
            <Link href="#" underline="hover" sx={{ color: '#b2b8a3', fontSize: 14 }}>Privacy Policy</Link>
            <Link href="#" underline="hover" sx={{ color: '#b2b8a3', fontSize: 14 }}>Terms of Service</Link>
            <Link href="#" underline="hover" sx={{ color: '#b2b8a3', fontSize: 14 }}>Cookie Policy</Link>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: { xs: 2, md: 0 } }}>
          <Typography variant="body2" sx={{ color: '#b2b8a3' }}>Built with sustainable practices</Typography>
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#4caf50', display: 'inline-block' }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer; 