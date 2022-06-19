import { extendTheme } from "@chakra-ui/react";

import { fonts } from "~/theme/fonts";
import { styles } from "~/theme/styles";

const overrides = { fonts, styles };

export default extendTheme(overrides);
