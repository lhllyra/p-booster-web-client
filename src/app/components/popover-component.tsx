import { Popover, Box } from "@mui/material";

interface PopoverProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  content: any;
}

function PopoverComponent({ anchorEl, onClose, content }: PopoverProps) {
  return (
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Box>{content}</Box>
    </Popover>
  );
}

export default PopoverComponent;
