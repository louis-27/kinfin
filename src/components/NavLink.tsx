import NextLink from "next/link";
import { LinkBox, LinkOverlay, ListIcon, ListItem } from "@chakra-ui/react";
import { ComponentProps, ComponentType } from "react";

interface Props {
  name: string;
  link: string;
  icon: ComponentType<ComponentProps<"svg">>;
  isActive: boolean;
}

export function NavLink({ name, link, icon, isActive }: Props) {
  return (
    <ListItem
      fontSize="16px"
      p=".5rem"
      mb={"1.5"}
      rounded="lg"
      // #bfdbfe, #22d3ee, #1d4ed8
      bg={isActive && "#bfdbfe"}
      _hover={{ bg: "#bfdbfe" }}
    >
      <LinkBox>
        <NextLink href={link} passHref>
          <LinkOverlay>
            <ListIcon as={icon} color="black" mr="0.5rem"></ListIcon>
            {name}
          </LinkOverlay>
        </NextLink>
      </LinkBox>
    </ListItem>
  );
}
