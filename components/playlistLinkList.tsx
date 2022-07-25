import { LinkBox, LinkOverlay, ListItem } from "@chakra-ui/layout";
import NextLink from "next/link";

const PlaylistLink = ({ playlist }) => {
  return (
    <ListItem key={playlist.id} paddingX='20px' fontSize='16px'>
      <LinkBox>
        <NextLink
          href={{
            pathname: "/playlist/[id]",
            query: { id: playlist.id },
          }}
          passHref>
          <LinkOverlay>{playlist.name}</LinkOverlay>
        </NextLink>
      </LinkBox>
    </ListItem>
  );
};

export default PlaylistLink;
