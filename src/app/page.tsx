import { Box, Typography } from "@mui/material";
import _ from "lodash";
import { RepoCard } from "./components/repo-card-component";
import { cardData } from "./models/app.types";

const cardsArray: cardData[] = [
  {
    repoTitle: "TESTE",
    stars: 34,
    forks: 9,
    age: "3 years ago",
    lastCommit: "2 days ago",
    openIssues: 4,
    license: "CC-BY-4.0",
  },
  {
    repoTitle: "TESTE 2",
    stars: 34,
    forks: 28,
    age: "1 year ago",
    lastCommit: "15 minutes ago",
    openIssues: 4,
    license: "GPL-3.0",
  },
  {
    repoTitle: "TESTE 3",
    stars: 34,
    forks: 3,
    age: "9 months ago",
    lastCommit: "1 week ago",
    openIssues: 4,
    license: "N/A",
  },
  {
    repoTitle: "TESTE",
    stars: 34,
    forks: 9,
    age: "3 years ago",
    lastCommit: "2 days ago",
    openIssues: 4,
    license: "CC-BY-4.0",
  },
  {
    repoTitle: "TESTE 2",
    stars: 34,
    forks: 28,
    age: "1 year ago",
    lastCommit: "15 minutes ago",
    openIssues: 4,
    license: "GPL-3.0",
  },
  {
    repoTitle: "TESTE 3",
    stars: 34,
    forks: 3,
    age: "9 months ago",
    lastCommit: "1 week ago",
    openIssues: 4,
    license: "N/A",
  },
  {
    repoTitle: "TESTE",
    stars: 34,
    forks: 9,
    age: "3 years ago",
    lastCommit: "2 days ago",
    openIssues: 4,
    license: "CC-BY-4.0",
  },
  {
    repoTitle: "TESTE 2",
    stars: 34,
    forks: 28,
    age: "1 year ago",
    lastCommit: "15 minutes ago",
    openIssues: 4,
    license: "GPL-3.0",
  },
  {
    repoTitle: "TESTE 3",
    stars: 34,
    forks: 3,
    age: "9 months ago",
    lastCommit: "1 week ago",
    openIssues: 4,
    license: "N/A",
  },
];

export default function Home() {
  return (
    <Box sx={{ width: "100%" }}>
      {_.isEmpty(cardsArray) ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "91vh",
          }}
        >
          <img
            src="nothing-found.png"
            alt="nothing_found"
            width={300}
            height={300}
          />
          <Box
            sx={{
              paddingTop: "40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "var(--dark-dark, #272833)",
                fontFamily: "Roboto",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "125%",
                paddingBottom: "8px",
              }}
            >
              There is still nothing here
            </Typography>
            <Typography
              sx={{
                color: "var(--secondary-secondary, #6B6C7E)",
                fontFamily: "Roboto",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "150%",
              }}
            >
              Add some repositories by clicking add new repository
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            // alignItems: "center",
            justifyContent: "center",
            paddingTop: "30px",
          }}
        >
          {cardsArray.map((repo, index) => (
            <Box key={index} sx={{ px: "15px", py: "15px" }}>
              <RepoCard data={repo} />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
