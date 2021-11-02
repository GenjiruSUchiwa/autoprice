import React, {useState} from "react";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
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
import TablesTableRow from "components/Tables/TablesTableRow";
import { tablesTableData } from "variables/general";
import { createProduct } from '../../redux/actions/products';

function Tables() {
  const textColor = useColorModeValue("gray.700", "white");
  const initialRef = React.useRef()
  const finalRef = React.useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()



  const { register, errors, control, handleSubmit } = useForm();
  const dispatch = useDispatch();
  function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
    const onSubmit = data => {
      try {
        data._id = uuidv4()
        dispatch(createProduct({ ...data }));
        toast.success('Product!');
        clearForm();
      } catch (error) {
        toast.error(error);
      }

    }
    const listProduct = useSelector(state => state.products);
    const { products, loading, error } = listProduct;

  const clearForm = () => {
      onClose();
    };


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
              { (products.length > 0 ?
                (products.map((item) => {
                return (
                  <TablesTableRow
                    name={item.name}
                    provider={item.provider}
                    status={item.status}
                    quantity={item.quantity}
                    id={item._id}
                  />
                );
              })) : 'Not Data')}
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
            <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel>Nom</FormLabel>
              <Input
                name={"name"}
                ref={register({
                required: {
                  value: true,
                  message: 'This field is required.',
                },
              })
                } required placeholder="Name" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Provider</FormLabel>
              <Input
                name="provider"
                ref={register({
                  required: {
                    value: true,
                    message: 'This field is required.',
                  },
                })}
                placeholder="Provider"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Quantity</FormLabel>
              <Input placeholder="Quantity"
                     name={"quantity"}
                     ref={register({
                       required: {
                         value: true,
                         message: 'This field is required.',
                       },
                     })}
                     type={"number"} />
            </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={() => handleSubmit(onSubmit)()} mr={3}>
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
