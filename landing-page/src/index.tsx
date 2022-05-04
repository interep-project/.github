import {
    Box,
    Button,
    ChakraProvider,
    ColorModeProvider,
    Container,
    Heading,
    HStack,
    Icon,
    Image,
    Link,
    Stack,
    Text,
    useClipboard,
    VStack
} from "@chakra-ui/react"
import "@fontsource/inter/700.css"
import "@fontsource/inter/400.css"
import ReactDOM from "react-dom"
import { FaClipboardList, FaDiscord, FaGithub } from "react-icons/fa"
import theme from "./styles"

function App() {
    const { onCopy } = useClipboard("https://kovan.interep.link")

    return (
        <ChakraProvider theme={theme}>
            <ColorModeProvider options={{ initialColorMode: "dark", useSystemColorMode: false }}>
                <Container pt="40px" px="40px" maxW="container.xl">
                    <HStack justify="space-between">
                        <Image src="./interep-logo.png" alt="Interep logo" h={10} />

                        <HStack spacing="4">
                            <Link
                                href="https://docs.google.com/forms/d/e/1FAIpQLSdMKSIL-3RBriGqA_v-tJhNJOCciQEX7bwFvOW7ptWeDDhjpQ/viewform"
                                isExternal
                            >
                                <Icon as={FaClipboardList} w={7} h={7} />
                            </Link>
                            <Link href="https://discord.gg/Tp9He7qws4" isExternal>
                                <Icon as={FaDiscord} w={7} h={7} />
                            </Link>
                            <Link href="https://github.com/interep-project" isExternal>
                                <Icon as={FaGithub} w={7} h={7} />
                            </Link>
                        </HStack>
                    </HStack>
                </Container>

                <Container mt="100px" mb="120px" maxW="container.lg">
                    <VStack spacing={["100px", "100px", "150px"]} align="left" px="3">
                        <Stack align="center">
                            <VStack
                                spacing={["6", "6", "12"]}
                                textAlign={["left", "center"]}
                                justify="center"
                                maxWidth="700px"
                            >
                                <Image src="./illustration-1.svg" alt="Illustration 1" />

                                <Heading as="h2" size="2xl">
                                    Anti-sybil as a service
                                </Heading>

                                <Box color="background.300">
                                    <Text display="inline">
                                        Build a more human environment by protecting your community from bots and
                                        sybils.{" "}
                                    </Text>
                                    <Text display={["none", "inline"]}>Get started by trying out our web app.</Text>
                                    <Text display={["inline", "none"]}>Get started by reading our documentation.</Text>
                                </Box>

                                <Stack direction={["column", "column", "row"]} spacing="3">
                                    <Link
                                        display={["none", "none", "block"]}
                                        href="https://kovan.interep.link"
                                        isExternal
                                    >
                                        <Button colorScheme="primary">Launch app</Button>
                                    </Link>
                                    <Link href="https://docs.interep.link" isExternal>
                                        <Button variant="outline">Read documentation</Button>
                                    </Link>
                                </Stack>
                            </VStack>
                        </Stack>

                        <Stack direction={["column", "column", "row"]} spacing="8" justify="space-between">
                            <VStack flex="1" spacing="10" align="left" maxWidth={[, , "500px"]}>
                                <Heading as="h2" size="xl">
                                    Provable, private identity
                                </Heading>

                                <Text color="background.300">
                                    If you are building a Web 3.0 community, it can feel like you have to choose between
                                    privacy-first participation, and protecting your community against scams, bots, or
                                    bullying. With Interep, communities organized in digital spaces can authenticate
                                    members as unique humans without collecting any identifying information - so
                                    communities can grow organically, promote fairness and preserve privacy.
                                </Text>
                            </VStack>

                            <Box flex="1" maxWidth={[, , "400px"]} px="4">
                                <Image src="./illustration-2.svg" alt="Illustration 2" />
                            </Box>
                        </Stack>

                        <Stack direction={["column", "column", "row"]} spacing="10" justify="space-between">
                            <VStack spacing="10" align="left" maxWidth={[, , "450px"]}>
                                <Heading as="h2" size="xl">
                                    Begin building communities on equality and trust
                                </Heading>

                                <Box flex="1" maxWidth="500px" px="4">
                                    <Image src="./illustration-3.svg" alt="Illustration 2" />
                                </Box>
                            </VStack>

                            <VStack spacing="10" align="left" maxWidth={[, , "400px"]}>
                                <VStack align="left">
                                    <Heading as="h4" size="md">
                                        1. Integrate with our tools
                                    </Heading>

                                    <Text color="background.300">
                                        Interep offers{" "}
                                        <Link href="https://docs.interep.link/api" isExternal>
                                            APIs
                                        </Link>{" "}
                                        and{" "}
                                        <Link href="https://github.com/interep-project/interep.js" isExternal>
                                            libraries
                                        </Link>{" "}
                                        to help curate authentic human communities on anonymous-first platforms.
                                    </Text>
                                </VStack>

                                <VStack align="left">
                                    <Heading as="h4" size="md">
                                        2. Authenticate anonymously
                                    </Heading>

                                    <Text color="background.300">
                                        Individuals can prove they are unique by joining an Interep group before using a
                                        DApp.
                                    </Text>
                                </VStack>

                                <VStack align="left">
                                    <Heading as="h4" size="md">
                                        3. Explore use cases
                                    </Heading>

                                    <Text color="background.300">
                                        Allow your users to mint an NFT, apply for a loan, cast a vote, fund a project,
                                        or join a Web 3.0 social community anonymously. What will your team spin up?
                                    </Text>
                                </VStack>

                                <VStack align="left">
                                    <Heading as="h4" size="md">
                                        4. Fortify privacy pools
                                    </Heading>

                                    <Text color="background.300">
                                        Identity groups are shared across applications. This means that when your users
                                        and another app’s users authenticate using the same provider they will join the
                                        same privacy pool.
                                    </Text>
                                </VStack>
                            </VStack>
                        </Stack>

                        <Stack direction={["column", "column", "row"]} spacing="10" justify="space-between">
                            <VStack spacing="10" align="left" maxWidth={[, , "400px"]}>
                                <Heading as="h2" size="xl">
                                    We did the tedious work so you wouldn’t have to
                                </Heading>

                                <HStack justify="space-between" px="4">
                                    <Image src="./illustration-4.svg" alt="Illustration 6" />
                                    <Image src="./illustration-5.svg" alt="Illustration 5" />
                                    <Image src="./illustration-6.svg" alt="Illustration 4" />
                                </HStack>
                            </VStack>

                            <VStack align="left" spacing="2" maxWidth={[, , "400px"]}>
                                <VStack align="left" py="6" px="7" bg="background.800" borderRadius="4px">
                                    <Heading as="h4" size="md" color="background.200">
                                        Libraries
                                    </Heading>

                                    <Text color="background.300">
                                        <Link href="https://github.com/interep-project/interep.js" isExternal>
                                            Monorepo
                                        </Link>{" "}
                                        of Interep libraries, created to make Interep integration easier.
                                    </Text>
                                </VStack>

                                <VStack align="left" py="6" px="7" bg="background.800" borderRadius="4px">
                                    <Heading as="h4" size="md" color="background.200">
                                        API
                                    </Heading>

                                    <Text color="background.300">
                                        <Link href="https://docs.interep.link/api#reputation-service" isExternal>
                                            REST APIs
                                        </Link>{" "}
                                        to interact with our groups and a{" "}
                                        <Link href="https://docs.interep.link/api#subgraph" isExternal>
                                            subgraph
                                        </Link>{" "}
                                        to read on-chain data with GraphQL.
                                    </Text>
                                </VStack>

                                <VStack align="left" py="6" px="7" bg="background.800" borderRadius="4px">
                                    <Heading as="h4" size="md" color="background.200">
                                        Smart contracts
                                    </Heading>

                                    <Text color="background.300">
                                        Solidity{" "}
                                        <Link href="https://github.com/interep-project/contracts" isExternal>
                                            smart contract
                                        </Link>{" "}
                                        to verify zero-knowledge proofs on-chain.
                                    </Text>
                                </VStack>
                            </VStack>
                        </Stack>

                        <Stack direction={["column", "column", "row"]} spacing="4" justify="space-between">
                            <VStack
                                flex="1"
                                align="left"
                                spacing="5"
                                py="6"
                                px="7"
                                bg="background.800"
                                borderRadius="4px"
                            >
                                <VStack align="left">
                                    <Heading as="h2" size="xl">
                                        1380
                                    </Heading>
                                    <Text>Commits</Text>
                                </VStack>

                                <Text color="background.300">
                                    Proof of identity tools can be complex to build. We’ve put in the effort to build
                                    one that prioritizes user privacy so that you can focus on building the next, great
                                    thing for the new internet.
                                </Text>
                            </VStack>

                            <VStack
                                flex="1"
                                align="left"
                                spacing="5"
                                py="6"
                                px="7"
                                bg="background.800"
                                borderRadius="4px"
                            >
                                <VStack align="left">
                                    <Heading as="h2" size="xl">
                                        12
                                    </Heading>
                                    <Text>Identity groups</Text>
                                </VStack>

                                <Text color="background.300">
                                    When users prove their identity on your platform, give them the option to choose
                                    from a growing list of Interep groups based on Web 2.0 providers.
                                </Text>
                            </VStack>

                            <VStack
                                flex="1"
                                align="left"
                                spacing="5"
                                py="6"
                                px="7"
                                bg="background.800"
                                borderRadius="4px"
                            >
                                <VStack align="left">
                                    <Heading as="h2" size="xl">
                                        +5
                                    </Heading>
                                    <Text>Active contributors</Text>
                                </VStack>

                                <Text color="background.300">
                                    Interep is built by people who believe it is possible to prove identity without
                                    sacrificing privacy. New contributors are always welcome! Connect with us on{" "}
                                    <Link href="https://github.com/interep-project" isExternal>
                                        Github
                                    </Link>{" "}
                                    or{" "}
                                    <Link href="https://discord.gg/Tp9He7qws4" isExternal>
                                        Discord
                                    </Link>
                                    .
                                </Text>
                            </VStack>
                        </Stack>

                        <Stack direction={["column", "column", "row"]} spacing="8" justify="space-between">
                            <VStack flex="1" spacing="10" align="left" maxWidth={[, , "500px"]}>
                                <Heading as="h2" size="xl">
                                    Help define criteria for identity groups
                                </Heading>

                                <Text color="background.300">
                                    We want to be reasonably sure that groups have people in them. We need to make
                                    membership easy for people but hard for bots. If we set the bar too low, more bots
                                    get in, and if we set it too high, people get shut out!
                                </Text>

                                <Link
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSdMKSIL-3RBriGqA_v-tJhNJOCciQEX7bwFvOW7ptWeDDhjpQ/viewform"
                                    isExternal
                                >
                                    <Button colorScheme="primary">Share your thoughts</Button>
                                </Link>
                            </VStack>

                            <Box flex="1" maxWidth={[, , "320px"]} px="4">
                                <Image src="./illustration-7.svg" alt="Illustration 2" />
                            </Box>
                        </Stack>
                    </VStack>
                </Container>

                <Container display={["block", "none"]} pb="20px" px="40px" maxW="container.xl">
                    <HStack justify="center">
                        <HStack minWidth="190px">
                            <Image src="./interep-icon.svg" alt="Interep icon" />

                            <Box>
                                <Text display="inline" fontSize="md">
                                    Desktop DApp:
                                </Text>{" "}
                                <Button onClick={onCopy} size="md" variant="link">
                                    kovan.interep.link
                                </Button>
                            </Box>
                        </HStack>
                    </HStack>
                </Container>

                <Container py="20px" px="40px" borderTopWidth="1px" maxW="container.xl">
                    <Stack direction={["column", "column", "row"]} justify="space-between" spacing="5" align="center">
                        <HStack minWidth="190px">
                            <Image src="./pse-icon.svg" alt="PSE icon" />

                            <Text fontSize="sm">© Interep x Privacy & Scaling Explorations</Text>
                        </HStack>

                        <HStack minWidth="190px">
                            <Image src="./ethereum-icon.svg" alt="Ethereum icon" />

                            <Box>
                                <Text display="inline" fontSize="sm">
                                    Supported by the
                                </Text>{" "}
                                <Link href="https://ethereum.foundation" fontSize="sm" isExternal>
                                    Ethereum Foundation
                                </Link>
                            </Box>
                        </HStack>
                    </Stack>
                </Container>
            </ColorModeProvider>
        </ChakraProvider>
    )
}

const root = document.getElementById("root")

ReactDOM.render(<App />, root)
