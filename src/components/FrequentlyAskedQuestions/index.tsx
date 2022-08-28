import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import theme from "../../theme";

const Accordion = (props: AccordionProps) => {
  return (
    <MuiAccordion
      sx={{
        border: `1px solid ${theme.palette.divider}`,
        "&:not(:last-child)": {
          borderBottom: 0,
        },
        "&:before": {
          display: "none",
        },
      }}
      disableGutters
      elevation={0}
      square
      {...props}
    />
  );
};

const AccordionSummary = (props: any) => {
  return (
    <MuiAccordionSummary
      sx={{
        flexDirection: "row-reverse",

        "& .MuiAccordionSummary-content": {
          marginLeft: theme.spacing(1),
        },
      }}
      expandIcon={
        props.open ? (
          <IndeterminateCheckBoxIcon
            color="primary"
            sx={{ fontSize: "30px" }}
          />
        ) : (
          <AddBoxIcon color="primary" sx={{ fontSize: "30px" }} />
        )
      }
      {...props}
    />
  );
};

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions(props: any) {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const [isOpen, setOpen] = React.useState<boolean>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
      setOpen(true);
    };

  return (
    <div>
      {props.questions.map((question: any, index: number) => (
        <Accordion
          expanded={expanded === question.id}
          onChange={handleChange(question.id)}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            open={isOpen && expanded === question.id}
          >
            <Typography fontSize={"20px"}>{question.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{question.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
