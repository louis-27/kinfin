import { Box, Image } from "@chakra-ui/react";
import NextImage from "next/image";

export function BrandLogo({ width }: { width: string }) {
  return (
    <Box w="full">
      <Image
        src="/kinfin-logo.svg"
        alt="logo"
        boxSize="60px"
        w={width}
        m="auto"
      />
    </Box>
  );

  // return (
  //   <NextImage
  //     src={"/kinfin-logo.svg"}
  //     alt="Kinfin logo"
  //     width={40}
  //     height={12}
  //     layout="fill"
  //   />
  // );
}
