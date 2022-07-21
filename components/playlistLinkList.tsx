import { LinkBox, LinkOverlay, ListItem } from "@chakra-ui/layout";
import NextLink from "next/link";

const PlaylistLink = ({ playlist }) => {
  return (
    <ListItem key={playlist.id} paddingX="20px" fontSize="16px">
      <LinkBox>
        <NextLink href="/" passHref>
          <LinkOverlay>{playlist.name}</LinkOverlay>
        </NextLink>
      </LinkBox>
    </ListItem>
  );
};

export default PlaylistLink;
