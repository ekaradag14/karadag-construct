import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Image from 'next/image';
import modularHome from '@/assets/modular-home.png';

const SecondSection = () => {
  return (
    <Box
      sx={{
        bgcolor: '#e7ecd7',
        width: '100%',
        minHeight: '80vh',
        py: { xs: 4, md: 8 },
        px: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top Row: Title and Catalog Link */}
      <Box sx={{ width: '100%',  display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, px: { xs: 2, md: 6 }, zIndex: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 400, color: '#222', letterSpacing: 1 }}>
          // HOUSES
        </Typography>
        <Button
          endIcon={<ArrowOutwardIcon />}
          sx={{
            color: '#222',
            fontWeight: 400,
            textTransform: 'none',
            fontSize: 16,
            px: 2,
            background: 'none',
            boxShadow: 'none',
            '&:hover': { background: 'rgba(0,0,0,0.03)' },
          }}
        >
          full catalog
        </Button>
      </Box>
      {/* Background Image with Overlayed Content */}
      <Box
        sx={{
          width: '100%',
          maxWidth: '95%',
          height: { xs: 400, md: '1200px' },
          position: 'relative',
          display: 'flex',
          alignItems: 'stretch',
          justifyContent: 'flex-start',
        }}
      >
        {/* Background Image */}
        <Box sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 }}>
          <Image
            src={modularHome}
            alt="Model S Modular Home"
            fill
            style={{ objectFit: 'cover', objectPosition: 'right center', zIndex: 1 }}
            priority
          />
          {/* Optional: dark overlay for readability */}
          <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(34,34,34,0.7) 0%, rgba(34,34,34,0.2) 60%, rgba(34,34,34,0) 100%)', zIndex: 2 }} />
        </Box>
        {/* Overlayed Text Content */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            height: '100%',
            pl: { xs: 3, md: 8 },
            pr: { xs: 3, md: 2 },
            py: { xs: 4, md: 0 },
            width: { xs: '100%', md: '50%' },
            color: '#fff',
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 400, mb: 2, textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
            MODEL S
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 300, mb: 3, textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
            1 Bedroom, 1 Bathroom
          </Typography>
          <Box sx={{ mb: 2, width: 220 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2" sx={{ color: '#b2b8a3', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>Dimensions</Typography>
              <Typography variant="body2" sx={{ color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>25’ x 36’</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2" sx={{ color: '#b2b8a3', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>Square Feet</Typography>
              <Typography variant="body2" sx={{ color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>774 SF</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body2" sx={{ color: '#b2b8a3', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>Base Price</Typography>
              <Typography variant="body2" sx={{ color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>from $47 875</Typography>
            </Box>
          </Box>
          <Button
            variant="outlined"
            sx={{
              borderRadius: 20,
              px: 3,
              py: 1,
              borderColor: '#fff',
              color: '#fff',
              fontWeight: 500,
              fontSize: 14,
              textTransform: 'none',
              mt: 2,
              width: 'fit-content',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            }}
          >
            VIEW PROJECT
          </Button>
        </Box>
      </Box>
      {/* Bottom Left: Arrows */}
      <Box sx={{ position: 'absolute', left: { xs: 16, md: 60 }, bottom: 24, display: 'flex', alignItems: 'center', gap: 1, zIndex: 4 }}>
        <IconButton sx={{ bgcolor: '#e7ecd7', border: '1px solid #b2b8a3', mr: 1 }}>
          <ArrowBackIcon />
        </IconButton>
        <IconButton sx={{ bgcolor: '#e7ecd7', border: '1px solid #b2b8a3' }}>
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SecondSection; 