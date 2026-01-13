import { Box, Typography } from "@mui/material";

export default function PublicFooter(): JSX.Element {
  return (
    <Box textAlign="center" py={2} bgcolor="#111">
      <Typography variant="body2" color="gray">
        © 2025 BlogApp | Todos los derechos reservados
      </Typography>
    </Box>
  );
}