import { Box,Button,Text,Heading,useColorModeValue,Flex,Stack, Icon, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { FcCollaboration } from 'react-icons/fc'
import { FcAssistant } from 'react-icons/fc'

const Card = ({ heading, description, icon, href }) => {
    return (
      <Box
        maxW={{ base: "full", md: "275px" }}
        w={"full"}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}
      >
        <Stack align={"start"} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={"center"}
            justify={"center"}
            color={"white"}
            rounded={"full"}
            bg={useColorModeValue("gray.100", "gray.700")}
          >
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={"sm"}>
              {description}
            </Text>
          </Box>
          <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
            Learn more
          </Button>
        </Stack>
      </Box>
    );
  };

const Bottom = () => {
  return (
    <div>
        <div style={{fontSize:'25px', textAlign:"center"}}>
            <h3>A combination of tools to design and <br/> develop modern appllications at ease</h3>
        </div>
        <Box margin={'auto'} w={{lg:'40%',md:'50',sm:'70%'}}>
        <SimpleGrid  mt={'15px'} columns={[1,2]} >
            <Card
              heading={"Design"}
              icon={<Icon as={FcAssistant} w={10} h={10} />}
              description={
                "Lorem ipsum dolor sit amet catetur, adipisicing elit."
              }
              href={"#"}
            />
            <Card
              heading={"Development"}
              icon={<Icon as={FcCollaboration} w={10} h={10} />}
              description={
                "Lorem ipsum dolor sit amet catetur, adipisicing elit."
              }
              href={"#"}
            />
            
          </SimpleGrid>
        </Box>

        <Box m={'10px'} mt={[15,20]} p={5}>
            <SimpleGrid columns={[1,2,3,4]}>
                <Box>
                    <Heading>15+</Heading>
                    <Text>Ready to use <br/> React Component</Text>
                </Box>
                <Box>
                    <Heading>60+</Heading>
                    <Text>Predefine colour for <br/> theme Setup</Text>
                </Box>
                <Box>
                    <Heading>60+</Heading>
                    <Text>detaild documantation <br/> for each component</Text>
                </Box>
                <Box>
                    <Heading>FREE</Heading>
                    <Text>Open source with <br/> regular Update</Text>
                </Box>
            </SimpleGrid>
        </Box>

        <Box shadow={'inherit'} margin={'auto'} mt={'50'} mb={50} borderRadius={8}  w={["80%","50%"]}>
            <SimpleGrid spacing="40px" columns={2}>
                <Box>
                    <h2>UI templates are on the way</h2>
                    <Text>Official Ui Templlate build on Atomize react</Text>
                </Box>
                <Button colorScheme='blue' w={"200px"}>Get Notified-</Button>
            </SimpleGrid>
        </Box>
    </div>
  )
}

export default Bottom