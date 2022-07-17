import { LinkBox, LinkOverlay, ListItem, ListIcon } from "@chakra-ui/layout";
import NextLink from "next/link";

const MenuLinkList = ({ menu: { name, icon, route } }) => {
  return (
    <ListItem key={name} paddingX="20px" fontSize="16px">
      <LinkBox>
        <NextLink href={route} passHref>
          <LinkOverlay>
            <ListIcon as={icon} color="white" marginRight="20px" />
            {name}
          </LinkOverlay>
        </NextLink>
      </LinkBox>
    </ListItem>
  );
};

export default MenuLinkList;
