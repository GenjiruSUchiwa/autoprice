import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import {deleteProduct} from '../../redux/actions/products';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function TablesTableRow(props) {
  const { logo, name, provider, status, id, quantity } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");
  const dispatch = useDispatch();
  const removeProduct = () => {
    try {
      if (window.confirm(`Are you sure? You can't undo this action afterwards.`)) {
        dispatch(deleteProduct(id));
        toast.success('item removed!');
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Avatar src={logo} w="50px" borderRadius="12px" me="18px" />
          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {name}
            </Text>
          </Flex>
        </Flex>
      </Td>

      <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {provider}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Badge
          bg={status === "In Stock" ? "green.400" : bgStatus}
          color={status === "In Stock" ? "white" : colorStatus}
          fontSize="16px"
          p="3px 10px"
          borderRadius="8px"
        >
          {status}
        </Badge>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {quantity}
        </Text>
      </Td>
      <Td>
        <Button p="0px" onClick={()=> removeProduct(id)} bg="transparent" variant="no-hover">
          <Text
            fontSize="md"
            color="red.300"
            fontWeight="bold"
            cursor="pointer"
          >
            Delete
          </Text>
        </Button>
      </Td>
    </Tr>
  );
}

export default TablesTableRow;
