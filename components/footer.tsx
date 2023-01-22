import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
  Image,
  Title,
  List,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons";
import logo from "../utils/HARMONY_AI.png";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 20,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

export default function Footer({ data }: FooterLinksProps) {
  const { classes } = useStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.afterFooter}>
        <Title order={1}>
          <a href="/">
            <Image m={10} mb={30} src={logo.src} width={200} />
          </a>
        </Title>
        <Text color="dimmed" size="sm">

            
        <List  style={{margin:"30px"}}>
            <Title color={'white'} order={2}>Hotline centers:</Title>
      <List.Item><b>Talk Suicide Canada</b>: Call 1-833-456-4566 or Text 45645</List.Item>
      <List.Item><b>Assaulted Women's Helpline</b>: Toll-free: 1-866-863-0511</List.Item>
      <List.Item><b>Talk4Healing (Helpline for Indigenous Women)</b>: Toll-free: 1-855-554-4325
</List.Item>
      <List.Item>To connect with a <b>mental health professional one-on-one</b>: Call 1-888-668-6810 or text WELLNESS to 686868 for youth, call 1-866-585-0445 or text WELLNESS to 741741 for adults</List.Item>
    </List>
        </Text>

        <Group
          spacing={0}
          className={classes.social}
          position="right"
          noWrap
        ></Group>
      </Container>
    </footer>
  );
}
