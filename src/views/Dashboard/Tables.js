import React from "react";
// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Button,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Thead,
  Tr,
  useDisclosure,
  useColorModeValue, Stat, StatLabel, StatNumber, StatHelpText, Spacer, SimpleGrid,
} from '@chakra-ui/react';
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TablesProjectRow from "components/Tables/TablesProjectRow";
import TablesTableRow from "components/Tables/TablesTableRow";
import { tablesTableData } from "variables/general";
import IconBox from '../../components/Icons/IconBox';
import { CartIcon, DocumentIcon, GlobeIcon, WalletIcon } from '../../components/Icons/Icons';
function Tables() {
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const textColor = useColorModeValue("gray.700", "white");
  const iconBoxInside = useColorModeValue("white", "white");
  const initialRef = React.useRef()
  const finalRef = React.useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const addProductModal = () => {
      alert("Modal is show")
  }

  return (
    <>
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Flex py="1rem" px="1rem">
        <Button colorScheme="teal" size="lg" onClick={onOpen}>
         Add product
        </Button>
        <Spacer />
      </Flex>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Products Inventory
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th pl="0px" color="gray.400">
                  Name
                </Th>
                <Th color="gray.400">Provider</Th>
                <Th color="gray.400">Available</Th>
                <Th color="gray.400">Quantity</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {tablesTableData.map((row) => {
                return (
                  <TablesTableRow
                    name={row.name}
                    provider={row.provider}
                    status={row.status}
                    quantity={row.quantity}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add product in inventory</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nom</FormLabel>
              <Input ref={initialRef} placeholder="Name" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Provider</FormLabel>
              <Input placeholder="Provider" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Quantity</FormLabel>
              <Input placeholder="Quantity" type={"number"} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Tables;
