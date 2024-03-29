import NextImage from "next/image";
import { List, Box, Divider } from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";
import MenuLinkList from "./menuLinkList";
import PlaylistLink from "./playlistLinkList";
import { usePlaylist } from "../lib/hooks";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorites",
  },
];

// const playlist = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

const Sidebar = () => {
  const { playlists } = usePlaylist();
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/spotify-1.svg" height={60} width={120} />
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((menu) => (
              <MenuLinkList menu={menu} />
            ))}
          </List>
        </Box>
        <Box marginTop="20px" marginBottom="20px">
          <List spacing={2}>
            {musicMenu.map((menu) => (
              <MenuLinkList menu={menu} />
            ))}
          </List>
        </Box>
        <Divider color="gray.800" />
        <Box height="66%" paddingY="20px" overflowY="auto">
          <List spacing={2}>
            {playlists.map((item) => (
              <PlaylistLink playlist={item} />
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
