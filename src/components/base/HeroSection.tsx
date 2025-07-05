import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Image from 'next/image';
import homeInForest from '@/assets/home-in-forest.png';

const HeroSection = () => {
  return (
    <Box
      sx={{
        bgcolor: '#e7ecd7',
        minHeight: '100vh',
        px: { xs: 2, md: 8 },
        py: { xs: 4, md: 6 },
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top Bar */}
      <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', mb: 4 }}>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Typography variant="body2" sx={{ fontWeight: 500, mr: 0.5, letterSpacing: 1, display: 'flex', alignItems: 'center' }}>
            CONTACT <ArrowOutwardIcon sx={{ fontSize: 18, ml: 0.5 }} />
          </Typography>
   
        </Box>
      </Box>

      {/* Headline Row: MODULAR CONSTRUCTION IS OUR + Button */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'end', mb: 1, gap: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 500, letterSpacing: 1, flex: 1 ,fontSize: { xs: 24, md: 40 } }}>
          MODULAR CONSTRUCTION IS OUR
        </Typography>
        <Button
          variant="outlined"
          sx={{
            borderRadius: 20,
            px: 3,
            py: 0.2,
            borderColor: '#222',
            color: '#222',
            fontWeight: 500,
            fontSize: 14,
            textTransform: 'none',
            mt: { xs: 2, md: 0 },
          }}
        >
          DISCUSS THE PROJECT
        </Button>
      </Box>

      {/* Subheadline Row: Description + NEW PHILOSOPHY. */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' },  alignItems: { md: 'end', xs: 'flex-start' }, mb: 2, gap: 3, maxWidth: { xs: '100%', md: 'lg' } }}>
        <Typography variant="body2" sx={{ maxWidth: 260, color: '#222',  flex: 1,  }}>
          We design and build modern turnkey modular houses according to your needs for living and recreation
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: 700, fontSize: { xs: 40, md: 72 }, textAlign: { xs: 'center', md: 'end' }, lineHeight: 1, letterSpacing: 1, flex: 2,}}>
          NEW PHILOSOPHY.
        </Typography>
      </Box>

      {/* House Image with Model Text */}
      <Box sx={{ position: 'relative', width: '100%', mt: 4, mb: 2 }}>
        <Image
          src={homeInForest}
          alt="Model M House in Forest"
          style={{ width: '100%', height: 'auto', borderRadius: 0 }}
          priority
        />
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            bgcolor: 'transparent',
            px: 4,
            py: 2,
          }}
        >
          <Typography variant="body1" sx={{ color: '#b2b8a3', fontWeight: 400, fontSize: 22, lineHeight: 1 }}>
            01
          </Typography>
          <Typography variant="h6" sx={{ color: '#181818', fontWeight: 400, fontSize: 22, lineHeight: 1 }}>
            Model M
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection; 