import { Box, Anchor, Grommet, Header, Image, Stack } from "grommet";
import "./Nav.css";
import React from "react";

function Nav() {
  return (
    <Grommet theme={theme}>
      <Stack >
        <Box width="60%" height="650px" background = "#b89ee7">
          {" "}
        </Box>
        <div className="container">
          <div className="content">
            <Header className="header">
              <Image
                src="https://2l4ff1gokdmn317w442ckjyu-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/cropped-animalzlogo@3x-1555617764.png"
                width="160px"
              />
              <Box direction="row" gap="medium" justify="between" width="30%">
                <Anchor
                  style={{ fontSize: "medium" }}
                  label="BLOG"
                  color="black"
                />
                <Anchor
                  style={{ fontSize: "medium" }}
                  label="SERVICES"
                  color="black"
                />
                <Anchor
                  style={{ fontSize: "medium" }}
                  label="ABOUT"
                  color="black"
                />
                <Anchor
                  style={{ fontSize: "medium" }}
                  label="JOIN US"
                  color="black"
                />
              </Box>
            </Header>
            <hr />
          </div>
        </div>
      </Stack>
    </Grommet>
  );
}

const theme = {
  anchor: {
    hover: {
      textDecoration: "none",
      extend: {
        color: "grey",
      },
    },
  },
};

export default Nav;
