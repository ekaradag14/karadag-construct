import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const ThirdSection = () => {
  return (
    <Box sx={{ bgcolor: '#e7ecd7', width: '100%', py: { xs: 4, md: 8 }, px: { xs: 2, md: 8 } }}>
      {/* Top Images Row */}
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 4, mb: 6, width: '100%',  mx: 'auto' }}>
        {/* Left Large Image + Project Info */}
        <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ width: '100%', aspectRatio: '4/3', bgcolor: '#b2b8a3', borderRadius: 2, mb: 1, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h5" color="#fff">Image Placeholder</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
            <Typography variant="body2" sx={{ color: '#222', fontWeight: 400 }}>PROJECT #43</Typography>
            <Button endIcon={<ArrowOutwardIcon />} sx={{ color: '#222', fontWeight: 400, textTransform: 'none', fontSize: 14, px: 1, minWidth: 0 }}>
              view project
            </Button>
          </Box>
        </Box>
        {/* Arrows and Small Image */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <IconButton sx={{ bgcolor: '#e7ecd7', border: '1px solid #b2b8a3', mr: 1 }}>
              <ArrowBackIcon />
            </IconButton>
            <IconButton sx={{ bgcolor: '#e7ecd7', border: '1px solid #b2b8a3' }}>
              <ArrowForwardIcon />
            </IconButton>
          </Box>
          <Box sx={{ width: 120, aspectRatio: '1/1', bgcolor: '#b2b8a3', borderRadius: 2, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="body2" color="#fff">Image</Typography>
          </Box>
        </Box>
      </Box>
      {/* Advantages Section */}
      <Box sx={{ width: '100%', mx: 'auto', mt: 6 }}>
        <Typography variant="h5" sx={{ color: '#222', fontWeight: 400, mb: 4 }}>
          // ADVANTAGES
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          {/* Rapid Construction */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle1" sx={{ color: '#222', fontWeight: 700, mb: 1, borderBottom: '2px solid #b2b8a3', display: 'inline-block' }}>
              RAPID CONSTRUCTION
            </Typography>
            <Typography variant="body2" sx={{ color: '#222', mt: 1 }}>
              From the moment we arrive at your construction site, to the last finishing, takes less than 8 weeks. By eliminating any guesswork from the building process, we can operate efficiently.
            </Typography>
          </Box>
          {/* Build Anywhere */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle1" sx={{ color: '#222', fontWeight: 700, mb: 1, borderBottom: '2px solid #b2b8a3', display: 'inline-block' }}>
              BUILD ANYWHERE
            </Typography>
            <Typography variant="body2" sx={{ color: '#222', mt: 1 }}>
              Every component is precisely manufactured in our production facilities and then transported to construction site. This allows us to build high-quality homes anywhere in the world – even in remote locations.
            </Typography>
          </Box>
          {/* Best Insulation */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle1" sx={{ color: '#222', fontWeight: 700, mb: 1, borderBottom: '2px solid #b2b8a3', display: 'inline-block' }}>
              BEST INSULATION
            </Typography>
            <Typography variant="body2" sx={{ color: '#222', mt: 1 }}>
              Each home is custom insulated to suit your region's year-round temperature and humidity. From a thermal perspective, wood-frame buildings are inherently more efficient than steel-frame alternatives.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ThirdSection; 