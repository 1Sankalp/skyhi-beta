import { Avatar, Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import NextLink from 'next/link';

export function Navbar() {
    const address = useAddress();

    return (
        <Box maxW={"1200px"} m={"auto"} py={"2%"}px={"1%"}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Link as={NextLink} href='/'>
                    <Heading>SkyHi</Heading>
                </Link>
                <Flex direction={"column"}>
                    {/* <Link as={NextLink} href='/buy' mx={2.5}>
                        <Text>Buy</Text>
                    </Link> */}
                    <Link as={NextLink} href='/sell' mx={2.5}>
                        <Text>Sell</Text>
                    </Link>
                </Flex>
                <Flex dir={"row"} alignItems={"center"}>
                    <ConnectWallet/>
                    {address && (
                        <Link as={NextLink} href={`/profile/${address}`}>
                            <Avatar src='https://bit.ly/broken-link' ml={"10px"}/>
                        </Link>
                    )}
                </Flex>
            </Flex>
        </Box>
    )
};