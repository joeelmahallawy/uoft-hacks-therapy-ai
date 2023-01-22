import {
  Title,
  Text,
  Container,
  Button,
  Overlay,
  createStyles,
  Box,
  BackgroundImage,
} from "@mantine/core";
import React from "react";
import bg from "../utils/bg-landing.jpeg";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingBottom: 130,
    height: "100vh",

    backgroundSize: "cover",
    backgroundPosition: "center",

    "@media (max-width: 520px)": {
      paddingTop: 80,
      paddingBottom: 50,
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
    paddingTop: "13%",
  },

  title: {
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: "center",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    "@media (max-width: 520px)": {
      fontSize: 28,
      textAlign: "left",
    },
  },

  highlight: {
    // color: theme.colors[theme.primaryColor][4],
    color: theme.colors.pink[6],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: "center",

    "@media (max-width: 520px)": {
      fontSize: theme.fontSizes.md,
      textAlign: "left",
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 1.5,
    display: "flex",
    justifyContent: "center",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    "@media (max-width: 520px)": {
      flexDirection: "column",
    },
  },

  control: {
    height: 42,
    fontSize: theme.fontSizes.md,

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    "@media (max-width: 520px)": {
      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: "rgba(255, 255, 255, .4)",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .45) !important",
    },
  },
}));

export default function HeroImageBackground() {
  const { classes, cx } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <BackgroundImage src={bg.src} radius="sm" sx={{ height: "100vh" }}>
        <Overlay color="#000" opacity={0.4} zIndex={1} />

        <div className={classes.inner}>
          <Title className={classes.title}>
            Need someone to talk to?
            <Text component="span" inherit className={classes.highlight}>
              {" "}
              Talk to Harmony
            </Text>
          </Title>

          <Container size={640}>
            <Text size="lg" className={classes.description}>
              A 24/7 service where you can directly talk to an AI therapist by
              using your own voice. No more typing in chat and not being able to
              truly display how you feel.
            </Text>
          </Container>

          <div className={classes.controls}>
            <Button
              onClick={()=>window.location.href='home'} 
              className={classes.control}
              variant="filled"
              color="pink"
              size="lg"
            >
              Get started now
            </Button>
            {/* <Button
            className={cx(classes.control, classes.secondaryControl)}
            size="lg"
          >
            Live demo
          </Button> */}
          </div>
        </div>
      </BackgroundImage>
      
    </Box>
  );
}
