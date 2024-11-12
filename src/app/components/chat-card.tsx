"use client";

import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Button} from "@nextui-org/react";

export default function ChatCard() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="absolute bottom-20 right-5 max-w-[540px] min-w-[500px]">
      <CardHeader className="justify-between border-b border-white/30">
        <div className="flex gap-5">
        <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fff"><path d="M12 22L3.30863 17.1715C3.11815 17.0656 3.00001 16.8649 3.00001 16.647L2.99999 7.35304C2.99999 7.13514 3.11813 6.93437 3.30861 6.82855L11.7086 2.16188C11.8898 2.06121 12.1102 2.06121 12.2914 2.16188L20.6914 6.82855C20.8819 6.93437 21 7.13514 21 7.35304L21 11" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.52844 7.29363L11.7086 11.8382C11.8898 11.9388 12.1102 11.9388 12.2914 11.8382L20.5 7.27783" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12V17.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 2V9" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.6569 17.2427L19.364 17.9498" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.2426 18.6567L17.9497 19.3638" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.6569 14.4144L14.4142 18.6571C13.6332 19.4381 13.6332 20.7045 14.4142 21.4855L15.1213 22.1926C15.9024 22.9737 17.1687 22.9737 17.9497 22.1926L22.1924 17.95C22.9734 17.1689 22.9734 15.9026 22.1924 15.1215L21.4853 14.4144C20.7042 13.6334 19.4379 13.6334 18.6569 14.4144Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">LSEG Chatbot</h4>
          </div>
        </div>
        <Button
          className="bg-transparent text-foreground border-default-200"
          color="primary"
          radius="full"
          size="sm"
          variant="solid"
          onPress={() => setIsFollowed(!isFollowed)}
        >
            X
        </Button>
      </CardHeader>
      <CardBody className="px-3 text-default-400">
        <div className="flex flex-col">
          <h5>Please select a Stock Exchange</h5>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </div>
      </CardBody>
      <CardFooter className="gap-3">
        <p className="font-semibold text-default-400 text-small">Please pick an option</p>
      </CardFooter>
    </Card>
  );
}