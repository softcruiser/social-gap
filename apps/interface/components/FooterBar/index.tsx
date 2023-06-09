import {
    Container,
    Flex,
    Spacer,
    Link,
    useColorModeValue,
    Center,
    Box,
    ListItem,
    List,
} from "@chakra-ui/react";
import NextLink from "next/link";

// Icons
import ArrowTopRightIcon from "@/components/Icons/ArrowTopRight";

const FooterBar = () => {
    // Styles
    const gray3 = useColorModeValue("gray.light.3", "gray.dark.3");
    const gray10 = useColorModeValue("gray.light.10", "gray.dark.10");
    const gray12 = useColorModeValue("gray.light.12", "gray.dark.12");

    return (
        <Container
            as="footer"
            maxW="5xl"
            data-testid="FooterBar"
            marginTop="10"
            display={{ base: "none", tablet: "block" }}
        >
            <Flex
                borderTop="1px"
                borderColor={gray3}
                py="5"
                direction={{ base: "column", tablet: "row" }}
            >
                <NextLink href="https://risedle.com" passHref>
                    <Link
                        fontSize="sm"
                        lineHeight="4"
                        color={gray10}
                        _hover={{ color: gray12 }}
                        data-testid="FooterBarLinkLabs"
                    >
                        Risedle Labs
                    </Link>
                </NextLink>
                <Spacer />
                <Box as="nav">
                    <List
                        display="flex"
                        flexDirection="row"
                        margin={{ base: "auto", tablet: "0" }}
                        as="ul"
                    >
                        <ListItem>
                            <NextLink
                                href="https://twitter.com/risedle"
                                passHref
                            >
                                <Link
                                    fontSize="sm"
                                    lineHeight="4"
                                    color={gray10}
                                    _hover={{ color: gray12 }}
                                    target="_blank"
                                    data-testid="FooterBarLinkTwitter"
                                >
                                    <Center>
                                        Twitter
                                        <ArrowTopRightIcon
                                            w="4"
                                            h="4"
                                            color={gray10}
                                        />
                                    </Center>
                                </Link>
                            </NextLink>
                        </ListItem>
                        <ListItem marginLeft={6}>
                            <NextLink
                                href="https://discord.com/invite/YCSCd97SXj"
                                passHref
                            >
                                <Link
                                    fontSize="sm"
                                    lineHeight="4"
                                    color={gray10}
                                    _hover={{ color: gray12 }}
                                    target="_blank"
                                    data-testid="FooterBarLinkDiscord"
                                >
                                    <Center>
                                        Discord
                                        <ArrowTopRightIcon
                                            w="4"
                                            h="4"
                                            color={gray10}
                                        />
                                    </Center>
                                </Link>
                            </NextLink>
                        </ListItem>
                        <ListItem marginLeft={6}>
                            <NextLink
                                href="https://github.com/risedle"
                                passHref
                            >
                                <Link
                                    fontSize="sm"
                                    lineHeight="4"
                                    color={gray10}
                                    _hover={{ color: gray12 }}
                                    target="_blank"
                                    data-testid="FooterBarLinkGithub"
                                >
                                    <Center>
                                        Github
                                        <ArrowTopRightIcon
                                            w="4"
                                            h="4"
                                            color={gray10}
                                        />
                                    </Center>
                                </Link>
                            </NextLink>
                        </ListItem>
                        <ListItem marginLeft={6}>
                            <NextLink href="https://docs.risedle.com" passHref>
                                <Link
                                    fontSize="sm"
                                    lineHeight="4"
                                    color={gray10}
                                    _hover={{ color: gray12 }}
                                    target="_blank"
                                    data-testid="FooterBarLinkDocs"
                                >
                                    <Center>
                                        Docs
                                        <ArrowTopRightIcon
                                            w="4"
                                            h="4"
                                            color={gray10}
                                        />
                                    </Center>
                                </Link>
                            </NextLink>
                        </ListItem>
                    </List>
                </Box>
            </Flex>
        </Container>
    );
};

export default FooterBar;
