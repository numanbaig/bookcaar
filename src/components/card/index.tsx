import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function MediaCard(props: any) {
  return (
    <Card>
      <CardMedia component="img" image={props.image} alt="green iguana" />
      <CardContent>{props.children}</CardContent>
    </Card>
  );
}
