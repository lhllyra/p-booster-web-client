import {
  Box,
  Card,
  CardActions,
  CardContent,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { cardData } from "../models/app.types";

interface RepoCardProps {
  data: cardData;
}

export function RepoCard({ data }: RepoCardProps) {
  return (
    <Card sx={{ width: "450px", height: "285px" }}>
      <CardContent sx={{ padding: 0 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            px: "16px",
            py: "14px",
          }}
        >
          <Typography>{data.repoTitle}</Typography>
          <CardActions>
            <IconButton
              disableRipple
              size="small"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <StarBorderIcon sx={{ color: "#6B6C7E" }} />
            </IconButton>
            <IconButton
              disableRipple
              size="small"
              aria-label="Theme"
              color="inherit"
            >
              <DeleteOutlineIcon sx={{ color: "#6B6C7E" }} />
            </IconButton>
          </CardActions>
        </Box>
        <Divider />
        <Box sx={{ px: "16px", py: "12px" }}>
          <Typography>Stars {data.stars}</Typography>

          <Typography>Forks {data.forks}</Typography>

          <Typography>Open Issues {data.openIssues}</Typography>

          <Typography>Age {data.age}</Typography>

          <Typography>Last Commit {data.lastCommit}</Typography>

          <Typography>License {data.license}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
